import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import ScrollIndicator from "@/Components/ScrollIndicator";
import corporateImage from "@/assets/service-corporate.jpg";

const SpecialOccasions = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div
        className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${corporateImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light mb-4">Special Occasions</h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto font-light">
            Celebrating life's milestones with exquisite food and impeccable service.
          </p>
        </div>
      </div>
      <ScrollIndicator />

      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-light mb-8">Unforgettable Celebrations</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Charcuterie Chic DFW specializes in crafting bespoke culinary experiences for all of life's special moments. From intimate anniversaries to grand birthday celebrations, we bring elegance and exceptional taste to your event. Our dedicated team works closely with you to design a personalized menu and ensure every detail is flawlessly executed, allowing you to savor every moment with your guests.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Whether it's a milestone birthday, a cherished anniversary, a festive holiday gathering, or any other significant occasion, we provide tailored solutions that reflect your unique style and preferences. Let us transform your vision into a memorable reality with exquisite food and impeccable service.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SpecialOccasions;
