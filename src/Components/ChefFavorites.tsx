// ChefFavorites.tsx

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
// NOTE: Ensure GSAP is installed: npm install gsap
// If using the official GSAP React hook for auto-cleanup: npm install @gsap/react

import "./ChefFavorites.css";

const dishes = [
  {
    name: "Charcuterie Grazing Table",
    image: "hero-table.jpg",
    description: "An abundant, beautifully styled buffet featuring artisanal cheeses, cured meats, gourmet crackers, fresh and dried fruits, nuts, and house-made dips. A feast for the eyes and palate.",
    // New data fields for the detail elements
    detailImage: "hero-table.jpg", // Using same image for now, can be updated with specific detail images
    imageCaption: "A feast for the eyes and palate, perfect for any occasion.",
    longDescription: "Our signature Charcuterie Grazing Table is a show-stopping centerpiece for any event. We artfully arrange a lavish selection of imported and domestic cheeses, premium cured meats, and a variety of accompaniments like olives, pickles, artisanal breads, and seasonal fruit. This interactive and highly customizable spread encourages mingling and is perfect for weddings, corporate functions, and social gatherings."
  },
  {
    name: "Classic Beef Wellington",
    image: "service-corporate.jpg",
    description: "Center-cut beef tenderloin coated in mushroom duxelles, wrapped in prosciutto and golden puff pastry, baked to perfection and served sliced. We can adapt this for buffet, plated, or station service.",
    detailImage: "service-corporate.jpg",
    imageCaption: "Authentic charcoal-grilled skewers, Tokyo street food tradition.",
    longDescription: "Center-cut beef tenderloin coated in mushroom duxelles, wrapped in prosciutto and golden puff pastry, baked to perfection and served sliced. We can adapt this for buffet, plated, or station service."
  },
  {
    name: "Classic Italian Pasta Bar",
    image: "Windows-Catering-7.jpg",
    description: "A comforting and interactive station offering a variety of pastas, classic sauces, fresh vegetables, and savory toppings, designed for effortless enjoyment and customization.",
    detailImage: "Windows-Catering-7.jpg",
    imageCaption: "A burst of flavor: chili, lime, and Romesco sauce.",
    longDescription: "A comforting and interactive station offering a variety of pastas, classic sauces, fresh vegetables, and savory toppings, designed for effortless enjoyment and customization."
  }
];


