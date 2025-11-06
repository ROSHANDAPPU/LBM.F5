import { Button } from "./UI/button";
import { Input } from "./UI/input";
import { Textarea } from "./UI/textarea";
import { useFadeInUp } from '@/Hooks/useScrollAnimation';

const Contact = () => {
  const { elementRef, isVisible } = useFadeInUp();

  return (
    <section 
      ref={elementRef}
      className={`py-32 px-6 sm:px-8 lg:px-12 bg-muted/30 animate-fade-in-up ${isVisible ? 'animate-visible' : ''}`}>
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16 space-y-6">
            <div className="h-px w-12 bg-accent/40 mx-auto mb-8" />
            <h2 className="text-4xl sm:text-5xl font-light mb-4 tracking-tight">
              Let's Create Something Beautiful
            </h2>
            <p className="text-base text-muted-foreground font-light">
              Ready to host with confidence? Let's talk.
            </p>
          </div>
          
          <form className="space-y-8 bg-card p-10 border border-border/50">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-xs font-normal text-muted-foreground uppercase tracking-wider">
                  Name / Nombre
                </label>
                <Input 
                  id="name" 
                  type="text" 
                  placeholder="Your name"
                  className="bg-background border-border/50 h-12"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-xs font-normal text-muted-foreground uppercase tracking-wider">
                  Email / Correo
                </label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="your@email.com"
                  className="bg-background border-border/50 h-12"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-xs font-normal text-muted-foreground uppercase tracking-wider">
                Phone / Teléfono
              </label>
              <Input 
                id="phone" 
                type="tel" 
                placeholder="(555) 123-4567"
                className="bg-background border-border/50 h-12"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="event-type" className="block text-xs font-normal text-muted-foreground uppercase tracking-wider">
                Event Type / Tipo de Evento
              </label>
              <Input 
                id="event-type" 
                type="text" 
                placeholder="Corporate, Wedding, Family Gathering, etc."
                className="bg-background border-border/50 h-12"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="block text-xs font-normal text-muted-foreground uppercase tracking-wider">
                Tell us about your event / Cuéntanos sobre tu evento
              </label>
              <Textarea 
                id="message"
                rows={6}
                placeholder="Share your vision, number of guests, date, and any special requests..."
                className="bg-background resize-none border-border/50"
              />
            </div>
            
            <Button 
              type="submit" 
              size="lg" 
              className="w-full h-12 text-sm font-normal tracking-wide uppercase"
            >
              Request Consultation
            </Button>
          </form>
          
          <div className="mt-12 text-center space-y-3">
            <p className="text-sm text-muted-foreground font-light">
              Serving the Dallas-Fort Worth area
            </p>
            <p className="text-xs text-muted-foreground font-light">
              Bilingual service available · Servicio bilingüe disponible
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;