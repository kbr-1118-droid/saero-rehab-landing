import React from 'react';

interface ToastProps {
  message: string | null;
  isVisible: boolean;
}

const Toast: React.FC<ToastProps> = ({ message, isVisible }) => {
  return (
    <div 
      className={`
        fixed left-1/2 bottom-[18px] -translate-x-1/2 z-[100]
        bg-[#111a2e]/95 border border-white/10 text-text text-[13px]
        py-2.5 px-3 rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.35)]
        max-w-[min(560px,calc(100%-24px))] whitespace-nowrap
        transition-all duration-300 ease-in-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
      `}
    >
      {message}
    </div>
  );
};

export default Toast;