import React, { useState, useEffect } from 'react';
import './ExperienceSlider.css'; // Import the CSS file
import { FadeImage } from './UI/FadeImage';
import logoTransparent from '@/assets/BLUE_TEXT_TRANSPARENT_BACKGROUND.png';
import logoCrema from '@/assets/BLUE_TEXT_CREMA_BACKGROUND.png';

const ExperienceSlider: React.FC = () => {
  const [activeItem, setActiveItem] = useState('events');

  useEffect(() => {
    const menuItems = document.querySelectorAll('.experience-menu li');
    const slides = document.querySelectorAll('.slide');

    const handleClick = (event: Event) => {
      const target = event.currentTarget as HTMLLIElement;
      const targetId = target.dataset.target;

      // Remove active from menu
      menuItems.forEach(item => item.classList.remove('active'));
      target.classList.add('active');

      // Show corresponding slide
      slides.forEach(slide => slide.classList.remove('active'));
      if (targetId) {
        document.getElementById(targetId)?.classList.add('active');
      }
    };

    menuItems.forEach(item => {
      item.addEventListener('click', handleClick);
    });

    // Set initial active state
    document.querySelector(`.experience-menu li[data-target="${activeItem}"]`)?.classList.add('active');
    document.getElementById(activeItem)?.classList.add('active');

    return () => {
      menuItems.forEach(item => {
        item.removeEventListener('click', handleClick);
      });
    };
  }, [activeItem]);

  return (
    <section className="experience-section">
      <div className="experience-content">
        {/* Left Column */}
        <div className="experience-left">
          <h2>Experience Kalm Kitchen</h2>
          <a href="#" className="learn-more">Learn More</a>

          <ul className="experience-menu">
            <li data-target="events" className={activeItem === 'events' ? 'active' : ''} onClick={() => setActiveItem('events')}><span>01</span> Events</li>
            <li data-target="weddings" className={activeItem === 'weddings' ? 'active' : ''} onClick={() => setActiveItem('weddings')}><span>02</span> Weddings</li>
            <li data-target="about" className={activeItem === 'about' ? 'active' : ''} onClick={() => setActiveItem('about')}><span>03</span> About</li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="experience-right">
          <div className={`slide ${activeItem === 'events' ? 'active' : ''}`} id="events">
            <FadeImage src={logoTransparent} alt="Events" />
            <div className="overlay">
              <h3>Meet the Team</h3>
              <p>Discover more about our brilliant and experienced team of professional event planners, chefs, and managers.</p>
            </div>
          </div>

          <div className={`slide ${activeItem === 'weddings' ? 'active' : ''}`} id="weddings">
            <FadeImage src={logoCrema} alt="Weddings" />
            <div className="overlay">
              <h3>Beautifully Thoughtful Weddings</h3>
              <p>Making your day unforgettable with care and style.</p>
            </div>
          </div>

          <div className={`slide ${activeItem === 'about' ? 'active' : ''}`} id="about">
            <FadeImage src="/WIDE_ASPECTRATIO_BLACK.png" alt="About" />
            <div className="overlay">
              <h3>About Kalm Kitchen</h3>
              <p>Learn our story, mission, and what makes our services unique.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSlider;
