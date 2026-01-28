import React from 'react';
import Card from './ui/Card';

const HowSection: React.FC = () => {
  return (
    <section className="mt-[26px]" id="how">
      <h2 className="text-[22px] font-bold mb-2.5 tracking-tight">개인회생을 통해 기대할 수 있는 변화 (가능성·절차 기준)</h2>
      <p className="mb-3.5 text-muted">
        아래 내용은 모든 사람에게 동일하게 적용되는 “확정 결과”가 아니라,<br className="hidden sm:block" />
        통상적인 절차 방향을 <b className="text-text">가능성 중심</b>으로 정리한 것입니다.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[18px]">
        <Card>
          <h3 className="text-lg font-bold mt-0 mb-2">가능성으로 기대되는 변화</h3>
          <ul className="list-none p-0 m-0 grid gap-2.5">
            {[
              { title: '상환 부담을 현실화하는 방향 검토', sub: '월 변제액이 감당 가능한 수준인지 먼저 점검합니다.' },
              { title: '독촉/추심 스트레스 완화 절차 검토', sub: '상황에 따라 중단 조치를 검토할 수 있습니다.' },
              { title: '원금/이자 조정 가능성 검토', sub: '사건 특성에 따라 범위가 달라질 수 있습니다.' },
              { title: '분할 상환 계획으로 재정 재정비', sub: '“버티기” 대신 “정리”로 방향을 바꾸는 접근입니다.' },
            ].map((item, idx) => (
              <li key={idx} className="border border-white/10 rounded-[14px] p-3 bg-white/5 flex gap-2.5 items-start">
                <div className="w-7 h-7 rounded-[10px] grid place-items-center bg-ok/10 border border-ok/20 text-ok shrink-0 font-black text-sm">✓</div>
                <div>
                  <b className="block mb-0.5 text-sm sm:text-base">{item.title}</b>
                  <div className="text-[13px] text-muted">{item.sub}</div>
                </div>
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <h3 className="text-lg font-bold mt-0 mb-2">진행은 보통 이렇게 흘러갑니다</h3>
          <ul className="list-none p-0 m-0 grid gap-2.5">
            {[
              { step: 'A', title: '상황 점검 → 가능성 설명', sub: '현재 소득/채무/생활비 구조를 기준으로 확인합니다.' },
              { step: 'B', title: '서류 안내 → 준비 순서 정리', sub: '무엇부터 준비해야 하는지 부담이 줄어듭니다.' },
              { step: 'C', title: '접수 진행 → 절차 단계별 대응', sub: '진행 중 요청사항에 맞춰 자료를 정리해갑니다.' },
              { step: 'D', title: '계획 수립 → 생활 가능한 수준으로 유지', sub: '가장 중요한 건 “지속 가능한 변제”입니다.' },
            ].map((item, idx) => (
              <li key={idx} className="border border-white/10 rounded-[14px] p-3 bg-white/5 flex gap-2.5 items-start">
                <div className="w-7 h-7 rounded-[10px] grid place-items-center bg-accent/10 border border-accent/20 text-accent shrink-0 font-black text-sm">{item.step}</div>
                <div>
                  <b className="block mb-0.5 text-sm sm:text-base">{item.title}</b>
                  <div className="text-[13px] text-muted">{item.sub}</div>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
};

export default HowSection;