import React, { useState, useEffect, useRef } from 'react';
import { useFadeInUp } from '@/Hooks/useScrollAnimation';

const OurWorkV2 = () => {
  const { elementRef, isVisible } = useFadeInUp();
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [currentScrollPosition, setCurrentScrollPosition] = useState(0); // Tracks actual scroll position
    const [slideDirection, setSlideDirection] = useState<'left' | 'right' | 'pause'>('left');
  
    const images = [
      "photo-1556909114-f6e7ad7d3136",
      "photo-1517248135467-4c7edcad34c4",
      "photo-1464366400600-7168b8af9bc3",
      "photo-1506280754576-f6fa8a873550",
      "photo-1544145945-f90425340c7e",
      "photo-1514933651103-005eec06c04b",
      "photo-1414235077428-338989a2e8c0",
      "photo-1504674900247-0877df9cc836",
      "photo-1498837167922-ddd27525d352",
    ];
  
    // Duplicate images for infinite loop effect
    const allImages = [...images, ...images, ...images];
  
    const getImagesPerSlide = () => {
      if (window.innerWidth < 768) {
        return 1; // Mobile
      } else if (window.innerWidth < 1024) {
        return 2; // Tablet
      } else {
        return 3; // Desktop
      }
    };
  
    const totalDots = 3;
  
    useEffect(() => {
      const slider = sliderRef.current;
      if (!slider || slideDirection === 'pause') return;
  
      let animationFrameId: number;
      let lastTimestamp: DOMHighResTimeStamp = 0;
  
      const scrollStep = (timestamp: DOMHighResTimeStamp) => {
        if (!lastTimestamp) lastTimestamp = timestamp;
        const deltaTime = timestamp - lastTimestamp;
        lastTimestamp = timestamp;
  
        const scrollAmount = (deltaTime / 1000) * 50; // Pixels per second (fixed speed)
  
        let newScrollPosition = slider.scrollLeft;
  
        if (slideDirection === 'left') {
          newScrollPosition -= scrollAmount;
          // Loop from end if scrolled before the duplicated section
          if (newScrollPosition <= 0) {
            newScrollPosition = newScrollPosition + slider.scrollWidth / 3;
          }
        } else if (slideDirection === 'right') {
          newScrollPosition += scrollAmount;
          // Loop from beginning if scrolled past the duplicated section
          if (newScrollPosition >= slider.scrollWidth / 3) {
            newScrollPosition = newScrollPosition - slider.scrollWidth / 3;
          }
        }
  
        slider.scrollLeft = newScrollPosition;
        // Removed setCurrentScrollPosition from here
  
        animationFrameId = requestAnimationFrame(scrollStep);
      };
  
      animationFrameId = requestAnimationFrame(scrollStep);
  
      return () => cancelAnimationFrame(animationFrameId);
    }, [slideDirection]); // Removed currentScrollPosition from dependencies
  
    const handleDotClick = (index: number) => {
      switch (index) {
        case 0: // 1st dot: Left scroll
          setSlideDirection('left');
          break;
        case 1: // 2nd dot: Pause
          setSlideDirection('pause');
          break;
        case 2: // 3rd dot: Right scroll
          setSlideDirection('right');
          break;
        default:
          setSlideDirection('pause');
          break;
      }
    };
  
    return (
      <section
        ref={elementRef}
        className={`w-full py-8 animate-fade-in-up ${isVisible ? 'animate-visible' : ''}`}
      >
        <div className="h-px w-12 bg-accent/40 mx-auto mb-8" />
        <h2 className="text-center section-title mb-4 font-serif">
          Our Work
        </h2>
        <p className="text-base text-muted-foreground max-w-lg mx-auto font-light mb-8">
          Showcasing our signature style — elevated, modern & timeless.
        </p>
        <div
          ref={sliderRef}
          className="flex overflow-x-hidden scrollbar-hide scroll-smooth"
        >
          {allImages.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0"
              style={{
                width: `${100 / getImagesPerSlide()}%`,
              }}
            >
              <img
                src={`https://images.unsplash.com/${src}?w=1200&h=750&fit=crop&q=80&fm=webp`}
                alt={`Gallery ${i + 1}`}
                className="w-full h-[350px] md:h-[450px] lg:h-[550px] object-cover"
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4 space-x-2">
          {[...Array(totalDots)].map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full ${
                (
                  (index === 0 && slideDirection === 'left') ||
                  (index === 1 && slideDirection === 'pause') ||
                  (index === 2 && slideDirection === 'right')
                ) ? 'bg-[#1C1C1C]' : 'bg-gray-400'}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
        <div className="text-center mt-4 text-ink-navy font-sans text-lg">
          <a href="https://www.instagram.com/la_bella_mesa/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @la_bella_mesa
          </a>
        </div>
      </section>
  );
};

export default OurWorkV2;
