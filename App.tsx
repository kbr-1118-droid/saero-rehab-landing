import React, { useState } from 'react';
import TopBar from './components/TopBar';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import CheckListSection from './components/CheckListSection'; // New Empathy Section
import SafetySection from './components/SafetySection';
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
        <div className="max-w-[1200px] mx-auto px-5 pt-6 pb-10 md:pt-10 md:pb-16">
          <Hero />
        </div>
        
        <StatsSection />

        <div className="max-w-[1200px] mx-auto px-5 py-12 space-y-16 md:space-y-24">
          
          {/* [NEW] 공감 및 대상자 확인 섹션 */}
          <CheckListSection />

          {/* 핵심: 자가 진단 폼 */}
          <div id="check">
            <LeadFormSection showToast={showToast} />
          </div>
          
          {/* 신뢰 요소 */}
          <SafetySection />
          
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