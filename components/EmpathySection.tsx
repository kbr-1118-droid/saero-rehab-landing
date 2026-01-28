import React from 'react';
import Card from './ui/Card';
import Button from './ui/Button';

const EmpathySection: React.FC = () => {
  return (
    <section className="mt-[26px]" id="empathy">
      <h2 className="text-[22px] font-bold mb-2.5 tracking-tight">지금 이런 상태라면, 혼자 버티고 있을 확률이 큽니다</h2>
      <p className="mb-3.5 text-muted">
        개인회생은 “특별한 사람”이 하는 게 아니라, <b className="text-text">감당이 어려운 시점에 정리를 시작하는 절차</b>입니다.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[18px]">
        <Card>
          <h3 className="text-lg font-bold mt-0 mb-2">많이들 이렇게 시작됩니다</h3>
          <ul className="list-none p-0 m-0 grid gap-2.5">
            {[
              { title: '연체가 시작됐거나, 곧 시작될 것 같다', sub: '“이번 달만 넘기면 되겠지”가 반복됩니다.' },
              { title: '독촉 전화/문자가 불안해서 휴대폰을 못 보겠다', sub: '직장·가정에서 눈치 보게 됩니다.' },
              { title: '가족에게 말 못하고 혼자 해결하려 한다', sub: '문제가 커질수록 더 말하기 어려워집니다.' },
              { title: '대출로 대출을 막는 상태가 계속된다', sub: '숨은 이자가 커져 체감 부담이 급격히 올라갑니다.' },
            ].map((item, idx) => (
              <li key={idx} className="border border-white/10 rounded-[14px] p-3 bg-white/5 flex gap-2.5 items-start">
                <div className="w-7 h-7 rounded-[10px] grid place-items-center bg-danger/10 border border-danger/20 text-danger shrink-0 font-black text-sm">!</div>
                <div>
                  <b className="block mb-0.5 text-sm sm:text-base">{item.title}</b>
                  <div className="text-[13px] text-muted">{item.sub}</div>
                </div>
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <h3 className="text-lg font-bold mt-0 mb-2">지금 필요한 건 ‘정답’이 아니라 ‘정리’입니다</h3>
          <p className="text-[13px] text-muted mb-3">
            개인회생은 개인별로 조건이 달라서, 인터넷 글만 보고 결론 내리기 어렵습니다.<br />
            그래서 먼저 <b className="text-text">현재 상황을 정리</b>하고, 가능한 선택지와 준비 순서를 잡는 게 현실적입니다.
          </p>

          <div className="grid gap-2.5">
             {[
               { num: 1, title: '현재 소득/지출/채무를 간단히 정리', sub: '“가능성”을 판단할 재료를 만듭니다.' },
               { num: 2, title: '절차상 필요한 준비 항목 확인', sub: '무엇부터 준비해야 하는지 순서가 잡힙니다.' },
               { num: 3, title: '내 상황에 맞는 진행 방향 안내', sub: '‘가능성/절차’ 기준으로 안내합니다.' },
             ].map((item, idx) => (
               <div key={idx} className="border border-white/10 rounded-[14px] p-3 bg-white/5 flex gap-2.5 items-start">
                 <div className="w-7 h-7 rounded-[10px] grid place-items-center bg-accent/10 border border-accent/20 text-accent shrink-0 font-black text-sm">{item.num}</div>
                 <div>
                   <b className="block mb-0.5 text-sm sm:text-base">{item.title}</b>
                   <div className="text-[13px] text-muted">{item.sub}</div>
                 </div>
               </div>
             ))}
          </div>

          <div className="mt-3.5">
            <Button href="#check" className="w-full">내 상황 점검부터 하기</Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default EmpathySection;