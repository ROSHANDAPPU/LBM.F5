import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

const DessertSweetMenu = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  // Interactive Mouse Tracking for Floating Cards
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  useEffect(() => {
    setHeroVisible(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    x.set(clientX / 50); // Divides movement so it's subtle
    y.set(clientY / 50);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const items = [
    { 
      id: '01', 
      title: "Mini Desserts", 
      desc: "Sophisticated bite-sized sweetness for effortless socializing.",
      img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&q=80",
      details: ["Premium Macarons", "Petite Fours", "Artisan Tartlets", "Gourmet Mini Cheesecakes", "Rich Chocolate Truffles"]
    },
    { 
      id: '02', 
      title: "Dessert Bars", 
      desc: "Interactive curated sweet stations with exquisite food pairings.",
      img: "https://images.unsplash.com/photo-1564355808539-22fda35bed61?w=400&q=80",
      details: ["Artisan Donut Walls", "Craft Gelato Stations", "Luxury Chocolate Fountains", "Gourmet Candy Stations", "S'mores Flambé Stations"]
    },
    { 
      id: '03', 
      title: "Edible Art", 
      desc: "Bespoke custom-sculpted sweets tailored perfectly to your theme.",
      img: "https://images.unsplash.com/photo-1578982947148-285d2c9f2d57?w=400&q=80",
      details: ["Personalized Sugar Work", "Intricate Fondant Accents", "Hand-Painted Cake Tiers", "Chocolatier Art Pieces", "Custom Pastry Sculptures"]
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url("https://images.unsplash.com/photo-1551024506-0bccd828d307?w=1600&q=80")`,
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
              Best for: Receptions, add-ons
            </p>
            <h1 className="text-4xl md:text-6xl font-light text-white mb-6 animate-fade-in" style={{ fontFamily: 'Libre Baskerville, Georgia, serif' }}>
              Dessert & Sweet Menus
            </h1>
            <p className="text-xl md:text-2xl font-light text-white/95 max-w-2xl mx-auto">
              Exquisite confections and custom sweet masterpieces styled for beautiful occasions.
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

      {/* The Floating Canvas (Redesigned with brand styling) */}
      <motion.section 
        className="bg-gradient-to-b from-background to-[#C9C3BA]/15 py-32 overflow-hidden relative border-b border-[#C9C3BA]/30"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="text-center mb-24 relative z-10 px-6">
          <h2 className="text-4xl md:text-6xl text-[#5B2E34] font-light" style={{ fontFamily: 'Libre Baskerville, Georgia, serif' }}>
            Sweet <span className="italic text-[#C4A46A] font-light">&</span> Edible Art
          </h2>
          <p className="text-base text-foreground/80 mt-4 max-w-2xl mx-auto font-light leading-relaxed">
            A beautiful celebration of concluding touches—custom confectioneries designed for high visual statement and rich flavor palettes.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-8 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
          {/* Floating Card 1: Mini Desserts */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            style={{ x: mouseX, y: mouseY }}
            className="w-80 h-[460px] bg-[#FFFDF9] p-5 shadow-soft hover:shadow-md rounded-lg border border-[#C9C3BA]/40 rotate-[-1.5deg] flex flex-col justify-between"
          >
            <div>
              <div className="h-52 bg-[#C9C3BA]/20 overflow-hidden rounded border border-[#C9C3BA]/30">
                <img 
                  src={items[0].img} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" 
                  alt="Mini Desserts"
                />
              </div>
              <div className="pt-6 text-center">
                <h3 className="text-2xl text-[#5B2E34]" style={{ fontFamily: 'Libre Baskerville, Georgia, serif' }}>
                  Mini Desserts
                </h3>
                <p className="text-[10px] tracking-widest text-[#C4A46A] mt-1 font-semibold uppercase">
                  Bite-Sized Confections
                </p>
              </div>
            </div>
            <div className="space-y-1 text-center pb-4">
              {items[0].details.slice(0, 3).map((detail, index) => (
                <div key={index} className="text-xs text-foreground/75 font-light">
                  {detail}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Floating Card 2: Dessert Bars */}
          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            style={{ x: mouseX, y: mouseY }}
            className="w-80 h-[460px] bg-[#FFFDF9] p-5 shadow-soft hover:shadow-md rounded-lg border border-[#C9C3BA]/40 rotate-[1.5deg] lg:mt-12 flex flex-col justify-between"
          >
            <div>
              <div className="h-52 bg-[#C9C3BA]/20 overflow-hidden rounded border border-[#C9C3BA]/30">
                <img 
                  src={items[1].img} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" 
                  alt="Dessert Bars"
                />
              </div>
              <div className="pt-6 text-center">
                <h3 className="text-2xl text-[#5B2E34]" style={{ fontFamily: 'Libre Baskerville, Georgia, serif' }}>
                  Dessert Bars
                </h3>
                <p className="text-[10px] tracking-widest text-[#C4A46A] mt-1 font-semibold uppercase">
                  Interactive Sweet Stations
                </p>
              </div>
            </div>
            <div className="space-y-1 text-center pb-4">
              {items[1].details.slice(0, 3).map((detail, index) => (
                <div key={index} className="text-xs text-foreground/75 font-light">
                  {detail}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Floating Card 3: Edible Art */}
          <motion.div 
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            style={{ x: mouseX, y: mouseY }}
            className="w-80 h-[460px] bg-[#FFFDF9] p-5 shadow-soft hover:shadow-md rounded-lg border border-[#C9C3BA]/40 rotate-[-0.5deg] flex flex-col justify-between"
          >
            <div>
              <div className="h-52 bg-[#C9C3BA]/20 overflow-hidden rounded border border-[#C9C3BA]/30">
                <img 
                  src={items[2].img} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" 
                  alt="Edible Art"
                />
              </div>
              <div className="pt-6 text-center">
                <h3 className="text-2xl text-[#5B2E34]" style={{ fontFamily: 'Libre Baskerville, Georgia, serif' }}>
                  Edible Art
                </h3>
                <p className="text-[10px] tracking-widest text-[#C4A46A] mt-1 font-semibold uppercase">
                  Bespoke Sugar Design
                </p>
              </div>
            </div>
            <div className="space-y-1 text-center pb-4">
              {items[2].details.slice(0, 3).map((detail, index) => (
                <div key={index} className="text-xs text-foreground/75 font-light">
                  {detail}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Floating Brand-Aligned Background Circles */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ 
              x: [0, 20, 0], 
              y: [0, -20, 0],
              rotate: [0, 4, 0]
            }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-20 w-16 h-16 bg-[#E2B9B3] rounded-full opacity-20"
          />
          <motion.div
            animate={{ 
              x: [0, -25, 0], 
              y: [0, 15, 0],
              rotate: [0, -6, 0]
            }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-32 right-32 w-24 h-24 bg-[#98A989] rounded-full opacity-20"
          />
          <motion.div
            animate={{ 
              x: [0, 15, 0], 
              y: [0, 15, 0],
              rotate: [0, 2, 0]
            }}
            transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-1/2 right-1/4 w-20 h-20 bg-[#F5F5DC] rounded-full opacity-30"
          />
        </div>
      </motion.section>

      {/* Sweet Features Section (Redesigned with brand styling) */}
      <section className="py-24 px-6 md:px-8 bg-[#FFFDF9]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-light text-[#5B2E34] mb-4" style={{ fontFamily: 'Libre Baskerville, Georgia, serif' }}>
              Sweet Features
            </h3>
            <div className="w-24 h-[1px] bg-[#C4A46A] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                name: "Custom Themes", 
                icon: "🎨", 
                description: "Personalized layouts and textures composed to align with your theme and color palette.",
                color: "bg-[#E2B9B3]/25"
              },
              { 
                name: "Dietary Inclusion", 
                icon: "🌱", 
                description: "Gluten-free organic options, vegan treats, and allergen-safe bespoke menu selections.",
                color: "bg-[#98A989]/25"
              },
              { 
                name: "Interactive Experiences", 
                icon: "✨", 
                description: "On-site action stations, hot-pot melting experiences, and custom confectionery boards.",
                color: "bg-[#F5F5DC]/60 border border-[#C9C3BA]/40"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                className="text-center p-8 rounded-xl bg-background border border-[#C9C3BA]/30 shadow-soft hover:shadow-md transition-shadow"
              >
                <div className={`w-16 h-16 ${feature.color} rounded-full mx-auto mb-6 flex items-center justify-center text-2xl`}>
                  {feature.icon}
                </div>
                <h4 className="text-xl font-normal text-[#5B2E34] mb-2" style={{ fontFamily: 'Libre Baskerville, Georgia, serif' }}>{feature.name}</h4>
                <p className="text-foreground/80 font-light text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Elegant Contact CTA Panel */}
      <div className="bg-[#FFFDF9] border border-[#C4A46A]/20 rounded-2xl shadow-soft p-12 text-center mt-16 max-w-4xl mx-auto mb-24 px-6 md:px-8">
        <h3 className="text-3xl font-light text-[#5B2E34] mb-4" style={{ fontFamily: 'Libre Baskerville, Georgia, serif' }}>
          Add Curated Sweetness
        </h3>
        <p className="text-lg text-foreground/80 mb-8 font-light max-w-2xl mx-auto">
          Contact our artisan culinary designers today to sketch out custom sweet boards or interactive bars for your reception.
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

export default DessertSweetMenu;
