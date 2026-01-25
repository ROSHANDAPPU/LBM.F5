// src/Components/MenuCategories.tsx
import "./MenuCategories.css";

const menuCategories = [
  {
    title: "Corporate Catering",
    bestFor: "Meetings, quarterly events, client receptions",
    backgroundImage: "corporate-catering.jpg",
    items: [
      "Breakfast & coffee service",
      "Boxed lunches",
      "Buffet or family-style lunches",
      "Hors d'oeuvres & grazing tables",
      "Executive plated dinners"
    ]
  },
  {
    title: "Cultural & Global-Inspired",
    bestFor: "Brand activations, diverse celebrations",
    backgroundImage: "cultural-global.jpg",
    items: [
      "Latin, Mediterranean, Asian, or fusion menus",
      "Regional specialties & storytelling elements"
    ]
  },
  {
    title: "Dessert & Sweet Menus",
    bestFor: "Receptions, add-ons",
    backgroundImage: "dessert-sweet.jpg",
    items: [
      "Mini desserts",
      "Dessert bars",
      "Custom sweets & edible art"
    ]
  },
  {
    title: "Buffet Menus",
    bestFor: "Large groups, celebrations",
    backgroundImage: "buffet-menus.jpg",
    items: [
      "Multiple entrées & sides",
      "Vegetarian and protein options",
      "Dessert station"
    ]
  }
];

export default function MenuCategories() {
  return (
    <section className="menu-categories">
      <div className="category-header">
        <h2>Our Menus</h2>
        <p>Please select a menu category to view our offerings</p>
      </div>

      <div className="category-grid">
        {menuCategories.map((category, index) => (
          <div 
            key={index} 
            className="category-card" 
            style={{ backgroundImage: `url(${category.backgroundImage})` }}
          >
            <div className="category-overlay">
              <span className="best-for">Best for: {category.bestFor}</span>
              <h3>{category.title}</h3>
              <ul className="menu-items">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
              <a href="#" className="view-btn">View Full Menu</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
