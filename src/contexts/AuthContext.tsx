import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';
import { handleFirestoreError, OperationType } from '../utils/firestoreErrorHandler';

export interface UserProfile {
  email: string;
  onboardingCompleted: boolean;
  name?: string;
  city?: string;
  classLevel?: string;
  stream?: string;
  score10?: number;
  score12OrCurrent?: number;
  strongSubjects?: string[];
  interests?: string[];
  primaryGoal?: string;
  urgency?: string;
  isPremium?: boolean;
  points?: number;
  streak?: number;
  createdAt?: any;
  updatedAt?: any;
}

interface AuthContextType {
  user: User | null;
  userProfile: UserProfile | null;
  loading: boolean;
  isSigningIn: boolean;
  signIn: () => Promise<void>;
  logOut: () => Promise<void>;
  refreshProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  userProfile: null,
  loading: true,
  isSigningIn: false,
  signIn: async () => {},
  logOut: async () => {},
  refreshProfile: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [isSigningIn, setIsSigningIn] = useState(false);

  const fetchProfile = async (currentUser: User) => {
    const profilePath = `users/${currentUser.uid}/settings/profile`;
    try {
      // Prompt says users/{uid}/profile
      const docRef = doc(db, 'users', currentUser.uid, 'settings', 'profile');
      const docSnap = await getDoc(docRef);
      let fetchedProfile: UserProfile | null = null;
      if (docSnap.exists()) {
        fetchedProfile = docSnap.data() as UserProfile;
      } else {
        // Compatibility check: check if it's in the old location
        const oldDocRef = doc(db, 'users', currentUser.uid);
        const oldDocSnap = await getDoc(oldDocRef);
        if (oldDocSnap.exists()) {
          fetchedProfile = oldDocSnap.data() as UserProfile;
        }
      }

      if (fetchedProfile) {
        // Admin Override
        if (currentUser.email === 'harshitmishra3369@gmail.com') {
          fetchedProfile = { ...fetchedProfile, isPremium: true };
        }
        setUserProfile(fetchedProfile);
      } else {
        setUserProfile(null);
      }
    } catch (error: any) {
      if (error.code === 'permission-denied') {
        handleFirestoreError(error, OperationType.GET, profilePath);
      }
      console.error("Error fetching user profile:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      try {
        setUser(currentUser);
        if (currentUser) {
          await fetchProfile(currentUser);
        } else {
          setUserProfile(null);
        }
      } catch (error) {
        console.error("Auth state change error:", error);
      } finally {
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const refreshProfile = async () => {
    if (user) {
      await fetchProfile(user);
    }
  };

  const signIn = async () => {
    if (isSigningIn) return;
    
    setIsSigningIn(true);
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: 'select_account'
    });

    try {
      await signInWithPopup(auth, provider);
    } catch (error: any) {
      console.error('Error signing in', error);
      if (error.code === 'auth/popup-blocked') {
        await import('firebase/auth').then(({ signInWithRedirect }) => signInWithRedirect(auth, provider));
      } else if (error.code !== 'auth/popup-closed-by-user' && error.code !== 'auth/cancelled-by-user') {
        alert(`Failed to sign in: ${error.message}`);
      }
    } finally {
      setIsSigningIn(false);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, userProfile, loading, isSigningIn, signIn, logOut, refreshProfile }}>
      {children}
    </AuthContext.Provider>
  );
}
