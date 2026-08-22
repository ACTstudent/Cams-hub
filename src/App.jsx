import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import DownloadCenter from './components/DownloadCenter.jsx';
import StepByStepGuide from './components/StepByStepGuide.jsx';
import CamsOverview from './components/CamsOverview.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#E0E5EC] text-[#3D4852] font-sans antialiased selection:bg-[#6C63FF] selection:text-white">
      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <DownloadCenter />
        <StepByStepGuide />
        <CamsOverview />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
