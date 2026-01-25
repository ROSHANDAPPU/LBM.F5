import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const CorporateCateringMenu = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // 3D Tilt Logic for Hero Card
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const menuCategories = [
    {
      icon: "☕",
      title: "Executive Breakfast",
      description: "Start your day right with energizing morning selections",
      items: [
        {
          name: "Continental Breakfast Spread",
          price: "$18/person",
          description: "Fresh pastries, seasonal fruit, yogurt parfaits, artisan coffee and tea service. Perfect for early morning meetings.",
          details: ["Min. 10 guests", "Setup included"],
          dietary: ["V", "GF"]
        },
        {
          name: "Power Breakfast Buffet",
          price: "$26/person",
          description: "Scrambled eggs, breakfast meats, roasted potatoes, fresh fruit, pastries, and premium coffee bar with oat milk alternatives.",
          details: ["Hot service", "2-hour setup"],
          dietary: ["GF"]
        },
        {
          name: "Healthy Start Station",
          price: "$22/person",
          description: "Overnight oats bar, açai bowls, green smoothies, avocado toast station, and cold-pressed juice selection.",
          details: ["Build-your-own", "Wellness focused"],
          dietary: ["VG", "GF", "NF"]
        }
      ]
    },
    {
      icon: "🥗",
      title: "Boxed Lunches & Working Meals",
      description: "Convenient, elegant individual portions for busy professionals",
      items: [
        {
          name: "Classic Boxed Lunch",
          price: "$16/box",
          description: "Choice of sandwich or wrap, side salad, chips, fresh fruit, dessert cookie, and bottled beverage. Individually packaged for hygiene and convenience.",
          details: ["5 protein options", "Eco packaging"],
          dietary: []
        },
        {
          name: "Gourmet Salad Bowl",
          price: "$19/box",
          description: "Build-your-own premium salad with grilled protein, artisan greens, roasted vegetables, house-made dressing, and artisan bread.",
          details: ["Customizable", "Fresh daily"],
          dietary: ["V", "GF"]
        },
        {
          name: "Executive Bento Box",
          price: "$24/box",
          description: "Elevated presentation with protein centerpiece, two seasonal sides, artisan accompaniments, and premium dessert. Impressive for client meetings.",
          details: ["Premium tier", "Elegant presentation"],
          dietary: []
        }
      ]
    },
    {
      icon: "🍽️",
      title: "Plated Dinners",
      description: "Multi-course fine dining for receptions and galas",
      items: [
        {
          name: "Three-Course Executive Dinner",
          price: "$68/person",
          description: "Seasonal salad, choice of protein entrée with vegetables and starch, and plated dessert. Full service with professional waitstaff.",
          details: ["Full service", "China & glassware"],
          dietary: []
        },
        {
          name: "Wine-Paired Chef's Tasting",
          price: "$125/person",
          description: "Five-course progression with wine pairings, amuse-bouche, and palate cleansers. Our signature experience for high-profile events.",
          details: ["Sommelier service", "Premium wines"],
          dietary: []
        }
      ]
    }
  ];

  const getDietaryTitle = (code: string) => {
    const titles: { [key: string]: string } = {
      "V": "Vegetarian",
      "VG": "Vegan",
      "GF": "Gluten-free options",
      "NF": "Nut-free available"
    };
    return titles[code] || code;
  };

  return (
    <div ref={sectionRef} className="min-h-screen">
      {/* Hero Section with 3D Tilt Effect */}
      <div className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1600&q=80"
            alt="Corporate Catering"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center text-white">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-6xl font-light mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Corporate Catering
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90">
              Elevated dining experiences for meetings, receptions, and executive events
            </p>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="py-5 px-10 text-sm">
        <Link to="/corporate" className="text-reserved-burgundy hover:underline">
          ← Back to Corporate Services
        </Link>
      </div>

      {/* Enhanced 3D Hero Section */}
      <motion.section 
        className="bg-[#0A1128] py-24 px-10 text-white"
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
            className="relative h-[500px] w-full bg-gradient-to-br from-reserved-burgundy to-black rounded-2xl overflow-hidden shadow-2xl shadow-reserved-burgundy/20"
          >
            <img 
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80" 
              className="absolute inset-0 w-full h-full object-cover opacity-60" 
              alt="Executive Dining" 
            />
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
            <div style={{ transform: "translateZ(50px)" }} className="absolute inset-0 flex flex-col justify-end p-12">
               <h2 className="text-4xl mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                 Corporate <span className="italic">Excellence</span>
               </h2>
               <p className="text-sm tracking-[0.3em] text-brass uppercase">
                 Meetings • Receptions • Plated Dinners
               </p>
            </div>
          </motion.div>

          <div className="space-y-8">
            {[
              { title: 'Executive Breakfast', desc: 'Continental spreads, power breakfast buffets, healthy start stations' },
              { title: 'Boxed Lunches', desc: 'Classic boxed lunches, gourmet salad bowls, executive bento boxes' },
              { title: 'Plated Dinners', desc: 'Three-course executive dinners, wine-paired chef\'s tastings' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="group p-6 border-l border-white/10 hover:border-brass hover:bg-white/5 transition-all cursor-pointer"
              >
                <h4 className="text-xl font-light group-hover:text-brass transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {item}
                </h4>
                <p className="text-gray-400 text-sm mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-10 py-16">
        {/* Menu Intro */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Professional Excellence, Every Time
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Our corporate catering menu is designed to impress clients, energize teams, and elevate any professional gathering. 
            From morning coffee service to elegant plated dinners, each offering is crafted with precision and care.
          </p>
          <button className="inline-flex items-center px-10 py-4 bg-reserved-burgundy text-white font-medium tracking-wide hover:bg-reserved-burgundy/90 transition-colors duration-300">
            📥 Download Full PDF Menu
          </button>
        </div>

        {/* Menu Categories */}
        {menuCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-20">
            <div className="flex items-center gap-5 mb-10 pb-5 border-b-2 border-reserved-burgundy">
              <div className="text-5xl">{category.icon}</div>
              <div>
                <h3 className="text-3xl font-light text-reserved-burgundy mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {category.title}
                </h3>
                <p className="text-gray-600 italic">{category.description}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((item, itemIndex) => (
                <div 
                  key={itemIndex}
                  className={`bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                    visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${(categoryIndex * 100) + (itemIndex * 50)}ms` }}
                >
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-xl font-light text-gray-900 flex-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {item.name}
                      </h4>
                      <span className="text-lg font-semibold text-reserved-burgundy ml-4 whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                      {item.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {item.details.map((detail, detailIndex) => (
                        <span 
                          key={detailIndex}
                          className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-600 uppercase tracking-wide"
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
                            className="w-6 h-6 bg-reserved-burgundy text-white rounded-full flex items-center justify-center text-xs font-bold"
                            title={getDietaryTitle(code)}
                          >
                            {code}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Contact CTA */}
        <div className="bg-white rounded-xl shadow-lg p-12 text-center mt-16">
          <h3 className="text-3xl font-light mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Ready to Plan Your Event?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Let's discuss how we can create the perfect menu for your corporate gathering
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/book-event"
              className="inline-flex items-center justify-center px-8 py-4 bg-reserved-burgundy text-white font-medium tracking-wide hover:bg-reserved-burgundy/90 transition-colors duration-300"
            >
              Request a Quote
            </Link>
            <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-reserved-burgundy text-reserved-burgundy font-medium tracking-wide hover:bg-reserved-burgundy hover:text-white transition-colors duration-300">
              Schedule Tasting
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateCateringMenu;
