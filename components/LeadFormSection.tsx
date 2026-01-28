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

const OptionButton: React.FC<OptionButtonProps> = ({ label, selected, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`
      w-full p-5 rounded-2xl border text-left transition-all duration-200 group relative overflow-hidden mb-3 last:mb-0
      ${selected 
        ? 'border-accent bg-accent text-[#0f172a] font-bold shadow-[0_0_20px_rgba(56,189,248,0.3)]' 
        : 'border-white/20 bg-[#1e293b] text-slate-200 hover:bg-[#283548] hover:border-white/30'
      }
    `}
  >
    <div className="flex justify-between items-center relative z-10">
      <span className="text-[18px]">{label}</span>
      {selected && <div className="text-[#0f172a] font-black text-xl">✓</div>}
    </div>
  </button>
);

const LeadFormSection: React.FC<LeadFormSectionProps> = ({ showToast }) => {
  const [step, setStep] = useState(1); 
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
    setTimeout(() => setStep(prev => prev + 1), 150); 
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
          subject: "새로회생 모바일 진단 접수", 
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
    <section className="relative scroll-mt-20" ref={scrollRef}>
      {/* Visual hook merging AI analysis concept */}
      <div className="text-center mb-8">
         <h2 className="text-[28px] md:text-[40px] font-black text-white mb-3 leading-tight">
           <span className="text-accent">AI 무료 진단</span>으로<br/>
           가능성과 비용을 확인하세요
         </h2>
         <p className="text-slate-300 text-[16px] md:text-lg">
           개인회생 가능 여부를 <b className="text-white">1분 안에 분석</b>해 드립니다.
         </p>
      </div>

      <Card className="!p-0 overflow-hidden border-2 border-accent/30 shadow-[0_0_40px_rgba(56,189,248,0.1)] relative min-h-[480px] flex flex-col bg-[#111a2e]">
        {step < 5 && (
          <div className="w-full bg-slate-800 h-2">
            <div 
              className="bg-accent h-2 transition-all duration-300 ease-out shadow-[0_0_15px_rgba(56,189,248,0.8)]" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        )}

        <div className="p-6 md:p-10 flex-1 flex flex-col justify-center relative">
          {loading && (
             <div className="absolute inset-0 z-50 bg-[#0f172a]/95 flex flex-col items-center justify-center backdrop-blur-sm animate-[fadeIn_0.3s]">
                <div className="w-12 h-12 border-4 border-slate-700 border-t-accent rounded-full animate-spin mb-4"></div>
                <div className="text-white font-bold text-xl">진단 결과를 분석 중입니다</div>
             </div>
          )}

          {step === 1 && (
            <div className="animate-fade-in-up">
              <span className="block text-accent font-bold mb-2 text-sm">STEP 1/3</span>
              <h3 className="text-2xl font-bold text-white mb-6">현재 어떤 상황이신가요?</h3>
              <div className="grid gap-2">
                {['연체 직전 / 힘든 상황', '초기 연체 중 (독촉 시작)', '장기 연체 / 신용회복 중', '압류 / 경매 진행 중'].map((opt) => (
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
              <span className="block text-accent font-bold mb-2 text-sm">STEP 2/3</span>
              <h3 className="text-2xl font-bold text-white mb-6">현재 소득 형태는요?</h3>
              <div className="grid gap-2">
                {['4대보험 직장인', '프리랜서 / 아르바이트', '자영업 / 사업자', '무직 / 구직 중'].map((opt) => (
                  <OptionButton 
                    key={opt} 
                    label={opt} 
                    selected={formData.income === opt} 
                    onClick={() => handleSelect('income', opt)} 
                  />
                ))}
              </div>
              <button type="button" onClick={handlePrev} className="mt-6 text-slate-400 text-sm underline p-2">이전으로</button>
            </div>
          )}

          {step === 3 && (
            <form className="animate-fade-in-up" onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
              <span className="block text-accent font-bold mb-2 text-sm">STEP 3/3</span>
              <h3 className="text-2xl font-bold text-white mb-6">총 채무액은 대략 얼마인가요?</h3>
              <div className="relative mb-6">
                <input
                  type="text"
                  name="debtAmount"
                  value={formData.debtAmount}
                  onChange={handleChange}
                  placeholder="예: 5000"
                  className="w-full p-6 rounded-2xl border border-white/20 bg-[#0f172a] text-white text-3xl outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-slate-600 font-bold text-center"
                  autoFocus
                />
                <div className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 text-lg font-medium">만원</div>
              </div>
              <Button type="submit" className="w-full h-16 text-xl bg-accent text-[#0f172a] shadow-lg shadow-accent/20">
                결과 확인하기
              </Button>
              <button type="button" onClick={handlePrev} className="mt-6 text-slate-400 text-sm underline block mx-auto">이전으로</button>
            </form>
          )}

          {step === 4 && (
            <div className="animate-fade-in-up">
              <div className="mb-6 bg-accent/10 border border-accent/20 rounded-2xl p-5 text-center">
                <div className="text-accent font-bold text-lg mb-1">🎉 1차 분석 완료</div>
                <p className="text-slate-300 text-sm">
                  입력 정보 기반으로 진단이 완료되었습니다.<br/>
                  결과를 받아보실 연락처를 남겨주세요.
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
                    (필수) 무료 진단 및 비용 안내를 위한<br/>개인정보 수집·이용에 동의합니다.
                  </div>
                </label>

                <Button type="submit" className="w-full h-16 text-xl bg-gradient-to-r from-accent to-blue-500 text-white shadow-lg shadow-blue-500/30 border-0 mt-2">
                  무료 진단 결과 받기
                </Button>
              </form>
            </div>
          )}

          {step === 5 && (
            <div className="text-center py-6 animate-fade-in-up">
              <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/20">
                <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">접수 완료되었습니다.</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                담당 변호사가 내용 검토 후<br/>
                <b className="text-accent">{formData.phone}</b> 번호로<br/>
                정확한 <b>탕감율과 비용</b>을 안내드립니다.
              </p>
              <div className="bg-[#0f172a] p-4 rounded-xl border border-white/5 text-sm text-slate-500">
                순차 연락 중이오니 잠시만 기다려주세요.
              </div>
            </div>
          )}
        </div>
      </Card>
    </section>
  );
};

export default LeadFormSection;