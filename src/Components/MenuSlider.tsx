import React, { useState, useEffect } from 'react';

const MenuSlider: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState('bruschetta');

  const slidesData = [
    { id: 'bruschetta', title: 'Bruschetta Bar', description: 'Perfect at drinks receptions. Pair with our Pink Paloma Bar.', image: '/hero-table.jpg' },
    { id: 'yakitori', title: 'Yakitori Grill', description: 'Japanese street food skewers grilled over charcoal.', image: '/NEW.png' },
    { id: 'shrimp', title: 'Chili-Lime Shrimp Skewers', description: 'Petite, savory meat and vegetable skewers grilled over an open flame with guest\'s choice of: harissa chicken, marinated skirt steak, chili lime sea bass, or smoked wild mushrooms; served with salsa verde and creamy Romesco dipping sauces.', image: '/About.png' },
  ];

  const handleMenuItemClick = (targetId: string) => {
    setActiveSlide(targetId);
  };

  const FadeImage = ({ src, alt }: { src: string; alt: string }) => {
    const [loaded, setLoaded] = useState(false);

    return (
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-800 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setLoaded(true)}
      />
    );
  };

  return (
    <section className="flex justify-center items-center h-screen overflow-hidden bg-[#2b2323] text-white relative p-8">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-16 w-[90%] max-w-[1400px] items-center">
        {/* Left Column */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl tracking-wider uppercase mb-4 font-sans text-creamy-white">Chef Favorites</h2>
          <a href="#" className="inline-block px-6 py-2 mb-8 border border-white text-white no-underline transition-colors duration-300 hover:bg-white hover:text-[#2b2323]">Learn More</a>

          <ul className="list-none p-0 m-0">
            {slidesData.map((item, index) => (
              <li
                key={item.id}
                data-target={item.id}
                className={`cursor-pointer my-2 transition-all duration-300 ${activeSlide === item.id ? 'opacity-100 text-white font-bold scale-105' : 'opacity-50 text-stone hover:opacity-80'}`}
                onClick={() => handleMenuItemClick(item.id)}
              >
                <span className="mr-2 font-bold">{String(index + 1).padStart(2, '0')}</span> <span className="font-libre-baskerville text-2xl md:text-3xl">{item.title}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column */}
        <div className="relative h-[60vh] md:h-[80vh] w-full">
          {slidesData.map((slide) => (
            <div
              key={slide.id}
              id={slide.id}
              className={`absolute top-0 left-0 w-full h-full opacity-0 translate-x-8 transition-all duration-800 ease-in-out ${activeSlide === slide.id ? 'opacity-100 translate-x-0' : ''}`}
            >
              <FadeImage src={slide.image} alt={slide.title} />
              <div className="absolute bottom-8 left-8 max-w-[70%] bg-black bg-opacity-40 p-4 md:p-6 rounded-md">
                <h3 className="text-xl md:text-2xl mb-2">{slide.title}</h3>
                <p className="text-sm md:text-base">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSlider;