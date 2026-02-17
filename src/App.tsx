import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import LandingPage from '@/components/LandingPage';
import PrivacyPolicy from '@/components/PrivacyPolicy';
import TermsAndConditions from '@/components/TermsAndConditions';
import { Toaster } from '@/components/ui/toaster';
import ServicesPage from '@/components/pages/ServicesPage';
import AboutPage from '@/components/pages/AboutPage';
import ContactPage from '@/components/pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/services" element={<ServicesPage activeFilter="all" />} />
        <Route path="/weddings" element={<ServicesPage activeFilter="weddings" />} />
        <Route path="/proposals" element={<ServicesPage activeFilter="proposals" />} />
        <Route path="/birthdays" element={<ServicesPage activeFilter="birthdays" />} />
        <Route path="/corporate" element={<ServicesPage activeFilter="corporate" />} />
        <Route path="/behind-scenes" element={<ServicesPage activeFilter="behind-scenes" />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/memoria/portfolio.html" element={<Navigate to="/services" replace />} />
        <Route path="/memoria/about.html" element={<Navigate to="/about" replace />} />
        <Route path="/memoria/contact.html" element={<Navigate to="/contact" replace />} />
        <Route path="/portfolio" element={<ServicesPage activeFilter="all" />} />
        <Route path="/portfolio.html" element={<Navigate to="/portfolio" replace />} />
        <Route path="/about.html" element={<Navigate to="/about" replace />} />
        <Route path="/contact.html" element={<Navigate to="/contact" replace />} />

        {/* Catch all for 404s or other paths */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
