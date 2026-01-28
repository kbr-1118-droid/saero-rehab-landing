import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="mt-7 text-xs text-muted border-t border-white/10 pt-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <div>
          <span className="block text-sm font-bold text-white mb-1">새로회생</span>
          <span className="text-accent/80 font-medium">당신의 새로운 길을 엽니다.</span>
        </div>
        <div className="text-right">
           <div className="text-gray-500">ⓒ Sae-Ro Hoesaeng. All rights reserved.</div>
        </div>
      </div>
      
      <div className="space-y-1.5 opacity-70">
        <div><b>표현 준수</b>: 본 페이지는 확정 결과를 보장하지 않으며, 개인별 상황에 따라 결과가 달라질 수 있습니다.</div>
        <div>
          <b>연락처</b>: <a href="tel:01066728296" className="underline underline-offset-[3px] hover:text-white">010-6672-8296</a>
          &nbsp; | &nbsp;
          <b>이메일</b>: <a href="mailto:kbr-1118@hanmail.net" className="underline underline-offset-[3px] hover:text-white">kbr-1118@hanmail.net</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;