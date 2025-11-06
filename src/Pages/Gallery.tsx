import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import GalleryGrid from "@/Components/GalleryGrid";
import Hero from "@/Components/Hero";
import { Button } from "@/Components/UI/button";
import { Link } from "react-router-dom";
import ScrollIndicator from "@/Components/ScrollIndicator";
import CTAPanel from "@/Components/CTAPanel";
import { useState, useEffect, useRef } from "react";

const Gallery = () => {
  const [isGalleryVisible, setIsGalleryVisible] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const galleryElement = galleryRef.current;
      if (galleryElement) {
        const rect = galleryElement.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        setIsGalleryVisible(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero
        title="Moments We’ve Crafted"
        subtitle="A calm, timeless look at the events"
        cta1={
          <Button asChild size="lg">
            <Link to="/contact">START YOUR EVENT PLAN</Link>
          </Button>
        }
      />
      <ScrollIndicator />
      <section className={`transition-colors duration-500 ${isGalleryVisible ? 'bg-soft-blush w-screen relative left-[50%] right-[50%] -mx-[50vw]' : ''}`}>
        <div className="container mx-auto px-4 py-8" ref={galleryRef}>
          <h1 className={`text-4xl md:text-5xl font-light tracking-tight text-center mb-16 transition-colors duration-500 ${isGalleryVisible ? 'text-white' : ''}`} style={{ marginTop: '27px', fontFamily: 'Libre Baskerville, serif' }}>Our Gallery</h1>
          <GalleryGrid />
        </div>
      </section>
      <CTAPanel
        title="Loved the look? Let’s design yours."
        primaryButtonText="Request a Proposal"
        primaryButtonLink="/contact"
        imageUrl="/LBM.F5/IMG_6473-scaled.jpeg"
      />
      <Footer />
    </div>
  );
};

export default Gallery;
