import React from 'react';

const SystemIntroSection: React.FC = () => {
  return (
    <section className="bg-card rounded-3xl p-8 md:p-12 border border-border relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
        <div>
          <h2 className="text-2xl font-bold mb-5 text-white">
            왜 비용이 더 <span className="text-accent">합리적</span>인가요?
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-white/10 font-bold text-muted">1</div>
              <div>
                <h4 className="font-bold text-white mb-1">시스템화로 업무 효율 극대화</h4>
                <p className="text-sm text-muted">반복적인 서류 작업을 자동화 시스템으로 처리하여, 인건비와 소요 시간을 획기적으로 줄였습니다.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-white/10 font-bold text-muted">2</div>
              <div>
                <h4 className="font-bold text-white mb-1">불필요한 영업 비용 제거</h4>
                <p className="text-sm text-muted">과도한 광고비나 영업 수수료를 없애고, 오직 사건 처리에 집중하여 수임료 거품을 뺐습니다.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-white/10 font-bold text-muted">3</div>
              <div>
                <h4 className="font-bold text-white mb-1">수임료 자체 분납 시스템</h4>
                <p className="text-sm text-muted">비용 때문에 포기하지 않도록, 상황에 맞춰 수임료를 나눠 낼 수 있는 분납 제도를 운영합니다.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-slate-950/50 rounded-2xl p-6 border border-white/5">
          <div className="text-center mb-6">
            <div className="text-sm text-muted mb-1">평균적인 사건 처리 만족도</div>
            <div className="text-3xl font-bold text-white">98.5%</div>
            <div className="text-xs text-accent mt-1">소통/과정 만족도 기준</div>
          </div>
          <div className="space-y-3">
             <div className="bg-slate-900 p-3 rounded-lg border border-white/5">
               <div className="flex justify-between text-xs mb-1">
                 <span className="text-gray-300">서류 준비 편의성</span>
                 <span className="text-accent">매우 만족</span>
               </div>
               <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                 <div className="bg-accent h-full w-[95%]"></div>
               </div>
             </div>
             <div className="bg-slate-900 p-3 rounded-lg border border-white/5">
               <div className="flex justify-between text-xs mb-1">
                 <span className="text-gray-300">진행 상황 공유</span>
                 <span className="text-accent">매우 만족</span>
               </div>
               <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                 <div className="bg-accent h-full w-[92%]"></div>
               </div>
             </div>
             <div className="bg-slate-900 p-3 rounded-lg border border-white/5">
               <div className="flex justify-between text-xs mb-1">
                 <span className="text-gray-300">비용 합리성</span>
                 <span className="text-accent">만족</span>
               </div>
               <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                 <div className="bg-accent h-full w-[98%]"></div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemIntroSection;