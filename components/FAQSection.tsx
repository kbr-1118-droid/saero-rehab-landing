import React, { useState } from 'react';
import Card from './ui/Card';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/5 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className={`font-bold text-[15px] md:text-base transition-colors ${isOpen ? 'text-accent' : 'text-slate-200 group-hover:text-white'}`}>
          Q. {question}
        </span>
        <span className={`ml-4 text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[200px] opacity-100 pb-5' : 'max-h-0 opacity-0'}`}
      >
        <div className="text-[14px] text-slate-400 leading-relaxed bg-white/5 p-4 rounded-xl">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const faqs = [
    {
      q: "가족이나 직장에서 알게 되나요?",
      a: "아니요, 철저히 비밀로 진행됩니다. 우편물 주소지를 법률사무소로 변경하여 댁이나 회사로 우편물이 가지 않도록 조치해 드립니다."
    },
    {
      q: "신청하면 불이익은 없나요?",
      a: "오히려 이자가 면제되고 독촉이 중단되어 생활이 안정됩니다. 공무원, 교사, 의사 등 전문직 자격도 그대로 유지되며, 체크카드 사용이나 청약 등 정상적인 금융 생활이 가능해집니다."
    },
    {
      q: "수임료가 부담되는데 분납이 되나요?",
      a: "네, 가능합니다. 당장은 큰 비용이 없으셔도 사건 접수가 가능하도록 자체 분납 시스템(3~5개월)을 운영하고 있습니다. 부담 없이 상담받아보세요."
    },
    {
      q: "기각되면 수임료는 어떻게 되나요?",
      a: "100% 전액 환불해 드립니다. 계약서에 명시된 환불 규정에 따라, 기각 시 납부하신 수임료를 돌려드립니다. 그만큼 확실한 사건만 맡습니다."
    }
  ];

  return (
    <section className="animate-fade-in-up">
      <div className="text-center mb-6">
        <h2 className="text-[24px] md:text-2xl font-bold text-white mb-2">
          자주 묻는 질문
        </h2>
        <p className="text-slate-400 text-sm">
          걱정하지 마세요, 법은 채무자를 보호하기 위해 존재합니다.
        </p>
      </div>

      <Card className="bg-[#162032] border-white/5 !py-2">
        {faqs.map((faq, idx) => (
          <FAQItem key={idx} question={faq.q} answer={faq.a} />
        ))}
      </Card>
    </section>
  );
};

export default FAQSection;