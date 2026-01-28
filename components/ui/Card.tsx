import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '', id }) => {
  return (
    <div 
      id={id}
      className={`
        relative overflow-hidden
        bg-[#1e293b]/70 backdrop-blur-md
        border border-white/10
        rounded-[20px] 
        shadow-[0_8px_32px_rgba(0,0,0,0.2)] 
        p-[20px] md:p-[24px]
        transition-all duration-300
        hover:border-white/20 hover:shadow-[0_8px_40px_rgba(0,0,0,0.3)]
        ${className}
      `}
    >
      {/* Inner reflection/glow top */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Card;