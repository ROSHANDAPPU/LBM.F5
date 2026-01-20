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
          <span className="logo-text-large font-serif text-center">Dallas Museum of art</span>
          <span className="logo-text-large font-serif text-center">Planned parenthood</span>
          <span className="logo-text-large font-serif text-center">Cedars union</span>
          <span className="logo-text-large font-serif text-center">Southwest airlines</span>
          <span className="logo-text-large font-serif text-center">St.marks preparatory school</span>
          <span className="logo-text-large font-serif text-center">Lamplighter school</span>
          <span className="logo-text-large font-serif text-center">Dallas Zoo</span>
          <span className="logo-text-large font-serif text-center">Latina social club dfw</span>
          <span className="logo-text-large font-serif text-center">4dwn nonprofit</span>
          <span className="logo-text-large font-serif text-center">The global latin factor podcast</span>
        </div>
      </div>
    </section>
  );
};

export default Partners;