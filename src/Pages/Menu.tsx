import { Link } from "react-router-dom";
import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import Footer from "@/Components/Footer";
import { Button } from "@/Components/UI/button";
import CTAPanel from "@/Components/CTAPanel";

const Menu = () => {
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

      <div className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[#36394C] mb-4 text-4xl sm:text-5xl font-light tracking-tight">Chef Favorites</h2>
            <div className="w-[60px] h-[1px] bg-[#C4A46A] mx-auto" />
            <p className="mt-4 text-lg text-muted-foreground">Please list 3 different signature dishes of “La Bella Mesa” and write a brief description for each of them.</p>
          </div>
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">1. Charcuterie grazing table</h3>
              <p className="text-lg text-gray-700">A beautifully arranged charcuterie grazing table with artisanal cheeses, cured meats, fresh and dried fruits, crackers, and flavorful accompaniments—perfect for sharing and gathering. Great for corporate and wedding events.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">2. Classic Beef Wellington</h3>
              <p className="text-lg text-gray-700">Center-cut beef tenderloin coated in mushroom duxelles, wrapped in prosciutto and golden puff pastry, baked to perfection and served sliced. We can Adapt this for buffet, plated, or station service.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">3. Classic Italian Pasta Bar</h3>
              <p className="text-lg text-gray-700">A comforting and interactive station offering a variety of pastas, classic sauces, fresh vegetables, and savory toppings, designed for effortless enjoyment and customization.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 px-6 bg-stone-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[#36394C] mb-4 text-4xl sm:text-5xl font-light tracking-tight">MENU</h2>
            <div className="w-[60px] h-[1px] bg-[#C4A46A] mx-auto" />
            <p className="mt-4 text-lg text-muted-foreground">Please share with us the different menus you have.</p>
          </div>
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">1. Corporate Catering Menus</h3>
              <p className="text-lg text-gray-700 mb-2"><strong>Best for:</strong> Meetings, quarterly events, client receptions</p>
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-1">
                <li>Breakfast & coffee service</li>
                <li>Boxed lunches</li>
                <li>Buffet or family-style lunches</li>
                <li>Hors d’oeuvres & grazing tables</li>
                <li>Executive plated dinners</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">2. Cultural & Global-Inspired Menus</h3>
              <p className="text-lg text-gray-700 mb-2"><strong>Best for:</strong> Brand activations, diverse celebrations</p>
               <ul className="list-disc list-inside text-lg text-gray-700 space-y-1">
                <li>Latin, Mediterranean, Asian, or fusion menus</li>
                <li>Regional specialties & storytelling elements</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">3. Dessert & Sweet Menus</h3>
              <p className="text-lg text-gray-700 mb-2"><strong>Best for:</strong> Receptions, add-ons</p>
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-1">
                <li>Mini desserts</li>
                <li>Dessert bars</li>
                <li>Custom sweets & edible art</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">4. Buffet Menus</h3>
              <p className="text-lg text-gray-700 mb-2"><strong>Best for:</strong> Large groups, celebrations</p>
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-1">
                <li>Multiple entrées & sides</li>
                <li>Vegetarian and protein options</li>
                <li>Dessert station</li>
              </ul>
            </div>
          </div>
        </div>
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