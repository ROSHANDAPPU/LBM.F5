import React, { useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';

const DessertSweetMenu = () => {
  const [hovered, setHovered] = useState(null);
  const { scrollYProgress } = useScroll();
  
  // Parallax effect: items move up at different speeds
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // Interactive Mouse Tracking for Floating Cards
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    x.set(clientX / 50); // Divides movement so it's subtle
    y.set(clientY / 50);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const items = [
    { 
      id: '01', 
      title: "Mini Desserts", 
      desc: "Bite-sized elegance for effortless mingling.",
      img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&q=80",
      details: ["Macarons", "Petite Fours", "Tartlets", "Mini Cheesecakes", "Chocolate Truffles"]
    },
    { 
      id: '02', 
      title: "Dessert Bars", 
      desc: "Interactive stations with curated sweet pairings.",
      img: "https://images.unsplash.com/photo-1564355808539-22fda35bed61?w=400&q=80",
      details: ["Donut Walls", "Gelato Stations", "Chocolate Fountains", "Candy Buffets", "S'mores Stations"]
    },
    { 
      id: '03', 
      title: "Edible Art", 
      desc: "Custom-sculpted sweets tailored to your event theme.",
      img: "https://images.unsplash.com/photo-1578982947148-285d2c9f2d57?w=400&q=80",
      details: ["Custom Logo Cookies", "Sugar Sculptures", "Hand-Painted Cakes", "Chocolate Art", "Isomalt Showpieces"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1551024506-0bccd828d307?w=1600&q=80"
            alt="Dessert & Sweet Menus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pink-100/80 via-pink-50/40 to-transparent"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-6xl font-light mb-6 text-gray-800" style={{ fontFamily: 'Playfair Display, serif' }}>
              Dessert & <span className="italic">Sweet Menus</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-gray-700">
              Receptions & Add-ons
            </p>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="py-5 px-10 text-sm">
        <Link to="/menu" className="text-pink-600 hover:underline">
          ← Back to All Menus
        </Link>
      </div>

      {/* The Floating Canvas */}
      <motion.section 
        className="bg-[#FAF9F6] py-32 overflow-hidden relative"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="text-center mb-20 relative z-10">
          <h2 className="text-7xl text-[#7a3043]" style={{ fontFamily: 'Playfair Display, serif' }}>
            Sweet <span className="italic text-gray-400">&</span> Edible Art
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            A celebration of the finishing touch—custom sweets designed for visual impact and refined flavor.
          </p>
        </div>

        <div className="flex justify-around items-center px-10">
          {/* Floating Card 1: Mini Desserts */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ x: mouseX, y: mouseY }}
            className="w-72 h-96 bg-white p-4 shadow-xl rounded-sm rotate-[-3deg]"
          >
            <div className="h-2/3 bg-gray-200 overflow-hidden rounded">
              <img 
                src={items[0].img} 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" 
                alt="Mini Desserts"
              />
            </div>
            <div className="pt-6 text-center">
              <h3 className="text-2xl text-[#7a3043]" style={{ fontFamily: 'Playfair Display, serif' }}>
                Mini Desserts
              </h3>
              <p className="text-xs uppercase tracking-tighter text-gray-500 mt-2">
                Custom Sweets & Edible Art
              </p>
              <div className="mt-4 space-y-1">
                {items[0].details.slice(0, 3).map((detail, index) => (
                  <div key={index} className="text-xs text-gray-400">
                    {detail}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Floating Card 2: Dessert Bars */}
          <motion.div 
            animate={{ y: [0, 25, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            style={{ x: mouseX, y: mouseY }}
            className="w-72 h-96 bg-white p-4 shadow-xl rounded-sm rotate-[2deg] mt-20"
          >
            <div className="h-2/3 bg-gray-200 overflow-hidden rounded">
              <img 
                src={items[1].img} 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" 
                alt="Dessert Bars"
              />
            </div>
            <div className="pt-6 text-center">
              <h3 className="text-2xl text-[#7a3043]" style={{ fontFamily: 'Playfair Display, serif' }}>
                Dessert Bars
              </h3>
              <p className="text-xs uppercase tracking-tighter text-gray-500 mt-2">
                Interactive Sweet Stations
              </p>
              <div className="mt-4 space-y-1">
                {items[1].details.slice(0, 3).map((detail, index) => (
                  <div key={index} className="text-xs text-gray-400">
                    {detail}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Floating Card 3: Edible Art */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            style={{ x: mouseX, y: mouseY }}
            className="w-72 h-96 bg-white p-4 shadow-xl rounded-sm rotate-[-1deg]"
          >
            <div className="h-2/3 bg-gray-200 overflow-hidden rounded">
              <img 
                src={items[2].img} 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" 
                alt="Edible Art"
              />
            </div>
            <div className="pt-6 text-center">
              <h3 className="text-2xl text-[#7a3043]" style={{ fontFamily: 'Playfair Display, serif' }}>
                Edible Art
              </h3>
              <p className="text-xs uppercase tracking-tighter text-gray-500 mt-2">
                Custom Sculpted Sweets
              </p>
              <div className="mt-4 space-y-1">
                {items[2].details.slice(0, 3).map((detail, index) => (
                  <div key={index} className="text-xs text-gray-400">
                    {detail}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ 
              x: [0, 30, 0], 
              y: [0, -30, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-20 w-16 h-16 bg-pink-200 rounded-full opacity-30"
          />
          <motion.div
            animate={{ 
              x: [0, -40, 0], 
              y: [0, 20, 0],
              rotate: [0, -8, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-32 right-32 w-24 h-24 bg-purple-200 rounded-full opacity-25"
          />
          <motion.div
            animate={{ 
              x: [0, 25, 0], 
              y: [0, 25, 0],
              rotate: [0, 3, 0]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-1/2 right-1/4 w-20 h-20 bg-yellow-200 rounded-full opacity-20"
          />
        </div>
      </motion.section>

      {/* Sweet Features Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#fff5f7] to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-light mb-4 text-gray-800" style={{ fontFamily: 'Playfair Display, serif' }}>
              Sweet Features
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-pink-300 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                name: "Custom Themes", 
                icon: "🎨", 
                description: "Personalized designs matching your event colors and branding",
                color: "bg-pink-100"
              },
              { 
                name: "Dietary Options", 
                icon: "🌱", 
                description: "Gluten-free, vegan, and allergen-friendly alternatives",
                color: "bg-green-100"
              },
              { 
                name: "Interactive Stations", 
                icon: "✨", 
                description: "Live dessert stations and DIY sweet experiences",
                color: "bg-purple-100"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`w-20 h-20 ${feature.color} rounded-full mx-auto mb-4 flex items-center justify-center text-3xl`}>
                  {feature.icon}
                </div>
                <h4 className="text-xl font-serif mb-2 text-gray-800">{feature.name}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <div className="bg-white rounded-xl shadow-lg p-12 text-center mt-16 max-w-4xl mx-auto mb-20">
        <h3 className="text-3xl font-light mb-4 text-gray-800" style={{ fontFamily: 'Playfair Display, serif' }}>
          Ready to Add Sweetness?
        </h3>
        <p className="text-lg text-gray-600 mb-8">
          Let's create custom desserts that make your event unforgettable
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/book-event"
            className="inline-flex items-center justify-center px-8 py-4 bg-pink-500 text-white font-medium tracking-wide hover:bg-pink-600 transition-colors duration-300"
          >
            Request a Quote
          </Link>
          <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-pink-500 text-pink-500 font-medium tracking-wide hover:bg-pink-500 hover:text-white transition-colors duration-300">
            Schedule Tasting
          </button>
        </div>
      </div>
    </div>
  );
};

export default DessertSweetMenu;
