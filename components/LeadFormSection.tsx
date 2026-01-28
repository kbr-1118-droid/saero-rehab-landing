import React, { useState, useRef, useEffect } from 'react';
import Card from './ui/Card';
import Button from './ui/Button';

interface LeadFormSectionProps {
  showToast: (msg: string) => void;
}

interface OptionButtonProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

// Moved outside to prevent re-creation on every render and fix TS key prop issues
const OptionButton: React.FC<OptionButtonProps> = ({ label, selected, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`
      w-full p-5 md:p-6 rounded-2xl border text-left transition-all duration-200 group relative overflow-hidden
      ${selected 
        ? 'border-accent bg-accent/10 text-white shadow-[0_0_20px_rgba(56,189,248,0.15)]' 
        : 'border-white/10 bg-[#111a2e] text-slate-300 hover:bg-[#1e293b] hover:border-white/20'
      }
    `}
  >
    <div className="flex justify-between items-center relative z-10">
      <span className="font-medium text-[17px] md:text-[18px]">{label}</span>
      {selected && <div className="text-accent font-bold text-lg">✓</div>}
    </div>
  </button>
);

const LeadFormSection: React.FC<LeadFormSectionProps> = ({ showToast }) => {
  const [step, setStep] = useState(1); // 1: Status, 2: Income, 3: Debt, 4: Contact, 5: Success
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    status: '',
    income: '',
    debtAmount: '',
    name: '',
    phone: '',
    note: '',
    agreement: true
  });

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (step > 1 && scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [step]);

  const handleSelect = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setTimeout(() => setStep(prev => prev + 1), 200); 
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (step === 3 && !formData.debtAmount) {
      showToast("대략적인 채무액을 입력해주세요.");
      return;
    }
    setStep(prev => prev + 1);
  };

  const handlePrev = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
        showToast("성함과 연락처를 입력해주세요.");
        return;
    }
    if (!formData.agreement) {
        showToast("개인정보 수집 이용에 동의해주세요.");
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
          subject: "새로회생 무료진단 신청 접수", // Formspree 이메일 제목용
          ...formData
        })
      });

      if (response.ok) {
        setLoading(false);
        setStep(5); // 성공 화면으로 이동
      } else {
        setLoading(false);
        showToast("제출 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
      }
    } catch (error) {
      setLoading(false);
      showToast("네트워크 오류가 발생했습니다. 인터넷 연결을 확인해주세요.");
      console.error("Form submission error:", error);
    }
  };

  // Progress Bar Calculation
  const progress = Math.min(((step - 1) / 4) * 100, 100);

  return (
    <section className="relative mt-12 scroll-mt-24" ref={scrollRef}>
      <div className="max-w-[720px] mx-auto">
        <div className="text-center mb-10">
           <div className="inline-block bg-accent/10 px-4 py-1.5 rounded-full text-accent text-sm font-bold mb-4 border border-accent/20">
             당신의 새로운 길, 새로회생
           </div>
           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
             AI 무료 가능성 진단 & <span className="text-accent">수임료 확인</span>
           </h2>
           <p className="text-muted text-base md:text-lg leading-relaxed">
             몇 가지 질문에 답해주시면, <b>내 상황에 딱 맞는 해결책</b>을 찾아드립니다.<br/>
             (비용 안내는 결과 분석 후 상담 시 정확하게 전달됩니다)
           </p>
        </div>

        <Card className="!p-0 overflow-hidden border-t-4 border-t-accent shadow-2xl relative min-h-[520px] flex flex-col bg-[#111a2e]">
          {/* Progress Bar */}
          {step < 5 && (
            <div className="w-full bg-slate-800 h-1.5">
              <div 
                className="bg-accent h-1.5 transition-all duration-500 ease-out shadow-[0_0_10px_rgba(56,189,248,0.5)]" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          )}

          <div className="p-8 md:p-10 flex-1 flex flex-col justify-center relative">
            {loading && (
               <div className="absolute inset-0 z-50 bg-[#0f172a]/95 flex flex-col items-center justify-center backdrop-blur-sm animate-[fadeIn_0.3s]">
                  <div className="w-14 h-14 border-4 border-slate-700 border-t-accent rounded-full animate-spin mb-6"></div>
                  <div className="text-white font-bold text-xl animate-pulse">AI가 데이터를 분석 중입니다...</div>
                  <div className="text-muted text-base mt-2">잠시만 기다려주세요</div>
               </div>
            )}

            {step === 1 && (
              <div className="animate-fade-in-up">
                <h3 className="text-2xl font-bold text-white mb-8">Q1. 현재 가장 힘든 상황은 무엇인가요?</h3>
                <div className="grid gap-4">
                  {['연체 직전 / 갚기 힘든 상황', '초기 연체 중 (독촉 시작)', '장기 연체 / 신용회복 중', '압류 / 경매 진행 중'].map((opt) => (
                    <OptionButton 
                      key={opt} 
                      label={opt} 
                      selected={formData.status === opt} 
                      onClick={() => handleSelect('status', opt)} 
                    />
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-fade-in-up">
                <h3 className="text-2xl font-bold text-white mb-8">Q2. 현재 소득 형태는 어떠신가요?</h3>
                <div className="grid gap-4">
                  {['4대보험 가입 직장인', '프리랜서 / 아르바이트', '자영업 / 사업자', '무직 / 구직 중 / 주부'].map((opt) => (
                    <OptionButton 
                      key={opt} 
                      label={opt} 
                      selected={formData.income === opt} 
                      onClick={() => handleSelect('income', opt)} 
                    />
                  ))}
                </div>
                <div className="mt-8">
                  <button type="button" onClick={handlePrev} className="text-muted text-base hover:text-white underline underline-offset-4">이전 단계</button>
                </div>
              </div>
            )}

            {step === 3 && (
              <form className="animate-fade-in-up" onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
                <h3 className="text-2xl font-bold text-white mb-8">Q3. 대략적인 총 채무액은 얼마인가요?</h3>
                <div className="relative mb-8">
                  <input
                    type="text"
                    name="debtAmount"
                    value={formData.debtAmount}
                    onChange={handleChange}
                    placeholder="예: 5,000만원"
                    className="w-full p-6 rounded-2xl border border-white/10 bg-[#0f172a] text-white text-xl md:text-2xl outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-slate-600 font-bold"
                    autoFocus
                  />
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 text-muted text-lg font-medium">원</div>
                </div>
                <Button type="submit" className="w-full h-16 font-bold text-xl bg-accent hover:bg-sky-400 text-slate-900 border-0 shadow-[0_0_20px_rgba(56,189,248,0.2)]">
                  다음 단계
                </Button>
                <div className="mt-8">
                  <button type="button" onClick={handlePrev} className="text-muted text-base hover:text-white underline underline-offset-4">이전 단계</button>
                </div>
              </form>
            )}

            {step === 4 && (
              <div className="animate-fade-in-up">
                <div className="mb-8 bg-accent/10 border border-accent/20 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                     <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse"></span>
                     <span className="text-accent font-bold text-base">AI 분석 완료</span>
                  </div>
                  <p className="text-base text-slate-300 leading-relaxed">
                    입력하신 정보를 바탕으로 <b>가능성 진단</b>이 완료되었습니다.<br/>
                    결과와 예상 수임료를 안내받으실 연락처를 남겨주세요.
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-muted mb-2 ml-1">성함</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="홍길동"
                        className="w-full p-5 rounded-xl border border-white/10 bg-[#0f172a] text-white text-lg outline-none focus:border-accent transition-all placeholder:text-slate-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-muted mb-2 ml-1">연락처</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="010-0000-0000"
                        className="w-full p-5 rounded-xl border border-white/10 bg-[#0f172a] text-white text-lg outline-none focus:border-accent transition-all placeholder:text-slate-600"
                      />
                    </div>
                  </div>
                  <div>
                     <label className="block text-sm text-muted mb-2 ml-1">문의사항 (선택)</label>
                     <textarea
                       name="note"
                       value={formData.note}
                       onChange={handleChange}
                       placeholder="궁금한 점이 있다면 자유롭게 남겨주세요."
                       className="w-full p-5 rounded-xl border border-white/10 bg-[#0f172a] text-white text-lg outline-none focus:border-accent h-28 resize-none transition-all placeholder:text-slate-600"
                     />
                  </div>

                  <label className="flex items-start gap-3 cursor-pointer py-2 group">
                    <div className="relative flex items-center mt-0.5">
                      <input 
                        type="checkbox" 
                        checked={formData.agreement}
                        onChange={(e) => setFormData(prev => ({...prev, agreement: e.target.checked}))}
                        className="peer h-6 w-6 cursor-pointer appearance-none rounded-md border border-slate-600 bg-slate-800 transition-all checked:border-accent checked:bg-accent"
                      />
                      <svg className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-900 opacity-0 peer-checked:opacity-100" width="14" height="14" viewBox="0 0 12 12" fill="none"><path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <div className="text-sm text-muted group-hover:text-slate-300 transition-colors">
                      [필수] 상담 및 비용 안내를 위한 개인정보 수집·이용에 동의합니다.
                    </div>
                  </label>

                  <Button type="submit" className="w-full h-16 font-bold text-xl bg-gradient-to-r from-accent to-accent2 hover:from-sky-400 hover:to-indigo-500 text-slate-900 border-0 shadow-[0_4px_20px_rgba(56,189,248,0.25)]">
                    무료 진단 결과 및 비용 안내받기
                  </Button>
                </form>
              </div>
            )}

            {step === 5 && (
              <div className="text-center py-8 animate-fade-in-up">
                <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(74,222,128,0.2)] border border-green-500/20">
                  <svg className="w-12 h-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">신청이 완료되었습니다!</h3>
                <p className="text-muted mb-10 leading-relaxed text-lg">
                  입력하신 내용을 바탕으로 담당자가 분석 후<br/>
                  <b className="text-white">{formData.phone}</b> 번호로<br/>
                  <b>가능성 여부</b>와 <b>정확한 수임료</b>를 안내해 드리겠습니다.
                </p>
                <div className="bg-[#0f172a] p-5 rounded-xl border border-white/5 text-base text-slate-500">
                  순차적으로 연락드리고 있으니 잠시만 기다려 주시면 감사하겠습니다.
                </div>
              </div>
            )}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default LeadFormSection;