import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

const CulturalGlobalMenu = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const targetRef = useRef<HTMLDivElement | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Moves the content horizontally based on vertical scroll
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);
  // Individual parallax for images to create 3D depth
  const imgX = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  useEffect(() => {
    setHeroVisible(true);
  }, []);

  const menuCategories = [
    {
      title: "Latin Soul",
      subtitle: "Achiote • Citrus • Smoked Fire",
      description: "Bold hand-rubbed spices, citrus-marinated fresh plates, and elevated street-food elegance.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
      items: [
        "Ceviche with plantain crisps",
        "Slow-roasted carnitas sliders",
        "Crispy empanadas with chimichurri",
        "Golden churros with dulce de leche",
        "Artisanal mole chicken bite"
      ],
      panelPosition: "bottom",
      panelBg: "bg-[#FFFDF9] border border-[#C4A46A]/30 text-foreground"
    },
    {
      title: "Mediterranean",
      subtitle: "Olive • Saffron • Salt Sea",
      description: "Organic oils, sun-drenched fresh greens, and robust coastal flavors curated for executive palates.",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
      items: [
        "Artisan Greek mezze board",
        "Lamb kofta skewers with tzatziki",
        "Saffron seafood mini-paella",
        "Flaky pistachio baklava bites",
        "Grilled octopus with wild herbs"
      ],
      panelPosition: "top",
      panelBg: "bg-[#5B2E34] text-white border border-[#C4A46A]/20"
    },
    {
      title: "Asian Fusion",
      subtitle: "Umami • Ginger • Zen Harmony",
      description: "A careful composition of umami depth, clean textures, and state-of-the-art presentations.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
      items: [
        "Premium sushi & hand-roll selection",
        "Artisan Thai curry soup cups",
        "Handmade steamed dim sum baskets",
        "Sweet mochi ice cream collection",
        "Crispy duck bao with hoisin"
      ],
      panelPosition: "center",
      panelBg: "bg-[#C4A46A] text-[#5B2E34] border border-[#5B2E34]/20"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <Header />

      {/* Hero Section */}
      <div 
        className="relative flex items-center justify-center text-center overflow-hidden"
        style={{
          height: '70vh',
          marginTop: '80px',
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&q=80")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div 
          className="relative z-10 transition-all duration-1000 ease-out"
          style={{
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-sm tracking-[0.3em] text-[#C4A46A] uppercase font-bold mb-4">
              Best for: Brand activations, diverse celebrations
            </p>
            <h1 className="text-4xl md:text-6xl font-light text-white mb-6 animate-fade-in" style={{ fontFamily: 'Libre Baskerville, Georgia, serif' }}>
              Cultural & Global-Inspired
            </h1>
            <p className="text-xl md:text-2xl font-light text-white/95 max-w-2xl mx-auto">
              A sensory journey combining authentic culinary heritage with modern presentation.
            </p>
          </div>
        </div>
      </div>

      {/* Breadcrumb - Starts with top margin of 27px as requested */}
      <div className="max-w-7xl mx-auto px-6 md:px-8" style={{ marginTop: '27px' }}>
        <Link 
          to="/menu" 
          className="inline-flex items-center text-sm font-semibold text-[#5B2E34] hover:text-[#C4A46A] transition-colors hover:underline"
        >
          ← BACK TO ALL MENUS
        </Link>
      </div>

      {/* Storytelling Scroll Section */}
      <section ref={targetRef} className="relative h-[280vh] bg-gradient-to-b from-background via-[#C9C3BA]/10 to-background border-b border-[#C9C3BA]/30 overflow-hidden">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-20 px-6 md:px-16 items-center">
            
            {/* Introductory Story Panel */}
            <div className="flex h-[520px] w-[460px] flex-col justify-center shrink-0 pr-6">
              <span className="text-xs tracking-[0.4em] text-[#5B2E34] uppercase mb-4 font-bold">
                A Passport of Flavors
              </span>
              <h2 className="text-5xl md:text-6xl leading-tight text-[#5B2E34]" style={{ fontFamily: 'Libre Baskerville, Georgia, serif' }}>
                Cultural & <br />
                <span className="italic font-light text-[#C4A46A]">Global</span>
              </h2>
              <p className="text-foreground/80 mt-6 leading-relaxed font-light text-sm">
                From the bustling culinary street markets of Asia to the olive-rich coastal villages 
                of the Mediterranean, we translate time-honored heritage recipes into luxury, five-star catering encounters.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-2.5 h-2.5 bg-[#5B2E34] rounded-full"></div>
                  <span className="text-xs font-semibold tracking-wider text-foreground/75 uppercase">Heritage Culinary Recipes</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2.5 h-2.5 bg-[#C4A46A] rounded-full"></div>
                  <span className="text-xs font-semibold tracking-wider text-foreground/75 uppercase">Immersive Storytelling Elements</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2.5 h-2.5 bg-[#C9C3BA] rounded-full"></div>
                  <span className="text-xs font-semibold tracking-wider text-foreground/75 uppercase">Artisanal Sourcing & Styling</span>
                </div>
              </div>
            </div>

            {/* Menu Categories with Parallax Cards */}
            {menuCategories.map((category, index) => (
              <div 
                key={index}
                className={`relative h-[500px] w-[380px] shrink-0 group ${
                  index === 1 ? 'pt-8' : ''
                }`}
              >
                <motion.div 
                  style={{ x: imgX }} 
                  className="h-3/4 w-full overflow-hidden rounded-lg shadow-soft border border-[#C9C3BA]/40"
                >
                  <img 
                    src={category.image} 
                    className="h-full w-full object-cover filter brightness-[0.85] group-hover:brightness-100 group-hover:scale-105 transition-all duration-700" 
                    alt={category.title}
                  />
                </motion.div>
                
                {/* Dynamic Panel Positioning aligned to branding */}
                {category.panelPosition === 'bottom' && (
                  <div className={`absolute bottom-4 left-4 p-6 shadow-md rounded-lg max-w-[320px] ${category.panelBg}`}>
                    <h3 className="text-2xl" style={{ fontFamily: 'Libre Baskerville, Georgia, serif' }}>
                      {category.title}
                    </h3>
                    <p className="text-[10px] tracking-widest text-[#5B2E34] mt-1 font-semibold uppercase">
                      {category.subtitle}
                    </p>
                    <div className="mt-4 space-y-1">
                      {category.items.slice(0, 3).map((item, itemIndex) => (
                        <div key={itemIndex} className="text-xs text-foreground/80 flex items-center gap-2">
                          <span className="w-1 h-1 bg-[#5B2E34] rounded-full"></span>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {category.panelPosition === 'top' && (
                  <div className={`absolute top-4 right-4 p-6 shadow-md rounded-lg max-w-[320px] z-10 ${category.panelBg}`}>
                    <h3 className="text-2xl" style={{ fontFamily: 'Libre Baskerville, Georgia, serif' }}>
                      {category.title}
                    </h3>
                    <p className="text-[10px] tracking-widest text-[#C4A46A] mt-1 font-semibold uppercase">
                      {category.subtitle}
                    </p>
                    <div className="mt-4 space-y-1">
                      {category.items.slice(0, 3).map((item, itemIndex) => (
                        <div key={itemIndex} className="text-xs text-white/90 flex items-center gap-2">
                          <span className="w-1 h-1 bg-[#C4A46A] rounded-full"></span>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {category.panelPosition === 'center' && (
                  <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 p-6 shadow-md rounded-lg w-[280px] text-center ${category.panelBg}`}>
                    <h3 className="text-2xl" style={{ fontFamily: 'Libre Baskerville, Georgia, serif' }}>
                      {category.title}
                    </h3>
                    <p className="text-[10px] tracking-widest text-[#5B2E34] mt-1 font-bold uppercase">
                      {category.subtitle}
                    </p>
                    <div className="mt-4 space-y-1">
                      {category.items.slice(0, 3).map((item, itemIndex) => (
                        <div key={itemIndex} className="text-xs text-[#5B2E34]/90 flex items-center justify-center gap-2">
                          <span className="w-1 h-1 bg-[#5B2E34] rounded-full"></span>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

          </motion.div>
        </div>
      </section>

      {/* Flavor Profile Section (Redesigned with brand color palette) */}
      <section className="py-24 px-6 md:px-8 bg-[#FFFDF9]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-light text-[#5B2E34] mb-4" style={{ fontFamily: 'Libre Baskerville, Georgia, serif' }}>
              Culinary Accents
            </h3>
            <div className="w-24 h-[1px] bg-[#C4A46A] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: "Spice & Smoke", color: "bg-[#5B2E34]", text: "text-[#F5F5DC]", description: "Rich, deep achiote rubs, slow smoked woods, and complex chili reductions that create warmth and soul." },
              { name: "Crisp & Botanical", color: "bg-[#C9C3BA]/60", text: "text-[#5B2E34]", description: "Bright citrus oils, organic garden mint, fresh cilantro sprigs, and pressed herbal compounds." },
              { name: "Earthy & Aromatic", color: "bg-[#C4A46A]", text: "text-[#5B2E34]", description: "Precious saffron threads, ground turmeric, rich sesame pastes, and warm Mediterranean spices." }
            ].map((profile, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                className="text-center p-8 border border-[#C9C3BA]/30 bg-background rounded-xl shadow-soft"
              >
                <div className={`w-16 h-16 ${profile.color} ${profile.text} rounded-full mx-auto mb-6 flex items-center justify-center text-xl font-bold`}>
                  0{index + 1}
                </div>
                <h4 className="text-xl font-normal text-[#5B2E34] mb-3" style={{ fontFamily: 'Libre Baskerville, Georgia, serif' }}>{profile.name}</h4>
                <p className="text-foreground/80 font-light text-sm leading-relaxed">{profile.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <div className="bg-[#FFFDF9] border border-[#C4A46A]/20 rounded-2xl shadow-soft p-12 text-center mt-16 max-w-4xl mx-auto mb-24 px-6 md:px-8">
        <h3 className="text-3xl font-light text-[#5B2E34] mb-4" style={{ fontFamily: 'Libre Baskerville, Georgia, serif' }}>
          Explore Global Flavors
        </h3>
        <p className="text-lg text-foreground/80 mb-8 font-light max-w-2xl mx-auto">
          Let us craft a customized global storytelling dining experience that beautifully captures the narrative of your brand or event.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/book-event"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#5B2E34] text-[#F5F5DC] font-medium tracking-wider hover:bg-[#5B2E34]/90 transition-all rounded shadow-soft uppercase text-sm"
          >
            Request a Proposal
          </Link>
          <button className="inline-flex items-center justify-center px-8 py-4 border border-[#5B2E34] text-[#5B2E34] hover:bg-[#5B2E34] hover:text-white transition-all rounded uppercase text-sm font-medium">
            Schedule Tasting
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CulturalGlobalMenu;
