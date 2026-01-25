import { useState } from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import ScrollIndicator from "@/Components/ScrollIndicator";
import Hero from "@/Components/Hero";
import { Button } from "@/Components/UI/button";
import { useIsMobile } from "@/Hooks/use-mobile";

const SocialEvents = () => {
  const isMobile = useIsMobile();

  const socialEvents = [
    {
      id: 1,
      title: "Birthday Parties",
      guests: "20-150 guests",
      price: "Starting at $2,000",
      description: "Celebrate your special day with a customized party experience, from casual gatherings to formal dinners.",
      includes: ["Custom menu design", "Themed decorations", "Birthday cake service", "Full service staff", "Entertainment coordination"]
    },
    {
      id: 2,
      title: "Holiday Parties",
      guests: "30-200+ guests",
      price: "Starting at $4,000",
      description: "Host a memorable holiday event with festive menus, seasonal decor, and a cheerful atmosphere.",
      includes: ["Festive cocktail hour", "Multi-course holiday dinner", "Seasonal dessert station", "Full service staff", "Event coordination"]
    },
    {
      id: 3,
      title: "Cocktail Parties",
      guests: "30-200 guests",
      price: "Starting at $2,500",
      description: "Elegant cocktail receptions with a wide array of hors d'oeuvres, small plates, and signature drinks.",
      includes: ["Passed hors d'oeuvres", "Small plates station", "Professional bartenders", "Signature cocktails", "Lounge setup"]
    },
    {
      id: 4,
      title: "Dinner Parties",
      guests: "10-50 guests",
      price: "Starting at $1,500",
      description: "Intimate and sophisticated dinner parties with a gourmet menu tailored to your tastes.",
      includes: ["Multi-course plated dinner", "Wine pairing service", "Professional chef", "Personalized table settings", "Full service staff"]
    }
  ];
  return (
    <div className="min-h-screen">
      <Header />
      <Hero
        title="Social Events"
        subtitle="Elegant gatherings and celebrations, tailored to your vision."
        fullWidth={true}
        video="/Public/videos/engagements-and-weddings.mp4"
        cta1={<Button size="lg" className="text-base font-normal tracking-wide uppercase">Book Your Event</Button>}
      />
      <ScrollIndicator />

      {/* Social Events Overview */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-reserved-burgundy via-reserved-burgundy to-darker-burgundy"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-brass/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-brass/5 rounded-full blur-2xl"></div>
        
        <div className="relative z-10 container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-brass rounded-full animate-pulse"></span>
              <span className="text-white/90 text-sm font-medium uppercase tracking-wider">Services</span>
            </div>
            <h2 className="text-creamy-white text-4xl sm:text-5xl font-light mb-6 leading-tight">
              Social Event Excellence
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-brass to-brass/50 mx-auto mb-8"></div>
            <p className="text-white/80 text-xl max-w-3xl mx-auto leading-relaxed">
              Quality ingredients. Artisanal presentation. From intimate dinners to celebrations, we bring excellence to your table.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {socialEvents.map((service, index) => (
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

      <Footer />
    </div>
  );
};

export default SocialEvents;
