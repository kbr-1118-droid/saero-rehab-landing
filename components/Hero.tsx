import React from 'react';
import Card from './ui/Card';
import Button from './ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="pt-8 lg:pt-16 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center animate-fade-in-up" id="top">
      <div className="flex flex-col justify-center">
        <div className="inline-flex items-center gap-2 mb-7 self-start bg-accent/10 border border-accent/20 rounded-full px-5 py-2 backdrop-blur-sm">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
          </span>
          <span className="text-accent text-[13px] font-bold tracking-wide uppercase">Live • 전국 비대면 접수 중</span>
        </div>

        <h1 className="text-[clamp(36px,5.5vw,64px)] leading-[1.1] tracking-tight font-bold mb-8 text-white">
          <span className="block text-2xl md:text-4xl mb-4 font-medium text-slate-300">당신의 새로운 길,</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-400 to-indigo-400">합리적인 비용</span>으로<br />
          시작할 수 있습니다.
        </h1>
        
        <p className="text-muted text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
          방문 없이, 복잡한 서류 발급부터 접수까지.<br/>
          <b>새로회생</b>의 체계적인 시스템으로<br/>
          <span className="text-slate-200">비용 거품은 빼고 승인율은 높였습니다.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-5 mb-12">
          <Button href="#check" className="h-16 text-[18px] px-10 bg-white text-slate-900 hover:bg-slate-100 shadow-[0_0_20px_rgba(255,255,255,0.15)] font-bold border-0">
            내 수임료 & 가능성 확인하기
          </Button>
          <Button href="#process" variant="secondary" className="h-16 text-[18px] px-8 border-white/20 hover:bg-white/5 text-white">
            비대면 진행 과정 보기
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-10">
          {[
            { label: '비대면 계약', desc: '간편한 서면 체결' },
            { label: '서류 대행', desc: '유료 서비스 (선택)' },
            { label: '분납 시스템', desc: '수임료 부담 완화' },
          ].map((item, i) => (
            <div key={i} className="group">
              <div className="text-white font-bold text-base mb-1.5 group-hover:text-accent transition-colors">{item.label}</div>
              <div className="text-slate-500 text-[13px]">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-indigo-500/5 rounded-full blur-[100px]"></div>
        <Card className="relative z-10 !p-0 overflow-hidden !bg-[#0f172a]/90 !border-white/10 shadow-2xl">
          <div className="bg-[#1e293b]/50 p-6 border-b border-white/5 flex justify-between items-center backdrop-blur-md">
            <span className="font-bold text-white flex items-center gap-2.5 text-lg">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]"></div>
              실시간 상담 현황
            </span>
            <span className="text-[11px] font-bold text-slate-500 font-mono border border-white/10 px-2.5 py-1 rounded bg-white/5">LIVE SYSTEM</span>
          </div>
          <div className="p-6 space-y-5">
            {[
              { time: '방금 전', msg: '김OO님 개인회생 개시결정 (서울회생법원)', type: 'success' },
              { time: '1분 전', msg: '박OO님 금지명령 인용 (수원지방법원)', type: 'success' },
              { time: '5분 전', msg: '이OO님 서류대행 접수 완료', type: 'info' },
              { time: '12분 전', msg: '최OO님 수임료 분납 승인', type: 'info' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] transition-colors">
                <div className={`mt-2 w-2 h-2 rounded-full ${item.type === 'success' ? 'bg-accent' : 'bg-slate-500'}`}></div>
                <div>
                  <div className="text-[15px] text-slate-200 font-medium">{item.msg}</div>
                  <div className="text-[13px] text-slate-500 mt-1">{item.time}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 bg-accent/5 text-center border-t border-accent/10">
             <p className="text-[13px] text-accent/80 font-medium">✨ 체계적인 시스템으로 신속하게 처리합니다.</p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Hero;