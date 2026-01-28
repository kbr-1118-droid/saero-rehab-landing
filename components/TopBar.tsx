import React from 'react';
import Button from './ui/Button';

const TopBar: React.FC = () => {
  return (
    <div className="sticky top-0 z-50 backdrop-blur-md bg-[#0f172a]/80 border-b border-white/5">
      <div className="max-w-[1200px] mx-auto px-[20px] py-4 flex items-center justify-between gap-3">
        <div className="flex gap-3 items-center">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent to-accent2 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-accent/20">
             <span>S</span>
          </div>
          <div className="leading-none">
            <div className="text-[17px] font-bold text-white tracking-tight">새로회생</div>
            <div className="text-[12px] text-accent font-medium mt-0.5">당신의 새로운 길</div>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="hidden sm:flex items-center gap-2 text-[13px] text-muted bg-white/5 px-3.5 py-2 rounded-full border border-white/5">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            상담 접수 중
          </div>
          <Button href="#check" size="sm" className="bg-white text-slate-900 hover:bg-gray-100 font-bold border-0 text-[14px]">
            무료 진단
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;