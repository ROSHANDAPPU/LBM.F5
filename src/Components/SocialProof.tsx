import React from 'react';
import { useFadeInUp } from '@/Hooks/useScrollAnimation';

const SocialProof: React.FC = () => {
  const { elementRef, isVisible } = useFadeInUp();

  return (
    <div
      ref={elementRef}
      className={`bg-background py-16 animate-fade-in-up ${isVisible ? 'animate-visible' : ''}`}
    >
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-bold text-gray-800">Our Partners</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center mt-8 gap-6 sm:gap-x-8">
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-8 sm:h-12 filter grayscale" />
          <div className="hidden sm:block h-12 w-px bg-brass"></div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" alt="Microsoft" className="h-8 sm:h-12 filter grayscale" />
          <div className="hidden sm:block h-12 w-px bg-brass"></div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" className="h-8 sm:h-12 filter grayscale" />
          <div className="hidden sm:block h-12 w-px bg-brass"></div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-8 sm:h-12 filter grayscale" />
          <div className="hidden sm:block h-12 w-px bg-brass"></div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg" alt="Android" className="h-8 sm:h-12 filter grayscale" />
        </div>
      </div>
    </div>
  );
};

export default SocialProof;