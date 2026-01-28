import React from 'react';
import Card from './ui/Card';

const SafetySection: React.FC = () => {
  return (
    <section>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">
          왜 <span className="text-accent">새로회생</span>인가요?
        </h2>
        <p className="text-slate-400 text-sm md:text-base">
          수임료 걱정은 덜고, 결과는 확실하게 보장합니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="flex flex-row md:flex-col items-center gap-4 !p-5 bg-[#162032] border-white/5">
          <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-2xl shrink-0 border border-white/10">
            🛡️
          </div>
          <div className="text-left md:text-center">
            <h3 className="text-lg font-bold text-white mb-1">기각 시 100% 환불</h3>
            <p className="text-sm text-slate-400 leading-snug">
              책임지지 못할 사건은 맡지 않습니다.<br className="hidden md:block"/> 결과로 증명합니다.
            </p>
          </div>
        </Card>

        <Card className="flex flex-row md:flex-col items-center gap-4 !p-5 bg-[#162032] border-white/5">
          <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-2xl shrink-0 border border-white/10">
            🤐
          </div>
          <div className="text-left md:text-center">
            <h3 className="text-lg font-bold text-white mb-1">철저한 비밀 보장</h3>
            <p className="text-sm text-slate-400 leading-snug">
              가족, 회사 모르게 진행 가능합니다.<br className="hidden md:block"/> 우편물 주소도 변경해드립니다.
            </p>
          </div>
        </Card>

        <Card className="flex flex-row md:flex-col items-center gap-4 !p-5 bg-[#162032] border-white/5">
          <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-2xl shrink-0 border border-white/10">
            ⚡
          </div>
          <div className="text-left md:text-center">
            <h3 className="text-lg font-bold text-white mb-1">초고속 접수 시스템</h3>
            <p className="text-sm text-slate-400 leading-snug">
              서류 대행 서비스로 복잡한 과정 없이<br className="hidden md:block"/> 빠르게 금지명령을 받아냅니다.
            </p>
          </div>
        </Card>
      </div>
      
      <div className="mt-8 text-center">
        <div className="inline-block bg-white/5 rounded-lg px-4 py-3 border border-white/5">
          <p className="text-sm text-slate-300">
            <span className="text-accent font-bold">Tip.</span> 주말/야간에도 자가진단 접수는 가능합니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;