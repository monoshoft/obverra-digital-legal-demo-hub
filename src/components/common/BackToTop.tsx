import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className="fixed bottom-16 sm:bottom-20 right-3.5 sm:right-6 z-40 p-2.5 sm:p-3 rounded-full bg-neutral-900/90 text-neutral-200 border border-neutral-700 shadow-xl hover:bg-neutral-800 hover:text-white transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-amber-500/50 cursor-pointer"
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
};
