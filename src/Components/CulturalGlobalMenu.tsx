import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const CulturalGlobalMenu = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Moves the content horizontally based on vertical scroll
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);
  // Individual parallax for images to create 3D depth
  const imgX = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const menuCategories = [
    {
      title: "Latin Soul",
      subtitle: "Achiote • Citrus • Fire",
      description: "Bold spices, citrus infusions, and traditional street-food elegance.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
      items: [
        "Tacos al pastor with pineapple",
        "Ceviche with plantain chips",
        "Empanadas with chimichurri",
        "Churros with dulce de leche",
        "Mole poblano with rice"
      ],
      panelPosition: "bottom",
      panelColor: "white"
    },
    {
      title: "Mediterranean",
      subtitle: "Olive • Saffron • Sea",
      description: "Heart-healthy oils, fresh herbs, and sun-drenched coastal flavors.",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
      items: [
        "Greek mezze platter",
        "Lamb kofta with tzatziki",
        "Seafood paella",
        "Baklava with honey syrup",
        "Grilled octopus with herbs"
      ],
      panelPosition: "top",
      panelColor: "ink-navy"
    },
    {
      title: "Asian Fusion",
      subtitle: "Umami • Ginger • Zen",
      description: "A harmony of umami, delicate textures, and modern presentation.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
      items: [
        "Sushi roll assortment",
        "Thai curry station",
        "Dim sum selection",
        "Mochi ice cream trio",
        "Wok-fried noodles"
      ],
      panelPosition: "center",
      panelColor: "reserved-burgundy"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&q=80"
            alt="Cultural Fusion Cuisine"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center text-white">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-6xl font-light mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Cultural & <span className="italic">Global-Inspired</span>
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90">
              Brand activations & diverse celebrations
            </p>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="py-5 px-10 text-sm">
        <Link to="/menu" className="text-reserved-burgundy hover:underline">
          ← Back to All Menus
        </Link>
      </div>

      {/* The Storytelling Scroll */}
      <section ref={targetRef} className="relative h-[300vh] bg-[#F4F1EA]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-24 px-20">
            
            {/* Introductory Story Panel */}
            <div className="flex h-[600px] w-[500px] flex-col justify-center shrink-0">
              <span className="text-xs tracking-[0.4em] text-reserved-burgundy uppercase mb-4 font-bold">
                A Passport of Flavors
              </span>
              <h2 className="text-7xl leading-tight text-ink-navy" style={{ fontFamily: 'Playfair Display, serif' }}>
                Cultural & <br />
                <span className="italic font-light">Global</span>
              </h2>
              <p className="text-gray-600 mt-8 leading-relaxed text-lg">
                From the vibrant spice markets of Asia to the sun-drenched coasts 
                of the Mediterranean, we translate heritage into high-end culinary experiences.
              </p>
              
              <div className="mt-12 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-reserved-burgundy rounded-full"></div>
                  <span className="text-sm text-gray-500">Authentic Recipes</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-brass rounded-full"></div>
                  <span className="text-sm text-gray-500">Cultural Storytelling</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-ink-navy rounded-full"></div>
                  <span className="text-sm text-gray-500">Premium Ingredients</span>
                </div>
              </div>
            </div>

            {/* Menu Categories with Parallax */}
            {menuCategories.map((category, index) => (
              <div 
                key={index}
                className={`relative h-[600px] w-[450px] shrink-0 group ${
                  index === 1 ? 'mt-20' : ''
                }`}
              >
                <motion.div 
                  style={{ x: imgX }} 
                  className="h-4/5 w-full overflow-hidden rounded-sm shadow-2xl"
                >
                  <img 
                    src={category.image} 
                    className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                    alt={category.title}
                  />
                </motion.div>
                
                {/* Dynamic Panel Positioning */}
                {category.panelPosition === 'bottom' && (
                  <div className="absolute bottom-0 left-0 bg-white p-8 shadow-xl -ml-10">
                    <h3 className="text-3xl text-ink-navy" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {category.title}
                    </h3>
                    <p className="text-xs text-gray-400 mt-2 uppercase tracking-widest">
                      {category.subtitle}
                    </p>
                    <div className="mt-4 space-y-1">
                      {category.items.slice(0, 3).map((item, itemIndex) => (
                        <div key={itemIndex} className="text-xs text-gray-300 flex items-center gap-2">
                          <span className="w-1 h-1 bg-reserved-burgundy rounded-full"></span>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {category.panelPosition === 'top' && (
                  <div className="absolute top-10 right-0 bg-ink-navy text-white p-8 shadow-xl -mr-10 z-10">
                    <h3 className="text-3xl" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {category.title}
                    </h3>
                    <p className="text-xs text-blue-200 mt-2 uppercase tracking-widest">
                      {category.subtitle}
                    </p>
                    <div className="mt-4 space-y-1">
                      {category.items.slice(0, 3).map((item, itemIndex) => (
                        <div key={itemIndex} className="text-xs text-blue-100 flex items-center gap-2">
                          <span className="w-1 h-1 bg-brass rounded-full"></span>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {category.panelPosition === 'center' && (
                  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-reserved-burgundy text-white p-8 shadow-xl w-64 text-center">
                    <h3 className="text-3xl" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {category.title}
                    </h3>
                    <p className="text-xs text-red-100 mt-2 uppercase tracking-widest">
                      {category.subtitle}
                    </p>
                    <div className="mt-4 space-y-1">
                      {category.items.slice(0, 3).map((item, itemIndex) => (
                        <div key={itemIndex} className="text-xs text-red-100 flex items-center justify-center gap-2">
                          <span className="w-1 h-1 bg-brass rounded-full"></span>
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

      {/* Flavor Profile Section */}
      <section className="py-20 px-6 bg-stone">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-light mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Flavor Profiles
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-brass to-brass/50 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Spice & Heat", color: "bg-red-500", description: "Chili, paprika, cayenne" },
              { name: "Fresh & Herbal", color: "bg-green-500", description: "Cilantro, basil, mint" },
              { name: "Rich & Savory", color: "bg-yellow-600", description: "Saffron, turmeric, cumin" }
            ].map((profile, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className={`w-20 h-20 ${profile.color} rounded-full mx-auto mb-4`}></div>
                <h4 className="text-xl font-serif mb-2">{profile.name}</h4>
                <p className="text-gray-600">{profile.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <div className="bg-white rounded-xl shadow-lg p-12 text-center mt-16 max-w-4xl mx-auto">
        <h3 className="text-3xl font-light mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
          Ready to Explore Global Flavors?
        </h3>
        <p className="text-lg text-gray-600 mb-8">
          Let's create a cultural dining experience that tells your story
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/book-event"
            className="inline-flex items-center justify-center px-8 py-4 bg-reserved-burgundy text-white font-medium tracking-wide hover:bg-reserved-burgundy/90 transition-colors duration-300"
          >
            Request a Quote
          </Link>
          <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-reserved-burgundy text-reserved-burgundy font-medium tracking-wide hover:bg-reserved-burgundy hover:text-white transition-colors duration-300">
            Schedule Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default CulturalGlobalMenu;
