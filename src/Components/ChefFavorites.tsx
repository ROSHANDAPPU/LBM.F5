// src/Components/ChefFavorites.tsx
import "./ChefFavorites.css";
import "./ChefFavorites.js";

const dishes = [
  {
    name: "Charcuterie Grazing Table",
    image: "Charcuterie Grazing Table.JPG.webp",
    description: "An abundant, beautifully styled buffet featuring artisanal cheeses, cured meats, gourmet crackers, and more.",
  },
  {
    name: "Classic Beef Wellington",
    image: "Classic Beef Wellington.webp",
    description: "Tender beef tenderloin, mushroom duxelles, and prosciutto wrapped in a golden puff pastry.",
  },
  {
    name: "Classic Italian Pasta Bar",
    image: "Classic Italian Pasta Bar.jpg",
    description: "An interactive station with a variety of pastas, sauces, and fresh toppings for guests to create their own dish.",
  }
];

export default function ChefFavorites() {
  return (
    <section className="chef-favorites-section">
      <div className="chef-favorites-header">
        <h2 className="chef-favorites-title">Chef Favorites</h2>
        <p className="chef-favorites-subtitle">A selection of our most requested and celebrated dishes.</p>
      </div>
      <div className="chef-favorites-grid">
        {dishes.map((dish, index) => (
          <div key={index} className="chef-favorite-card">
            <div className="card-image-container">
              <img src={dish.image} alt={dish.name} className="card-image" />
            </div>
            <div className="card-text-content">
              <div className="gold-divider"></div>
              <h3 className="card-title">{dish.name}</h3>
              <p className="card-description">{dish.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
