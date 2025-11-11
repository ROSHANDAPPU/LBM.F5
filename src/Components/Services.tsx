import culinaryImage from "@/assets/service-culinary.jpg";
import corporateImage from "@/assets/service-corporate.jpg";
import { Button } from "./UI/button";
import { Link } from "react-router-dom";
import { useSlideInLeft, useSlideInRight } from '@/Hooks/useScrollAnimation';

const services = [
  {
    title: "Weddings",
    description: "Quality ingredients. Artisanal presentation. From intimate dinners to celebrations, we bring excellence to your table.",
    image: culinaryImage,
    slug: "/catering",
  },
  {
    title: "Corporate",
    description: "Professional gatherings that impress. We handle the details. You focus on your guests.",
    image: corporateImage,
    slug: "/corporate",
  },
  {
    title: "Intimate Gatherings",
    description: "Seamless coordination. Trusted local vendors. We manage logistics. You enjoy the moment.",
    image: culinaryImage,
    slug: "/events",
  },
  {
    title: "Special Occasions",
    description: "Experience bespoke culinary creations in the comfort of your home with our expert private chefs.",
    image: culinaryImage,
    slug: "/special-occasions",
  },
];

const ServiceItem = ({ service, index }: { service: typeof services[0], index: number }) => {
  const { elementRef, isVisible } = index % 2 === 1 ? useSlideInRight() : useSlideInLeft();
  const animationClass = index % 2 === 1 ? 'animate-slide-in-right' : 'animate-slide-in-left';

  return (
    <div
      ref={elementRef}
      className={`group flex flex-col md:flex-row items-center gap-12 lg:gap-24 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} ${animationClass} ${isVisible ? 'animate-visible' : ''}`}>
      <div className="md:w-1/2 w-full">
        <div className="relative aspect-square overflow-hidden rounded-lg">
          <img 
            src={service.image} 
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>
      <div className="md:w-1/2 w-full space-y-6">
        <h3 className="text-3xl sm:text-4xl font-light text-foreground tracking-tight brass-bullet">
          {service.title}
        </h3>
        <p className="text-base text-muted-foreground leading-relaxed font-light max-w-prose">
          {service.description}
        </p>
        <Link to={service.slug}>
          <Button variant="ghost" size="lg" className="text-base font-normal tracking-wide uppercase text-reserved-burgundy border border-reserved-burgundy bg-transparent hover:bg-reserved-burgundy hover:text-creamy-white">
            Learn More
          </Button>
        </Link>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="py-32 px-6 sm:px-8 lg:px-12 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-24 space-y-6">
          <div className="h-px w-12 bg-accent/40 mx-auto mb-8" />
          <h2 className="text-4xl sm:text-5xl font-light mb-4 tracking-tight">
            Signature Experiences
          </h2>
          <p className="text-base text-muted-foreground max-w-md mx-auto font-light">
            Intimate gatherings. Corporate celebrations. Elegance, handled.
          </p>
        </div>
        
        <div className="flex flex-col gap-32">
          {services.map((service, index) => (
            <ServiceItem key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;