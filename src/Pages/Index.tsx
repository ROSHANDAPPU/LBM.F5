import OurWorkV2 from "@/Components/OurWorkV2";
import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import Ethos from "@/Components/Ethos";
import Services from "@/Components/Services";
import Values from "@/Components/Values";
import Transformation from "@/Components/Transformation";
import Contact from "@/Components/Contact";
import Footer from "@/Components/Footer";
import Testimonials from "@/Components/Testimonials";
import { Button } from "@/Components/UI/button";
import { Link } from "react-router-dom";
import ScrollIndicator from '@/Components/ScrollIndicator';
import StarRating from '@/Components/UI/StarRating';
import { useIsMobile } from "@/Hooks/use-mobile";


// Custom hook for alternating direction autoplay





const Index = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen">
      <Header />

      <Hero 
        title="Effortless Elegance for Your Event"
        subtitle="QUIET, ACCESSIBLE LUXURY FOR EVERY OCCASION."
        cta1={<Button size="lg" className="text-base font-normal tracking-wide">REQUEST A PROPOSAL</Button>}
        cta2={
          <Button asChild size="lg" className="bg-creamy-white bg-opacity-100 text-ink-navy tracking-wider border border-ink-navy/20 shadow-sm hover:bg-stone hover:bg-opacity-50 hover:text-ink-navy transition-all duration-300 ease-in-out uppercase">
            <Link to="/menu">VIEW MENU</Link>
          </Button>
        }
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
              <img src={`${(import.meta as any).env?.BASE_URL || "/"}Trusted by/Dallas_Museum_of_Art_logo.svg.png`} alt="Dallas Museum of Art" className="logo-image" />
            </div>
            <div className="swiper-slide">
              <img src={`${(import.meta as any).env?.BASE_URL || "/"}Trusted by/Planned_Parenthood_logo_PNG3.png`} alt="Planned Parenthood" className="logo-image" />
            </div>
            <div className="swiper-slide">
              <img src={`${(import.meta as any).env?.BASE_URL || "/"}Trusted by/CEDAR.png`} alt="Cedars Union" className="logo-image" />
            </div>
            <div className="swiper-slide">
              <img src={`${(import.meta as any).env?.BASE_URL || "/"}Trusted by/southwest-airlines-logo-11530963594nducvm4dqm.png`} alt="Southwest Airlines" className="logo-image" />
            </div>
            <div className="swiper-slide">
              <img src={`${(import.meta as any).env?.BASE_URL || "/"}Trusted by/Dallas-St.-Marks-Lions1-large.png`} alt="St. Mark's Preparatory School" className="logo-image" />
            </div>
            <div className="swiper-slide">
              <img src={`${(import.meta as any).env?.BASE_URL || "/"}Trusted by/thelamplighterschool.png`} alt="Lamplighter School" className="logo-image" />
            </div>
            <div className="swiper-slide">
              <img src={`${(import.meta as any).env?.BASE_URL || "/"}Trusted by/DALLAS ZOO.png`} alt="Dallas Zoo" className="logo-image" />
            </div>
            <div className="swiper-slide">
              <img src={`${(import.meta as any).env?.BASE_URL || "/"}Trusted by/LATINA SOCIAL CLUB.jpg`} alt="Latina Social Club DFW" className="logo-image" />
            </div>
            <div className="swiper-slide">
              <img src={`${(import.meta as any).env?.BASE_URL || "/"}Trusted by/4dwn-red-2-418X100.png`} alt="4DWN Nonprofit" className="logo-image" />
            </div>
            <div className="swiper-slide">
              <img src={`${(import.meta as any).env?.BASE_URL || "/"}Trusted by/The global latin factor podcast.jpeg`} alt="The Global Latin Factor Podcast" className="logo-image" />
            </div>
            {/* Duplicate for continuous loop */}
            <div className="swiper-slide">
              <img src={`${(import.meta as any).env?.BASE_URL || "/"}Trusted by/Dallas_Museum_of_Art_logo.svg.png`} alt="Dallas Museum of Art" className="logo-image" />
            </div>
            <div className="swiper-slide">
              <img src={`${(import.meta as any).env?.BASE_URL || "/"}Trusted by/Planned_Parenthood_logo_PNG3.png`} alt="Planned Parenthood" className="logo-image" />
            </div>
            <div className="swiper-slide">
              <img src={`${(import.meta as any).env?.BASE_URL || "/"}Trusted by/CEDAR.png`} alt="Cedars Union" className="logo-image" />
            </div>
            <div className="swiper-slide">
              <img src={`${(import.meta as any).env?.BASE_URL || "/"}Trusted by/southwest-airlines-logo-11530963594nducvm4dqm.png`} alt="Southwest Airlines" className="logo-image" />
            </div>
            <div className="swiper-slide">
              <img src={`${(import.meta as any).env?.BASE_URL || "/"}Trusted by/Dallas-St.-Marks-Lions1-large.png`} alt="St. Mark's Preparatory School" className="logo-image" />
            </div>
            <div className="swiper-slide">
              <img src={`${(import.meta as any).env?.BASE_URL || "/"}Trusted by/thelamplighterschool.png`} alt="Lamplighter School" className="logo-image" />
            </div>
            <div className="swiper-slide">
              <img src={`${(import.meta as any).env?.BASE_URL || "/"}Trusted by/DALLAS ZOO.png`} alt="Dallas Zoo" className="logo-image" />
            </div>
            <div className="swiper-slide">
              <img src={`${(import.meta as any).env?.BASE_URL || "/"}Trusted by/LATINA SOCIAL CLUB.jpg`} alt="Latina Social Club DFW" className="logo-image" />
            </div>
            <div className="swiper-slide">
              <img src={`${(import.meta as any).env?.BASE_URL || "/"}Trusted by/4dwn-red-2-418X100.png`} alt="4DWN Nonprofit" className="logo-image" />
            </div>
            <div className="swiper-slide">
              <img src={`${(import.meta as any).env?.BASE_URL || "/"}Trusted by/The global latin factor podcast.jpeg`} alt="The Global Latin Factor Podcast" className="logo-image" />
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

      <section
        className={`relative bg-center bg-cover bg-no-repeat text-white text-center py-28 ${isMobile ? 'bg-scroll' : 'bg-fixed'}`}
        style={{ backgroundImage: `url('https://gcmais.com.br/wp-content/uploads/2022/12/produtos-das-ceias-de-natal-e-reveillon-podem-variar-ate-281-em-fortaleza.jpeg')` }}
      >
        <div className="absolute inset-0 bg-black/55"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-creamy-white mb-4 font-libre-baskerville">Ready to Begin?</h2>
          <p className="text-lg mb-8 text-creamy-white">Let's create something beautiful together</p>

          <div className="flex flex-col justify-center gap-4 max-w-xs mx-auto">
            <a
              href="/book-event"
              className="bg-[#532f36] border border-[#532f36] text-white px-4 py-3 hover:bg-transparent hover:text-white transition-all w-full text-center text-sm"
            >
              REQUEST A PROPOSAL
            </a>
            <a
              href="/book-event"
              className="border border-white text-white px-4 py-3 hover:bg-creamy-white hover:text-reserved-burgundy transition-all w-full text-center text-sm"
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
