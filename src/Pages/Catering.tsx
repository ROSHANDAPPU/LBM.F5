import { useState, useEffect } from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import ScrollIndicator from "@/Components/ScrollIndicator";
import Hero from "@/Components/Hero";
import { Button } from "@/Components/UI/button";
import { useIsMobile } from "@/Hooks/use-mobile";
import { Users, ChefHat, Sparkles, MapPin, ChevronRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/Components/UI/accordion";

const Catering = () => {
  const isMobile = useIsMobile();

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
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

  const weddingServices = [
    {
      id: 1,
      title: "Engagement Dinners",
      guests: "20-100 guests",
      price: "Starting at $3,500",
      description: "Intimate and elegant engagement dinners featuring personalized menus and romantic ambiance for your special announcement.",
      includes: ["Custom menu design", "Floral arrangements", "Specialty cocktails", "Professional photography", "Romantic table settings"]
    },
    {
      id: 2,
      title: "Wedding Receptions",
      guests: "50-300+ guests",
      price: "Starting at $8,000",
      description: "Complete wedding catering services from cocktail hour through dinner reception with full-service coordination.",
      includes: ["Cocktail hour catering", "Multi-course dinner", "Wedding cake service", "Full service staff", "Event coordination"]
    },
    {
      id: 3,
      title: "Bridal Showers",
      guests: "30-150 guests",
      price: "Starting at $2,500",
      description: "Elegant bridal shower catering with sophisticated menus and beautiful presentation for your pre-wedding celebration.",
      includes: ["Brunch or lunch service", "Decorative displays", "Gift table setup", "Signature cocktails", "Dessert stations"]
    },
    {
      id: 4,
      title: "Anniversary Parties",
      guests: "25-200 guests",
      price: "Starting at $4,000",
      description: "Memorable anniversary celebrations with custom themes, personalized menus, and exceptional service.",
      includes: ["Themed decorations", "Custom menu design", "Live entertainment setup", "Photography coordination", "Specialty desserts"]
    }
  ];
  return (
    <div className="min-h-screen">
      <Header />
      <Hero
        title="Engagements and Weddings"
        subtitle="Quality ingredients. Artisanal presentation. From intimate dinners to celebrations, we bring excellence to your table."
        fullWidth={true}
        video="/Public/videos/engagements-and-weddings.mp4"
        cta1={<Button size="lg" className="text-base font-normal tracking-wide uppercase">Book Your Event</Button>}
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
                <p>50–300+</p>
              </div>
            </div>

            <div className="highlight-item">
              <span className="icon">
                <ChefHat className="w-6 h-6" />
              </span>
              <div className="text">
                <strong>Service</strong>
                <p>Buffet, Family-Style, Plated</p>
              </div>
            </div>

            <div className="highlight-item">
              <span className="icon">
                <Sparkles className="w-6 h-6" />
              </span>
              <div className="text">
                <strong>Includes</strong>
                <p>Food, service staff, serving service and clean up</p>
              </div>
            </div>

            <div className="highlight-item">
              <span className="icon">
                <MapPin className="w-6 h-6" />
              </span>
              <div className="text">
                <strong>Areas</strong>
                <p>dallas & surrounding areas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Services Overview */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-reserved-burgundy via-reserved-burgundy to-darker-burgundy"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-brass/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-brass/5 rounded-full blur-2xl"></div>
        
        <div className="relative z-10 container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-creamy-white text-4xl sm:text-5xl font-light mb-6 leading-tight">
              Wedding & Celebration Excellence
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-brass to-brass/50 mx-auto mb-8"></div>
            <p className="text-white/80 text-xl max-w-3xl mx-auto leading-relaxed">
              Quality ingredients. Artisanal presentation. From intimate dinners to celebrations, we bring excellence to your table.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {weddingServices.map((service, index) => (
              <div 
                key={service.id}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer border border-stone/20">
                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brass/20 to-transparent rounded-3xl transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  <div className="relative p-10">
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
                    
                    <Button className="w-full bg-gradient-to-r from-reserved-burgundy to-darker-burgundy hover:from-darker-burgundy hover:to-reserved-burgundy text-white py-4 text-base font-normal tracking-wide uppercase rounded-2xl transform hover:scale-105 transition-all duration-300">
                      Book Consultation
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button size="lg" className="bg-creamy-white bg-opacity-100 text-ink-navy tracking-wider border border-ink-navy/20 shadow-sm hover:bg-stone hover:bg-opacity-50 hover:text-ink-navy transition-all duration-300 ease-in-out uppercase">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-creamy-white to-creamy-white/80"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-reserved-burgundy/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-brass/5 rounded-full blur-2xl"></div>
        
        <div className="relative z-10 container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-ink-navy text-4xl sm:text-5xl font-light mb-6 leading-tight">
              Why Choose Us
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-brass to-brass/50 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300"></div>
              <div className="relative bg-creamy-white backdrop-blur-sm border border-stone/20 rounded-3xl p-10 hover:bg-creamy-white/90 transition-all duration-300 shadow-lg hover:shadow-xl">
                <h3 className="text-ink-navy text-2xl font-light mb-6">Tailored Wedding Menus</h3>
                <p className="text-gray-600 leading-relaxed">We adapt to your tastes, theme, and dietary needs.</p>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300"></div>
              <div className="relative bg-creamy-white backdrop-blur-sm border border-stone/20 rounded-3xl p-10 hover:bg-creamy-white/90 transition-all duration-300 shadow-lg hover:shadow-xl">
                <h3 className="text-ink-navy text-2xl font-light mb-6">Coordinated With Your Planner</h3>
                <p className="text-gray-600 leading-relaxed">We sync with your timeline so service flows naturally.</p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300"></div>
              <div className="relative bg-creamy-white backdrop-blur-sm border border-stone/20 rounded-3xl p-10 hover:bg-creamy-white/90 transition-all duration-300 shadow-lg hover:shadow-xl">
                <h3 className="text-ink-navy text-2xl font-light mb-6">Stress-Free Service</h3>
                <p className="text-gray-600 leading-relaxed">Our team handles kitchen, service, and cleanup.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process FAQ Section */}
      <div className="py-16 bg-light-cream">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column: Intro and CTA */}
            <div className={`flex flex-col justify-center`}>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4 text-reserved-burgundy" style={{ fontFamily: 'Libre Baskerville, serif' }}>Common Questions</h2>
              <p className="text-lg text-ink-navy mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Our team is here to answer any you may have, but here are a few that we often hear.
              </p>
              <a href="#contact" className="inline-flex items-center text-reserved-burgundy font-semibold text-lg border border-reserved-burgundy px-6 py-3 rounded-full hover:bg-reserved-burgundy hover:text-white transition-colors duration-300 group" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Ask us a question
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>

            {/* Right Column: FAQ Accordion */}
            <div className={``}>
              <h3 className="text-xl font-semibold uppercase text-ink-navy mb-4 pb-2 border-b border-brass" style={{ fontFamily: 'Montserrat, sans-serif' }}>Frequently Asked Questions</h3>
              <Accordion type="single" collapsible className="space-y-2">
                <AccordionItem value="events" className="border-none">
                  <AccordionTrigger className="text-left text-lg font-semibold text-ink-navy hover:text-brass py-4 border-b border-stone-300 hover:border-brass transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    How far in advance should we book?
                    <span className="ml-auto">+</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-ink-navy leading-relaxed pb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Ideally 3–6 months before your wedding date.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="booking" className="border-none">
                  <AccordionTrigger className="text-left text-lg font-semibold text-ink-navy hover:text-brass py-4 border-b border-stone-300 hover:border-brass transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Do you handle dietary restrictions?
                    <span className="ml-auto">+</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-ink-navy leading-relaxed pb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Yes—vegetarian, vegan, and allergies can be accommodated.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="beverages" className="border-none">
                  <AccordionTrigger className="text-left text-lg font-semibold text-ink-navy hover:text-brass py-4 border-b border-stone-300 hover:border-brass transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Is staff included?
                    <span className="ml-auto">+</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-ink-navy leading-relaxed pb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Yes, all wedding packages include our service team.
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

export default Catering;
