import culinaryImage from "@/assets/service-culinary.jpg";
import corporateImage from "@/assets/service-corporate.jpg";
import { Button } from "./UI/button";
import { Link } from "react-router-dom";
import { useSlideInLeft, useSlideInRight } from '@/Hooks/useScrollAnimation';

const services = [
  {
    title: "Private cooking classes",
    description: "Experience bespoke culinary creations in the comfort of your home with our expert private chefs.",
    image: culinaryImage,
    slug: "/events",
    quickHighlights: [
      "Guest range - 2 -20+",
      "Service styles - individual stations",
      "Location coverage - Dallas & surrounding areas",
      "What's included - one on one instructor opportunity, all tools and ingredients, set up and clean up"
    ],
    whyChooseUs: [
      "Custom immersive experience - curated culinary experience designed exclusively for you and your group",
      "Stress-Free Learning – Our team handles set up, service, and cleanup."
    ],
    faq: [
      {
        question: "How many people can attend a class?",
        answer: "Class size varies depending on the experience and location, but most classes are ideal for small to mid-size groups. Larger groups can be accommodated with advance planning."
      },
      {
        question: "What type of cooking classes do you offer?",
        answer: "Classes can range from casual and fun to elevated, chef-led experiences depending on your goals."
      },
      {
        question: "Do you accommodate dietary restrictions?",
        answer: "Absolutely. Please let us know of any allergies or dietary restrictions in advance."
      }
    ]
  },
  {
    title: "Corporate caterings",
    description: "Professional gatherings that impress. We handle the details. You focus on your guests.",
    image: corporateImage,
    slug: "/corporate",
    quickHighlights: [
      "Guest range - 10-400",
      "Service styles - Drop-Off Catering (Grab & Go), buffet style, Passed Hors d'Oeuvres, Wellness-Focused Catering",
      "Location coverage - Dallas & surrounding areas",
      "What's included - Equipment & Service Ware, Delivery, Setup & Timing, Staffing (If Full-Service), Presentation & Styling, clean up, grazing tables"
    ],
    whyChooseUs: [
      "Trusted by Cultural & Corporate Institutions - Our work with museums, galleries, nonprofits, and corporate clients reflects our ability to execute at a high level in professional environments.",
      "Elevated, Thoughtful Menus - Chef-driven dishes designed for professional settings—beautifully presented, easy to enjoy, and tailored to your event's goal"
    ],
    faq: [
      {
        question: "What types of corporate events do you cater?",
        answer: "We cater a wide range of corporate events, including team lunches, quarterly meetings, client receptions, networking events, executive meetings, holiday parties, and team-building experiences."
      },
      {
        question: "How far in advance should I book?",
        answer: "We recommend booking at least 2–3 weeks in advance for corporate events. Larger events or full-service catering may require additional lead time."
      },
      {
        question: "Do you provide beverages or alcohol service?",
        answer: "We offer non-alcoholic beverage service such as water, coffee, tea, and soft drinks. For alcohol service, we can coordinate with licensed bartenders."
      }
    ]
  },
  {
    title: "Engagements and weddings",
    description: "Quality ingredients. Artisanal presentation. From intimate dinners to celebrations, we bring excellence to your table.",
    image: culinaryImage,
    slug: "/catering",
    quickHighlights: [
      "Guests: 50–300+",
      "Service: Buffet, Family-Style, Plated",
      "Includes: Food, service staff, serving service and clean up",
      "Areas: dallas & surrounding areas"
    ],
    whyChooseUs: [
      "Tailored Wedding Menus – We adapt to your tastes, theme, and dietary needs.",
      "Coordinated With Your Planner – We sync with your timeline so service flows naturally.",
      "Stress-Free Service – Our team handles kitchen, service, and cleanup."
    ],
    faq: [
      {
        question: "How far in advance should we book?",
        answer: "Ideally 3–6 months before your wedding date."
      },
      {
        question: "Do you handle dietary restrictions?",
        answer: "Yes—vegetarian, vegan, and allergies can be accommodated."
      },
      {
        question: "Is staff included?",
        answer: "Yes, all wedding packages include our service team."
      }
    ]
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