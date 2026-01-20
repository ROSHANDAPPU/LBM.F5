import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('.hero-component') as HTMLElement;
      const heroHeight = heroSection ? heroSection.offsetHeight : 0;
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > heroHeight);
    };

    // Reset scroll position and navbar state when route changes
    window.scrollTo(0, 0);
    setIsScrolled(false);
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  return (
    <header
      className={`navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled || isMobileMenuOpen
          ? 'bg-background shadow-soft'
          : 'bg-transparent'
      }`}
      style={{
        position: isScrolled ? 'fixed' : 'absolute'
      }}
    >
      <nav className="container mx-auto px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ease-in-out ${
          isScrolled ? 'h-20' : 'h-28'
        }`}>
          <div className="flex-1 flex justify-start">
            {/* Left navigation */}
            <div className="hidden md:flex items-center space-x-8 nav-left">
              <div className="relative" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
                <a href="#services" className={`text-sm font-medium transition-all nav-link hover:text-brass hover:underline hover:underline-offset-4 hover:decoration-brass ${isScrolled ? 'text-foreground' : 'text-reserved-burgundy'} flex items-center`}>
                  SERVICES <ChevronDown size={16} className="ml-1" />
                </a>
                {isServicesOpen && (
                  <div className="absolute top-full left-0 bg-background shadow-soft rounded-md py-2 min-w-[200px] z-50">
                    <Link to="/catering" className="block px-4 py-2 text-sm hover:text-brass hover:underline hover:underline-offset-4 hover:decoration-brass">Engagements and weddings</Link>
                    <Link to="/corporate" className="block px-4 py-2 text-sm hover:text-brass hover:underline hover:underline-offset-4 hover:decoration-brass">Corporate caterings</Link>
                    <Link to="/events" className="block px-4 py-2 text-sm hover:text-brass hover:underline hover:underline-offset-4 hover:decoration-brass">Private cooking classes</Link>
                  </div>
                )}
              </div>
              <Link to="/about" className={`text-sm font-medium transition-all nav-link hover:text-brass hover:underline hover:underline-offset-4 hover:decoration-brass ${isScrolled ? 'text-foreground' : 'text-reserved-burgundy'}`}>
                ABOUT
              </Link>
              <Link to="/gallery" className={`text-sm font-medium transition-all nav-link hover:text-brass hover:underline hover:underline-offset-4 hover:decoration-brass ${isScrolled ? 'text-foreground' : 'text-reserved-burgundy'}`}>
                OUR WORK
              </Link>
            </div>
          </div>

          {/* Center logo */}
          <div className="flex-shrink-0 logo-center">
            <Link to="/">
              <img
                src={isScrolled ? "/LBM.F5/SQUARE_TRANSPARENT_INK_NAVY.png" : "/LBM.F5/WIDE_ASPECTRATIO_NO_BACKGROUND_INK_NAVY.png"}
                alt="La Bella Mesa"
                className={`transition-all duration-300 ease-in-out hover:opacity-80 ${
                  isScrolled
                    ? 'w-[58px] h-auto'
                    : 'h-16 w-auto min-w-[120px]'
                }`}
                style={{
                  objectFit: 'contain',
                  maxHeight: isScrolled ? '58px' : '64px'
                }}
              />
            </Link>
          </div>

          <div className="flex-1 flex justify-end">
            {/* Right navigation */}
            <div className="hidden md:flex items-center space-x-8 nav-right">
              <Link to="/menu" className={`text-sm font-medium transition-all nav-link hover:text-brass hover:underline hover:underline-offset-4 hover:decoration-brass ${isScrolled ? 'text-foreground' : 'text-reserved-burgundy'}`}>
                MENU
              </Link>
              <Link to="/our-process" className={`text-sm font-medium transition-all nav-link hover:text-brass hover:underline hover:underline-offset-4 hover:decoration-brass ${isScrolled ? 'text-foreground' : 'text-reserved-burgundy'}`}>
                OUR PROCESS
              </Link>
              <Link to="/book-event" className={`text-sm font-medium transition-all nav-link hover:text-brass hover:underline hover:underline-offset-4 hover:decoration-brass ${isScrolled ? 'text-foreground' : 'text-reserved-burgundy'}`}>
                BOOK EVENT
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-foreground">
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background shadow-soft">
          <div className="container mx-auto px-8 py-4 flex flex-col space-y-4">
            <button onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)} className="text-sm font-medium text-foreground hover:text-brass flex items-center justify-between">
              SERVICES <ChevronDown size={16} className={`ml-1 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {isMobileServicesOpen && (
              <div className="ml-4 space-y-2">
                <Link to="/catering" className="text-sm font-medium text-foreground hover:text-brass hover:underline hover:underline-offset-4 hover:decoration-brass block">Engagements and weddings</Link>
                <Link to="/corporate" className="text-sm font-medium text-foreground hover:text-brass hover:underline hover:underline-offset-4 hover:decoration-brass block">Corporate caterings</Link>
                <Link to="/events" className="text-sm font-medium text-foreground hover:text-brass hover:underline hover:underline-offset-4 hover:decoration-brass block">Private cooking classes</Link>
              </div>
            )}
            <Link to="/about" className="text-sm font-medium text-foreground hover:text-brass">
              ABOUT
            </Link>
            <Link to="/gallery" className="text-sm font-medium text-foreground hover:text-brass">
              OUR WORK
            </Link>
            <Link to="/menu" className="text-sm font-medium text-foreground hover:text-brass">
              MENU
            </Link>
            <Link to="/our-process" className="text-sm font-medium text-foreground hover:text-brass">
              OUR PROCESS
            </Link>
            <Link to="/book-event" className="text-sm font-medium text-foreground hover:text-brass">
              BOOK EVENT
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;