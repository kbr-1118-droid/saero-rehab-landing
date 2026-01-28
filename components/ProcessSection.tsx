import React from 'react';

const ProcessSection: React.FC = () => {
  const steps = [
    { 
      title: '무료 진단 및 접수', 
      desc: 'AI 분석 및 변호사 검토를 통해 가능성을 확인하고, 비대면 계약으로 착수합니다.',
      icon: '🚀'
    },
    { 
      title: '신청서 제출/금지명령', 
      desc: '접수 후 약 7일 내로 금지명령이 나오면 모든 독촉과 추심이 법적으로 중단됩니다.',
      icon: '🛡️'
    },
    { 
      title: '회생위원 보정권고', 
      desc: '법원의 추가 소명 요청(보정)에 대해 전문팀이 서류를 완벽히 준비하여 대응합니다.',
      icon: '⚖️'
    },
    { 
      title: '개시결정 및 인가', 
      desc: '변제금 납입을 시작하며, 채권자 집회를 거쳐 최종 인가 결정이 확정됩니다.',
      icon: '🎉'
    },
  ];

  return (
    <section id="process" className="relative">
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">절차, 한눈에 확인하세요</h2>
        <p className="text-muted">복잡한 법률 용어와 절차, <span className="text-white font-bold">새로회생</span>이 알기 쉽게 풀어드립니다.</p>
      </div>

      <div className="relative">
        {/* Connector Line (Desktop) */}
        <div className="hidden md:block absolute top-[45px] left-0 w-full h-[2px] bg-gradient-to-r from-slate-800 via-sky-900/50 to-slate-800 z-0"></div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
          {steps.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Step Number Badge */}
              <div className="w-full flex md:justify-start justify-center mb-6 md:mb-8 relative z-10">
                 <div className="w-24 h-8 rounded-full bg-[#0f172a] border border-accent/30 flex items-center justify-center text-xs font-bold text-accent shadow-[0_0_15px_rgba(56,189,248,0.15)] group-hover:bg-accent/10 transition-colors">
                   STEP 0{idx + 1}
                 </div>
              </div>
              
              <div className="bg-[#1e293b]/40 backdrop-blur-sm border border-white/5 p-6 rounded-2xl hover:bg-[#1e293b]/60 hover:border-accent/30 transition-all duration-300 h-full flex flex-col items-center text-center md:items-start md:text-left group-hover:-translate-y-1">
                <div className="text-3xl mb-4 p-3 bg-white/5 rounded-2xl border border-white/5 group-hover:scale-110 transition-transform shadow-inner">{item.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-[13px] text-muted leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;