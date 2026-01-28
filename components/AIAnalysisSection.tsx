import React from 'react';
import Card from './ui/Card';
import Button from './ui/Button';

const AIAnalysisSection: React.FC = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold mb-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          AI 스마트 진단
        </div>
        <h2 className="text-3xl font-bold text-white mb-4 leading-tight">
          "제 상황에서도<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent2">회생이 가능할까요?"</span>
        </h2>
        <p className="text-muted text-lg mb-6 leading-relaxed">
          망설이지 마세요. AI 데이터베이스를 기반으로<br/>
          현재 상황을 1분 만에 분석해 드립니다.<br/>
          <span className="text-sm mt-2 block text-gray-500">* 아래 버튼을 누르면 진단이 시작됩니다.</span>
        </p>
        <Button href="#check" className="w-full sm:w-auto h-12 shadow-lg shadow-accent/10">
          무료 AI 가능성 진단 시작하기
        </Button>
      </div>

      <div className="relative mx-auto w-full max-w-[400px]">
        {/* Chat Interface Visual */}
        <div className="absolute inset-0 bg-accent/20 blur-[60px] rounded-full"></div>
        <Card className="relative z-10 p-0 overflow-hidden bg-[#162032] border-white/10 !shadow-2xl">
          <div className="bg-[#1e293b] p-4 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-blue-600 flex items-center justify-center text-white text-xs font-bold">
                AI
              </div>
              <div className="text-sm font-bold text-white">새로회생 스마트 진단</div>
            </div>
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
          </div>
          
          <div className="p-5 space-y-4 min-h-[300px] flex flex-col">
            {/* Bot Message */}
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-slate-700 flex-shrink-0 flex items-center justify-center text-[10px]">🤖</div>
              <div className="bg-slate-700/50 p-3 rounded-2xl rounded-tl-none text-sm text-gray-200">
                안녕하세요! 현재 채무 상황을 선택해주시면<br/>
                <b>탕감 가능성</b>을 즉시 분석해 드릴게요.
              </div>
            </div>
            
            {/* User Message (Visual) */}
            <div className="flex gap-3 flex-row-reverse">
              <div className="w-8 h-8 rounded-full bg-gray-600 flex-shrink-0 flex items-center justify-center text-[10px]">나</div>
              <div className="bg-accent/20 border border-accent/20 p-3 rounded-2xl rounded-tr-none text-sm text-white">
                빚이 감당이 안돼요.. 확인해주세요.
              </div>
            </div>

            {/* Processing Animation */}
            <div className="flex gap-3">
               <div className="w-8 h-8 rounded-full bg-slate-700 flex-shrink-0 flex items-center justify-center text-[10px]">🤖</div>
               <div className="flex gap-1 items-center bg-slate-700/50 px-4 py-3 rounded-2xl rounded-tl-none">
                 <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                 <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                 <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-200"></span>
               </div>
            </div>

            {/* CTA */}
            <div className="mt-auto pt-4 border-t border-white/5">
              <Button href="#check" className="w-full h-12">
                 진단 시작하기
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AIAnalysisSection;