export default function ChefFavorites() {
  const [activeIndex, setActiveIndex] = useState(0);
  // Array ref to hold the DOM elements for each dish image
  const imgRefs = useRef<(HTMLDivElement | null)[]>([]);

  // New Refs for the overlapping elements
  const detailRef = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLParagraphElement>(null);

  console.log("ChefFavorites rendering, activeIndex:", activeIndex);
  console.log("Current dish:", dishes[activeIndex]);
  console.log("Image refs length:", imgRefs.current.length);
  console.log("Active image ref:", imgRefs.current[activeIndex]);

  // GSAP Animation Logic
  useEffect(() => {
    console.log("GSAP useEffect running, activeIndex:", activeIndex);
    console.log("imgRefs.current:", imgRefs.current);

    // Loop through all image elements managed by imgRefs
    imgRefs.current.forEach((img, i) => {
      if (!img) {
        console.log(`Image ref at index ${i} is null`);
        return; // Skip if the ref is null
      }

      if (i === activeIndex) {
        console.log(`Animating active image ${i} to visible`);
        // --- Active Image Animation (Fade In, Sharp Focus) ---
        gsap.to(img, {
          x: 0, // Ensure centered
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          filter: "blur(0px)", // Sharpen the image
        });
      } else {
        console.log(`Animating inactive image ${i} to hidden`);
        // --- Inactive Image Animation (Fade Out, Blur) ---
        gsap.to(img, {
          opacity: 0,
          duration: 1.2,
          ease: "power3.inOut",
          filter: "blur(8px)", // Blur for cinematic motion effect
        });
      }
    });

    // Ensure first image is visible on initial load
    if (activeIndex === 0) {
      const firstImg = imgRefs.current[0];
      if (firstImg) {
        console.log("Setting first image visible on load");
        gsap.set(firstImg, { opacity: 1, filter: "blur(0px)", x: 0 });
      }
    }

    // Animate the new detail elements on state change
    const detailTl = gsap.timeline();
    if (detailRef.current) {
      detailTl.fromTo(detailRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );
    }
    if (captionRef.current) {
      detailTl.fromTo(captionRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.45" // Slight overlap for smoother animation
      );
    }

    // Cleanup function (optional, but good practice for GSAP)
    // In this specific case, the `gsap.to` tweens replace each other,
    // but using the `useGSAP` hook from `@gsap/react` is recommended for complex GSAP in React.
    // However, the `useEffect` approach shown is simpler and fully functional for this case.

  }, [activeIndex]); // Re-run the effect every time the active dish changes

  return (
    <section className="chef-favorites-container">
      {/* -------------------- LEFT SECTION (Text) - Desktop Navigation -------------------- */}
      <div className="chef-left">
        <h2>Chef Favorites</h2>
        <ul>
          {dishes.map((dish, i) => (
            <li
              key={dish.name}
              className={i === activeIndex ? "active" : ""}
              // Interaction: Triggers the animation by updating the state
              onMouseEnter={() => setActiveIndex(i)}
              onClick={() => setActiveIndex(i)}
            >
              {`${String(i + 1).padStart(2, "0")} ${dish.name}`}
            </li>
          ))}
        </ul>
        <p className="dish-description">{dishes[activeIndex].description}</p>
      </div>

      {/* -------------------- RIGHT SECTION (Images) -------------------- */}
      <div className="chef-right">
        {dishes.map((dish, i) => (
          // IMPORTANT: Each image has its own container and ref for independent animation
          <div
            key={dish.name}
            ref={(el) => (imgRefs.current[i] = el)}
            className={`dish-image-container ${i === activeIndex ? 'active' : ''}`}
            style={{
              // Ensure the active image is always on top
              zIndex: i === activeIndex ? 2 : 1,
            }}
          >
            <img
              src={dish.image}
              alt={dish.name}
              className={`dish-image ${i === activeIndex ? 'active' : ''}`}
              style={{ opacity: i === activeIndex ? 1 : 0 }}
            />
            {/* 2. Text Overlay (Inside the main image, only visible when active) */}
            <p ref={captionRef} className="image-caption">
              {dishes[activeIndex].imageCaption}
            </p>
          </div>
        ))}

        {/* 3. New Overlapping Detail Container (The Small Image + Long Description) */}
        <div ref={detailRef} className="image-detail-container" style={{ opacity: 1 }}>
            <img
                src={dishes[activeIndex].detailImage}
                alt={`${dishes[activeIndex].name} detail`}
                className="small-detail-image"
            />
            <p className="long-description">
                {dishes[activeIndex].longDescription}
            </p>
        </div>
      </div>

      {/* -------------------- MOBILE NAVIGATION (Hidden on Desktop) -------------------- */}
      <div className="chef-navigation-header mobile-only">
        <p className="section-pretitle">NEW STATIONS</p>
        <div className="dish-title-wrapper">
            <p className="dish-number">{String(activeIndex + 1).padStart(2, "0")} —</p>
            <h2>{dishes[activeIndex].name}</h2>
            {/* Navigation Arrows */}
            <div className="nav-arrows">
                <button
                    onClick={() => setActiveIndex(prev => (prev - 1 + dishes.length) % dishes.length)}
                    disabled={dishes.length <= 1}
                    className="nav-arrow"
                >
                    {'<'}
                </button>
                <button
                    onClick={() => setActiveIndex(prev => (prev + 1) % dishes.length)}
                    disabled={dishes.length <= 1}
                    className="nav-arrow"
                >
                    {'>'}
                </button>
            </div>
        </div>
      </div>

      {/* -------------------- MOBILE LONG DESCRIPTION (Bottom of Mobile View) -------------------- */}
      {/* This element is visible only on mobile, placed outside the image area */}
      <p className="mobile-only-description">
        {dishes[activeIndex].longDescription}
      </p>

    </section>
  );
}
