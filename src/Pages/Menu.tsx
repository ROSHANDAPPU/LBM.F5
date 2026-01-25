import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import Footer from "@/Components/Footer";
import { Button } from "@/Components/UI/button";
import CTAPanel from "@/Components/CTAPanel";
import { useIsMobile } from "@/Hooks/use-mobile";

const Menu = () => {
  const isMobile = useIsMobile();

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      /* Chef Favorites Section Styling */
      .card-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
        max-width: 1400px;
        margin: 0 auto;
        align-items: start;
        padding-bottom: 100px;
      }

      /* Card Styling */
      .menu-card {
        background: #fffcf5; /* Cream background from your original design */
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        opacity: 0;
      }

      /* Staggered positions and animations */
      .menu-card:nth-child(1).is-visible {
        opacity: 1;
        transform: translateY(-10px) rotate(-0.5deg);
      }

      .menu-card:nth-child(2).is-visible {
        opacity: 1;
        transform: translateY(60px);
        transition-delay: 0.2s;
      }

      .menu-card:nth-child(3).is-visible {
        opacity: 1;
        transform: translateY(10px) rotate(0.5deg);
        transition-delay: 0.4s;
      }

      .menu-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
      }

      .menu-card:nth-child(1):hover {
        transform: translateY(-18px) rotate(-0.5deg);
      }

      .menu-card:nth-child(2):hover {
        transform: translateY(50px);
      }

      .menu-card:nth-child(3):hover {
        transform: translateY(0px) rotate(0.5deg);
      }

      /* Image Handling */
      .card-image img {
        width: 100%;
        height: 250px;
        object-fit: cover; /* Ensures the photo fills the space without stretching */
        display: block;
      }

      /* Text Content */
      .card-content {
        padding: 30px;
      }

      .card-content h3 {
        font-family: 'Libre Baskerville', Georgia, serif;
        font-size: 1.5rem;
        margin-bottom: 15px;
        color: #333;
      }

      .card-content p {
        font-family: 'Montserrat', Arial, sans-serif;
        font-size: 0.95rem;
        line-height: 1.6;
        color: #555;
      }

      /* Reset for mobile */
      @media (max-width: 768px) {
        .card-container {
          grid-template-columns: 1fr;
          padding-bottom: 0;
        }

        .menu-card.is-visible:nth-child(n) {
          transform: translateY(0) rotate(0);
          transition-delay: 0s;
        }

        .menu-card:hover {
          transform: translateY(-8px);
        }

        .menu-card:nth-child(1):hover,
        .menu-card:nth-child(2):hover,
        .menu-card:nth-child(3):hover {
          transform: translateY(-8px);
        }
      }

      /* Menu Category Cards Styling - Full Width Edge-to-Edge Layout */
      .menu-category-container {
        width: 100vw;
        margin-left: calc(-50vw + 50%);
        margin-right: calc(-50vw + 50%);
        padding: 0 20px;
      }

      .menu-category-card {
        height: 380px;
        background-size: cover;
        background-position: center;
        position: relative;
        overflow: hidden;
        color: white;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.8s ease-out;
        margin-bottom: 30px;
        border-radius: 0;
        opacity: 0;
      }

      /* Initial positions for scroll animation */
      .menu-category-card.align-left {
        width: 85%;
        margin-right: auto;
        margin-left: 0;
        border-radius: 0 8px 8px 0;
        transform: translateX(-100px);
      }

      .menu-category-card.align-right {
        width: 85%;
        margin-left: auto;
        margin-right: 0;
        border-radius: 8px 0 0 8px;
        transform: translateX(100px);
      }

      /* Animated state when visible */
      .menu-category-card.is-visible {
        opacity: 1;
        transform: translateX(0);
      }

      /* Staggered delays for sequential animation */
      .menu-category-card:nth-child(1).is-visible {
        transition-delay: 0.1s;
      }

      .menu-category-card:nth-child(2).is-visible {
        transition-delay: 0.3s;
      }

      .menu-category-card:nth-child(3).is-visible {
        transition-delay: 0.5s;
      }

      .menu-category-card:nth-child(4).is-visible {
        transition-delay: 0.7s;
      }

      /* Hero-style burgundy flair for menu cards */
      .menu-category-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: inherit;
        box-shadow: 0 0 20px 10px #5B2E34;
        pointer-events: none;
        animation: pulse 4s infinite ease-in-out;
        z-index: -1;
      }

      /* Hero-style gold flair for menu cards */
      .menu-category-card::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 200%;
        height: 200%;
        background: linear-gradient(
          to right,
          rgba(255, 255, 255, 0) 0%,
          rgba(212, 175, 55, 0.3) 50%,
          rgba(255, 255, 255, 0) 100%
        );
        animation: shine 3s infinite linear;
        transform-origin: bottom left;
        pointer-events: none;
        z-index: -1;
      }

      @keyframes pulse {
        0%, 100% {
          box-shadow: 0 0 20px 10px rgba(91, 46, 52, 0.7);
        }
        50% {
          box-shadow: 0 0 30px 15px rgba(91, 46, 52, 0.7);
        }
      }

      @keyframes shine {
        0% {
          transform: translateX(-100%) translateY(-100%) rotate(45deg);
        }
        100% {
          transform: translateX(100%) translateY(100%) rotate(45deg);
        }
      }

      /* Alternating positioning - Full width edge-to-edge layout */
      .menu-category-card.align-left {
        width: 85%;
        margin-right: auto;
        margin-left: 0;
        border-radius: 0 8px 8px 0;
      }

      .menu-category-card.align-right {
        width: 85%;
        margin-left: auto;
        margin-right: 0;
        border-radius: 8px 0 0 8px;
      }

      .menu-category-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
      }

      .menu-category-overlay {
        background: rgba(0, 0, 0, 0.4);
        height: 100%;
        padding: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        transition: background 0.3s ease;
      }

      .menu-category-card:hover .menu-category-overlay {
        background: rgba(0, 0, 0, 0.6);
      }

      .menu-best-for {
        font-style: italic;
        font-size: 0.9rem;
        color: #d4af37;
        margin-bottom: 10px;
        font-weight: 500;
      }

      .menu-category-title {
        font-family: 'Playfair Display', serif;
        font-size: 2rem;
        margin-bottom: 15px;
        font-weight: 600;
        line-height: 1.2;
      }

      .menu-category-items {
        list-style: none;
        padding: 0;
        font-size: 0.95rem;
        margin-bottom: 20px;
      }

      .menu-category-items li {
        margin-bottom: 5px;
        position: relative;
        padding-left: 15px;
      }

      .menu-category-items li:before {
        content: "•";
        position: absolute;
        left: 0;
        color: #d4af37;
      }

      .menu-view-btn {
        display: inline-block;
        border: 1px solid white;
        padding: 10px 20px;
        color: white;
        text-decoration: none;
        width: fit-content;
        transition: all 0.3s;
        font-size: 0.85rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .menu-view-btn:hover {
        background: white;
        color: black;
      }

      @media (max-width: 768px) {
        .menu-category-container {
          padding: 0 10px;
        }

        .menu-category-card {
          height: 250px;
          width: 100% !important;
          margin-left: 0 !important;
          margin-right: 0 !important;
          border-radius: 0 !important;
        }

        .menu-category-overlay {
          padding: 30px;
        }

        .menu-category-title {
          font-size: 1.4rem;
        }

        .menu-category-items {
          font-size: 0.9rem;
        }
      }
    `;
    document.head.appendChild(style);

    // Intersection Observer for scroll reveal animation
    const observerOptions = {
      threshold: 0.2 // Triggers when 20% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Find chef favorites cards within this section
          const chefCards = entry.target.querySelectorAll('.menu-card');
          chefCards.forEach(card => card.classList.add('is-visible'));
          
          // Find menu category cards within this section
          const menuCards = entry.target.querySelectorAll('.menu-category-card');
          menuCards.forEach(card => card.classList.add('is-visible'));
        }
      });
    }, observerOptions);

    // Wait for DOM to be ready and observe both sections
    const observeSection = () => {
      // Observe chef favorites section
      const chefSection = document.querySelector('.card-container')?.parentElement;
      if (chefSection) {
        observer.observe(chefSection);
      }
      
      // Observe menu category section
      const menuSection = document.querySelector('.menu-category-container');
      if (menuSection) {
        observer.observe(menuSection);
      }
    };

    // Observe immediately if DOM is ready, otherwise wait
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', observeSection);
    } else {
      observeSection();
    }

    return () => {
      document.head.removeChild(style);
      observer.disconnect();
    };
  }, []);
  
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
            <Link to="/book-event">Book Your Event</Link>
          </Button>
        }
        cta2={
          <Button size="lg" variant="outline" className="uppercase w-full">
            <Link to="/menu.pdf" target="_blank">Download Menu</Link>
          </Button>
        }
      />

      {/* Chef Favorites Section */}
      <div className="relative py-32 px-6 mt-16" style={backgroundStyles}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-creamy-white mb-4 text-4xl sm:text-5xl font-light tracking-tight">Chef Favorites</h2>
            <div className="w-[60px] h-[1px] bg-[#C4A46A] mx-auto" />
          </div>
          
          <div className="card-container">
            <article className="menu-card">
              <div className="card-image">
                <img src={`${(import.meta as any).env?.BASE_URL || "/"}Charcuterie Grazing Table.JPG.webp`} alt="Charcuterie Grazing Table" />
              </div>
              <div className="card-content">
                <h3>Charcuterie Grazing Table</h3>
                <p>An abundant, beautifully styled buffet featuring artisanal cheeses, cured meats, gourmet crackers, fresh and dried fruits, nuts, and house-made dips. A feast for the eyes and palate.</p>
              </div>
            </article>

            <article className="menu-card">
              <div className="card-image">
                <img src={`${(import.meta as any).env?.BASE_URL || "/"}Classic Beef Wellington.webp`} alt="Classic Beef Wellington" />
              </div>
              <div className="card-content">
                <h3>Classic Beef Wellington</h3>
                <p>Center-cut beef tenderloin coated in mushroom duxelles, wrapped in prosciutto and golden puff pastry, baked to perfection and served sliced. We can adapt this for buffet, plated, or station service.</p>
              </div>
            </article>

            <article className="menu-card">
              <div className="card-image">
                <img src={`${(import.meta as any).env?.BASE_URL || "/"}Classic Italian Pasta Bar.jpg`} alt="Classic Italian Pasta Bar" />
              </div>
              <div className="card-content">
                <h3>Classic Italian Pasta Bar</h3>
                <p>A comforting and interactive station offering a variety of pastas, classic sauces, fresh vegetables, and savory toppings, designed for effortless enjoyment and customization.</p>
              </div>
            </article>
          </div>
        </div>
      </div>

      <div className="py-20 px-6 bg-stone">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4 text-4xl sm:text-5xl font-light tracking-tight">MENU</h2>
            <div className="w-[60px] h-[1px] bg-[#C4A46A] mx-auto" />
            <p className="mt-4 text-lg text-gray-700">Please share with us the different menus you have.</p>
          </div>
          
          {/* Menu Type Grid - Zigzag Horizontal Layout */}
          <div className="menu-category-container">
            {menuTypes.map((menu, index) => (
              <div
                key={menu.id}
                className={`menu-category-card ${index % 2 === 0 ? 'align-left' : 'align-right'}`}
                style={{ 
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${(import.meta as any).env?.BASE_URL || "/"}${menu.id === 1 ? 'executive-board-meeting.jpg' : menu.id === 2 ? 'company-celebrations.jpg' : menu.id === 3 ? 'client-reception.jpg' : 'team-building-event.jpg'})` 
                }}
              >
                <div className="menu-category-overlay">
                  <span className="menu-best-for">Best for: {menu.bestFor}</span>
                  <h3 className="menu-category-title">{menu.title}</h3>
                  <ul className="menu-category-items">
                    {menu.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                  {menu.id === 1 ? (
                    <Link to="/corporate/menu" className="menu-view-btn">View Full Menu</Link>
                  ) : menu.id === 2 ? (
                    <Link to="/cultural/menu" className="menu-view-btn">View Full Menu</Link>
                  ) : menu.id === 3 ? (
                    <Link to="/dessert/menu" className="menu-view-btn">View Full Menu</Link>
                  ) : menu.id === 4 ? (
                    <Link to="/buffet/menu" className="menu-view-btn">View Full Menu</Link>
                  ) : (
                    <a href="#" className="menu-view-btn">View Full Menu</a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CTAPanel
        title="Wanna Try?"
        primaryButtonText="Request a Proposal"
        primaryButtonLink="/book-event"
        secondaryButtonText="View Our Work"
        secondaryButtonLink="/gallery"
      />
      <Footer />
    </div>
  );
};

export default Menu;