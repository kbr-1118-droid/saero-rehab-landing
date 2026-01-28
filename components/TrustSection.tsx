import React from 'react';
import Card from './ui/Card';
import Button from './ui/Button';

const TrustSection: React.FC = () => {
  return (
    <section className="mt-[26px]" id="trust">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <h2 className="text-[24px] font-black mb-2 font-serif text-white">
            왜 <span className="text-gold">'새로회생'</span>인가요?
          </h2>
          <p className="text-muted">
            단순 서류 대행이 아닙니다. <br/>
            <b>여러분의 새 출발</b>을 끝까지 책임지는 법률 파트너입니다.
          </p>
        </div>
        <div className="md:text-right">
           <div className="inline-block border border-gold/30 bg-gold/5 px-4 py-2 rounded-lg text-gold text-xs font-bold">
             법무법인 책임 관리 시스템
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <Card className="bg-[#111a2e]/50 backdrop-blur">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-transparent border border-gold/20 flex items-center justify-center text-2xl mb-4">
            ⚖️
          </div>
          <h3 className="text-lg font-bold mb-2">기각 시 100% 환불</h3>
          <p className="text-sm text-muted leading-relaxed">
            사건이 기각된다면 수임료를 전액 반환해 드립니다. 
            그만큼 <b>확실한 사건만 진행</b>하며, 무리한 수임을 하지 않습니다.
          </p>
        </Card>

        <Card className="bg-[#111a2e]/50 backdrop-blur">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-transparent border border-accent/20 flex items-center justify-center text-2xl mb-4">
            🔒
          </div>
          <h3 className="text-lg font-bold mb-2">철저한 비밀 보장</h3>
          <p className="text-sm text-muted leading-relaxed">
            가족이나 직장에 알려질까 걱정하지 마세요.
            <b>우편물 주소지 변경</b>부터 연락처 보안까지 완벽하게 관리해드립니다.
          </p>
        </Card>

        <Card className="bg-[#111a2e]/50 backdrop-blur">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center text-2xl mb-4">
            🤝
          </div>
          <h3 className="text-lg font-bold mb-2">1:1 전담 밀착 관리</h3>
          <p className="text-sm text-muted leading-relaxed">
            공장식 처리가 아닙니다.
            배정된 전담 팀이 <b>접수부터 인가 결정까지</b> 모든 과정을 직접 소통하며 케어합니다.
          </p>
        </Card>
      </div>

      <div className="mt-8 p-6 border border-white/5 rounded-2xl bg-white/[0.02] flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="text-sm font-bold text-white mb-1">지금 바로 확인해보세요</div>
          <div className="text-xs text-muted">주말/야간에도 자가진단 접수는 가능합니다.</div>
        </div>
        <Button href="#check" size="sm" className="w-full md:w-auto min-w-[200px] border-gold/30 hover:border-gold/50">
          무료 진단 신청하기
        </Button>
      </div>
    </section>
  );
};

export default TrustSection;