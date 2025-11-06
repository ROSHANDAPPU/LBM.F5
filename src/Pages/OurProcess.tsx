import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import Footer from "@/Components/Footer";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/Components/UI/button";
import Timeline from "@/Components/Timeline";
import { useFadeIn } from "@/Hooks/useFadeIn";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/Components/UI/accordion";
import { ChevronRight } from "lucide-react";
import ScrollIndicator from "@/Components/ScrollIndicator";
import CTAPanel from "@/Components/CTAPanel";
import includedImage from "/Public/service-culinary.jpg";
import budgetImage from "/Public/IMG_6473-scaled.jpeg";

const OurProcess = () => {
  const [ref1, isVisible1] = useFadeIn<HTMLDivElement>();
  const [ref2, isVisible2] = useFadeIn<HTMLDivElement>();

  const [isProcessVisible, setIsProcessVisible] = useState(false);
  const processRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (processRef.current) {
        const rect = processRef.current.getBoundingClientRect();
        setIsProcessVisible(rect.top < window.innerHeight && rect.bottom > 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero 
        title="Seamless From First Hello"
        subtitle="from inquiry to event day"
        cta1={<Button size="lg" className="mt-8">START YOUR PROPOSAL</Button>}
      />
      <ScrollIndicator />

      <section className={`transition-colors duration-500 ${isProcessVisible ? 'bg-reserved-burgundy w-screen relative left-[50%] right-[50%] -mx-[50vw]' : 'bg-light-cream'}`}>
        <div className="container mx-auto px-8 py-16" ref={processRef}>
          <h2 className={`text-4xl md:text-5xl font-light tracking-tight text-center mb-4 transition-colors duration-500 ${isProcessVisible ? 'text-brass' : ''}`} style={{ fontFamily: 'Libre Baskerville, serif' }}>Our Process</h2>
          <p className={`text-lg text-center transition-colors duration-500 ${isProcessVisible ? 'text-white' : 'text-muted-foreground'}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>Your celebration's delicious food & drink planning journey</p>
          <p className={`text-md text-center italic mb-8 transition-colors duration-500 ${isProcessVisible ? 'text-white' : 'text-muted-foreground'}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>Tu viaje hacia una fiesta inolvidable</p>
          <div className="w-16 h-px bg-brass mx-auto mb-16"></div>
          <Timeline isProcessVisible={isProcessVisible} />
        </div>
      </section>

      {/* What's Included Section */}
      <section ref={ref1} className={`flex flex-col md:flex-row items-center justify-center gap-10 py-20 px-6 bg-light-cream transition-opacity duration-1000 ease-in-out ${isVisible1 ? 'opacity-100' : 'opacity-0'}`}>
        {/* Left: Text */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-6 text-[#532f36]">What’s Included</h2>
          <ul className="space-y-3 text-lg text-gray-700">
            <li>✓ Custom menu design tailored to your event</li>
            <li>✓ Dietary and allergen accommodation planning</li>
            <li>✓ Professional culinary and service staffing</li>
            <li>✓ Complete setup and breakdown of culinary areas</li>
            <li>✓ Regular coordination touchpoints to ensure alignment</li>
          </ul>
        </div>

        {/* Right: Image */}
        <div className="md:w-1/2">
          <img
            src={includedImage}
            alt="What’s Included"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Budget & Minimums Section */}
      <section ref={ref2} className={`flex flex-col md:flex-row-reverse items-center justify-center gap-10 py-20 px-6 bg-[#f9f5f3] transition-opacity duration-1000 ease-in-out ${isVisible2 ? 'opacity-100' : 'opacity-0'}`}>
        {/* Right: Text */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-6 text-[#532f36]">Budget & Minimums</h2>
          <p className="text-lg text-gray-700 mb-4">
            Our pricing is transparent and tailored to your event’s scale and complexity. We work with you to create a memorable experience that respects your budget. Minimums may apply depending on the event type and guest count.
          </p>
          <p className="text-lg text-gray-700">
            To optimize your budget, consider a buffet-style service or focusing on a curated selection of signature dishes. We are happy to provide guidance on how to achieve your vision effectively.
          </p>
        </div>

        {/* Left: Image */}
        <div className="md:w-1/2">
          <img
            src={budgetImage}
            alt="Budget & Minimums"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Process FAQ Section */}
      <div className="py-16 bg-light-cream">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column: Intro and CTA */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-ink-navy" style={{ fontFamily: 'Montserrat, sans-serif' }}>Kalm Queries</h2>
              <p className="text-lg text-ink-navy mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                There's no such thing as a "silly" question!<br />
                Our team is here to answer any you may have, but here are a few that we often hear.
              </p>
              <a href="#contact" className="inline-flex items-center text-ink-navy font-semibold text-lg border border-ink-navy px-6 py-3 rounded-full hover:bg-ink-navy hover:text-white transition-colors duration-300 group" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Ask us a question
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>

            {/* Right Column: FAQ Accordion */}
            <div>
              <h3 className="text-xl font-semibold uppercase text-ink-navy mb-4 pb-2 border-b border-brass" style={{ fontFamily: 'Montserrat, sans-serif' }}>Frequently Asked Questions</h3>
              <Accordion type="single" collapsible className="space-y-2">
                <AccordionItem value="payment" className="border-none">
                  <AccordionTrigger className="text-left text-lg font-semibold text-ink-navy hover:text-brass py-4 border-b border-stone-300 hover:border-brass transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Payment Schedule
                    <span className="ml-auto">+</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-ink-navy leading-relaxed pb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    We require a 50% non-refundable deposit to secure your booking and date. The remaining 50% is due 30 days prior to your event to cover final preparations and costs.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="cancellations" className="border-none">
                  <AccordionTrigger className="text-left text-lg font-semibold text-ink-navy hover:text-brass py-4 border-b border-stone-300 hover:border-brass transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Cancellations
                    <span className="ml-auto">+</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-ink-navy leading-relaxed pb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Cancellations made 60+ days before the event receive a full refund minus a 10% administrative fee. Between 30-60 days, 50% is refundable. Cancellations less than 30 days before the event are non-refundable.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="rentals" className="border-none">
                  <AccordionTrigger className="text-left text-lg font-semibold text-ink-navy hover:text-brass py-4 border-b border-stone-300 hover:border-brass transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Rentals
                    <span className="ml-auto">+</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-ink-navy leading-relaxed pb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    We offer rentals for tables, linens, glassware, and other event essentials. Prices vary based on the items and duration. Contact us for a custom quote tailored to your needs.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="tastings" className="border-none">
                  <AccordionTrigger className="text-left text-lg font-semibold text-ink-navy hover:text-brass py-4 border-b border-stone-300 hover:border-brass transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Tastings
                    <span className="ml-auto">+</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-ink-navy leading-relaxed pb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    We provide complimentary tastings for weddings and events over £5,000. For smaller events, there's a £200 tasting fee that can be applied towards your total. Tastings include your proposed menu items and are conducted at our Surrey location.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      <CTAPanel
        title="Ready to Get Started?"
        primaryButtonText="Request a Proposal"
        primaryButtonLink="/contact"
        secondaryButtonText="Book a Discovery Call"
        secondaryButtonLink="/contact"
        imageUrl={'/Courtey_Jon_McNielPhotography_Photocreditneeded_08.17-46-scaled.jpg'}
      />

      <Footer />
    </div>
  );
};

export default OurProcess;
