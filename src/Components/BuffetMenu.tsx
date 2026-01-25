import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
    details: "Carved roasts & signature poultry", 
    image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&q=80",
    items: ["Prime Rib Carving Station", "Herb-Crusted Salmon", "Chicken Marsala", "Pork Tenderloin", "Grilled Lamb Chops"]
  },
  { 
    id: 2, 
    title: "Vegetarian Harvest", 
    details: "Seasonal grains & garden delicacies", 
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&q=80",
    items: ["Wild Mushroom Risotto", "Stuffed Bell Peppers", "Quinoa Salad", "Grilled Vegetable Platter", "Caprese Tower"]
  },
  { 
    id: 3, 
    title: "Grand Sides", 
    details: "Artisanal breads & roasted roots", 
    image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=600&q=80",
    items: ["Garlic Mashed Potatoes", "Roasted Seasonal Vegetables", "Artisan Bread Basket", "Caesar Salad", "Macaroni & Cheese Bar"]
  },
];

const BuffetMenu: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=1600&q=80"
            alt="Buffet Experience"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center text-white">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-6xl font-light mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Buffet <span className="italic">Experience</span>
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90">
              Large Groups & Celebrations
            </p>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="py-5 px-10 text-sm">
        <Link to="/menu" className="text-brass hover:underline">
          ← Back to All Menus
        </Link>
      </div>

      {/* The Grand Spread */}
      <section className="bg-ink-navy py-32 px-6 overflow-hidden relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          
          {/* Left: Interactive 3D Stack */}
          <div className="relative w-full lg:w-1/2 h-[500px] flex justify-center items-center">
            {buffetData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ x: 0, rotate: 0, opacity: 0 }}
                whileInView={{ 
                  x: (index - 1) * 60, // Fans them out
                  rotate: (index - 1) * 10, 
                  opacity: 1 
                }}
                viewport={{ once: true }}
                whileHover={{ y: -20, rotate: 0, zIndex: 50, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 100, delay: index * 0.2 }}
                className="absolute w-72 h-[450px] bg-light-cream rounded-lg shadow-2xl p-4 cursor-pointer origin-bottom"
                style={{ zIndex: index }}
              >
                <div className="h-2/3 w-full bg-gray-200 rounded-md overflow-hidden mb-6">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </div>
                <h4 className="text-xl text-ink-navy" style={{ fontFamily: 'Playfair Display, serif' }}>{item.title}</h4>
                <p className="text-xs text-gray-500 uppercase tracking-widest mt-2">
                  {item.details}
                </p>
                <div className="mt-4 space-y-1">
                  {item.items.slice(0, 3).map((menuItem, itemIndex) => (
                    <div key={itemIndex} className="text-xs text-gray-400 flex items-center gap-2">
                      <span className="w-1 h-1 bg-brass rounded-full"></span>
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-brass text-xs tracking-[0.4em] uppercase font-bold">
                Large Groups & Celebrations
              </span>
              <h2 className="text-6xl mt-6 mb-8 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                Buffet <span className="italic text-blue-200">Experience</span>
              </h2>
              
              <ul className="space-y-6 mb-12">
                <li className="flex items-center gap-4 border-b border-white/10 pb-4">
                  <span className="w-2 h-2 bg-brass rotate-45" />
                  <span className="text-lg">Multiple Entrées & Signature Sides</span>
                </li>
                <li className="flex items-center gap-4 border-b border-white/10 pb-4">
                  <span className="w-2 h-2 bg-brass rotate-45" />
                  <span className="text-lg">Vegetarian & Protein-First Options</span>
                </li>
                <li className="flex items-center gap-4 border-b border-white/10 pb-4">
                  <span className="w-2 h-2 bg-brass rotate-45" />
                  <span className="text-lg">Dedicated Dessert & Sweet Stations</span>
                </li>
              </ul>

              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#FAF9F6", color: "#0A1128" }}
                  className="px-10 py-5 border-2 border-light-cream text-xs tracking-[0.3em] font-bold transition-all uppercase"
                >
                  View Full Menu
                </motion.button>
                <Link 
                  to="/book-event"
                  className="px-10 py-5 bg-brass text-ink-navy text-xs tracking-[0.3em] font-bold hover:bg-light-cream transition-all uppercase"
                >
                  Get Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Background Decorative Text */}
        <div className="absolute -bottom-20 -left-10 opacity-[0.03] pointer-events-none">
          <h1 className="text-[20rem] font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>FEAST</h1>
        </div>
      </section>

      {/* Detailed Menu Sections */}
      <section className="py-20 px-6 bg-light-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-light mb-4 text-ink-navy" style={{ fontFamily: 'Playfair Display, serif' }}>
              Complete Buffet Offerings
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-brass to-brass/50 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {buffetData.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <div className="w-16 h-16 bg-brass rounded-full flex items-center justify-center text-2xl font-bold text-white mb-6">
                  {category.id}
                </div>
                <h4 className="text-2xl font-light text-ink-navy mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {category.title}
                </h4>
                <p className="text-gray-600 mb-6">{category.details}</p>
                <div className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-brass rounded-full"></span>
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <div className="bg-ink-navy rounded-xl shadow-lg p-12 text-center mt-16 max-w-4xl mx-auto mb-20">
        <h3 className="text-3xl font-light mb-4 text-light-cream" style={{ fontFamily: 'Playfair Display, serif' }}>
          Ready for a Grand Feast?
        </h3>
        <p className="text-lg text-gray-300 mb-8">
          Let's create a memorable buffet experience for your celebration
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/book-event"
            className="inline-flex items-center justify-center px-8 py-4 bg-brass text-ink-navy font-medium tracking-wide hover:bg-light-cream transition-colors duration-300"
          >
            Request a Quote
          </Link>
          <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-brass text-brass font-medium tracking-wide hover:bg-brass hover:text-ink-navy transition-colors duration-300">
            Schedule Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuffetMenu;
