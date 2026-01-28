import React from 'react';

const StatsSection: React.FC = () => {
  return (
    <section className="border-y border-white/5 bg-[#162032]">
      <div className="max-w-[1040px] mx-auto px-[18px] py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4">
          {[
            { label: '누적 상담', value: '12,400+', desc: '풍부한 경험' },
            { label: '기각 시 환불', value: '100%', desc: '책임 환불제' },
            { label: '전국 처리', value: '전지역', desc: '비대면 시스템' },
            { label: '서류 대행', value: '가능', desc: '복잡한 과정 해결' },
          ].map((item, i) => (
            <div key={i} className={`flex flex-col items-center justify-center text-center ${i !== 3 ? 'md:border-r md:border-white/5' : ''}`}>
              <div className="text-3xl font-bold text-white mb-1.5 font-sans tracking-tight">
                {item.value}
              </div>
              <div className="text-sm text-gray-400 mb-1 font-medium">
                {item.label}
              </div>
              <div className="text-[11px] text-accent/80 bg-accent/5 px-2 py-0.5 rounded-full">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;