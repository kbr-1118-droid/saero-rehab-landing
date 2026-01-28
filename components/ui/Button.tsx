import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md';
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  href, 
  className = '',
  type = 'button', 
  onClick,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 rounded-xl font-extrabold tracking-tight transition-transform active:translate-y-[1px] no-underline cursor-pointer select-none";
  
  const variants = {
    primary: "text-[#06101a] bg-gradient-to-br from-accent to-accent2 shadow-[0_10px_30px_rgba(110,231,255,0.15)] border-0",
    secondary: "text-text bg-transparent border border-white/10 shadow-none hover:bg-white/5"
  };

  const sizes = {
    sm: "px-3.5 py-2 text-[13px] min-h-[40px]",
    md: "px-3.5 py-3 text-[14px] min-h-[44px] w-full sm:w-auto"
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  // Handle smooth scrolling for hash links internally to prevent routing errors (Connection Refused / Blank Screen)
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href?.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.warn(`Element with id ${targetId} not found`);
      }
    }
    if (onClick) {
        // Allow chaining onClick if needed
        onClick(e as any); 
    }
  };

  if (href) {
    return (
      <a href={href} className={combinedClassName} onClick={handleLinkClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={combinedClassName} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;