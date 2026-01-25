import { useState, useEffect } from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import ScrollIndicator from "@/Components/ScrollIndicator";
import Hero from "@/Components/Hero";
import { Button } from "@/Components/UI/button";
import { useIsMobile } from "@/Hooks/use-mobile";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/Components/UI/accordion";
import { Users, ChefHat, Sparkles, MapPin, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Events = () => {
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

  return (
    <div className="min-h-screen">
      <Header />
      <Hero
        title="Private Cooking Classes"
        subtitle="Experience bespoke culinary creations in the comfort of your home with our expert private chefs."
        fullWidth={true}
        video="/Public/videos/cooking-classes-hero.mp4"
        cta1={
          <Button asChild size="lg" className="text-base font-normal tracking-wide uppercase">
            <Link to="/book-class">Book a Class</Link>
          </Button>
        }
        cta2={
          <Button asChild size="lg" variant="outline" className="text-base font-normal tracking-wide uppercase border-white text-white hover:bg-white hover:text-ink-navy">
            <Link to="/cooking-classes">Explore Classes</Link>
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
                <p>2-20+ People</p>
              </div>
            </div>

            <div className="highlight-item">
              <span className="icon">
                <ChefHat className="w-6 h-6" />
              </span>
              <div className="text">
                <strong>Service</strong>
                <p>Individual Stations</p>
              </div>
            </div>

            <div className="highlight-item">
              <span className="icon">
                <Sparkles className="w-6 h-6" />
              </span>
              <div className="text">
                <strong>Includes</strong>
                <p>One on one instructor opportunity, all tools and ingredients, set up and clean up</p>
              </div>
            </div>

            <div className="highlight-item">
              <span className="icon">
                <MapPin className="w-6 h-6" />
              </span>
              <div className="text">
                <strong>Areas</strong>
                <p>Dallas & Surrounding</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-reserved-burgundy via-reserved-burgundy to-darker-burgundy"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-brass/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-brass/5 rounded-full blur-2xl"></div>
        
        <div className="relative z-10 container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-creamy-white text-4xl sm:text-5xl font-light mb-6 leading-tight">
              How It Works
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-brass to-brass/50 mx-auto mb-8"></div>
            <p className="text-white/80 text-xl max-w-3xl mx-auto leading-relaxed">
              From booking to cleanup, we make your private cooking experience seamless and memorable
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Choose Your Class", desc: "Select from our curated cooking experiences or request a custom theme", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
              { step: 2, title: "Schedule Your Date", desc: "Pick a date and time that works for your group", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
              { step: 3, title: "We Come To You", desc: "Our chef arrives with all ingredients and equipment", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" },
              { step: 4, title: "Enjoy & Learn", desc: "Cook, eat, and create memories while we handle cleanup", icon: "M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" }
            ].map((item, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300"></div>
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-brass to-brass/80 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-brass mb-4">0{item.step}</div>
                  <h3 className="text-white text-xl font-light mb-4">{item.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stone via-stone to-stone/80"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brass to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brass to-transparent"></div>
        
        <div className="relative z-10 container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-ink-navy text-4xl sm:text-5xl font-light mb-6 leading-tight">
              Why Choose Us
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-brass to-brass/50 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Custom Immersive Experience",
                desc: "Curated culinary experience designed exclusively for you and your group.",
                icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              },
              {
                title: "Stress-Free Learning",
                desc: "Our team handles set up, service, and cleanup.",
                icon: "M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
              }
            ].map((item, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300"></div>
                <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-12 text-center hover:bg-white/15 transition-all duration-300">
                  <div className="w-24 h-24 bg-gradient-to-br from-brass to-brass/80 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="text-ink-navy text-2xl font-light mb-6">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
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
              <a href="/book-event" className="inline-flex items-center text-reserved-burgundy font-semibold text-lg border border-reserved-burgundy px-6 py-3 rounded-full hover:bg-reserved-burgundy hover:text-white transition-colors duration-300 group" style={{ fontFamily: 'Montserrat, sans-serif' }}>
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
                    How many people can attend a class?
                    <span className="ml-auto">+</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-ink-navy leading-relaxed pb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Class size varies depending on the experience and location, but most classes are ideal for small to mid-size groups. Larger groups can be accommodated with advance planning.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="booking" className="border-none">
                  <AccordionTrigger className="text-left text-lg font-semibold text-ink-navy hover:text-brass py-4 border-b border-stone-300 hover:border-brass transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    What type of cooking classes do you offer?
                    <span className="ml-auto">+</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-ink-navy leading-relaxed pb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Classes can range from casual and fun to elevated, chef-led experiences depending on your goals.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="beverages" className="border-none">
                  <AccordionTrigger className="text-left text-lg font-semibold text-ink-navy hover:text-brass py-4 border-b border-stone-300 hover:border-brass transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Do you accommodate dietary restrictions?
                    <span className="ml-auto">+</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-ink-navy leading-relaxed pb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Absolutely. Please let us know of any allergies or dietary restrictions in advance.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-reserved-burgundy via-reserved-burgundy to-darker-burgundy"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-brass/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-brass/5 rounded-full blur-2xl animate-pulse"></div>
        
        <div className="relative z-10 container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-creamy-white text-4xl sm:text-5xl font-light mb-6 leading-tight">
              What Our Students Say
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-brass to-brass/50 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Jennifer Davis",
                class: "Pasta Making Class",
                initials: "JD",
                quote: "The pasta making class was incredible! Our chef was patient, knowledgeable, and made the experience so much fun. We now make fresh pasta every weekend!"
              },
              {
                name: "Michael Rodriguez",
                class: "Sushi Workshop",
                initials: "MR",
                quote: "I never thought I could make sushi at home, but this class changed everything. The techniques were easy to follow and the results were restaurant-quality!"
              }
            ].map((testimonial, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300"></div>
                <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-10 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-brass to-brass/80 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-xl font-bold">{testimonial.initials}</span>
                    </div>
                    <div>
                      <h4 className="text-white text-xl font-light mb-2">{testimonial.name}</h4>
                      <p className="text-white/80 text-sm">{testimonial.class}</p>
                    </div>
                  </div>
                  <p className="text-white/90 text-lg leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  
                  {/* Quote Marks */}
                  <div className="absolute top-6 left-6 text-brass/20 text-6xl font-serif">"</div>
                  <div className="absolute bottom-6 right-6 text-brass/20 text-6xl font-serif rotate-180">"</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button size="lg" className="bg-creamy-white bg-opacity-100 text-ink-navy tracking-wider border border-ink-navy/20 shadow-sm hover:bg-stone hover:bg-opacity-50 hover:text-ink-navy transition-all duration-300 ease-in-out uppercase">
              Read More Reviews
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
