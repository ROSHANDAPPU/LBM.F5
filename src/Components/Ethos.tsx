import { useFadeInUp } from '@/Hooks/useScrollAnimation';

const Ethos = () => {
  const { elementRef, isVisible } = useFadeInUp();

  return (
    <section
      ref={elementRef}
      className={`ethos-section animate-fade-in-up ${isVisible ? 'animate-visible' : ''}`}
    >
      <div className="ethos-text">
        <h3>Elevated culinary experiences and seamless hosting for discerning families and corporate teams.</h3>
        <p className="text-reserved-burgundy">
          We create moments of effortless elegance with a warm, bilingual flair, leveraging a trusted network of local vendors. We handle every detail, from the curated taste to the joyful execution, so our hosts can simply focus on their guests. Charcuterie Chic DFW is your partner for memorable, high-quality gatherings that are always stress-free and budget-friendly.
        </p>
      </div>
    </section>
  );
};

export default Ethos;