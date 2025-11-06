import { useFadeInUp } from '@/Hooks/useScrollAnimation';

const Footer = () => {
  const { elementRef, isVisible } = useFadeInUp();

  return (
    <footer 
      ref={elementRef}
      className={`py-16 px-6 sm:px-8 lg:px-12 bg-background border-t border-border/50 animate-fade-in-up ${isVisible ? 'animate-visible' : ''}`}>
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-3">
            <img
              src="/LBM.F5/WIDE_ASPECTRATIO_BLACK.png"
              alt="La Bella Mesa Logo"
              className="h-12 w-auto"
            />
          </div>
          
          <div className="space-y-4">
            <h4 className="text-xs font-normal text-muted-foreground uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground font-light">
              <li>Elevated Catering</li>
              <li>Corporate Events</li>
              <li>Event Planning</li>
              <li>Private Dining</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-xs font-normal text-muted-foreground uppercase tracking-wider">Service Area</h4>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              Proudly serving the Dallas-Fort Worth metroplex
            </p>
            <p className="text-xs text-muted-foreground font-light">
              Latina-owned · Local vendor network
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/30 text-center">
          <p className="text-xs text-muted-foreground font-light">&copy; {new Date().getFullYear()} La Bella Mesa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;