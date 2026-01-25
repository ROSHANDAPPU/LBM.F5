import { useState } from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import { Button } from "@/Components/UI/button";
import { Link } from "react-router-dom";
import ScrollIndicator from "@/Components/ScrollIndicator";

const CookingClasses = () => {
  const [selectedClass, setSelectedClass] = useState<number | null>(null);

  // Add CSS styles for exact hero layout
  useState(() => {
    const style = document.createElement('style');
    style.textContent = `
      :root {
        --cream-bg: #f9f7f4;
        --burgundy: #7a3043;
      }

      .hero-section {
        display: flex;
        min-height: 80vh;
        background-color: var(--cream-bg);
        align-items: center;
        overflow: hidden;
        position: relative;
      }

      .hero-content {
        flex: 1;
        padding: 0 8%;
        z-index: 2;
      }

      .sub-headline {
        letter-spacing: 0.1em;
        font-size: 1rem;
        color: hsl(var(--accent));
        display: block;
        margin-bottom: 20px;
        font-weight: var(--font-weight-light, 300);
        font-family: 'Montserrat', Arial, sans-serif;
        text-transform: uppercase;
      }

      .hero-content h1 {
        font-family: 'Libre Baskerville', Georgia, serif;
        font-size: 4rem;
        line-height: 1.1;
        margin-bottom: 20px;
        color: var(--foreground);
        font-weight: var(--font-weight-light, 300);
        letter-spacing: -0.02em;
      }

      .hero-content h1 em {
        font-family: 'Libre Baskerville', Georgia, serif;
        color: hsl(var(--accent));
        font-style: italic;
        font-weight: var(--font-weight-light, 300);
      }

      .hero-content p {
        font-size: 1.1rem;
        line-height: 1.6;
        color: var(--muted-foreground);
        max-width: 500px;
        font-family: 'Montserrat', Arial, sans-serif;
        font-weight: var(--font-weight-light, 300);
      }

      .hero-image-container {
        flex: 1.2;
        height: 100vh;
        background: 
          linear-gradient(to right, var(--cream-bg) 0%, rgba(249, 247, 244, 0) 40%),
          url(${(import.meta as any).env?.BASE_URL || "/"}chef1.jpg); 
        background-size: cover;
        background-position: center;
      }

      .hero-btns {
        display: flex;
        gap: 20px;
        margin-top: 40px;
        flex-wrap: wrap;
      }

      @media (max-width: 768px) {
        .hero-section {
          flex-direction: column;
          min-height: auto;
        }

        .hero-content {
          padding: 60px 5%;
        }

        .hero-content h1 {
          font-size: 2.5rem;
        }

        .hero-image-container {
          height: 50vh;
          background: url(${(import.meta as any).env?.BASE_URL || "/"}chef1.jpg);
          background-size: cover;
          background-position: center;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  });

  const cookingClasses = [
    {
      id: 1,
      title: "Italian Pasta Mastery",
      duration: "3 hours",
      guests: "2-8 people",
      price: "$450",
      description: "Learn to make authentic fresh pasta from scratch with traditional techniques",
      includes: ["All ingredients", "Professional chef", "Recipe cards", "Wine pairing"]
    },
    {
      id: 2,
      title: "French Pastry Fundamentals",
      duration: "4 hours",
      guests: "2-6 people",
      price: "$550",
      description: "Master the art of French pastries including croissants, macarons, and tarts",
      includes: ["All ingredients", "Pastry tools", "Take-home box", "Coffee & tea"]
    },
    {
      id: 3,
      title: "Sushi Rolling Workshop",
      duration: "2.5 hours",
      guests: "2-10 people",
      price: "$400",
      description: "Learn the secrets of perfect sushi rice and rolling techniques from a sushi master",
      includes: ["Fresh ingredients", "Bamboo mats", "Soy sauce & wasabi", "Sake tasting"]
    },
    {
      id: 4,
      title: "Mediterranean Grill",
      duration: "3 hours",
      guests: "4-12 people",
      price: "$500",
      description: "Explore Mediterranean flavors with grilled meats, vegetables, and traditional sides",
      includes: ["Premium ingredients", "Grilling equipment", "Salad & appetizers", "Mediterranean wine"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <span className="sub-headline">EXCLUSIVE EXPERIENCE</span>
          <h1>Private <br /><em>Cooking Classes</em></h1>
          <p>Experience bespoke culinary creations in the comfort of your home with our expert private chefs.</p>
        </div>

        <div className="hero-image-container"></div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            <ScrollIndicator />
        </div>
      </section>

      {/* Cooking Classes Section */}
      <section className="relative py-4 px-6 mt-0">
        <div className="absolute inset-0 bg-gradient-to-br from-light-cream to-stone/50"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-reserved-burgundy/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-brass/5 rounded-full blur-2xl"></div>
        
        <div className="relative z-10 container mx-auto max-w-7xl">
          <div className="text-center mb-20 mt-8">
            <h2 className="text-ink-navy text-4xl sm:text-5xl font-light mb-6 leading-tight">
              Choose Your Culinary Adventure
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-brass to-brass/50 mx-auto mb-8"></div>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              Each class is designed to be interactive, educational, and delicious
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {cookingClasses.map((cookingClass, index) => (
              <div 
                key={cookingClass.id}
                className="group relative"
                onClick={() => setSelectedClass(selectedClass === cookingClass.id ? null : cookingClass.id)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-brass/5 rounded-3xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                <div className="relative bg-reserved-burgundy text-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer border border-white/10">
                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brass/20 to-transparent rounded-3xl transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  <div className="relative p-10">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex-1">
                        <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1 mb-4">
                          <span className="w-1.5 h-1.5 bg-brass rounded-full"></span>
                          <span className="text-xs font-medium text-brass uppercase tracking-wider">Class {cookingClass.id}</span>
                        </div>
                        <h3 className="text-3xl font-light text-white mb-3 leading-tight">{cookingClass.title}</h3>
                      </div>
                      <div className="text-right ml-6">
                        <div className="text-3xl font-bold text-brass mb-1">{cookingClass.price}</div>
                        <div className="text-sm text-white/70">per session</div>
                      </div>
                    </div>
                    
                    <p className="text-white/80 text-lg leading-relaxed mb-8">{cookingClass.description}</p>
                    
                    <div className="flex items-center gap-8 text-sm text-white/80 mb-8">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-brass" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-white/90">Duration</div>
                          <div>{cookingClass.duration}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-brass" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-white/90">Guests</div>
                          <div>{cookingClass.guests}</div>
                        </div>
                      </div>
                    </div>
                    
                    {selectedClass === cookingClass.id && (
                      <div className="mt-8 pt-8 border-t border-white/20">
                        <h4 className="text-xl font-light text-white mb-6">What's Included:</h4>
                        <div className="grid grid-cols-2 gap-4 mb-8">
                          {cookingClass.includes.map((item, index) => (
                            <div key={index} className="flex items-center gap-3">
                              <div className="w-6 h-6 bg-gradient-to-br from-brass to-brass/80 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <span className="text-white/80">{item}</span>
                            </div>
                          ))}
                        </div>
                        <Button asChild className="w-full bg-creamy-white text-ink-navy hover:bg-white/90 text-base font-normal tracking-wide uppercase rounded-2xl transform hover:scale-105 transition-all duration-300">
                          <Link to="/book-class">Book This Class</Link>
                        </Button>
                      </div>
                    )}
                    
                    {!selectedClass && (
                      <div className="flex items-center justify-center pt-4">
                        <div className="text-brass font-medium flex items-center gap-2">
                          <span>Click to explore</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-white/20">
              <h3 className="text-3xl font-light text-ink-navy mb-6" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                Ready to Start Cooking?
              </h3>
              <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                Don't see the perfect class? We can create a custom culinary experience just for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-reserved-burgundy text-white hover:bg-reserved-burgundy/90">
                  <Link to="/book-class">Book a Class</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-reserved-burgundy text-reserved-burgundy hover:bg-reserved-burgundy hover:text-white">
                  <Link to="/events">Back to Classes Info</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CookingClasses;
