import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import ScrollIndicator from "@/Components/ScrollIndicator";
import Hero from "@/Components/Hero";
import { Button } from "@/Components/UI/button";

const Events = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero
        title="Private Cooking Classes"
        subtitle="Experience bespoke culinary creations in the comfort of your home with our expert private chefs."
        fullWidth={true}
        video="/Public/videos/cooking-classes-hero.mp4"
        cta1={
          <Button size="lg" className="mt-8 uppercase tracking-wide">
            Book a Class
          </Button>
        }
      />
      <ScrollIndicator />

      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light mb-8">Private Cooking Classes</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Experience bespoke culinary creations in the comfort of your home with our expert private chefs.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-medium mb-4">Quick Highlights</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Guest range - 2 -20+</li>
              <li>Service styles - individual stations</li>
              <li>Location coverage - Dallas & surrounding areas</li>
              <li>What's included - one on one instructor opportunity, all tools and ingredients, set up and clean up</li>
            </ul>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-medium mb-4">Why Choose Us</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-medium">Custom immersive experience</h4>
                <p className="text-muted-foreground">curated culinary experience designed exclusively for you and your group</p>
              </div>
              <div>
                <h4 className="text-lg font-medium">Stress-Free Learning</h4>
                <p className="text-muted-foreground">Our team handles set up, service, and cleanup.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-4">Mini FAQ</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium">How many people can attend a class?</h4>
                <p className="text-muted-foreground">Class size varies depending on the experience and location, but most classes are ideal for small to mid-size groups. Larger groups can be accommodated with advance planning.</p>
              </div>
              <div>
                <h4 className="font-medium">What type of cooking classes do you offer?</h4>
                <p className="text-muted-foreground">Classes can range from casual and fun to elevated, chef-led experiences depending on your goals.</p>
              </div>
              <div>
                <h4 className="font-medium">Do you accommodate dietary restrictions?</h4>
                <p className="text-muted-foreground">Absolutely. Please let us know of any allergies or dietary restrictions in advance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
