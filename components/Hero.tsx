import React from 'react';
import Card from './ui/Card';
import Button from './ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-16 items-center animate-fade-in-up" id="top">
      <div className="flex flex-col justify-center text-center lg:text-left">
        <div className="inline-flex items-center gap-2 mb-6 mx-auto lg:mx-0 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 backdrop-blur-sm">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
          </span>
          <span className="text-accent text-[13px] font-bold tracking-wide">전국 비대면 접수 중</span>
        </div>

        <h1 className="text-[34px] sm:text-[48px] lg:text-[60px] leading-[1.2] tracking-tight font-bold mb-6 text-white">
          감당하기 힘든 빚,<br className="sm:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">새로회생</span>이 정리해드립니다.
        </h1>
        
        <p className="text-slate-300 text-[17px] sm:text-[20px] mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
          방문 없이, 서류 대행으로 간편하게.<br/>
          <span className="text-white font-bold">기각 시 100% 환불</span> 조건으로 안전하게 시작하세요.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Button href="#check" className="h-[60px] text-[19px] px-8 bg-accent hover:bg-sky-400 text-[#0f172a] shadow-[0_0_25px_rgba(56,189,248,0.3)] font-black border-0 rounded-xl w-full sm:w-auto animate-pulse">
            내 탕감 가능성 1분 확인하기
          </Button>
        </div>
        
        <div className="mt-6 text-[13px] text-slate-500">
          * 개인정보는 상담 목적으로만 활용되며 철저히 보호됩니다.
        </div>
      </div>

      {/* 모바일에서는 스크롤을 줄이기 위해 우측 비주얼 요소 숨김 */}
      <div className="relative hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-indigo-500/5 rounded-full blur-[100px]"></div>
        <Card className="relative z-10 !p-0 overflow-hidden !bg-[#0f172a]/90 !border-white/10 shadow-2xl transform rotate-1">
          <div className="bg-[#1e293b]/80 p-5 border-b border-white/5 flex justify-between items-center backdrop-blur-md">
            <span className="font-bold text-white flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]"></div>
              실시간 접수 현황
            </span>
          </div>
          <div className="p-5 space-y-4">
            {[
              { time: '방금 전', msg: '김OO님 금지명령 인용 (수원)', type: 'success' },
              { time: '2분 전', msg: '박OO님 개시결정 (서울)', type: 'success' },
              { time: '5분 전', msg: '이OO님 상담 신청 접수', type: 'info' },
              { time: '8분 전', msg: '최OO님 서류 대행 시작', type: 'info' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.03] border border-white/5">
                <div className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${item.type === 'success' ? 'bg-accent' : 'bg-slate-500'}`}></div>
                <div>
                  <div className="text-[15px] text-slate-200 font-medium leading-tight">{item.msg}</div>
                  <div className="text-[12px] text-slate-500 mt-0.5">{item.time}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Hero;