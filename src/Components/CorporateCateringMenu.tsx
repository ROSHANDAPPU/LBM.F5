import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

const CorporateCateringMenu = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // 3D Tilt Logic for Hero Card
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  useEffect(() => {
    setHeroVisible(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const menuCategories = [
    {
      icon: "☕",
      title: "Executive Breakfast Spread",
      description: "Start your day with energizing and beautifully arranged morning selections",
      items: [
        {
          name: "Continental Breakfast Spread",
          price: "$18/person",
          description: "Freshly baked artisan pastries, seasonal berry bowls, Greek yogurt parfaits with local honey, selection of premium coffee and organic tea service.",
          details: ["Min. 10 guests", "Full Setup Included"],
          dietary: ["V", "GF"]
        },
        {
          name: "Power Breakfast Buffet",
          price: "$26/person",
          description: "Fluffy scrambled farm eggs, house-cured breakfast meats, garlic-roasted potatoes, seasonal fruits, assortment of pastries, and a premium espresso bar.",
          details: ["Hot Service", "2-hour Setup"],
          dietary: ["GF"]
        },
        {
          name: "Healthy Start Wellness Station",
          price: "$22/person",
          description: "Overnight chia seed pudding, customized açai bowl station, organic green juices, artisan avocado toast bar with heirloom tomatoes, and cold-pressed juice blends.",
          details: ["Build-Your-Own", "Wellness Focused"],
          dietary: ["VG", "GF"]
        }
      ]
    },
    {
      icon: "🥗",
      title: "Boxed Lunches & Working Meals",
      description: "Convenient, gourmet individual portions designed for seamless corporate meetings",
      items: [
        {
          name: "Classic Gourmet Boxed Lunch",
          price: "$16/box",
          description: "Your choice of premium signature sandwich or artisan wrap, baby field greens salad, kettle chips, fresh whole fruit, and our signature sea-salt chocolate chip cookie.",
          details: ["Individually Packaged", "Eco-Friendly Boxes"],
          dietary: []
        },
        {
          name: "Artisan Salad Bowl",
          price: "$19/box",
          description: "Hand-selected mixed greens, grilled chicken or tofu, roasted root vegetables, candied walnuts, goat cheese, with house-made balsamic vinaigrette.",
          details: ["Customizable Proteins", "Fresh Daily"],
          dietary: ["V", "GF"]
        },
        {
          name: "Executive Bento Selection",
          price: "$24/box",
          description: "An elegant presentation featuring a central gourmet protein, two seasonal signature sides, artisanal accompaniments, and a handcrafted dessert.",
          details: ["Premium Presentation", "Client Meetings"],
          dietary: []
        }
      ]
    },
    {
      icon: "🍽️",
      title: "Executive Plated Dinners",
      description: "Sophisticated multi-course fine dining for private corporate receptions and galas",
      items: [
        {
          name: "Three-Course Premium Dinner",
          price: "$68/person",
          description: "Artisanal baby field greens salad, your choice of tenderloin or pan-roasted sea bass with seasonal starch and reduction, followed by a custom plated dessert.",
          details: ["Full Waitstaff Service", "Premium Tableware"],
          dietary: []
        },
        {
          name: "Wine-Paired Chef's Tasting Menu",
          price: "$125/person",
          description: "A signature five-course culinary progression curated by our executive chef, perfectly paired with hand-selected boutique wines.",
          details: ["Sommelier Service Included", "Boutique Wine Pairings"],
          dietary: []
        }
      ]
    }
  ];

  const getDietaryTitle = (code: string) => {
    const titles: { [key: string]: string } = {
      "V": "Vegetarian",
      "VG": "Vegan",
      "GF": "Gluten-Free Options Available"
    };
    return titles[code] || code;
  };

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <Header />

      {/* Hero Section */}
      <div 
        className="relative flex items-center justify-center text-center overflow-hidden"
        style={{
          height: '70vh',
          marginTop: '80px',
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url("https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1600&q=80")`,
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
              Best for: Meetings, quarterly events, client receptions
            </p>
            <h1 className="text-4xl md:text-6xl font-light text-white mb-6 animate-fade-in" style={{ fontFamily: 'Libre Baskerville, Georgia, serif' }}>
              Corporate Catering
            </h1>
            <p className="text-xl md:text-2xl font-light text-white/95 max-w-2xl mx-auto">
              Sophisticated, elevated culinary experiences designed to make every corporate event exceptional.
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

      {/* Premium 3D Hero Feature Section (Redesigned to fit brand guidelines) */}
      <motion.section 
        className="bg-gradient-to-b from-[#F5F5DC]/40 to-[#C9C3BA]/30 py-24 px-6 md:px-8 mt-8 border-y border-[#C9C3BA]/40"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ 
              rotateX, 
              rotateY, 
              transformStyle: "preserve-3d" 
            }}
            className="relative h-[480px] w-full bg-gradient-to-br from-[#5B2E34] to-[#3a1b20] rounded-2xl overflow-hidden shadow-xl border border-[#C4A46A]/20"
          >
            <img 
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80" 
              className="absolute inset-0 w-full h-full object-cover opacity-35" 
              alt="Executive Dining" 
            />
            <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />
            
            {/* Elegant flair effect to match site style */}
            <div className="gold-flair" />
            
            <div style={{ transform: "translateZ(50px)" }} className="absolute inset-0 flex flex-col justify-end p-12">
               <h2 className="text-4xl text-white mb-4" style={{ fontFamily: 'Libre Baskerville, Georgia, serif' }}>
                 Corporate <span className="italic font-light text-[#C4A46A]">Excellence</span>
               </h2>
               <p className="text-sm tracking-[0.3em] text-[#C4A46A] uppercase font-semibold">
                 Meetings • Receptions • Plated Dinners
               </p>
            </div>
          </motion.div>

          <div className="space-y-8">
            {[
              { title: 'Executive Breakfast', desc: 'Curated continental spreads, warm power buffets, and healthy wellness stations to start the day with focus.' },
              { title: 'Working Luncheons', desc: 'Individually portioned boxed meals, premium customized salads, and elaborate bento trays designed for executive boardrooms.' },
              { title: 'Bespoke Plated Dinners', desc: 'Multi-course formal dinner services and exclusive tasting experiences curated by our master chefs.' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15 }}
                className="group p-6 border-l-2 border-[#C9C3BA] hover:border-[#C4A46A] hover:bg-[#C9C3BA]/15 transition-all cursor-pointer rounded-r-lg"
              >
                <h4 className="text-xl font-medium text-[#5B2E34] group-hover:text-[#C4A46A] transition-colors" style={{ fontFamily: 'Libre Baskerville, Georgia, serif' }}>
                  {item.title}
                </h4>
                <p className="text-foreground/80 text-sm mt-2 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        {/* Menu Intro */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-[#5B2E34] mb-6" style={{ fontFamily: 'Libre Baskerville, Georgia, serif' }}>
            Professional Dining, Perfectly Executed
          </h2>
          <p className="text-lg text-foreground/85 leading-relaxed font-light mb-8">
            Our corporate catering menus are structured to impress prospective clients, delight valued teams, and elevate professional settings. 
            Each ingredient is selected for peak freshness, and each platter is styled to provide a premium feast.
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-[#5B2E34] text-[#F5F5DC] font-medium tracking-wider hover:bg-[#5B2E34]/90 transition-all rounded shadow-soft hover:shadow-md uppercase text-sm">
            📥 Download Full PDF Menu
          </button>
        </div>

        {/* Menu Categories */}
        {menuCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-24">
            <div className="flex items-center gap-5 mb-12 pb-5 border-b border-[#C4A46A]/30">
              <div className="text-4xl">{category.icon}</div>
              <div>
                <h3 className="text-2xl md:text-3xl font-light text-[#5B2E34] mb-2" style={{ fontFamily: 'Libre Baskerville, Georgia, serif' }}>
                  {category.title}
                </h3>
                <p className="text-foreground/75 italic font-light text-sm">{category.description}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((item, itemIndex) => (
                <div 
                  key={itemIndex}
                  className="bg-[#FFFDF9] rounded-lg border border-[#C9C3BA]/40 hover:border-[#C4A46A] shadow-soft hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div className="p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-4 gap-4">
                        <h4 className="text-xl font-normal text-[#5B2E34] leading-tight" style={{ fontFamily: 'Libre Baskerville, Georgia, serif' }}>
                          {item.name}
                        </h4>
                        <span className="text-lg font-semibold text-[#C4A46A] whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>
                      
                      <p className="text-foreground/80 leading-relaxed mb-6 text-sm font-light">
                        {item.description}
                      </p>
                    </div>
                    
                    <div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {item.details.map((detail, detailIndex) => (
                          <span 
                            key={detailIndex}
                            className="text-xs px-3 py-1 bg-[#C9C3BA]/20 rounded-full text-foreground/80 font-medium tracking-wide"
                          >
                            {detail}
                          </span>
                        ))}
                      </div>
                      
                      {item.dietary.length > 0 && (
                        <div className="flex gap-2">
                          {item.dietary.map((code, dietaryIndex) => (
                            <div 
                              key={dietaryIndex}
                              className="w-7 h-7 bg-[#5B2E34] text-[#F5F5DC] rounded-full flex items-center justify-center text-xs font-bold shadow-sm"
                              title={getDietaryTitle(code)}
                            >
                              {code}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Elegant Contact CTA Panel */}
        <div className="bg-[#FFFDF9] border border-[#C4A46A]/20 rounded-2xl shadow-soft p-12 text-center mt-16 max-w-4xl mx-auto">
          <h3 className="text-3xl font-light text-[#5B2E34] mb-4" style={{ fontFamily: 'Libre Baskerville, Georgia, serif' }}>
            Ready to Plan Your Occasion?
          </h3>
          <p className="text-lg text-foreground/80 mb-8 font-light max-w-2xl mx-auto">
            Contact us today to discuss how we can compose the perfect curated menu for your corporate reception or event.
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
      </div>

      <Footer />
    </div>
  );
};

export default CorporateCateringMenu;
