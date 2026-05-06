import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, ArrowLeft, ArrowUp, Sparkles, Paperclip } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { GoogleGenAI, Type } from '@google/genai';
import { collection, addDoc, serverTimestamp, doc, updateDoc, setDoc, getDocs, orderBy, query as firestoreQuery, limit, increment } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { handleFirestoreError, OperationType } from '../lib/firestoreUtils';
import ReactMarkdown from 'react-markdown';
import { cn } from '../lib/utils';
import { useAuth } from '../contexts/AuthContext';

const AIThinkingText = () => {
  const [index, setIndex] = useState(0);
  const phrases = [
    "Crunching career data...",
    "Analyzing your unique profile...",
    "Connecting to counselor matrix...",
    "Finding the perfect match..."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-4 relative overflow-hidden w-64 ml-11 mt-1">
      <AnimatePresence mode="popLayout">
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
          transition={{ duration: 0.4 }}
          className="text-[10px] uppercase tracking-widest font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#7C6FF7] to-[#F5A623] absolute"
        >
          {phrases[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};

const ThinkingAnimation = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9, y: 10, filter: 'blur(10px)' }}
      animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
      className="flex flex-col gap-1 max-w-[85%] self-start"
    >
      <div className="flex gap-2 items-end">
        <div className="w-8 h-8 rounded-full bg-dark flex justify-center items-center shadow-md flex-shrink-0 relative overflow-hidden">
           <motion.div
             className="absolute inset-0 bg-gradient-to-tr from-[#7C6FF7] to-[#F5A623] opacity-90"
             animate={{ rotate: 360 }}
             transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
           />
           <Bot size={16} className="text-light relative z-10" />
        </div>
        <div className="bg-light p-4 rounded-[24px] rounded-bl-sm border border-primary/20 relative overflow-hidden min-w-[80px] h-[52px] flex items-center justify-center shadow-sm">
          {/* Subtle inner background glow */}
          <div className="absolute inset-0 bg-primary/15 opacity-30" />
          
          {/* The three bouncing orbs */}
          <div className="flex gap-1.5 items-center justify-center relative z-10">
             <motion.div 
               animate={{ y: [0, -6, 0], scale: [1, 1.2, 1] }} 
               transition={{ duration: 0.8, repeat: Infinity, delay: 0 }}
               className="w-2.5 h-2.5 rounded-full bg-primary"
             />
             <motion.div 
               animate={{ y: [0, -6, 0], scale: [1, 1.2, 1] }} 
               transition={{ duration: 0.8, repeat: Infinity, delay: 0.15 }}
               className="w-2.5 h-2.5 rounded-full bg-accent"
             />
             <motion.div 
               animate={{ y: [0, -6, 0], scale: [1, 1.2, 1] }} 
               transition={{ duration: 0.8, repeat: Infinity, delay: 0.3 }}
               className="w-2.5 h-2.5 rounded-full bg-dark"
             />
          </div>
          
          {/* Sweeping shine effect across the container */}
          <motion.div 
             className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent w-[200%]"
             animate={{ x: ['-100%', '100%'] }}
             transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
      <AIThinkingText />
    </motion.div>
  );
};

