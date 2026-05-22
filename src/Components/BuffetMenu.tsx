import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

interface BuffetItem {
  id: number;
  title: string;
  details: string;
  image: string;
  items: string[];
}

const buffetData: BuffetItem[] = [
  { 
    id: 1, 
    title: "Protein Selection", 
    details: "Artisanal carved roasts & signature seafoods", 
    image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&q=80",
    items: ["Prime Rib Carving Station", "Herb-Crusted Salmon Platter", "Chicken Marsala reduction", "Roasted Pork Tenderloin", "Grilled Lamb Chop board"]
  },
  { 
    id: 2, 
    title: "Vegetarian Harvest", 
    details: "Organic seasonal grains & local vegetable plates", 
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&q=80",
    items: ["Wild Mushroom Cream Risotto", "Heirloom Stuffed Bell Peppers", "Toasted Walnut Quinoa Salad", "Grilled Farmers Market Board", "Mozzarella & Caprese Tower"]
  },
  { 
    id: 3, 
    title: "Grand Sides", 
    details: "Warm artisanal breads & roasted farm roots", 
    image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=600&q=80",
    items: ["Roasted Garlic Mashed Potatoes", "Honey-Glazed Seasonal Roots", "Artisan Warm Sourdough Basket", "Classic Organic Caesar Salad", "Luxury Four-Cheese Macaroni"]
  },
];

