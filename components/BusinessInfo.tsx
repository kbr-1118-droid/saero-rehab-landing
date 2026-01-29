import React, { useState } from 'react';
import Card from './ui/Card';
import Modal from './Modal';
import Button from './ui/Button';

const BusinessInfo: React.FC = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <>
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

        <div className="flex items-center gap-4 border-t border-white/10 pt-4 mt-4">
          <button 
            onClick={() => setShowPrivacy(true)}
            className="text-xs text-slate-500 underline hover:text-slate-300 transition-colors"
          >
            개인정보처리방침 보기
          </button>
        </div>

        <div className="text-xs text-slate-500 mt-2">
          안내: 본 페이지는 법무법인 하이브상무에서 운영하는 개인회생/파산 상담 신청 페이지입니다. 입력하신 정보는 상담 목적 이외의 용도로 사용되지 않으며, 철저히 보호됩니다.
        </div>
      </Card>

      {/* Privacy Policy Modal */}
      <Modal 
        isOpen={showPrivacy} 
        onClose={() => setShowPrivacy(false)} 
        title="개인정보 처리방침"
      >
        <div className="text-slate-300 text-sm leading-relaxed h-[60vh] overflow-y-auto pr-2 space-y-4">
          <p>
            <strong>1. 개인정보의 수집 및 이용 목적</strong><br/>
            '새로회생'(법무법인 하이브상무)은(는) 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.<br/>
            - 개인회생/파산 가능성 진단 및 상담 제공<br/>
            - 사건 진행 절차 안내 및 비용 견적 산출
          </p>

          <p>
            <strong>2. 수집하는 개인정보의 항목</strong><br/>
            - 필수항목 : 성함, 연락처(휴대전화번호)<br/>
            - 선택항목 : 채무상황, 소득형태, 채무금액 등 상담에 필요한 기초 정보
          </p>

          <p>
            <strong>3. 개인정보의 보유 및 이용 기간</strong><br/>
            이용자의 개인정보는 원칙적으로 개인정보의 수집 및 이용목적이 달성되면 지체 없이 파기합니다. 단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다.<br/>
            - 보존 항목 : 상담 신청 내역<br/>
            - 보존 근거 : 고객 상담 이력 관리 및 중복 신청 방지<br/>
            - 보존 기간 : 3년 (상담 완료 후)
          </p>

          <p>
            <strong>4. 동의를 거부할 권리</strong><br/>
            귀하는 개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있습니다. 다만, 필수항목 수집에 동의하지 않을 경우 무료 진단 및 상담 서비스 이용이 제한될 수 있습니다.
          </p>
          
          <div className="pt-4 text-center">
             <Button size="sm" onClick={() => setShowPrivacy(false)}>확인했습니다</Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default BusinessInfo;