export default function AdvisorScreen() {
  const navigate = useNavigate();
  const location = useLocation() as ReturnType<typeof useLocation> & { state: { initialQuery?: string } | null };
  const { user } = useAuth();
  
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [chatId, setChatId] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  
  const firstName = user?.displayName ? user.displayName.split(' ')[0] : 'Jacob';
  
  const [messages, setMessages] = useState<Array<{id: string, text: string, sender: 'user'|'ai', followUps?: string[]}>>([]);
  const hasProcessedInitialQuery = useRef(false);

  useEffect(() => {
    const initializeChat = async () => {
      let isFirstGreetingAdded = false;
      if (messages.length === 0) {
        setMessages([
          {
            id: 'initial',
            sender: 'ai',
            text: `Hi ${firstName}! I'm your Disha AI. How can I help with your career and academic guidance today? 🌟`
          }
        ]);
        isFirstGreetingAdded = true;
      }

      if (location.state?.initialQuery && !hasProcessedInitialQuery.current) {
        hasProcessedInitialQuery.current = true;
        const initialQuery = location.state.initialQuery;
        navigate(location.pathname, { replace: true, state: {} });
        
        // Let React update the messages with the greeting first before adding the user query
        setTimeout(async () => {
          await processMessage(initialQuery);
        }, isFirstGreetingAdded ? 100 : 0);
      }
    };
    initializeChat();
  }, [firstName, location.state?.initialQuery, navigate]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const saveMessage = async (text: string, sender: 'user' | 'ai', followUps?: string[], currentChatId?: string | null) => {
    if (!user) return currentChatId;
    
    let targetChatId = currentChatId;
    
    try {
      if (!targetChatId) {
        // Create new session
        const sessionRef = await addDoc(collection(db, 'chatSessions'), {
          userId: user.uid,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
          lastMessage: text,
          title: text.slice(0, 30) + (text.length > 30 ? '...' : '')
        });
        targetChatId = sessionRef.id;
        setChatId(targetChatId);
      } else {
        // Update session
        const sessionRef = doc(db, 'chatSessions', targetChatId);
        await updateDoc(sessionRef, {
          lastMessage: text,
          updatedAt: serverTimestamp()
        });
      }

      // Add message to subcollection
      await addDoc(collection(db, 'chatSessions', targetChatId, 'messages'), {
        sender,
        text,
        followUps: followUps || [],
        createdAt: serverTimestamp()
      });
      
      return targetChatId;
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, 'chatSessions');
      return targetChatId;
    }
  };

  const processMessage = async (text: string) => {
    // Add user message to UI
    const userMsg = { id: Date.now().toString(), text, sender: 'user' as const };
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);
    
    let updatedChatId = chatId;

    try {
      // Save user message
      updatedChatId = await saveMessage(text, 'user', [], updatedChatId);

      // Build conversation history for AI
      const contents = messages.map(m => (m.sender === 'ai' ? `AI: ${m.text}` : `User: ${m.text}`)).join('\n') + `\nUser: ${text}\nAI:`;
      
      let aiResponseText = "Here is a simulated response! It looks like there's an issue with your API Key, so I'm using mock data. You might want to consider careers in Data Science, full-stack engineering, or AI.";
      let followUps: string[] = ["Tell me about Data Science", "What about AI?"];
      
      try {
        const response = await fetch('/api/generate-content', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            prompt: contents,
            systemInstruction: "You are Disha AI, a friendly, witty, and highly knowledgeable career advisor for Indian students. Format text cleanly. Respond with a JSON object. The object MUST have a 'text' property containing your response, and an array of 2-3 short, highly clickable 'followUps' prompts.",
            schema: {
              type: "object",
              properties: {
                text: { type: "string" },
                followUps: {
                  type: "array",
                  items: { type: "string" }
                }
              },
              required: ["text", "followUps"]
            }
          })
        });

        if (!response.ok) throw new Error('API request failed');
        
        const data = await response.json();
        
        try {
          aiResponseText = data.text || aiResponseText;
          followUps = data.followUps || followUps;
        } catch (e) {
          console.error("Failed to parse JSON response:", e);
        }
      } catch (genError) {
        console.error("GenAI Error:", genError);
        // Fall back to dummy text
        aiResponseText = "Here is a simulated response since I couldn't reach the AI. That sounds like a great background! Have you considered specializing in Business Analytics? It combines your current skills with high market demand.";
        followUps = ["How do I start building skills?", "What are the job prospects?", "Any other options?"];
      }

      // Add AI message to UI
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: aiResponseText.trim(),
        followUps
      }]);

      if (followUps && followUps.length > 0) {
        setDynamicSuggestions(followUps);
      }


      // Save AI message
      await saveMessage(aiResponseText, 'ai', followUps, updatedChatId);

      // Award points
      if (user) {
        try {
          await updateDoc(doc(db, 'users', user.uid), {
            points: increment(5),
            updatedAt: serverTimestamp()
          });
        } catch (err) {
          console.error("Failed to award points:", err);
        }
      }
      
    } catch (error) {
      console.error("AI Error:", error);
      const errorMsg = "Oops, I faced a network issue and couldn't process that. Could you try asking again?";
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: errorMsg
      }]);
      await saveMessage(errorMsg, 'ai', [], updatedChatId);
    } finally {
      setIsTyping(false);
    }
  }

  const handleSend = async (text: string) => {
    if (!text.trim()) return;
    setInputValue('');
    await processMessage(text);
  };

  const [dynamicSuggestions, setDynamicSuggestions] = useState<string[]>([
    "I like math but hate physics",
    "Top commerce careers?",
    "Best BBA colleges?"
  ]);

  const handleBack = () => {
    if (window.history.length > 2 || (window.history.state && window.history.state.idx > 0)) {
      navigate(-1);
    } else {
      navigate('/explore'); // Fallback to a common screen if no history
    }
  };

  return (
    <div className="absolute inset-0 z-[100] bg-[var(--color-bg)] flex flex-col font-sans overflow-hidden shadow-2xl">
      {/* Background Pulse Effect when AI is thinking */}
      <AnimatePresence>
        {isTyping && (
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             transition={{ duration: 1 }}
             className="absolute inset-0 pointer-events-none"
           >
             <div className="absolute top-[-20%] left-[-20%] w-[140%] h-[140%] bg-gradient-to-br from-[#7C6FF7]/5 via-transparent to-[#F5A623]/5 rotate-12 blur-[100px] animate-pulse" />
           </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header className="pt-10 pb-4 px-5 flex items-center justify-between bg-[var(--color-bg)]/80 backdrop-blur-md sticky top-0 z-20 border-b border-dark/5">
        <button onClick={handleBack} className="w-10 h-10 bg-light rounded-full flex items-center justify-center shadow-sm border border-dark/5 active:scale-95 transition-transform cursor-pointer">
          <ArrowLeft size={20} className="text-dark" />
        </button>
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1.5">
            <Sparkles size={14} className="text-accent" />
            <h1 className="text-lg font-bold text-dark leading-loose tracking-tight -mb-1 mt-1">Disha AI</h1>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Advisor</span>
        </div>
        <div className="w-10" /> {/* Spacer for flex centering */}
      </header>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto px-5 py-6 flex flex-col gap-6 no-scrollbar relative z-10">
        <AnimatePresence>
          {messages.map((msg, idx) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", damping: 25, stiffness: 300, delay: idx === 0 ? 0 : 0.1 }}
              className={cn(
                "flex flex-col gap-1 max-w-[85%]",
                msg.sender === 'user' ? "self-end items-end" : "self-start items-start"
              )}
            >
              <div className={cn("flex gap-2 items-end", msg.sender === 'user' ? "flex-row-reverse" : "flex-row")}>
                {msg.sender === 'ai' && (
                  <div className="w-8 h-8 rounded-full bg-dark flex justify-center items-center shadow-md flex-shrink-0 relative overflow-hidden">
                     <div className="absolute inset-0 bg-gradient-to-tr from-[#7C6FF7] to-[#F5A623] opacity-90" />
                     <Bot size={16} className="text-light relative z-10" />
                  </div>
                )}
                
                <div className={cn(
                  "p-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)] relative overflow-hidden",
                  msg.sender === 'user' 
                    ? "bg-dark text-light rounded-[24px] rounded-br-sm" 
                    : "bg-light text-dark rounded-[24px] rounded-bl-sm border border-primary/10"
                )}>
                  {/* Visual Flair for AI messages */}
                  {msg.sender === 'ai' && (
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#7C6FF7] to-[#F5A623] opacity-20" />
                  )}
                  {msg.sender === 'ai' ? (
                    <div className="text-sm font-medium leading-relaxed font-sans prose prose-sm max-w-none prose-p:my-1 prose-strong:text-dark prose-strong:font-bold prose-ul:my-1">
                      <ReactMarkdown>{msg.text}</ReactMarkdown>
                    </div>
                  ) : (
                    <p className="text-sm font-medium leading-relaxed font-sans">{msg.text}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {/* Thinking Indicator */}
        <AnimatePresence>
          {isTyping && <ThinkingAnimation />}
        </AnimatePresence>
        
        <div ref={bottomRef} className="h-4" />
      </div>

      {/* Suggestion Chips */}
      <AnimatePresence>
        {!isTyping && dynamicSuggestions.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10, filter: 'blur(5px)' }}
            className="px-5 pb-4 flex gap-2 overflow-x-auto no-scrollbar relative z-10"
          >
            {dynamicSuggestions.map((s, i) => (
              <button 
                key={i}
                onClick={() => handleSend(s)}
                className="whitespace-nowrap px-4 py-2 bg-light/80 backdrop-blur border border-primary/20 text-dark font-bold text-xs rounded-full hover:bg-primary/10 transition-colors shadow-sm flex-shrink-0 active:scale-95 text-left"
              >
                {s}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Input Area */}
      <div className="p-5 bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)] to-transparent relative z-20 pb-8">
        <form 
          onSubmit={(e) => { e.preventDefault(); handleSend(inputValue); }}
          className="bg-light rounded-full p-2 pl-5 border border-primary/20 shadow-lg shadow-[#7C6FF7]/5 flex items-center gap-2 focus-within:ring-2 ring-[#7C6FF7]/30 transition-all font-sans relative overflow-hidden"
        >
          {/* Pulse background on disabled/typing state */}
          <div className={cn("absolute inset-0 bg-primary/15/50 transition-opacity duration-500 pointer-events-none", isTyping ? "opacity-100" : "opacity-0")} />
          
          <button type="button" className="text-dark/40 hover:text-primary transition-colors relative z-10">
            <Paperclip size={20} strokeWidth={2} />
          </button>
          <input 
            type="text" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={isTyping}
            placeholder={isTyping ? "Disha is thinking..." : "Ask your career question..."}
            className="flex-1 bg-transparent border-none focus:outline-none text-sm font-medium text-dark placeholder:text-dark/30 relative z-10 disabled:opacity-50 ml-1"
          />
          <button 
            type="submit" 
            disabled={!inputValue.trim() || isTyping}
            className="w-11 h-11 bg-primary rounded-full flex items-center justify-center text-light shadow-md disabled:bg-dark/10 disabled:text-dark/30 transform hover:scale-105 active:scale-95 transition-all relative z-10"
          >
            <ArrowUp size={20} strokeWidth={2.5} />
          </button>
        </form>
      </div>
    </div>
  );
}
