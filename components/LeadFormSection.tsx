import React, { useState, useRef, useEffect } from 'react';
import Card from './ui/Card';
import Button from './ui/Button';

interface LeadFormSectionProps {
  showToast: (msg: string) => void;
}

interface OptionButtonProps {
  index: number;
  label: string;
  selected: boolean;
  onClick: () => void;
}

const OptionButton: React.FC<OptionButtonProps> = ({ index, label, selected, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`
      w-full p-4 md:p-5 rounded-xl border text-left transition-all duration-200 group relative overflow-hidden mb-3 last:mb-0 flex items-center gap-4
      ${selected 
        ? 'border-accent bg-accent/10 text-white shadow-[0_0_15px_rgba(56,189,248,0.15)]' 
        : 'border-white/10 bg-[#1e293b]/50 text-slate-300 hover:bg-[#1e293b] hover:border-white/30'
      }
    `}
  >
    {/* Number Badge */}
    <div className={`
      w-6 h-6 rounded-md flex items-center justify-center shrink-0 text-xs font-bold transition-colors
      ${selected 
        ? 'bg-accent text-[#0f172a]' 
        : 'bg-white/10 text-slate-400 group-hover:bg-white/20 group-hover:text-white'}
    `}>
      {index + 1}
    </div>

    <span className="text-[16px] md:text-[17px] font-medium leading-snug">{label}</span>
    
    {/* Check Icon for Selected State */}
    {selected && (
      <div className="ml-auto text-accent">
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      </div>
    )}
  </button>
);

