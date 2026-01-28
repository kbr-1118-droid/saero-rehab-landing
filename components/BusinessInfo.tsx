import React from 'react';
import Card from './ui/Card';

const BusinessInfo: React.FC = () => {
  return (
    <Card className="mt-[18px]">
      <h3 className="text-lg font-bold mt-0 mb-2 text-white">사업자/운영 정보</h3>
      <div className="text-[13px] text-slate-400 leading-[1.8]">
        <div><b className="text-slate-300">브랜드</b>: 새로회생</div>
        <div><b className="text-slate-300">운영 주체</b>: 법무법인 하이브상무</div>
        <div><b className="text-slate-300">사업자등록번호</b>: 413-85-04795</div>
        <div><b className="text-slate-300">업태/종목</b>: 서비스업 / 변호사업</div>
        <div><b className="text-slate-300">광고책임변호사</b>: 김보름</div>
        <div className="mt-2"><b className="text-slate-300">주소</b>: 광주광역시 서구 시청로 96번길 12 2층 210호(치평동, 골든빌오피스텔)</div>
        <div className="mt-2">
          <b className="text-slate-300">연락처</b>: <a href="tel:01066728296" className="underline underline-offset-[3px] text-white hover:text-accent transition-colors">010-6672-8296</a>
          &nbsp;&nbsp;
          <b className="text-slate-300">이메일</b>: <a href="mailto:kbr-1118@hanmail.net" className="underline underline-offset-[3px] text-white hover:text-accent transition-colors">kbr-1118@hanmail.net</a>
        </div>
      </div>

      <div className="text-xs text-slate-500 border-t border-white/10 pt-2.5 mt-4">
        안내: 본 페이지는 법무법인 하이브상무에서 운영하는 개인회생/파산 상담 신청 페이지입니다. 입력하신 정보는 상담 목적 이외의 용도로 사용되지 않으며, 철저히 보호됩니다.
      </div>
    </Card>
  );
};

export default BusinessInfo;