import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import Footer from "@/Components/Footer";
import { Button } from "@/Components/UI/button";
import ScrollIndicator from "@/Components/ScrollIndicator";
import CTAPanel from "@/Components/CTAPanel";
import SignatureItems from "@/Components/SignatureItems";
import MenuSlider from "@/Components/MenuSlider";

const Menu = () => {
  const [activeSection, setActiveSection] = useState('family-style');

  const menuSections = [
    { id: 'family-style', label: 'Family Style' },
    { id: 'plated', label: 'Plated' },
    { id: 'plated-dinner', label: 'Plated Dinner' },
    { id: 'live-action', label: 'Live Action' },
    { id: 'bar-packages', label: 'Bar Packages' }
  ];

  const handleMenuClick = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <Hero
        title="Seasonal Menus, Thoughtfully Composed"
        subtitle="Rentals, staffing, florals/coordination (if offered)."
        cta1={
          <Button size="lg" className="uppercase">
            <Link to="/packages">View Packages</Link>
          </Button>
        }
        cta2={
          <Button size="lg" variant="outline" className="uppercase">
            <Link to="/menu.pdf" target="_blank">Download our menu (Download PDF)</Link>
          </Button>
        }
      />

      <div className="py-20 px-6 bg-background">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[#36394C] mb-4 text-4xl sm:text-5xl font-light tracking-tight">Signature Items</h2>
            <div className="w-[60px] h-[1px] bg-[#C4A46A] mx-auto" />
          </div>
          <MenuSlider />
        </div>
      </div>

      <div className="py-20 px-6 bg-background">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[#36394C] mb-4 text-4xl sm:text-5xl font-light tracking-tight">Explore Our Menus</h2>
            <div className="w-[60px] h-[1px] bg-[#C4A46A] mx-auto" />
          </div>
        </div>
      </div>

      {/* Menu Navigation */}
      <div className="py-8 px-6 bg-background">
        <div className="category-cta">
          {menuSections.map((section) => (
            <button
              key={section.id}
              className={`cta-btn ${activeSection === section.id ? 'active' : ''}`}
              data-target={section.id}
              onClick={() => handleMenuClick(section.id)}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Content */}
      <div className="category-content">
        <div id="family-style" className={`content-section ${activeSection === 'family-style' ? 'active' : ''}`}>
          <div className="py-20 px-6 bg-background">
            <div className="max-w-[1400px] mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-[#36394C] mb-4">Sample Family Style</h2>
                <div className="w-[60px] h-[1px] bg-[#C4A46A] mx-auto" />
              </div>
              <div className="container-sm max-w-6xl mx-auto">
                {/* Tray Passed Canapés */}
                <div className="mb-12">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Tray Passed Canapés</h3>
                  <div className="w-[60px] h-[1px] bg-[#C4A46A] mx-auto mb-4" />
                  <div className="space-y-8">
                    <div className="text-center">
                      <h4 className="text-xl font-medium text-gray-900 mb-2">Tuna Tartare</h4>
                      <p className="text-sm text-gray-600 mb-3">Blood orange aioli, crispy capers, tostada</p>
                      <div className="flex gap-2 justify-center mb-3">
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">GLUTEN FREE</span>
                      </div>
                      <p className="text-lg font-semibold text-gray-900">$8</p>
                    </div>

                    <div className="text-center">
                      <h4 className="text-xl font-medium text-gray-900 mb-2">Burrata</h4>
                      <p className="text-sm text-gray-600 mb-3">Green endive, chili crisp, micro cilantro</p>
                      <div className="flex gap-2 justify-center mb-3">
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">GLUTEN FREE</span>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">VEGETARIAN</span>
                      </div>
                      <p className="text-lg font-semibold text-gray-900">$7</p>
                    </div>

                    <div className="text-center">
                      <h4 className="text-xl font-medium text-gray-900 mb-2">Sunchoke Tarte</h4>
                      <p className="text-sm text-gray-600 mb-3">Roasted garlic, sunchoke-cashew mousse</p>
                      <div className="flex gap-2 justify-center mb-3">
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">VEGETARIAN</span>
                      </div>
                      <p className="text-lg font-semibold text-gray-900">$6</p>
                    </div>

                    <div className="text-center">
                      <h4 className="text-xl font-medium text-gray-900 mb-2">Steak Frites</h4>
                      <p className="text-sm text-gray-600 mb-3">Sliced filet, waffle chip, horseradish aioli</p>
                      <div className="flex gap-2 justify-center mb-3">
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">GLUTEN FREE</span>
                      </div>
                      <p className="text-lg font-semibold text-gray-900">$10</p>
                    </div>
                  </div>
                </div>

                {/* First Course */}
                <div className="mb-12">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">First Course</h3>
                  <div className="w-[60px] h-[1px] bg-[#C4A46A] mx-auto mb-4" />
                  <div className="text-center">
                    <h4 className="text-lg font-medium text-gray-900">Arugula & Endive</h4>
                    <p className="text-sm text-gray-600 mt-1">Ruby red grapefruit segments, shaved Manchego, lemon vinaigrette, pistachio</p>
                  </div>
                </div>

                {/* Main Course */}
                <div className="mb-12">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Main Course</h3>
                  <div className="w-[60px] h-[1px] bg-[#C4A46A] mx-auto mb-4" />
                  <div className="space-y-6">
                    <div className="text-center">
                      <h4 className="text-lg font-medium text-gray-900">Mediterranean Sea Bass</h4>
                      <p className="text-sm text-gray-600 mt-1">Piquillo pepper velouté, roasted fennel & baby potatoes</p>
                    </div>

                    <div className="text-center">
                      <h4 className="text-lg font-medium text-gray-900">Buttermilk Fried Chicken</h4>
                      <p className="text-sm text-gray-600 mt-1">Frisèe salad, savory beignets</p>
                    </div>
                  </div>
                </div>

                {/* Sides */}
                <div className="mb-12">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Sides</h3>
                  <div className="w-[60px] h-[1px] bg-[#C4A46A] mx-auto mb-4" />
                  <div className="space-y-6">
                    <div className="text-center">
                      <h4 className="text-lg font-medium text-gray-900">Olive Oil Confit Baby Potatoes</h4>
                    </div>

                    <div className="text-center">
                      <h4 className="text-lg font-medium text-gray-900">Grilled Chili Flake Broccolini</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="plated" className={`content-section ${activeSection === 'plated' ? 'active' : ''}`}>
          <div className="py-20 px-6 bg-background">
            <div className="max-w-[1400px] mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-[#36394C] mb-4">Sample Plated</h2>
                <div className="w-[60px] h-[1px] bg-[#C4A46A] mx-auto" />
              </div>
              <div className="container-sm max-w-6xl mx-auto">
                {/* Passed Canapés */}
                <div className="mb-12">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Passed Canapés</h3>
                  <div className="w-[60px] h-[1px] bg-[#C4A46A] mx-auto mb-4" />
                  <div className="space-y-8">
                    <div className="text-center">
                      <h4 className="text-xl font-medium text-gray-900 mb-2">Aguachile Crudo</h4>
                      <p className="text-sm text-gray-600 mb-3">Market fish, cucumber, serrano, lime</p>
                      <div className="flex gap-2 justify-center mb-3">
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">GLUTEN FREE</span>
                      </div>
                      <p className="text-lg font-semibold text-gray-900">$9</p>
                    </div>

                    <div className="text-center">
                      <h4 className="text-xl font-medium text-gray-900 mb-2">Bruschetta</h4>
                      <p className="text-sm text-gray-600 mb-3">Confit tomato, roasted garlic, whipped ricotta</p>
                      <div className="flex gap-2 justify-center mb-3">
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">GLUTEN FREE</span>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">VEGAN</span>
                      </div>
                      <p className="text-lg font-semibold text-gray-900">$6</p>
                    </div>

                    <div className="text-center">
                      <h4 className="text-xl font-medium text-gray-900 mb-2">Tostada Calabaza</h4>
                      <p className="text-sm text-gray-600 mb-3">Seared squash, mole poblano, sesame crunch</p>
                      <div className="flex gap-2 justify-center mb-3">
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">GLUTEN FREE</span>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">VEGETARIAN</span>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">VEGAN</span>
                      </div>
                      <p className="text-lg font-semibold text-gray-900">$7</p>
                    </div>

                    <div className="text-center">
                      <h4 className="text-xl font-medium text-gray-900 mb-2">Crispy Rock Shrimp*</h4>
                      <p className="text-sm text-gray-600 mb-3">Bang bang sauce, rice paper, cucumber</p>
                      <div className="flex gap-2 justify-center mb-3">
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">GLUTEN FREE</span>
                      </div>
                      <p className="text-lg font-semibold text-gray-900">$8</p>
                    </div>
                  </div>
                </div>

                {/* First Course */}
                <div className="mb-12">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">First Course</h3>
                  <div className="w-[60px] h-[1px] bg-[#C4A46A] mx-auto mb-4" />
                  <div className="text-center">
                    <h4 className="text-lg font-medium text-gray-900">Asparagus Velouté</h4>
                    <p className="text-sm text-gray-600 mt-1">Asparagus, cream, vegetable broth, crème fraîche, sourdough crouton</p>
                    <span className="text-lg font-semibold text-gray-900">$14</span>
                  </div>
                </div>

                {/* Second Course */}
                <div className="mb-12">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Second Course</h3>
                  <div className="w-[60px] h-[1px] bg-[#C4A46A] mx-auto mb-4" />
                  <p className="text-sm text-gray-600 mb-6 italic text-center">Guest selects one</p>
                  <div className="space-y-6">
                    <div className="text-center">
                      <h4 className="text-lg font-medium text-gray-900">Sautéed Wild Mushrooms</h4>
                      <p className="text-sm text-gray-600 mt-1">Crispy ricotta stuffed polenta, marsala demi glaze, frisèe salad</p>
                    </div>

                    <div className="text-center">
                      <h4 className="text-lg font-medium text-gray-900">Roasted Lemon-Pepper Airline Chicken</h4>
                      <p className="text-sm text-gray-600 mt-1">Crispy skin, white wine demi glaze, sautéed garlic spinach, creamy parmesan polenta</p>
                    </div>

                    <div className="text-center">
                      <h4 className="text-lg font-medium text-gray-900">Braised Beef Short Rib</h4>
                      <p className="text-sm text-gray-600 mt-1">Gochuchang bordelaise, Fresno chili, scallion, roasted garlic mashed potatoes</p>
                      <span className="text-lg font-semibold text-gray-900">$36</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="plated-dinner" className={`content-section ${activeSection === 'plated-dinner' ? 'active' : ''}`}>
          <div className="py-20 px-6 bg-background">
            <div className="max-w-[1400px] mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-[#36394C] mb-4">Plated Dinner</h2>
                <div className="w-[60px] h-[1px] bg-[#C4A46A] mx-auto" />
                <p className="text-sm text-gray-600 mt-4 max-w-2xl mx-auto">Sample Menu - Our Executive Chef is always innovating. Ask us about available seasonal and customized dish options.</p>
              </div>
              <div className="container-sm max-w-6xl mx-auto">
                {/* Cocktail Hour */}
                <div className="mb-12">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Cocktail Hour</h3>
                  <div className="w-[60px] h-[1px] bg-[#C4A46A] mx-auto mb-4" />
                  <h4 className="text-lg font-medium text-gray-900 mb-4 text-center">Tray Passed Canapés</h4>
                  <p className="text-sm text-gray-600 mb-6 italic text-center">Selection of three or more</p>
                  <div className="space-y-6">
                    <div className="">
                      <div className="text-center">
                        <h5 className="font-medium text-gray-900">Steak Frites</h5>
                        <p className="text-sm text-gray-600 mt-1">Filet mignon, potato crisp, Tarragon aioli.</p>
                      </div>
                    </div>

                    <div className="">
                      <div className="text-center">
                        <h5 className="font-medium text-gray-900">Chicken Tinga Empanaditas</h5>
                        <p className="text-sm text-gray-600 mt-1">Chile de arbol, lime crema, cilantro.</p>
                      </div>
                    </div>

                    <div className="">
                      <div className="text-center">
                        <h5 className="font-medium text-gray-900">Nashville Hot Chicken + Waffles</h5>
                        <p className="text-sm text-gray-600 mt-1">Aioli, pickles, onion.</p>
                      </div>
                    </div>

                    <div className="">
                      <div className="text-center">
                        <h5 className="font-medium text-gray-900">Wild Mushroom Dumpling</h5>
                        <p className="text-sm text-gray-600 mt-1">Sesame chili oil, ponzu, peanuts, scallions.</p>
                      </div>
                    </div>

                    <div className="">
                      <div className="text-center">
                        <h5 className="font-medium text-gray-900">Saffron Arancini</h5>
                        <p className="text-sm text-gray-600 mt-1">Manchego cheese, pimenton ahumado aioli.</p>
                      </div>
                    </div>

                    <div className="">
                      <div className="text-center">
                        <h5 className="font-medium text-gray-900">Maryland Crab Cake Lollipop</h5>
                        <p className="text-sm text-gray-600 mt-1">Pepperoncini aioli.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dinner Service */}
                <div className="mb-12">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Dinner Service</h3>
                  <div className="w-[60px] h-[1px] bg-[#C4A46A] mx-auto mb-4" />
                  <h4 className="text-lg font-medium text-gray-900 mb-4 text-center">Signature Activation Station</h4>
                  <p className="text-sm text-gray-600 mb-6 italic text-center">Selection of one</p>
                  <div className="space-y-6">
                    <div className="">
                      <div className="text-center">
                        <h5 className="font-medium text-gray-900">Modern Bruschetta</h5>
                        <p className="text-sm text-gray-600 mt-1">Tomato agrodolce, smoked ricotta, balsamic pearls.</p>
                      </div>
                    </div>

                    <div className="">
                      <div className="text-center">
                        <h5 className="font-medium text-gray-900">Ahi Tuna Tataki</h5>
                        <p className="text-sm text-gray-600 mt-1">Ponzu foam, avocado mousse, rice cracker, cilantro.</p>
                      </div>
                    </div>

                    <div className="">
                      <div className="text-center">
                        <h5 className="font-medium text-gray-900">Falafel</h5>
                        <p className="text-sm text-gray-600 mt-1">Hummus, piquillo pepper relish, naan.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* The First Course */}
                <div className="mb-12">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">The First Course</h3>
                  <div className="w-[60px] h-[1px] bg-[#C4A46A] mx-auto mb-4" />
                  <p className="text-sm text-gray-600 mb-6 italic text-center">Selection of one</p>
                  <div className="space-y-6">
                    <div className="">
                      <div className="text-center">
                        <h4 className="text-lg font-medium text-gray-900">Bloomsdale Spinach</h4>
                        <p className="text-sm text-gray-600 mt-1">Fingerling potato, blue cheese, spiced candied walnuts, honey mustard dressing.</p>
                      </div>
                    </div>

                    <div className="">
                      <div className="text-center">
                        <h4 className="text-lg font-medium text-gray-900">Sweet Corn Bisque</h4>
                        <p className="text-sm text-gray-600 mt-1">Rock shrimp, grilled stone fruit, lace crouton, pistachio soil, poured tableside.</p>
                      </div>
                    </div>

                    <div className="">
                      <div className="text-center">
                        <h4 className="text-lg font-medium text-gray-900">Grilled Wedge Salad</h4>
                        <p className="text-sm text-gray-600 mt-1">Shiitake bacon, blue cheese, sunflower seeds, avocado buttermilk dressing.</p>
                      </div>
                    </div>

                    <div className="">
                      <div className="text-center">
                        <h4 className="text-lg font-medium text-gray-900">Watermelon Gazpacho</h4>
                        <p className="text-sm text-gray-600 mt-1">Compressed watermelon, cucumber, jicama, chili threads, lime, poured tableside.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* The Main Course */}
                <div className="mb-12">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">The Main Course</h3>
                  <div className="w-[60px] h-[1px] bg-[#C4A46A] mx-auto mb-4" />
                  <p className="text-sm text-gray-600 mb-6 italic text-center">Guest Pre-Selected | Selection of two</p>
                  <p className="text-sm text-gray-600 mb-6 italic text-center">*dietary restrictions will be accommodated complimentarily for up to 10% of your guest count.</p>
                  <div className="space-y-6">
                    <div className="">
                      <div className="text-center">
                        <h4 className="text-lg font-medium text-gray-900">Bone-In Korean Braised Short Rib</h4>
                        <p className="text-sm text-gray-600 mt-1">Coconut rice, charred eggplant, kimchee, bulgogi bordelaise.</p>
                      </div>
                    </div>

                    <div className="">
                      <div className="text-center">
                        <h4 className="text-lg font-medium text-gray-900">Chicken Tikka Masala</h4>
                        <p className="text-sm text-gray-600 mt-1">Wilted spinach, okra, cherry tomato, riced cauliflower.</p>
                      </div>
                    </div>

                    <div className="">
                      <div className="text-center">
                        <h4 className="text-lg font-medium text-gray-900">Buttermilk Fried Chicken</h4>
                        <p className="text-sm text-gray-600 mt-1">Creamed spinach, whipped potato, market vegetables.</p>
                      </div>
                    </div>

                    <div className="">
                      <div className="text-center">
                        <h4 className="text-lg font-medium text-gray-900">Scottish Salmon</h4>
                        <p className="text-sm text-gray-600 mt-1">Corn pudding, serrano chili, pickled onion salad.</p>
                      </div>
                    </div>

                    <div className="">
                      <div className="text-center">
                        <h4 className="text-lg font-medium text-gray-900">Eggplant 'Pasta' Rolls</h4>
                        <p className="text-sm text-gray-600 mt-1">Pomodoro sauce, house-made cashew cheese, spinach, artichoke, basil.</p>
                      </div>
                    </div>

                    <div className="">
                      <div className="text-center">
                        <h4 className="text-lg font-medium text-gray-900">Flank Steak</h4>
                        <p className="text-sm text-gray-600 mt-1">Root vegetable purée, market vegetables, charred Fresno chili chimichurri.</p>
                      </div>
                    </div>

                    <div className="">
                      <div className="text-center">
                        <h4 className="text-lg font-medium text-gray-900">Butternut Squash Steak</h4>
                        <p className="text-sm text-gray-600 mt-1">Charred broccolini, vegan snap pea puree risotto.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Late Night Snack */}
                <div className="mb-12">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Late Night Snack</h3>
                  <div className="w-[60px] h-[1px] bg-[#C4A46A] mx-auto mb-4" />
                  <p className="text-sm text-gray-600 mb-6 italic text-center">Selection of one</p>
                  <div className="space-y-6">
                    <div className="">
                      <div className="text-center">
                        <h4 className="text-lg font-medium text-gray-900">Nachos in The Gutter</h4>
                        <p className="text-sm text-gray-600 mt-1">Chicken tinga, cheddar cheese sauce, chile de arbol salsa, tomatillo + avocado salsa, sour cream, pickled jalapeño.</p>
                      </div>
                    </div>

                    <div className="">
                      <div className="text-center">
                        <h4 className="text-lg font-medium text-gray-900">Philly Cheesesteak Slider</h4>
                        <p className="text-sm text-gray-600 mt-1">Caramelized onion, cheddar cheese mornay, brioche bun.</p>
                      </div>
                    </div>

                    <div className="">
                      <div className="text-center">
                        <h4 className="text-lg font-medium text-gray-900">Mini Smash Burger</h4>
                        <p className="text-sm text-gray-600 mt-1">American cheese, griddled onion, pickles, special sauce, brioche bun.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bar Services */}
                <div className="mb-12">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Bar Services</h3>
                  <div className="w-[60px] h-[1px] bg-[#C4A46A] mx-auto mb-4" />
                  <p className="text-sm text-gray-600 mb-6 italic text-center">Brought to You by Pharmacie</p>
                  <div className=" mb-6">
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-4">A full Premium bar serving vodka, gin, rum, tequila, bourbon or rye + single malt scotch, along with 3 Pharmacie specialty cocktails, our house selections of beers, red wine, white wine, and sparkling wine.</p>
                      <h4 className="text-lg font-medium text-gray-900 mb-4">Sample Selection of Pharmacie Specialty Cocktails</h4>
                      <div className="space-y-3">
                        <div className="text-center">
                          <h5 className="font-medium text-gray-900">The Girl Friday</h5>
                          <p className="text-sm text-gray-600">Gin, basil, Aperol, grapefruit.</p>
                        </div>
                        <div className="text-center">
                          <h5 className="font-medium text-gray-900">The Woodsman</h5>
                          <p className="text-sm text-gray-600">Rye, smoked maple, chocolate chili bitters.</p>
                        </div>
                        <div className="text-center">
                          <h5 className="font-medium text-gray-900">The Queen's English</h5>
                          <p className="text-sm text-gray-600">Vodka, celery seed shrub, cucumber, lime.</p>
                        </div>
                        <div className="text-center">
                          <h5 className="font-medium text-gray-900">The Margarita Botanica</h5>
                          <p className="text-sm text-gray-600">Mezcal, cilantro, lime, jalapeño.</p>
                        </div>
                        <div className="text-center">
                          <h5 className="font-medium text-gray-900">The Georgia Peach Tea</h5>
                          <p className="text-sm text-gray-600">Bourbon, peach oolong, lemon, house-brewed tea.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="live-action" className={`content-section ${activeSection === 'live-action' ? 'active' : ''}`}>
          <div className="py-20 px-6 bg-background">
            <div className="max-w-[1400px] mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-[#36394C] mb-4">Sample Live Action Cooking</h2>
                <div className="w-[60px] h-[1px] bg-[#C4A46A] mx-auto" />
              </div>
              <div className="container-sm max-w-6xl mx-auto">
                {/* Passed Canapés */}
                <div className="mb-12">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Passed Canapés</h3>
                  <div className="w-[60px] h-[1px] bg-[#C4A46A] mx-auto mb-4" />
                  <div className="space-y-8">
                    <div className="text-center ">
                      <h4 className="text-xl font-medium text-gray-900 mb-2">Gazpacho Shooter</h4>
                      <p className="text-sm text-gray-600 mb-3">Chilled soup with seasonal vegetables</p>
                      <div className="flex gap-2 justify-center mb-3">
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">GLUTEN FREE</span>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">VEGAN</span>
                      </div>
                      <p className="text-lg font-semibold text-gray-900">$4</p>
                    </div>

                    <div className="text-center ">
                      <h4 className="text-xl font-medium text-gray-900 mb-2">Crispy Stuffed Olive</h4>
                      <p className="text-sm text-gray-600 mb-3">Choice of sausage or mushroom, Calabrian chili aioli</p>
                      <div className="flex gap-2 justify-center mb-3">
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">GLUTEN FREE</span>
                      </div>
                      <p className="text-lg font-semibold text-gray-900">$3</p>
                    </div>

                    <div className="text-center ">
                      <h4 className="text-xl font-medium text-gray-900 mb-2">Grilled Chicken Caesar</h4>
                      <p className="text-sm text-gray-600 mb-3">Romaine, creamy Caesar dressing, crisp parmesan cup</p>
                      <div className="flex gap-2 justify-center mb-3">
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">GLUTEN FREE</span>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">VEGAN</span>
                      </div>
                      <p className="text-lg font-semibold text-gray-900">$6</p>
                    </div>

                    <div className="text-center">
                      <h4 className="text-xl font-medium text-gray-900 mb-2">Arancini</h4>
                      <p className="text-sm text-gray-600 mb-3">Herby fried rice ball, cheese, saffron aioli</p>
                      <div className="flex gap-2 justify-center mb-3">
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">GLUTEN FREE</span>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">VEGETARIAN</span>
                      </div>
                      <p className="text-lg font-semibold text-gray-900">$4</p>
                    </div>
                  </div>
                </div>

                {/* Live Action Stations */}
                <div className="mb-12">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Live Action Stations</h3>
                  <div className="w-[60px] h-[1px] bg-[#C4A46A] mx-auto mb-4" />
                  <div className="space-y-8">
                    <div className="">
                      <div className="text-center">
                        <h4 className="text-lg font-medium text-gray-900 mb-2">Tostada Bar</h4>
                        <p className="text-sm text-gray-600 mb-3">Crunchy open-faced corn tortillas with choice of guest's choice of topping: Hamachi aguachile, roasted corn & tomato confit, sea bass ceviche, citrusy mashed avocado, serrano beef tartare</p>
                        <span className="text-lg font-semibold text-gray-900">$12 per person</span>
                      </div>
                    </div>

                    <div className="">
                      <div className="text-center">
                        <h4 className="text-lg font-medium text-gray-900 mb-2">Summer Skewers</h4>
                        <p className="text-sm text-gray-600 mb-3">Petite, savory meat and vegetable skewers grilled over an open flame with guest's choice of: harissa chicken, marinated skirt steak, chili lime sea bass, or smoked wild mushrooms; served with salsa verde and creamy Romesco dipping sauces</p>
                        <span className="text-lg font-semibold text-gray-900">$14 per person</span>
                      </div>
                    </div>

                    <div className="">
                      <div className="text-center">
                        <h4 className="text-lg font-medium text-gray-900 mb-2">Build Your Own Pizza</h4>
                        <p className="text-sm text-gray-600 mb-3">Neapolitan style pizza crust with fresh pomodoro sauce, grated pecorino cheese, & extra virgin olive oil, plus guest's choice of toppings: fresh mozzarella, sweet basil, roasted corn, wild mushrooms, roasted garlic, tomato confit, summer squash, pepperoni, duck prosciutto</p>
                        <span className="text-lg font-semibold text-gray-900">$16 per person</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="bar-packages" className={`content-section ${activeSection === 'bar-packages' ? 'active' : ''}`}>
          <div className="py-20 px-6 bg-background">
            <div className="max-w-[1400px] mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-[#36394C] mb-4">Bar Services</h2>
                <div className="w-[60px] h-[1px] bg-[#C4A46A] mx-auto" />
              </div>
              <div className="container-sm max-w-6xl mx-auto">
                {/* Bar Packages */}
                <div className="space-y-8">
                  <div className="w-[60px] h-[1px] bg-[#C4A46A] mx-auto mb-4" />
                  <div className="">
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Beer + Wine Package</h3>
                      <p className="text-sm text-gray-600 mb-3">Your choice of 1 red, 1 white or rosé, or 1 sparkling and 2 beers</p>
                      <p className="text-sm text-gray-600 mb-3">Selection of soft drinks: Coca-Cola, Sprite, Canada Dry ginger Ale, Tonic Water, and Club Soda</p>
                      <p className="text-sm text-gray-600 mb-3">Bottled Sparkling + Flat Water</p>
                      <span className="text-lg font-semibold text-gray-900">$25 per person</span>
                    </div>
                  </div>

                  <div className="">
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Full Bar Package</h3>
                      <p className="text-sm text-gray-600 mb-3">Fully curated spirit selection of vodka, gin, bourbon, rum, tequila, and scotch.</p>
                      <p className="text-sm text-gray-600 mb-3">Standard cocktail ingredients, mixers, and garnishes.</p>
                      <p className="text-sm text-gray-600 mb-3">Your choice of 1 red, 1 white or rosé, 1 sparkling wine and 2 beers.</p>
                      <p className="text-sm text-gray-600 mb-3">Selection of soft-drinks: Coca-Cola, diet Coca-Cola, Sprite, Canada Dry, Ginger Ale, Tonic Water, and Club Soda.</p>
                      <p className="text-sm text-gray-600 mb-3">Bottled sparkling + flat water</p>
                      <span className="text-lg font-semibold text-gray-900">$45 per person</span>
                    </div>
                  </div>

                  <div className="">
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Cocktail Bar Package</h3>
                      <p className="text-sm text-gray-600 mb-3">Your choice of 2 signature cocktails from our roomforty cocktail menu</p>
                      <p className="text-sm text-gray-600 mb-3">Fully curated spirit selection of vodka, gin, bourbon, rum, tequila, and scotch</p>
                      <p className="text-sm text-gray-600 mb-3">Standard cocktail ingredients, mixers, and garnishes</p>
                      <p className="text-sm text-gray-600 mb-3">Your choice of 1 red, 1 white or rosé, 1 sparkling wine and 2 beers</p>
                      <p className="text-sm text-gray-600 mb-3">Selection of soft-drinks: Coca-Cola, Diet Coca-Cola, Sprite, Canada Dry Ginger Ale, Tonic Water, and Club Soda</p>
                      <p className="text-sm text-gray-600 mb-3">Bottled sparkling water + flat water</p>
                      <span className="text-lg font-semibold text-gray-900">$55 per person</span>
                    </div>
                  </div>

                  <div className="">
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Custom Cocktail Package</h3>
                      <p className="text-sm text-gray-600 mb-3">Your choice of 2 cocktails, custom created for your event. Pricing may vary based on cocktail complexity and ingredients.</p>
                      <p className="text-sm text-gray-600 mb-3">Fully curated spirit selection of vodka, gin, bourbon, rum, tequila, and scotch.</p>
                      <p className="text-sm text-gray-600 mb-3">Standard cocktail ingredients, mixers, and garnishes</p>
                      <p className="text-sm text-gray-600 mb-3">Your choice 1 red, 1 white or rose, 1 sparkling wine and 2 beers</p>
                      <p className="text-sm text-gray-600 mb-3">Selection of soft drinks: Coca-Cola, Diet Coca-Cola, Sprite, Canada Dry Ginger Ale, Tonic Water, and Club Soda</p>
                      <p className="text-sm text-gray-600 mb-3">Bottled sparkling + flat water</p>
                      <span className="text-lg font-semibold text-gray-900">Starting at $65 per person</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="menu-info">
        <a 
          href="/menu.pdf" 
          className="menu-download" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Download our menu (Download PDF)
        </a>
        <p className="menu-note">
          Rentals, staffing, florals/coordination (if offered).
        </p>
      </div>

      <CTAPanel
        title="Wanna Try?"
        primaryButtonText="Request a Proposal"
        primaryButtonLink="/contact"
        secondaryButtonText="View Our Work"
        secondaryButtonLink="/gallery"
        imageUrl="/Courtey_Jon_McNielPhotography_Photocreditneeded_08.17-46-scaled.jpg"
      />
      <Footer />
    </div>
  );
};

export default Menu;