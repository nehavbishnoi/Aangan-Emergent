import '@/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';

import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

import Landing from '@/pages/Landing';
import MyAangan from '@/pages/MyAangan';
import TraditionCardPage from '@/pages/TraditionCardPage';
import VoiceStoryPage from '@/pages/VoiceStoryPage';
import FamilyCalendarPage from '@/pages/FamilyCalendarPage';
import RecipeCardPage from '@/pages/RecipeCardPage';
import AskAanganPage from '@/pages/AskAanganPage';
import PrivacyPage from '@/pages/PrivacyPage';
import EarlyAccessPage from '@/pages/EarlyAccessPage';
import HowItWorksPage from '@/pages/HowItWorksPage';
import ForFamiliesPage from '@/pages/ForFamiliesPage';

function App() {
  return (
    <div className="App grain min-h-screen bg-[hsl(var(--aangan-ivory))]">
      <BrowserRouter>
        <SiteNav />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/for-families" element={<ForFamiliesPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/early-access" element={<EarlyAccessPage />} />
          <Route path="/archive" element={<MyAangan />} />
          <Route path="/archive/tradition/:slug" element={<TraditionCardPage />} />
          <Route path="/archive/voice-story" element={<VoiceStoryPage />} />
          <Route path="/archive/calendar" element={<FamilyCalendarPage />} />
          <Route path="/archive/recipe/:slug" element={<RecipeCardPage />} />
          <Route path="/archive/ask-aangan" element={<AskAanganPage />} />
        </Routes>
        <SiteFooter />
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              background: 'hsl(145 21% 14%)',
              color: 'hsl(39 50% 97%)',
              border: 'none',
              borderRadius: '2px',
              fontFamily: 'Outfit, sans-serif',
            },
          }}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
