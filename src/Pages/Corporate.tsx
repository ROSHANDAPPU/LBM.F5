import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import ScrollIndicator from "@/Components/ScrollIndicator";
import Hero from "@/Components/Hero";
import { Button } from "@/Components/UI/button";

const Corporate = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero
        title="Corporate Caterings"
        subtitle="Professional gatherings that impress. We handle the details. You focus on your guests."
        fullWidth={true}
        video="/Public/videos/corporate-hero.mp4"
        cta1={<Button size="lg" className="mt-8 uppercase tracking-wide">Request a Proposal</Button>}
      />
      <ScrollIndicator />

      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light mb-8">Corporate Caterings</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Professional gatherings that impress. We handle the details. You focus on your guests.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-medium mb-4">Quick Highlights</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Guest range - 10-400</li>
              <li>Service styles - Drop-Off Catering (Grab & Go), buffet style, Passed Hors d'Oeuvres, Wellness-Focused Catering</li>
              <li>Location coverage - Dallas & surrounding areas</li>
              <li>What's included - Equipment & Service Ware, Delivery, Setup & Timing, Staffing (If Full-Service), Presentation & Styling, clean up, grazing tables</li>
            </ul>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-medium mb-4">Why Choose Us</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-medium">Trusted by Cultural & Corporate Institutions</h4>
                <p className="text-muted-foreground">Our work with museums, galleries, nonprofits, and corporate clients reflects our ability to execute at a high level in professional environments.</p>
              </div>
              <div>
                <h4 className="text-lg font-medium">Elevated, Thoughtful Menus</h4>
                <p className="text-muted-foreground">Chef-driven dishes designed for professional settings—beautifully presented, easy to enjoy, and tailored to your event's goal</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-4">Mini FAQ</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium">What types of corporate events do you cater?</h4>
                <p className="text-muted-foreground">We cater a wide range of corporate events, including team lunches, quarterly meetings, client receptions, networking events, executive meetings, holiday parties, and team-building experiences.</p>
              </div>
              <div>
                <h4 className="font-medium">How far in advance should I book?</h4>
                <p className="text-muted-foreground">We recommend booking at least 2–3 weeks in advance for corporate events. Larger events or full-service catering may require additional lead time.</p>
              </div>
              <div>
                <h4 className="font-medium">Do you provide beverages or alcohol service?</h4>
                <p className="text-muted-foreground">We offer non-alcoholic beverage service such as water, coffee, tea, and soft drinks. For alcohol service, we can coordinate with licensed bartenders.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Corporate;
