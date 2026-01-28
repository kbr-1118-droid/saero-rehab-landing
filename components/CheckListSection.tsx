import React from 'react';
import Card from './ui/Card';

const CheckListSection: React.FC = () => {
  return (
    <section className="animate-fade-in-up">
      <div className="text-center mb-8">
        <h2 className="text-[26px] md:text-3xl font-bold text-white mb-3 leading-tight">
          개인회생, <span className="text-accent">무엇이 달라지나요?</span>
        </h2>
        <p className="text-slate-400 text-sm md:text-base">
          지금의 압박에서 벗어나 일상을 되찾을 수 있습니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          {
            icon: "🛡️",
            title: "모든 독촉·추심 즉시 중단",
            desc: "법원의 금지명령으로 전화, 방문, 문자 등 빚 독촉이 법적으로 차단됩니다."
          },
          {
            icon: "📉",
            title: "이자 100% 면제 · 원금 탕감",
            desc: "밀린 이자는 전액 면제되며, 원금은 최대 90%까지 탕감받을 수 있습니다."
          },
          {
            icon: "🏠",
            title: "내 재산과 직장 유지",
            desc: "집, 자동차, 보증금 등 재산을 지키면서 공무원/교사 등 직업도 유지됩니다."
          },
          {
            icon: "🤫",
            title: "가족·회사 모르게 비밀 보장",
            desc: "우편물 주소 변경 및 비공개 진행으로 주변에 알려지지 않게 처리합니다."
          }
        ].map((item, idx) => (
          <Card key={idx} className="!p-5 bg-[#162032] border-white/5 hover:border-accent/30 transition-colors group">
            <div className="flex items-start gap-4">
              <div className="text-3xl shrink-0 grayscale group-hover:grayscale-0 transition-all">{item.icon}</div>
              <div>
                <h3 className="text-[17px] font-bold text-white mb-1 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-[13px] text-slate-400 leading-snug break-keep">
                  {item.desc}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CheckListSection;