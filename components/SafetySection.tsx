import React from 'react';
import Card from './ui/Card';

const SafetySection: React.FC = () => {
  return (
    <section id="safety">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
          "비대면이라서 불안해요"<br/>
          <span className="text-accent">안전장치 3단계</span>로 완벽하게 해소해 드립니다.
        </h2>
        <p className="text-muted leading-relaxed">
          법률 서비스의 본질은 '방문'이 아니라 '정확한 일처리'입니다.<br/>
          오히려 대면보다 더 꼼꼼하게 기록되고 관리됩니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="hover:border-accent/30 transition-colors group">
          <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-2xl mb-5 border border-white/5">
            📝
          </div>
          <h3 className="text-lg font-bold mb-3 text-white">1. 간편 비대면 약정</h3>
          <p className="text-sm text-muted leading-relaxed mb-4">
            방문하실 필요 없습니다. 이메일이나 팩스로 계약서를 보내드리면, <b>서명 후 스캔하거나 사진을 찍어</b> 보내주시면 즉시 효력이 발생합니다.
          </p>
          <div className="inline-block px-2.5 py-1 bg-green-500/10 border border-green-500/20 rounded text-[11px] text-green-400 font-medium">등기 우편 접수도 가능</div>
        </Card>

        <Card className="hover:border-accent/30 transition-colors group">
          <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-2xl mb-5 border border-white/5">
            🗂️
          </div>
          <h3 className="text-lg font-bold mb-3 text-white">2. 서류 발급 대행 (선택)</h3>
          <p className="text-sm text-muted leading-relaxed mb-4">
            시간이 없거나 서류 발급이 복잡하다면, <b>합리적인 비용으로 대행 서비스</b>를 신청할 수 있습니다. 전문팀이 빠르고 정확하게 준비해 드립니다.
          </p>
          <div className="inline-block px-2.5 py-1 bg-accent/10 border border-accent/20 rounded text-[11px] text-accent font-medium">복잡한 서류 스트레스 해결</div>
        </Card>

        <Card className="hover:border-accent/30 transition-colors group">
          <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-2xl mb-5 border border-white/5">
            📡
          </div>
          <h3 className="text-lg font-bold mb-3 text-white">3. 사건 현황 실시간 공유</h3>
          <p className="text-sm text-muted leading-relaxed mb-4">
            담당자와 연락이 안 되어 답답해하실 필요 없습니다.<br/>
            법원 접수부터 보정, 인가까지 <b>모든 진행 단계를 문자와 카톡</b>으로 투명하게 안내해 드립니다.
          </p>
          <div className="inline-block px-2.5 py-1 bg-accent/10 border border-accent/20 rounded text-[11px] text-accent font-medium">진행 단계별 자동 알림</div>
        </Card>
      </div>
    </section>
  );
};

export default SafetySection;