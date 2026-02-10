import React from 'react';
import LandingPage from '@/components/LandingPage';
import { Toaster } from '@/components/ui/toaster';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from '@/components/LandingPage';
import PrivacyPolicy from '@/components/PrivacyPolicy';
import TermsAndConditions from '@/components/TermsAndConditions';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