const LeadFormSection: React.FC<LeadFormSectionProps> = ({ showToast }) => {
  const [step, setStep] = useState(1); 
  const [loading, setLoading] = useState(false);
  
  const initialFormData = {
    status: '',
    income: '',
    debtAmount: '',
    name: '',
    phone: '',
    note: '',
    agreement: true
  };

  const [formData, setFormData] = useState(initialFormData);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (step > 1 && scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [step]);

  const handleSelect = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setTimeout(() => setStep(prev => prev + 1), 250); 
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (step === 3 && !formData.debtAmount) {
      showToast("채무액을 입력해주세요.");
      return;
    }
    setStep(prev => prev + 1);
  };

  const handlePrev = () => {
    setStep(prev => prev - 1);
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setStep(1);
    if (scrollRef.current) {
        scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
        showToast("성함과 연락처를 입력해주세요.");
        return;
    }
    if (!formData.agreement) {
        showToast("개인정보 수집 동의가 필요합니다.");
        return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/xlgbynkr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          subject: "새로회생 자가진단 접수", 
          ...formData
        })
      });

      if (response.ok) {
        setLoading(false);
        setStep(5); 
      } else {
        setLoading(false);
        showToast("접수 중 오류가 발생했습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      setLoading(false);
      showToast("네트워크 연결을 확인해주세요.");
      console.error("Form submission error:", error);
    }
  };

  const progress = Math.min(((step - 1) / 4) * 100, 100);

  return (
    <section className="relative scroll-mt-24" ref={scrollRef}>
      <div className="text-center mb-8">
         <h2 className="text-[28px] md:text-[36px] font-black text-white mb-2 leading-tight">
           내 상황 <span className="text-accent border-b-4 border-accent/30">자가 진단</span>하기
         </h2>
         <p className="text-slate-400 text-sm md:text-base">
           3가지 질문으로 회생 가능성을 바로 체크해보세요.
         </p>
      </div>

      <Card className="!p-0 overflow-hidden border-2 border-white/10 shadow-2xl relative min-h-[500px] flex flex-col bg-[#111a2e]">
        {/* Progress Bar */}
        {step < 5 && (
          <div className="w-full bg-slate-800 h-1.5">
            <div 
              className="bg-accent h-1.5 transition-all duration-300 ease-out" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        )}

        <div className="p-6 md:p-8 flex-1 flex flex-col relative">
          {loading && (
             <div className="absolute inset-0 z-50 bg-[#0f172a]/95 flex flex-col items-center justify-center backdrop-blur-sm">
                <div className="w-10 h-10 border-4 border-slate-700 border-t-accent rounded-full animate-spin mb-4"></div>
                <div className="text-white font-bold text-lg">결과를 정리하고 있습니다</div>
             </div>
          )}

          {/* STEP 1 */}
          {step === 1 && (
            <div className="animate-fade-in-up flex-1 flex flex-col">
              <div className="mb-6">
                <span className="text-accent font-bold text-sm tracking-wide">Step 1. 현재 상황</span>
                <h3 className="text-2xl font-bold text-white mt-1 mb-1">지금 연체 중이신가요?</h3>
                <p className="text-sm text-slate-400">독촉 진행 여부와 사건의 시급성을 판단하기 위함입니다.</p>
              </div>
              
              <div className="grid gap-1">
                {['아직 연체 전입니다 (납부일 임박)', '현재 연체 중입니다 (독촉 시작)', '이미 신용회복/장기 연체 중', '압류/경매 등 법적 조치 진행 중'].map((opt, idx) => (
                  <OptionButton 
                    key={opt}
                    index={idx}
                    label={opt} 
                    selected={formData.status === opt} 
                    onClick={() => handleSelect('status', opt)} 
                  />
                ))}
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="animate-fade-in-up flex-1 flex flex-col">
              <div className="mb-6">
                <span className="text-accent font-bold text-sm tracking-wide">Step 2. 소득 활동</span>
                <h3 className="text-2xl font-bold text-white mt-1 mb-1">수입이 있으신가요?</h3>
                <p className="text-sm text-slate-400">최저생계비 이상의 소득이 있어야 진행이 가능합니다.</p>
              </div>

              <div className="grid gap-1">
                {['4대보험 가입 직장인', '프리랜서 / 아르바이트', '자영업 / 개인사업자', '현재 소득 없음 / 구직 중'].map((opt, idx) => (
                  <OptionButton 
                    key={opt}
                    index={idx}
                    label={opt} 
                    selected={formData.income === opt} 
                    onClick={() => handleSelect('income', opt)} 
                  />
                ))}
              </div>
              <div className="mt-auto pt-6 text-center">
                <button type="button" onClick={handlePrev} className="text-slate-500 text-sm hover:text-white transition-colors">이전 단계로</button>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <form className="animate-fade-in-up flex-1 flex flex-col" onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
              <div className="mb-6">
                <span className="text-accent font-bold text-sm tracking-wide">Step 3. 채무 규모</span>
                <h3 className="text-2xl font-bold text-white mt-1 mb-1">총 빚은 얼마인가요?</h3>
                <p className="text-sm text-slate-400">담보 15억, 무담보 10억 이하일 때만 신청 가능합니다.</p>
              </div>

              <div className="relative mb-6">
                <input
                  type="text"
                  name="debtAmount"
                  value={formData.debtAmount}
                  onChange={handleChange}
                  placeholder="예: 5000"
                  className="w-full p-6 rounded-xl border border-white/20 bg-[#0f172a] text-white text-3xl outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-slate-700 font-bold text-center"
                  autoFocus
                />
                <div className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-500 text-lg font-medium">만원</div>
              </div>
              
              <Button type="submit" className="w-full h-14 text-lg bg-white text-[#0f172a] hover:bg-slate-200 border-0 font-bold">
                진단 결과 확인하기
              </Button>
              <div className="mt-auto pt-6 text-center">
                <button type="button" onClick={handlePrev} className="text-slate-500 text-sm hover:text-white transition-colors">이전 단계로</button>
              </div>
            </form>
          )}

          {/* STEP 4: Contact Info */}
          {step === 4 && (
            <div className="animate-fade-in-up flex-1 flex flex-col">
              <div className="mb-6 bg-accent/10 border border-accent/20 rounded-xl p-5">
                <div className="text-accent font-bold text-lg mb-1 flex items-center gap-2">
                   <span>📋</span> 1차 진단 완료
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  입력하신 내용을 바탕으로 <b>회생 자격 요건</b>이 확인되었습니다.<br/>
                  아래 연락처를 남겨주시면, <b>정확한 탕감율과 비용</b>을 안내드립니다.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5 ml-1">성함</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="홍길동"
                    className="w-full p-4 rounded-xl border border-white/20 bg-[#0f172a] text-white text-lg outline-none focus:border-accent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5 ml-1">연락처</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="010-0000-0000"
                    className="w-full p-4 rounded-xl border border-white/20 bg-[#0f172a] text-white text-lg outline-none focus:border-accent transition-all"
                  />
                </div>

                <label className="flex items-start gap-3 cursor-pointer py-2 group bg-[#0f172a] p-3 rounded-lg border border-white/5">
                  <div className="relative flex items-center mt-0.5">
                    <input 
                      type="checkbox" 
                      checked={formData.agreement}
                      onChange={(e) => setFormData(prev => ({...prev, agreement: e.target.checked}))}
                      className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-slate-500 bg-slate-800 checked:border-accent checked:bg-accent"
                    />
                    <svg className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#0f172a] opacity-0 peer-checked:opacity-100" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <div className="text-xs text-slate-400">
                    (필수) 상담을 위한 개인정보 수집·이용에 동의합니다.
                  </div>
                </label>

                <Button type="submit" className="w-full h-14 text-lg bg-gradient-to-r from-accent to-blue-500 text-white shadow-lg shadow-blue-500/20 border-0 mt-2">
                  무료 상담 신청하기
                </Button>
              </form>
            </div>
          )}

          {/* STEP 5: Success Result (Revised) */}
          {step === 5 && (
            <div className="flex-1 flex flex-col items-center pt-2 animate-fade-in-up">
              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-2">
                📌 1차 진단 결과
              </h3>

              {/* Result Box */}
              <div className="w-full bg-[#162032] border border-accent/30 rounded-xl p-5 mb-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-accent"></div>

                <div className="text-center mb-5 mt-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent font-bold text-xs mb-3 border border-accent/20">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                    분석 완료
                  </div>
                  <p className="text-lg md:text-xl text-white font-bold leading-snug">
                    입력하신 정보 기준,<br className="md:hidden"/>
                    <span className="text-accent">개인회생 진행 가능성이 높습니다.</span>
                  </p>
                </div>

                <div className="space-y-3 border-t border-white/10 pt-4 bg-white/[0.02] -mx-5 px-5 pb-2">
                  <div className="flex justify-between items-center text-sm md:text-base">
                    <span className="text-slate-400">월 예상 변제금</span>
                    <span className="text-white font-bold">약 30~50만 원 내외</span>
                  </div>
                  <div className="flex justify-between items-center text-sm md:text-base">
                    <span className="text-slate-400">채무 탕감 가능성</span>
                    <span className="text-white font-bold">원금 기준 최대 90%</span>
                  </div>
                </div>
                <div className="mt-3 text-[11px] text-slate-500 text-right">
                  * 위 수치는 예시이며, 개인별 조건에 따라 달라집니다.
                </div>
              </div>

              {/* Call Explanation */}
              <div className="text-center space-y-4 max-w-sm mx-auto w-full">
                <p className="text-slate-300 text-sm leading-relaxed">
                  ※ 정확한 변제금과 기간은<br/>
                  <b>재산, 부양가족, 대출 시기</b>를 확인해야 산출됩니다.
                </p>

                <div className="bg-white/5 rounded-lg p-4 border border-white/5 w-full">
                  <p className="text-accent font-bold mb-1 flex items-center justify-center gap-2">
                    📞 담당자 배정 완료
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed mb-2">
                    담당자가 사건 내용을 검토한 후,<br/>
                    <span className="text-white font-bold">010-6672-8296</span> 번호로 연락드립니다.
                  </p>
                  <p className="text-[11px] text-slate-500 border-t border-white/5 pt-2 mt-2 inline-block px-3">
                    평균 상담 시간: 3~5분 소요
                  </p>
                </div>

                {/* Reset Button */}
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-2 text-slate-500 text-xs hover:text-white transition-colors flex items-center justify-center gap-1 mx-auto"
                >
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  처음으로 돌아가기
                </button>
              </div>
            </div>
          )}
        </div>
      </Card>
    </section>
  );
};

export default LeadFormSection;