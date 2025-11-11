import OurWorkV2 from "@/Components/OurWorkV2";
import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import Ethos from "@/Components/Ethos";
import Services from "@/Components/Services";
import Values from "@/Components/Values";
import Transformation from "@/Components/Transformation";
import Contact from "@/Components/Contact";
import Footer from "@/Components/Footer";
import SocialProof from "@/Components/SocialProof";
import Testimonials from "@/Components/Testimonials";
import { Button } from "@/Components/UI/button";
import { Link } from "react-router-dom";
import ScrollIndicator from '@/Components/ScrollIndicator';
import StarRating from '@/Components/UI/StarRating';


// Custom hook for alternating direction autoplay





const Index = () => {

  return (
    <div className="min-h-screen">
      <Header />

      <Hero 
        title="Effortless Elegance for Your Event"
        subtitle="QUIET, ACCESSIBLE LUXURY FOR EVERY OCCASION."
        cta1={<Button size="lg" className="text-base font-normal tracking-wide">REQUEST A PROPOSAL</Button>}
        cta2={<Button size="lg" variant="outline" className="text-base font-normal tracking-wide">VIEW MENU</Button>}
      />
      <ScrollIndicator />

      {/* Trusted By Section */}
      <section
        className="trusted-by-section py-8 text-center"
      >
        <div className="h-px w-12 bg-accent/40 mx-auto mb-8" />
        <h2 className="section-title mb-4">
          Trusted By
        </h2>
        <p className="text-base text-muted-foreground max-w-md mx-auto font-light">
          Endorsed by experts, loved by hosts, and cherished by guests.
        </p>
      </section>

      {/* Logos Slider Section */}
      <section
        className="flx flx-logos"
      >
        <div className="logos-swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
          {/* Additional required wrapper */}
          <div className="swiper-wrapper" id="swiper-wrapper-68e2710a4619c8a5e" aria-live="off">
            <div className="swiper-slide">
              <span className="logo-text-large">TATLER</span>
            </div>
            <div className="swiper-slide">
              <span className="logo-text-large">ROCK MY WEDDING</span>
            </div>
            <div className="swiper-slide">
              <span className="logo-text-large">BRIDES</span>
            </div>
            <div className="swiper-slide">
              <span className="logo-text-large">SO YOU'RE GETTING MARRIED</span>
            </div>
            <div className="swiper-slide">
              <span className="logo-text-large">WHIMSICAL WONDERLAND WEDDINGS</span>
            </div>
            {/* Duplicate for continuous loop */}
            <div className="swiper-slide">
              <span className="logo-text-large">TATLER</span>
            </div>
            <div className="swiper-slide">
              <span className="logo-text-large">ROCK MY WEDDING</span>
            </div>
            <div className="swiper-slide">
              <span className="logo-text-large">BRIDES</span>
            </div>
            <div className="swiper-slide">
              <span className="logo-text-large">SO YOU'RE GETTING MARRIED</span>
            </div>
            <div className="swiper-slide">
              <span className="logo-text-large">WHIMSICAL WONDERLAND WEDDINGS</span>
            </div>
          </div>
          <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
        </div>
      </section>

      {/* Star Rating */}
      <div className="text-center mt-4 mb-8">
        <StarRating rating={5} size={24} color="text-yellow-500" />
        <p className="text-sm text-gray-600 mt-2">Based on 100+ reviews</p>
      </div>

      <div>
        <Ethos />
      </div>

      <div>
        <Services />
      </div>

      <OurWorkV2 />

      <div>
        <Testimonials />
      </div>

      {/* Gold separator line */}
      <div className="flex justify-center py-8">
        <div className="w-24 h-px bg-accent"></div>
      </div>

      <SocialProof />



      {/* Gold separator line */}
      <div className="flex justify-center py-8">
        <div className="w-24 h-px bg-accent"></div>
      </div>

      <section
        className="relative bg-center bg-cover bg-no-repeat text-white text-center py-28 bg-[url('/hero-table.jpg')]"
      >
        <div className="absolute inset-0 bg-black/45"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Ready to Begin?</h2>
          <p className="text-lg mb-8">Let's create something beautiful together</p>

          <div className="flex flex-col justify-center gap-4 max-w-xs mx-auto">
            <a
              href="/book-event"
              className="bg-[#532f36] border border-[#532f36] text-white px-4 py-3 hover:bg-transparent hover:text-white transition-all w-full text-center text-sm"
            >
              REQUEST A PROPOSAL
            </a>
            <a
              href="/book-event"
              className="border border-white text-white px-4 py-3 hover:bg-white hover:text-[#532f36] transition-all w-full text-center text-sm"
            >
              BOOK A TASTING
            </a>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />


    </div>
  );
};

export default Index;
