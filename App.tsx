import React, { useState } from 'react';
import TopBar from './components/TopBar';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import SystemIntroSection from './components/SystemIntroSection';
import ProcessSection from './components/ProcessSection';
import SafetySection from './components/SafetySection';
import AIAnalysisSection from './components/AIAnalysisSection'; // New component
import LeadFormSection from './components/LeadFormSection';
import BusinessInfo from './components/BusinessInfo';
import Footer from './components/Footer';
import Toast from './components/Toast';

const App: React.FC = () => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <div className="min-h-screen relative font-sans selection:bg-accent/30 selection:text-white bg-[#0f172a]">
      <TopBar />

      <main>
        <div className="max-w-[1200px] mx-auto px-[20px] pt-10 pb-16">
          <Hero />
        </div>
        
        <StatsSection />

        <div className="max-w-[1200px] mx-auto px-[20px] py-20 space-y-32">
          <AIAnalysisSection />
          <SystemIntroSection />
          <ProcessSection />
          <SafetySection />
          
          <div id="check">
            <LeadFormSection showToast={showToast} />
          </div>
          
          <div>
            <BusinessInfo />
            <Footer />
          </div>
        </div>
      </main>

      <Toast message={toastMessage} isVisible={!!toastMessage} />
    </div>
  );
};

export default App;