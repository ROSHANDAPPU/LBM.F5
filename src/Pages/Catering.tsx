import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import ScrollIndicator from "@/Components/ScrollIndicator";
import culinaryImage from "@/assets/service-culinary.jpg";

const Catering = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div
        className="relative w-full h-[80vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${culinaryImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light mb-4">Engagements and Weddings</h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto font-light">
            Quality ingredients. Artisanal presentation. From intimate dinners to celebrations, we bring excellence to your table.
          </p>
        </div>
      </div>
      <ScrollIndicator />

      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light mb-8">Engagements and Weddings</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Quality ingredients. Artisanal presentation. From intimate dinners to celebrations, we bring excellence to your table.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-medium mb-4">Quick Highlights</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Guests: 50–300+</li>
              <li>Service: Buffet, Family-Style, Plated</li>
              <li>Includes: Food, service staff, serving service and clean up</li>
              <li>Areas: dallas & surrounding areas</li>
            </ul>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-medium mb-4">Why Choose Us</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-medium">Tailored Wedding Menus</h4>
                <p className="text-muted-foreground">We adapt to your tastes, theme, and dietary needs.</p>
              </div>
              <div>
                <h4 className="text-lg font-medium">Coordinated With Your Planner</h4>
                <p className="text-muted-foreground">We sync with your timeline so service flows naturally.</p>
              </div>
              <div>
                <h4 className="text-lg font-medium">Stress-Free Service</h4>
                <p className="text-muted-foreground">Our team handles kitchen, service, and cleanup.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-4">Mini FAQ</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium">How far in advance should we book?</h4>
                <p className="text-muted-foreground">Ideally 3–6 months before your wedding date.</p>
              </div>
              <div>
                <h4 className="font-medium">Do you handle dietary restrictions?</h4>
                <p className="text-muted-foreground">Yes—vegetarian, vegan, and allergies can be accommodated.</p>
              </div>
              <div>
                <h4 className="font-medium">Is staff included?</h4>
                <p className="text-muted-foreground">Yes, all wedding packages include our service team.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Catering;
