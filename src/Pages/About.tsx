import { useState, useEffect, useRef } from "react";
import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import Footer from "@/Components/Footer";
import { Button } from "@/Components/UI/button";
import Partners from "@/Components/Partners";
import Testimonials from "@/Components/Testimonials";
import GalleryGrid from "@/Components/GalleryGrid";
import CTAPanel from "@/Components/CTAPanel";
import ScrollIndicator from "@/Components/ScrollIndicator";

const teamMembers = [
    {
      name: "Executive chef Aida",
      title: "Executive Chef",
      image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&h=400&fit=crop",
      bio: "Design menus tailored to the client's event, budget, and goals creating elevated dining moments that feel intentional, exclusive, and memorable.",
    },
    {
      name: "Pastry chef Jenny",
      title: "Pastry Chef",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      bio: "Design, prepare, and present refined desserts, cakes and sweet one bites for events, balancing flavor, aesthetics, and efficiency to deliver consistent, high-quality pastry service in a fast-paced catering environment.",
    },
    {
      name: "Photographer Luis Alejandre",
      title: "Photographer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      bio: "Capture the essence of each event through high-quality, candid, and artfully composed photographs that tell a story of connection, celebration, and culinary artistry.",
    },
 ];

const About = () => {
  const [isStoryVisible, setIsStoryVisible] = useState(false);
  const [isValuesVisible, setIsValuesVisible] = useState(false);
  const [isGalleryVisible, setIsGalleryVisible] = useState(false);
  const [isTeamVisible, setIsTeamVisible] = useState(false);
  const storyRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (storyRef.current) {
        const rect = storyRef.current.getBoundingClientRect();
        setIsStoryVisible(rect.top < window.innerHeight && rect.bottom > 0);
      }
      if (valuesRef.current) {
        const rect = valuesRef.current.getBoundingClientRect();
        setIsValuesVisible(rect.top < window.innerHeight && rect.bottom > 0);
      }
      if (galleryRef.current) {
        const rect = galleryRef.current.getBoundingClientRect();
        setIsGalleryVisible(rect.top < window.innerHeight && rect.bottom > 0);
      }
      if (teamRef.current) {
        const rect = teamRef.current.getBoundingClientRect();
        setIsTeamVisible(rect.top < window.innerHeight && rect.bottom > 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <div className="min-h-screen">
      <Header />
      <Hero
        title="Our Story, Quietly Told"
        subtitle="chef-led menus with discreet hospitality"
        cta1={<Button size="lg" className="mt-8 uppercase tracking-wide">Book a Tasting</Button>}
      />
      <ScrollIndicator />

<section className={`transition-colors duration-500 ${isStoryVisible ? 'bg-reserved-burgundy w-screen relative left-[50%] right-[50%] -mx-[50vw]' : ''}`}>
  <div className="container mx-auto px-8 py-16" ref={storyRef}>
    <h2 className={`text-4xl md:text-5xl font-light tracking-tight text-center mb-16 transition-colors duration-500 ${isStoryVisible ? 'text-white' : ''}`} style={{ fontFamily: 'Libre Baskerville, serif' }}>Our Story</h2>
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop" alt="Our elegant dining setup showcasing effortless hospitality" className="rounded-lg shadow-lg w-full" />
      </div>
      <div>
        <h3 className={`text-3xl font-light mb-6 transition-colors duration-500 ${isStoryVisible ? 'text-white' : 'text-foreground'}`} style={{ fontFamily: 'Libre Baskerville, serif' }}>Effortless Elegance</h3>
        <p className={`text-lg leading-relaxed transition-colors duration-500 ${isStoryVisible ? 'text-white' : 'text-muted-foreground'}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
          La Bella Mesa was born from the friendship of a few small business and service providers with a passion for food and elevated culinary experiences, and a talent for curating unforgettable events. Together, we saw a gap in the industry: first-generation millennials, like us, who want to celebrate life’s milestones with style, joy, and flavor—without breaking the bank.
        </p>
        <p className={`text-lg leading-relaxed mt-4 transition-colors duration-500 ${isStoryVisible ? 'text-white' : 'text-muted-foreground'}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Drawing on our roots, creativity, and more than a decade of experience in the private and public culinary sector, we set out to design events that feel both elegant and effortless. And our mission goes beyond catering: we are committed to uplifting our community by building a network of small business owners, connecting clients with local talent, and creating opportunities that give back and generate jobs across the DFW area.
        </p>
      </div>
    </div>
  </div>
</section>

<section className={`transition-colors duration-500 ${isValuesVisible ? 'bg-reserved-burgundy w-screen relative left-[50%] right-[50%] -mx-[50vw]' : ''}`}>
  <div className="container mx-auto px-8 py-16" ref={valuesRef}>
    <h2 className={`text-4xl md:text-5xl font-light tracking-tight text-center mb-16 transition-colors duration-500 ${isValuesVisible ? 'text-white' : ''}`} style={{ fontFamily: 'Libre Baskerville, serif' }}>Our Values</h2>
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <ul className="space-y-8">
          <li className="flex items-start">
            <div className="brass-accent mr-6 mt-1">
              <div className="gold-flair w-2 h-2"></div>
            </div>
            <div>
              <h3 className={`text-2xl font-light mb-3 transition-colors duration-500 ${isValuesVisible ? 'text-white' : 'text-foreground'}`} style={{ fontFamily: 'Libre Baskerville, serif' }}>Quality</h3>
              <p className={`text-lg leading-relaxed transition-colors duration-500 ${isValuesVisible ? 'text-white' : 'text-muted-foreground'}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>We obsess over the details—from fresh ingredients to flawless service—so every event feels polished, thoughtful, and cared for.</p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="brass-accent mr-6 mt-1">
              <div className="gold-flair w-2 h-2"></div>
            </div>
            <div>
              <h3 className={`text-2xl font-light mb-3 transition-colors duration-500 ${isValuesVisible ? 'text-white' : 'text-foreground'}`} style={{ fontFamily: 'Libre Baskerville, serif' }}>Taste</h3>
              <p className={`text-lg leading-relaxed transition-colors duration-500 ${isValuesVisible ? 'text-white' : 'text-muted-foreground'}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>Every bite should be memorable. We design flavor-forward menus that blend comfort, creativity, and a touch of surprise.</p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="brass-accent mr-6 mt-1">
              <div className="gold-flair w-2 h-2"></div>
            </div>
            <div>
              <h3 className={`text-2xl font-light mb-3 transition-colors duration-500 ${isValuesVisible ? 'text-white' : 'text-foreground'}`} style={{ fontFamily: 'Libre Baskerville, serif' }}>Budget Friendly</h3>
              <p className={`text-lg leading-relaxed transition-colors duration-500 ${isValuesVisible ? 'text-white' : 'text-muted-foreground'}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>We believe great celebrations shouldn’t require a huge budget. We build smart, transparent packages that maximize value without sacrificing experience.</p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="brass-accent mr-6 mt-1">
              <div className="gold-flair w-2 h-2"></div>
            </div>
            <div>
              <h3 className={`text-2xl font-light mb-3 transition-colors duration-500 ${isValuesVisible ? 'text-white' : 'text-foreground'}`} style={{ fontFamily: 'Libre Baskerville, serif' }}>Fun</h3>
              <p className={`text-lg leading-relaxed transition-colors duration-500 ${isValuesVisible ? 'text-white' : 'text-muted-foreground'}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>We keep things light, joyful, and stress-free, creating events where guests can relax, connect, and genuinely enjoy the moment.</p>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&h=400&fit=crop" alt="Our commitment to craft, calm aesthetics, hospitality, and reliability" className="rounded-lg shadow-lg w-full" />
      </div>
    </div>
  </div>
</section>

      {/* Sticky Team Section */}
      <div ref={teamRef} className={`relative transition-colors duration-500 ${isTeamVisible ? 'bg-stone' : 'bg-background-secondary'}`}>
        <div className="sticky top-0 h-screen">
          {/* This div is for the sticky background, but the background is on the parent */}
        </div>
        <div className="relative z-10 -mt-[100vh]">
          {/* Team Content */}
          <div className="py-16">
            <div className="container mx-auto px-8 text-center">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white" style={{ fontFamily: 'Libre Baskerville, serif' }}>Meet Our Team</h2>
              <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                The passionate culinary artisans and hospitality experts who bring every gathering to life with quiet elegance and unwavering dedication.
              </p>
            </div>
            <div className="mt-16">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex flex-col md:flex-row items-center even:md:flex-row-reverse mb-20 last:mb-0">
                  <div className="md:w-1/2">
                    <img src={`${member.image}&w=800&h=800`} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="md:w-1/2 p-8 md:p-16 text-center md:text-left text-white">
                    <h3 className="text-3xl font-light" style={{ fontFamily: 'Libre Baskerville, serif' }}>{member.name}</h3>
                    <p className="text-xl text-white/80 mt-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>{member.title}</p>
                    <p className="text-lg text-white/80 mt-6 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <section ref={testimonialsRef}>
            <Testimonials />
          </section>

          {/* Partners */}
          <div className="py-16">
            <div className="container mx-auto">
              <h2 className="text-center section-title mb-4 font-serif text-white">Our Partners</h2>
              <div className="flex justify-center items-center mt-8 space-x-8">
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-12 filter grayscale" />
                <div className="h-12 w-px bg-brass"></div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" alt="Microsoft" className="h-12 filter grayscale" />
                <div className="h-12 w-px bg-brass"></div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" className="h-12 filter grayscale" />
                <div className="h-12 w-px bg-brass"></div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-12 filter grayscale" />
                <div className="h-12 w-px bg-brass"></div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg" alt="Android" className="h-12 filter grayscale" />
              </div>
            </div>
          </div>
        </div>
      </div>


<section className={`transition-colors duration-500 ${isGalleryVisible ? 'bg-reserved-burgundy w-screen relative left-[50%] right-[50%] -mx-[50vw]' : ''}`}>
  <div className="container mx-auto px-4 py-8" ref={galleryRef}>
    <h2 className={`text-4xl md:text-5xl font-light tracking-tight text-center mb-16 transition-colors duration-500 ${isGalleryVisible ? 'text-white' : ''}`} style={{ fontFamily: 'Libre Baskerville, serif' }}>Our Gallery</h2>
    <GalleryGrid />
  </div>
</section>
      <CTAPanel
        title="Inspired by our story?"
        primaryButtonText="Request a Proposal"
        primaryButtonLink="/contact"
        secondaryButtonText="View Our Work"
        secondaryButtonLink="/gallery"
        imageUrl={'/Courtey_Jon_McNielPhotography_Photocreditneeded_08.17-46-scaled.jpg'}
      />
      <Footer />
    </div>
  );
};

export default About;