const BuffetMenu: React.FC = () => {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    setHeroVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <Header />

      {/* Hero Section */}
      <div 
        className="relative flex items-center justify-center text-center overflow-hidden"
        style={{
          height: '70vh',
          marginTop: '80px',
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url("https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=1600&q=80")`,
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
              Best for: Large groups, celebrations
            </p>
            <h1 className="text-4xl md:text-6xl font-light text-white mb-6 animate-fade-in" style={{ fontFamily: 'Libre Baskerville, Georgia, serif' }}>
              Buffet Experience
            </h1>
            <p className="text-xl md:text-2xl font-light text-white/95 max-w-2xl mx-auto">
              Grand banquet spreads, multiple hot entrées, and signature sides composed for celebratory dining.
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

      {/* The Grand Spread Stack Section (Redesigned with brand styling) */}
      <section className="bg-[#5B2E34] py-32 px-6 overflow-hidden relative border-y border-[#C4A46A]/20 mt-8">
        {/* Gold overlay elements to align with premium brand aesthetics */}
        <div className="gold-flair" />
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20 relative z-10">
          
          {/* Left: Interactive 3D Stack */}
          <div className="relative w-full lg:w-1/2 h-[480px] flex justify-center items-center">
            {buffetData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ x: 0, rotate: 0, opacity: 0 }}
                whileInView={{ 
                  x: (index - 1) * 60, // Fans them out
                  rotate: (index - 1) * 8, 
                  opacity: 1 
                }}
                viewport={{ once: true }}
                whileHover={{ y: -20, rotate: 0, zIndex: 50, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 100, delay: index * 0.15 }}
                className="absolute w-72 h-[440px] bg-[#FFFDF9] rounded-lg shadow-2xl p-5 cursor-pointer origin-bottom border border-[#C4A46A]/20"
                style={{ zIndex: index }}
              >
                <div className="h-48 w-full bg-[#C9C3BA]/20 rounded-md overflow-hidden mb-6 border border-[#C9C3BA]/40">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <h4 className="text-xl text-[#5B2E34] font-normal" style={{ fontFamily: 'Libre Baskerville, Georgia, serif' }}>{item.title}</h4>
                <p className="text-[10px] tracking-widest text-[#C4A46A] uppercase font-semibold mt-1">
                  {item.details}
                </p>
                <div className="mt-4 space-y-1">
                  {item.items.slice(0, 3).map((menuItem, itemIndex) => (
                    <div key={itemIndex} className="text-xs text-foreground/80 flex items-center gap-2 font-light">
                      <span className="w-1 h-1 bg-[#C4A46A] rounded-full"></span>
                      {menuItem}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Content & Call to Action */}
          <div className="w-full lg:w-1/2 text-white">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#C4A46A] text-xs tracking-[0.4em] uppercase font-bold">
                Timeless Culinary spreads
              </span>
              <h2 className="text-4xl md:text-5xl mt-4 mb-8 leading-tight font-light" style={{ fontFamily: 'Libre Baskerville, Georgia, serif' }}>
                The Buffet <span className="italic text-[#C4A46A] font-light">Feast</span>
              </h2>
              
              <ul className="space-y-6 mb-12 font-light text-white/90">
                <li className="flex items-center gap-4 border-b border-white/10 pb-4">
                  <span className="w-2 h-2 bg-[#C4A46A] rotate-45" />
                  <span className="text-lg">Multiple Hand-Carved Entrées & Organic Sides</span>
                </li>
                <li className="flex items-center gap-4 border-b border-white/10 pb-4">
                  <span className="w-2 h-2 bg-[#C4A46A] rotate-45" />
                  <span className="text-lg">Dietary-Conscious & Vegetarian Hot Trays</span>
                </li>
                <li className="flex items-center gap-4 border-b border-white/10 pb-4">
                  <span className="w-2 h-2 bg-[#C4A46A] rotate-45" />
                  <span className="text-lg">Styled Sweet Tables & Interactive Action Bars</span>
                </li>
              </ul>

              <div className="flex gap-4">
                <Link 
                  to="/book-event"
                  className="px-8 py-4 bg-[#C4A46A] text-[#5B2E34] text-xs tracking-[0.2em] font-bold hover:bg-white transition-all uppercase rounded shadow-md"
                >
                  Request a Quote
                </Link>
                <a 
                  href="#complete-offerings"
                  className="px-8 py-4 border border-white/40 text-white text-xs tracking-[0.2em] font-bold hover:bg-white hover:text-[#5B2E34] transition-all uppercase rounded text-center"
                >
                  View Menu List
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative Background Text */}
        <div className="absolute -bottom-20 -left-10 opacity-[0.03] pointer-events-none">
          <h1 className="text-[20rem] font-bold" style={{ fontFamily: 'Libre Baskerville, Georgia, serif' }}>FEAST</h1>
        </div>
      </section>

      {/* Detailed Menu Sections (Redesigned with brand styling) */}
      <section id="complete-offerings" className="py-24 px-6 md:px-8 bg-[#FFFDF9] scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-light text-[#5B2E34] mb-4" style={{ fontFamily: 'Libre Baskerville, Georgia, serif' }}>
              Complete Buffet Offerings
            </h3>
            <div className="w-24 h-[1px] bg-[#C4A46A] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {buffetData.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                className="bg-background rounded-xl border border-[#C9C3BA]/30 p-8 shadow-soft"
              >
                <div className="w-12 h-12 bg-[#5B2E34] rounded-full flex items-center justify-center text-lg font-bold text-[#F5F5DC] mb-6 shadow-sm">
                  {category.id}
                </div>
                <h4 className="text-2xl font-normal text-[#5B2E34] mb-4" style={{ fontFamily: 'Libre Baskerville, Georgia, serif' }}>
                  {category.title}
                </h4>
                <p className="text-[#C4A46A] text-xs font-semibold uppercase tracking-wider mb-6">{category.details}</p>
                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-[#C4A46A] rounded-full"></span>
                      <span className="text-sm text-foreground/85 font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Elegant Contact CTA Panel */}
      <div className="bg-[#FFFDF9] border border-[#C4A46A]/20 rounded-2xl shadow-soft p-12 text-center mt-16 max-w-4xl mx-auto mb-24 px-6 md:px-8">
        <h3 className="text-3xl font-light text-[#5B2E34] mb-4" style={{ fontFamily: 'Libre Baskerville, Georgia, serif' }}>
          Schedule a Grand Feast
        </h3>
        <p className="text-lg text-foreground/80 mb-8 font-light max-w-2xl mx-auto">
          Contact our specialized planners today to co-create a perfect, abundant buffet progression for your guests.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/book-event"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#5B2E34] text-[#F5F5DC] font-medium tracking-wider hover:bg-[#5B2E34]/90 transition-all rounded shadow-soft uppercase text-sm"
          >
            Request a Proposal
          </Link>
          <button className="inline-flex items-center justify-center px-8 py-4 border border-[#5B2E34] text-[#5B2E34] hover:bg-[#5B2E34] hover:text-white transition-all rounded uppercase text-sm font-medium">
            Schedule Consultation
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BuffetMenu;
