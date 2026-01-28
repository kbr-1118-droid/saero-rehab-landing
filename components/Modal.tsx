import React, { useEffect } from 'react';
import Card from './ui/Card';
import Button from './ui/Button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[200] bg-black/55 flex items-center justify-center p-[18px] backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-[900px] animate-[fadeIn_0.2s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        <Card className="relative border-white/20 bg-[#111a2e] shadow-2xl">
          <div className="flex justify-between items-center gap-2.5 mb-2">
            <h3 className="text-lg font-bold m-0">{title}</h3>
            <Button variant="secondary" size="sm" onClick={onClose}>닫기</Button>
          </div>
          {children}
        </Card>
      </div>
    </div>
  );
};

export default Modal;