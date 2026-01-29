import React from 'react';
import Card from './ui/Card';

const SuccessCasesSection: React.FC = () => {
  const cases = [
    {
      title: "30대 직장인 김OO님",
      badge: "주식/코인 빚",
      before: "8,500만 원",
      after: "1,800만 원",
      rate: "79%",
      desc: "매달 280만 원씩 갚다가 생활이 안 돼서 신청했는데, 월 50만 원으로 확 줄었습니다."
    },
    {
      title: "40대 자영업자 박OO님",
      badge: "사업 실패",
      before: "1억 2,000만 원",
      after: "1,400만 원",
      rate: "88%",
      desc: "코로나 이후 빚이 감당 안 됐는데, 원금 90% 가까이 탕감받고 다시 시작했습니다."
    },
    {
      title: "50대 주부 이OO님",
      badge: "생활고/돌려막기",
      before: "5,500만 원",
      after: "전액 면책",
      rate: "파산",
      desc: "소득이 없어 파산으로 진행했고, 빚 전액을 탕감받아 면책되었습니다."
    }
  ];

  return (
    <section className="animate-fade-in-up">
      <div className="text-center mb-8">
        <h2 className="text-[26px] md:text-3xl font-bold text-white mb-3 leading-tight">
          이미 많은 분들이<br className="md:hidden" /> <span className="text-accent">새 삶</span>을 찾았습니다
        </h2>
        <p className="text-slate-400 text-sm md:text-base">
          감당할 수 없는 빚, 법의 보호를 받으면 결과가 달라집니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {cases.map((item, idx) => {
          // Calculate percentage only if rate is a percentage string
          const isPercent = item.rate.includes('%');
          const percentValue = isPercent ? 100 - parseInt(item.rate) : 0;
          
          return (
            <Card key={idx} className="bg-[#162032] border-white/5 relative overflow-hidden group hover:border-accent/30 transition-all">
              <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="text-6xl font-black text-white">"</span>
              </div>
              
              <div className="mb-4">
                <span className="inline-block bg-white/5 border border-white/10 rounded-md px-2 py-1 text-[11px] text-slate-300 mb-2">
                  {item.badge}
                </span>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
              </div>

              <div className="bg-[#0f172a] rounded-xl p-4 mb-4 border border-white/5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-slate-500 line-through decoration-slate-500">{item.before}</span>
                  {isPercent ? (
                    <span className="text-xs text-slate-400">변제율 {percentValue}%</span>
                  ) : (
                    <span className="text-xs text-slate-400">채무 0원</span>
                  )}
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-accent font-bold text-xl">{item.after}</span>
                  <span className="text-white text-sm font-bold bg-accent/20 px-2 py-0.5 rounded text-accent">
                     {item.rate} {isPercent && '탕감'}
                  </span>
                </div>
              </div>

              <p className="text-[13px] text-slate-400 leading-relaxed">
                "{item.desc}"
              </p>
            </Card>
          );
        })}
      </div>
      <div className="text-center mt-4 text-[11px] text-slate-600">
        * 위 사례는 의뢰인의 동의를 얻어 각색되었으며, 개인별 상황에 따라 결과는 달라질 수 있습니다.
      </div>
    </section>
  );
};

export default SuccessCasesSection;