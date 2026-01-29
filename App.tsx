import React, { useState } from 'react';
import TopBar from './components/TopBar';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import CheckListSection from './components/CheckListSection'; 
import SuccessCasesSection from './components/SuccessCasesSection'; // New
import FAQSection from './components/FAQSection'; // New
import LeadFormSection from './components/LeadFormSection';
import BusinessInfo from './components/BusinessInfo';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA'; // New
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

        <div className="max-w-[1200px] mx-auto px-5 py-12 space-y-20 md:space-y-32">
          
          {/* 공감 및 혜택 안내 */}
          <CheckListSection />

          {/* [NEW] 성공 사례 (신뢰도) */}
          <SuccessCasesSection />

          {/* [NEW] 자주 묻는 질문 (심리 장벽 제거) */}
          <FAQSection />

          {/* 핵심: 자가 진단 폼 */}
          <div id="check" className="scroll-mt-24">
            <LeadFormSection showToast={showToast} />
          </div>
          
          <div>
            <BusinessInfo />
            <Footer />
          </div>
        </div>
      </main>

      {/* [NEW] 모바일 하단 플로팅 버튼 */}
      <FloatingCTA />

      <Toast message={toastMessage} isVisible={!!toastMessage} />
    </div>
  );
};

export default App;