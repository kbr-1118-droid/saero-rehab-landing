import React, { useEffect, useState } from 'react';
import Button from './ui/Button';

const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const checkSection = document.getElementById('check');
      if (!checkSection) return;

      const rect = checkSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // 자가진단 섹션이 화면에 들어오면 버튼 숨김 (이미 신청 폼이 보이니까)
      // 섹션의 상단이 화면 하단보다 위에 있고, 섹션의 하단이 화면 상단보다 아래에 있을 때 (= 화면에 보임)
      const isCheckSectionVisible = (rect.top < windowHeight) && (rect.bottom > 0);
      
      setIsVisible(!isCheckSectionVisible);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 초기 실행

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`
        fixed bottom-0 left-0 w-full z-[40] p-4 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/90 to-transparent pt-10
        transition-transform duration-300 ease-in-out md:hidden
        ${isVisible ? 'translate-y-0' : 'translate-y-full pointer-events-none'}
      `}
    >
      <Button 
        href="#check" 
        className="w-full h-[56px] text-lg shadow-[0_4px_20px_rgba(56,189,248,0.4)] animate-pulse"
      >
        내 탕감 가능성 1분 확인하기
      </Button>
    </div>
  );
};

export default FloatingCTA;