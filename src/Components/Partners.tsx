import React from 'react';
import { useFadeInUp } from '@/Hooks/useScrollAnimation';

const Partners: React.FC = () => {
  const { elementRef, isVisible } = useFadeInUp();

  return (
    <section
      ref={elementRef}
      className={`py-8 text-center bg-[#C9C3BA] px-4 animate-fade-in-up ${isVisible ? 'animate-visible' : ''}`}
    >
      <div className="container mx-auto">
        <h2 className="section-title mb-4 font-serif">Trusted By</h2>
        <div className="flex flex-col justify-center items-center mt-8 gap-y-4 max-w-full overflow-hidden">
          <span className="logo-text-large font-serif text-center">TATLER</span>
          <span className="logo-text-large font-serif text-center">ROCK MY WEDDING</span>
          <span className="logo-text-large font-serif text-center">BRIDES</span>
          <span className="logo-text-large font-serif text-center">SO YOU'RE GETTING MARRIED</span>
          <span className="logo-text-large font-serif text-center">WHIMSICAL WONDERLAND WEDDINGS</span>
        </div>
      </div>
    </section>
  );
};

export default Partners;