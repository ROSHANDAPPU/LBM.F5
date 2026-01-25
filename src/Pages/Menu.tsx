import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import Footer from "@/Components/Footer";
import { Button } from "@/Components/UI/button";
import CTAPanel from "@/Components/CTAPanel";
import { useIsMobile } from "@/Hooks/use-mobile";

const Menu = () => {
  const isMobile = useIsMobile();
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  
  const backgroundStyles = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${(import.meta as any).env?.BASE_URL || "/"}Courtey_Jon_McNielPhotography_Photocreditneeded_08.17-46-scaled.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: isMobile ? 'scroll' : 'fixed',
  };

  const menuTypes = [
    {
      id: 1,
      title: "Corporate Catering Menus",
      bestFor: "Meetings, quarterly events, client receptions",
      items: [
        "Breakfast & coffee service",
        "Boxed lunches",
        "Buffet or family-style lunches",
        "Hors d'oeuvres & grazing tables",
        "Executive plated dinners"
      ]
    },
    {
      id: 2,
      title: "Cultural & Global-Inspired Menus",
      bestFor: "Brand activations, diverse celebrations",
      items: [
        "Latin, Mediterranean, Asian, or fusion menus",
        "Regional specialties & storytelling elements"
      ]
    },
    {
      id: 3,
      title: "Dessert & Sweet Menus",
      bestFor: "Receptions, add-ons",
      items: [
        "Mini desserts",
        "Dessert bars",
        "Custom sweets & edible art"
      ]
    },
    {
      id: 4,
      title: "Buffet Menus",
      bestFor: "Large groups, celebrations",
      items: [
        "Multiple entrées & sides",
        "Vegetarian and protein options",
        "Dessert station"
      ]
    }
  ];
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <Hero
        title={<>Seasonal Menus,<br className="sm:hidden" /> Thoughtfully Composed</>}
        subtitle="Rentals, staffing, florals/coordination (if offered)."
        cta1={
          <Button size="lg" className="uppercase w-full">
            <Link to="/packages">View Packages</Link>
          </Button>
        }
        cta2={
          <Button size="lg" variant="outline" className="uppercase w-full">
            <Link to="/menu.pdf" target="_blank">Download Menu</Link>
          </Button>
        }
      />

      <div className="relative py-32 px-6 mt-16" style={backgroundStyles}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-creamy-white mb-4 text-4xl sm:text-5xl font-light tracking-tight">Chef Favorites</h2>
            <div className="w-[60px] h-[1px] bg-[#C4A46A] mx-auto" />
            <p className="mt-4 text-lg text-white/90">Please list 3 different signature dishes of "La Bella Mesa" and write a brief description for each of them.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-light-cream rounded-lg shadow-sm border border-stone hover:bg-reserved-burgundy hover:text-white transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer group">
              <div className="mb-6">
                <span className="text-4xl font-light text-[#C4A46A] group-hover:text-white transition-colors">1</span>
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-4 group-hover:text-white transition-colors">Charcuterie Grazing Table</h3>
              <p className="text-gray-700 group-hover:text-white/90 transition-colors">A beautifully arranged charcuterie grazing table with artisanal cheeses, cured meats, fresh and dried fruits, crackers, and flavorful accompaniments—perfect for sharing and gathering. Great for corporate and wedding events.</p>
            </div>
            
            <div className="text-center p-8 bg-light-cream rounded-lg shadow-sm border border-stone hover:bg-reserved-burgundy hover:text-white transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer group">
              <div className="mb-6">
                <span className="text-4xl font-light text-[#C4A46A] group-hover:text-white transition-colors">2</span>
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-4 group-hover:text-white transition-colors">Classic Beef Wellington</h3>
              <p className="text-gray-700 group-hover:text-white/90 transition-colors">Center-cut beef tenderloin coated in mushroom duxelles, wrapped in prosciutto and golden puff pastry, baked to perfection and served sliced. We can adapt this for buffet, plated, or station service.</p>
            </div>
            
            <div className="text-center p-8 bg-light-cream rounded-lg shadow-sm border border-stone hover:bg-reserved-burgundy hover:text-white transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer group">
              <div className="mb-6">
                <span className="text-4xl font-light text-[#C4A46A] group-hover:text-white transition-colors">3</span>
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-4 group-hover:text-white transition-colors">Classic Italian Pasta Bar</h3>
              <p className="text-gray-700 group-hover:text-white/90 transition-colors">A comforting and interactive station offering a variety of pastas, classic sauces, fresh vegetables, and savory toppings, designed for effortless enjoyment and customization.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 px-6 bg-reserved-burgundy">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-white mb-4 text-4xl sm:text-5xl font-light tracking-tight">MENU</h2>
            <div className="w-[60px] h-[1px] bg-[#C4A46A] mx-auto" />
            <p className="mt-4 text-lg text-white/90">Please share with us the different menus you have.</p>
          </div>
          
          {/* Menu Type Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
            {menuTypes.map((menu) => (
              <button
                key={menu.id}
                onClick={() => setActiveMenu(activeMenu === menu.id ? null : menu.id)}
                className={`p-6 rounded-lg border-2 transition-all duration-300 text-left ${
                  activeMenu === menu.id
                    ? 'border-[#C4A46A] bg-light-cream shadow-lg'
                    : 'border-white/20 bg-white/10 hover:border-[#C4A46A]/50'
                }`}
              >
                <div className="flex items-center mb-3">
                  <span className="text-2xl font-light text-[#C4A46A] mr-3">{menu.id}</span>
                  <h3 className={`text-lg font-light ${activeMenu === menu.id ? 'text-gray-900' : 'text-white'}`}>{menu.title}</h3>
                </div>
                <p className={`text-sm ${activeMenu === menu.id ? 'text-gray-600' : 'text-white/80'}`}>
                  <strong>Best for:</strong> {menu.bestFor}
                </p>
              </button>
            ))}
          </div>
          
          {/* Active Menu Content */}
          {activeMenu && (
            <div className="bg-light-cream p-8 rounded-lg shadow-sm border border-stone animate-in fade-in duration-300">
              {menuTypes.find(menu => menu.id === activeMenu) && (
                <div>
                  <div className="flex items-start mb-6">
                    <span className="text-2xl font-light text-[#C4A46A] mr-4">{activeMenu}</span>
                    <div className="flex-1">
                      <h3 className="text-2xl font-light text-gray-900 mb-2">
                        {menuTypes.find(menu => menu.id === activeMenu)?.title}
                      </h3>
                      <p className="text-lg text-gray-600 mb-6">
                        <strong>Best for:</strong> {menuTypes.find(menu => menu.id === activeMenu)?.bestFor}
                      </p>
                      <ul className="space-y-3">
                        {menuTypes.find(menu => menu.id === activeMenu)?.items.map((item, index) => (
                          <li key={index} className="flex items-center">
                            <span className="w-2 h-2 bg-[#C4A46A] rounded-full mr-3"></span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <CTAPanel
        title="Wanna Try?"
        primaryButtonText="Request a Proposal"
        primaryButtonLink="/contact"
        secondaryButtonText="View Our Work"
        secondaryButtonLink="/gallery"
      />
      <Footer />
    </div>
  );
};

export default Menu;