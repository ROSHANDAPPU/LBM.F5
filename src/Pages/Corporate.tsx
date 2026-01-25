import { useState, useEffect, useRef } from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import ScrollIndicator from "@/Components/ScrollIndicator";
import Hero from "@/Components/Hero";
import { Button } from "@/Components/UI/button";
import { useIsMobile } from "@/Hooks/use-mobile";
import { ChevronRight, Users, ChefHat, Sparkles, MapPin } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/Components/UI/accordion";
import { Link } from "react-router-dom";

const Corporate = () => {
  const isMobile = useIsMobile();
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);
  const highlightsRef = useRef<HTMLDivElement>(null);
  const whyChooseUsRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const [highlightsVisible, setHighlightsVisible] = useState(false);
  const [corporateSectionVisible, setCorporateSectionVisible] = useState(false);
  const [whyChooseUsVisible, setWhyChooseUsVisible] = useState(false);
  const [faqVisible, setFaqVisible] = useState(false);

  const toggleCard = (id: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const resetAllCards = () => {
    setFlippedCards(new Set());
  };

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (section) {
        const rect = section.getBoundingClientRect();
        // Reset cards when section is scrolled out of view
        if (rect.bottom < 0 || rect.top > window.innerHeight) {
          resetAllCards();
        }
        // Check if corporate section is visible
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setCorporateSectionVisible(true);
        } else {
          setCorporateSectionVisible(false);
        }
      }

      // Check if Quick Highlights section is visible
      const highlights = highlightsRef.current;
      if (highlights) {
        const rect = highlights.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0) {
          setHighlightsVisible(true);
        }
      }

      // Check if Why Choose Us section is visible
      const whyChooseUs = whyChooseUsRef.current;
      if (whyChooseUs) {
        const rect = whyChooseUs.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0) {
          setWhyChooseUsVisible(true);
        }
      }

      // Check if FAQ section is visible
      const faq = faqRef.current;
      if (faq) {
        const rect = faq.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0) {
          setFaqVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .flip-card {
        background-color: transparent;
        width: 100%;
        height: 600px;
        perspective: 1000px;
        cursor: pointer;
      }

      .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.8s;
        transform-style: preserve-3d;
      }

      .flip-card.is-flipped .flip-card-inner {
        transform: rotateY(180deg);
      }

      .flip-card-front, .flip-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        border-radius: 20px;
        overflow: hidden;
      }

      .flip-card-front {
        background-color: #bbb;
      }

      .flip-card-front img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .overlay-text {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
        color: white;
        padding: 2rem;
        text-align: left;
      }

      .overlay-text h3 {
        font-size: 2rem;
        font-weight: 300;
        margin-bottom: 0.5rem;
        line-height: 1.2;
      }

      .overlay-text p {
        font-size: 1.1rem;
        opacity: 0.9;
        margin: 0;
      }

      .flip-indicator {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(128, 0, 32, 0.9);
        color: white;
        padding: 1rem 2rem;
        border-radius: 2rem;
        font-size: 1.125rem;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 15;
        backdrop-filter: blur(4px);
      }

      .flip-card:hover .flip-card-front .flip-indicator {
        opacity: 1;
        transform: translate(-50%, -50%);
      }

      .flip-card-back {
        background: linear-gradient(to bottom, #FEF9F3, #F5E6D3);
        transform: rotateY(180deg);
        box-shadow: 0 20px 40px rgba(0,0,0,0.1);
      }

      .highlight-card {
        opacity: 0;
        transform: translateZ(-100px) scale(0.9);
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .highlight-card.visible {
        opacity: 1;
        transform: translateZ(0) scale(1);
      }

      .highlight-card:nth-child(1) { transition-delay: 0.1s; }
      .highlight-card:nth-child(2) { transition-delay: 0.2s; }
      .highlight-card:nth-child(3) { transition-delay: 0.3s; }
      .highlight-card:nth-child(4) { transition-delay: 0.4s; }

      .corporate-section {
        background: linear-gradient(to bottom, #FEF9F3, #F5E6D3);
        transition: background 0.8s ease;
      }

      .corporate-section.burgundy {
        background: linear-gradient(to bottom, #532f36, #3d2328);
      }

      /* Scroll Animations */
      .fade-in-up {
        opacity: 0;
        transform: translateY(50px);
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .fade-in-up.visible {
        opacity: 1;
        transform: translateY(0);
      }

      .fade-in-left {
        opacity: 0;
        transform: translateX(-50px);
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .fade-in-left.visible {
        opacity: 1;
        transform: translateX(0);
      }

      .fade-in-right {
        opacity: 0;
        transform: translateX(50px);
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .fade-in-right.visible {
        opacity: 1;
        transform: translateX(0);
      }

      .scale-in {
        opacity: 0;
        transform: scale(0.8);
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .scale-in.visible {
        opacity: 1;
        transform: scale(1);
      }

      .slide-in-left {
        opacity: 0;
        transform: translateX(-100px);
        transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .slide-in-left.visible {
        opacity: 1;
        transform: translateX(0);
      }

      .slide-in-right {
        opacity: 0;
        transform: translateX(100px);
        transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .slide-in-right.visible {
        opacity: 1;
        transform: translateX(0);
      }

      /* Staggered delays */
      .delay-100 { transition-delay: 0.1s; }
      .delay-200 { transition-delay: 0.2s; }
      .delay-300 { transition-delay: 0.3s; }
      .delay-400 { transition-delay: 0.4s; }
      .delay-500 { transition-delay: 0.5s; }
      .delay-600 { transition-delay: 0.6s; }

      .flip-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 25px 50px rgba(0,0,0,0.15);
      }

      .flip-card:hover .flip-card-inner::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(to right, transparent, rgba(212, 175, 55, 0.3), transparent);
        border-radius: 20px;
        pointer-events: none;
        z-index: 10;
      }

      .highlights-strip {
        display: flex;
        justify-content: space-around;
        align-items: center;
        background: #3d2325; /* Matching your card's dark maroon */
        padding: 30px 20px;
        border-radius: 15px;
        color: white;
        margin-top: 40px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.1);
      }

      .highlight-item {
        display: flex;
        align-items: center;
        gap: 15px;
        border-right: 1px solid rgba(212, 175, 55, 0.3); /* Subtle Gold divider */
        padding-right: 40px;
      }

      .highlight-item:last-child {
        border-right: none;
        padding-right: 0;
      }

      .icon {
        font-size: 1.5rem;
        color: #d4af37; /* Metallic Gold */
      }

      .text strong {
        display: block;
        text-transform: uppercase;
        font-size: 0.75rem;
        letter-spacing: 1.5px;
        color: #d4af37;
        margin-bottom: 4px;
      }

      .text p {
        margin: 0;
        font-size: 0.95rem;
        font-weight: 300;
      }

      @media (max-width: 768px) {
        .highlights-strip {
          flex-direction: column;
          gap: 25px;
        }
        .highlight-item {
          border-right: none;
          border-bottom: 1px solid rgba(212, 175, 55, 0.2);
          padding-bottom: 15px;
          padding-right: 0;
          width: 100%;
          justify-content: center;
        }
        .highlight-item:last-child {
            border-bottom: none;
            padding-bottom: 0;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const corporateServices = [
    {
      id: 1,
      title: "Executive Board Meetings",
      guests: "10-50 executives",
      price: "Starting at $1,500",
      description: "Premium catering for high-level corporate meetings with elegant presentation and professional service.",
      includes: ["Gourmet breakfast/lunch", "Premium table settings", "Professional service staff", "Setup and cleanup", "Beverage service"]
    },
    {
      id: 2,
      title: "Company Celebrations",
      guests: "25-200 employees",
      price: "Starting at $2,500",
      description: "Memorable corporate events from holiday parties to milestone celebrations with custom themes and entertainment.",
      includes: ["Custom menu design", "Themed decorations", "Full service staff", "Audio/visual support", "Event coordination"]
    },
    {
      id: 3,
      title: "Client Receptions",
      guests: "15-100 guests",
      price: "Starting at $1,800",
      description: "Impress your clients with sophisticated receptions featuring premium cuisine and impeccable service.",
      includes: ["Passed hors d'oeuvres", "Wine and cocktail service", "Elegant presentation", "Professional bartenders", "Custom branding"]
    },
    {
      id: 4,
      title: "Team Building Events",
      guests: "20-150 participants",
      price: "Starting at $2,000",
      description: "Interactive culinary experiences that bring teams together through cooking competitions and collaborative dining.",
      includes: ["Cooking stations", "Team activities", "Prizes and awards", "Photography coverage", "Custom menus"]
    }
  ];
  return (
    <div className="min-h-screen">
      <Header />
      <Hero
        title="Corporate Caterings"
        subtitle="Professional gatherings that impress. We handle the details. You focus on your guests."
        fullWidth={true}
        video="/Public/videos/corporate-hero.mp4"
        cta1={
          <Button asChild size="lg" className="text-base font-normal tracking-wide uppercase mr-4">
            <Link to="/book-event">Request a Proposal</Link>
          </Button>
        }
        cta2={
          <Button asChild size="lg" variant="outline" className="text-base font-normal tracking-wide uppercase border-white text-white hover:bg-white hover:text-ink-navy">
            <Link to="/corporate/menu">View Full Menu</Link>
          </Button>
        }
      />
      <ScrollIndicator />

      {/* Quick Highlights Section */}
      <section className="relative py-12 px-6 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="highlights-strip">
            <div className="highlight-item">
              <span className="icon">
                <Users className="w-6 h-6" />
              </span>
              <div className="text">
                <strong>Guests</strong>
                <p>10–400</p>
              </div>
            </div>

            <div className="highlight-item">
              <span className="icon">
                <ChefHat className="w-6 h-6" />
              </span>
              <div className="text">
                <strong>Service</strong>
                <p>Drop-Off, Buffet, Passed Hors d’Oeuvres, Wellness-Focused</p>
              </div>
            </div>

            <div className="highlight-item">
              <span className="icon">
                <Sparkles className="w-6 h-6" />
              </span>
              <div className="text">
                <strong>Includes</strong>
                <p>Equipment, Service Ware, Delivery, Setup, Staffing, Styling, Cleanup, Grazing Tables</p>
              </div>
            </div>

            <div className="highlight-item">
              <span className="icon">
                <MapPin className="w-6 h-6" />
              </span>
              <div className="text">
                <strong>Areas</strong>
                <p>Dallas & surrounding areas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Services Overview */}
      <section ref={sectionRef} className={`corporate-section relative py-24 px-6 overflow-hidden ${corporateSectionVisible ? 'burgundy' : ''}`}>
        <div className={`absolute inset-0 ${corporateSectionVisible ? 'bg-gradient-to-br from-reserved-burgundy via-reserved-burgundy to-darker-burgundy' : ''} ${corporateSectionVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-800`}></div>
        {!corporateSectionVisible && <div className="absolute inset-0 bg-black/5"></div>}
        
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-brass/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-brass/5 rounded-full blur-2xl"></div>
        
        <div className="relative z-10 container mx-auto max-w-7xl">
          <div className={`text-center mb-20 fade-in-up ${corporateSectionVisible ? 'visible' : ''}`}>
            <h2 className={`${corporateSectionVisible ? 'text-creamy-white' : 'text-ink-navy'} text-4xl sm:text-5xl font-light mb-6 leading-tight transition-colors duration-800`}>
              Corporate Catering Excellence
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-brass to-brass/50 mx-auto mb-8"></div>
            <p className={`${corporateSectionVisible ? 'text-white/80' : 'text-gray-700'} text-xl max-w-3xl mx-auto leading-relaxed transition-colors duration-800`}>
              Professional gatherings that impress. We handle the details. You focus on your guests.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {corporateServices.map((service, index) => (
              <div 
                key={service.id}
                className={`flip-card ${flippedCards.has(service.id) ? 'is-flipped' : ''} fade-in-up ${corporateSectionVisible ? 'visible' : ''} delay-${100 + (index * 100)}`}
                onMouseEnter={() => toggleCard(service.id)}
                onMouseLeave={() => toggleCard(service.id)}
              >
                <div className="flip-card-inner">
                  {/* Front side - Image */}
                  <div className="flip-card-front">
                    {service.id === 1 && (
                      <img 
                        src={`${(import.meta as any).env?.BASE_URL || "/"}executive-board-meeting.jpg`} 
                        alt="Executive Board Meeting"
                      />
                    )}
                    {service.id === 2 && (
                      <img 
                        src={`${(import.meta as any).env?.BASE_URL || "/"}company-celebrations.jpg`} 
                        alt="Company Celebration"
                      />
                    )}
                    {service.id === 3 && (
                      <img 
                        src={`${(import.meta as any).env?.BASE_URL || "/"}client-reception.jpg`} 
                        alt="Client Reception"
                      />
                    )}
                    {service.id === 4 && (
                      <img 
                        src={`${(import.meta as any).env?.BASE_URL || "/"}team-building-event.jpg`} 
                        alt="Team Building Event"
                      />
                    )}
                    <div className="overlay-text">
                      <h3>{service.title}</h3>
                      <p>{service.guests} • {service.price}</p>
                    </div>
                  </div>

                  {/* Back side - Original content */}
                  <div className="flip-card-back">
                    <div className="relative p-10 h-full flex flex-col">
                      {/* Gradient Border Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brass/20 to-transparent rounded-3xl transform -skew-x-12 -translate-x-full hover:translate-x-full transition-transform duration-1000"></div>
                      
                      <div className="relative flex-1 flex flex-col">
                        <div className="flex justify-between items-start mb-6">
                          <div className="flex-1">
                            <div className="inline-flex items-center gap-2 bg-brass/10 rounded-full px-3 py-1 mb-4">
                              <span className="w-1.5 h-1.5 bg-brass rounded-full"></span>
                              <span className="text-xs font-medium text-brass uppercase tracking-wider">Service {service.id}</span>
                            </div>
                            <h3 className="text-3xl font-light text-ink-navy mb-3 leading-tight">{service.title}</h3>
                          </div>
                          <div className="text-right ml-6">
                            <div className="text-3xl font-bold text-brass mb-1">{service.price}</div>
                            <div className="text-sm text-gray-500">per event</div>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">{service.description}</p>
                        
                        <div className="flex items-center gap-8 text-sm text-gray-500 mb-8">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-brass/10 rounded-full flex items-center justify-center">
                              <svg className="w-5 h-5 text-brass" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                            </div>
                            <div>
                              <div className="font-medium text-gray-700">Guests</div>
                              <div>{service.guests}</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 mb-8">
                          {service.includes.map((item, index) => (
                            <div key={index} className="flex items-center gap-3">
                              <div className="w-6 h-6 bg-gradient-to-br from-brass to-brass/80 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <span className="text-gray-700">{item}</span>
                            </div>
                          ))}
                        </div>
                        
                        <Button asChild size="lg" className="w-full bg-reserved-burgundy text-white hover:bg-reserved-burgundy/90 text-base font-normal tracking-wide uppercase mt-auto">
                          <Link to="/book-event">Request Quote</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className={`text-center fade-in-up ${corporateSectionVisible ? 'visible' : ''} delay-500`}>
            <Button asChild size="lg" className="bg-creamy-white bg-opacity-100 text-ink-navy tracking-wider border border-ink-navy/20 shadow-sm hover:bg-stone hover:bg-opacity-50 hover:text-ink-navy transition-all duration-300 ease-in-out uppercase mr-4">
              <Link to="/corporate/menu">View Full Menu</Link>
            </Button>
            <Button size="lg" className="bg-creamy-white bg-opacity-100 text-ink-navy tracking-wider border border-ink-navy/20 shadow-sm hover:bg-stone hover:bg-opacity-50 hover:text-ink-navy transition-all duration-300 ease-in-out uppercase">
              View All Services
            </Button>
          </div>
        </div>
      </section>



      {/* Why Choose Us Section */}
      <section ref={whyChooseUsRef} className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-creamy-white to-creamy-white/80"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-reserved-burgundy/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-brass/5 rounded-full blur-2xl"></div>
        
        <div className="relative z-10 container mx-auto max-w-7xl">
          <div className={`text-center mb-20 fade-in-up ${whyChooseUsVisible ? 'visible' : ''}`}>
            <h2 className="text-ink-navy text-4xl sm:text-5xl font-light mb-6 leading-tight">
              Why Choose Us
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-brass to-brass/50 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className={`group relative slide-in-left ${whyChooseUsVisible ? 'visible' : ''}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300"></div>
              <div className="relative bg-creamy-white backdrop-blur-sm border border-stone/20 rounded-3xl p-10 hover:bg-creamy-white/90 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="w-24 h-24 bg-gradient-to-br from-brass to-brass/80 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-ink-navy text-2xl font-light mb-6">Trusted by Cultural & Corporate Institutions</h3>
                <p className="text-gray-600 leading-relaxed">Our work with museums, galleries, nonprofits, and corporate clients reflects our ability to execute at a high level in professional environments.</p>
              </div>
            </div>
            
            <div className={`group relative slide-in-right ${whyChooseUsVisible ? 'visible' : ''}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300"></div>
              <div className="relative bg-creamy-white backdrop-blur-sm border border-stone/20 rounded-3xl p-10 hover:bg-creamy-white/90 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="w-24 h-24 bg-gradient-to-br from-brass to-brass/80 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 2.247 19 0 12s4.168 5.523 6.251 6.253v13z" />
                  </svg>
                </div>
                <h3 className="text-ink-navy text-2xl font-light mb-6">Elevated, Thoughtful Menus</h3>
                <p className="text-gray-600 leading-relaxed">Chef-driven dishes designed for professional settings—beautifully presented, easy to enjoy, and tailored to your event's goal.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process FAQ Section */}
      <div ref={faqRef} className="py-16 bg-light-cream">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column: Intro and CTA */}
            <div className={`flex flex-col justify-center fade-in-left ${faqVisible ? 'visible' : ''}`}>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4 text-reserved-burgundy" style={{ fontFamily: 'Libre Baskerville, serif' }}>Corporate Questions</h2>
              <p className="text-lg text-ink-navy mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                There's no such thing as a "silly" question!<br />
                Our team is here to answer any you may have, but here are a few that we often hear.
              </p>
              <a href="/book-event" className="inline-flex items-center text-reserved-burgundy font-semibold text-lg border border-reserved-burgundy px-6 py-3 rounded-full hover:bg-reserved-burgundy hover:text-white transition-colors duration-300 group" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Ask us a question
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>

            {/* Right Column: FAQ Accordion */}
            <div className={`fade-in-right ${faqVisible ? 'visible' : ''}`}>
              <h3 className="text-xl font-semibold uppercase text-ink-navy mb-4 pb-2 border-b border-brass" style={{ fontFamily: 'Montserrat, sans-serif' }}>Frequently Asked Questions</h3>
              <Accordion type="single" collapsible className="space-y-2">
                <AccordionItem value="events" className="border-none">
                  <AccordionTrigger className="text-left text-lg font-semibold text-ink-navy hover:text-brass py-4 border-b border-stone-300 hover:border-brass transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    What types of corporate events do you cater?
                    <span className="ml-auto">+</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-ink-navy leading-relaxed pb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    We cater a wide range of corporate events, including team lunches, quarterly meetings, client receptions, networking events, executive meetings, holiday parties, and team-building experiences.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="booking" className="border-none">
                  <AccordionTrigger className="text-left text-lg font-semibold text-ink-navy hover:text-brass py-4 border-b border-stone-300 hover:border-brass transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    How far in advance should I book?
                    <span className="ml-auto">+</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-ink-navy leading-relaxed pb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    We recommend booking at least 2–3 weeks in advance for corporate events. Larger events or full-service catering may require additional lead time.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="beverages" className="border-none">
                  <AccordionTrigger className="text-left text-lg font-semibold text-ink-navy hover:text-brass py-4 border-b border-stone-300 hover:border-brass transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Do you provide beverages or alcohol service?
                    <span className="ml-auto">+</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-ink-navy leading-relaxed pb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    We offer non-alcoholic beverage service such as water, coffee, tea, and mocktails.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Corporate;
