/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import TopBar from './components/TopBar';
import BottomNav from './components/BottomNav';
import HomeScreen from './screens/HomeScreen';
import CareersScreen from './screens/CareersScreen';
import MindDishaScreen from './screens/MindDishaScreen';
import ProgressScreen from './screens/ProgressScreen';
import AdvisorScreen from './screens/AdvisorScreen';
import LoginScreen from './screens/LoginScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import PivotScreen from './screens/PivotScreen';
import ProfileScreen from './screens/ProfileScreen';
import CompareScreen from './screens/CompareScreen';
import ExploreScreen from './screens/ExploreScreen';
import ExamTrackerScreen from './screens/ExamTrackerScreen';
import CareerRoadmapScreen from './screens/CareerRoadmapScreen';
import CareerDetailsScreen from './screens/CareerDetailsScreen';
import { useAuth } from './contexts/AuthContext';

function AuthenticatedApp() {
  const { user, userProfile, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[var(--color-bg)]">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user) return <Navigate to="/login" replace />;

  const needsOnboarding = !userProfile || !userProfile.onboardingCompleted;
  
  if (needsOnboarding && location.pathname !== '/onboarding') {
    return <Navigate to="/onboarding" replace />;
  }

  const hideNavigation = location.pathname === '/onboarding';

  return (
    <div className="app-container flex flex-col text-[var(--color-dark)] relative overflow-hidden">
      {!hideNavigation && <TopBar />}
      <main className="flex-1 overflow-y-auto px-5 pt-6 pb-32 no-scrollbar relative z-10">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/onboarding" element={<OnboardingScreen />} />
          <Route path="/explore" element={<ExploreScreen />} />
          <Route path="/career-roadmap" element={<CareerRoadmapScreen />} />
          <Route path="/career-details/:streamId/:pathId" element={<CareerDetailsScreen />} />
          <Route path="/careers/:stream" element={<CareersScreen />} />
          <Route path="/career-growth" element={<ProgressScreen />} />
          <Route path="/minddisha" element={<MindDishaScreen />} />
          <Route path="/advisor" element={<AdvisorScreen />} />
          <Route path="/pivot" element={<PivotScreen />} />
          <Route path="/exam-tracker" element={<ExamTrackerScreen />} />
          <Route path="/compare" element={<CompareScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      {!hideNavigation && <BottomNav />}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-dark min-h-screen">
        <Routes>
          <Route path="/login" element={<div className="app-container flex flex-col"><LoginScreen /></div>} />
          <Route path="/*" element={<AuthenticatedApp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
