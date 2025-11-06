import { Button } from "./UI/button";
import heroImage from "@/assets/NEW.png";

interface HeroProps {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  cta1?: React.ReactNode;
  cta2?: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, cta1, cta2 }) => {
  return (
    <div className="hero-wrapper bg-transparent"
         style={{
           width: '100vw',
           height: '90vh',
           paddingTop: '2vh',
           paddingBottom: '2vh',
           display: 'flex',
           flexDirection: 'column',
           justifyContent: 'center',
           alignItems: 'center',
           marginTop: '40px'
         }}
    >
      <div className="hero-image-box"
           style={{
             maxWidth: '85%',
             width: '100%',
             height: '85%',
             backgroundImage: `url(${heroImage})`,
             backgroundSize: 'cover',
             backgroundPosition: 'center',
             backgroundRepeat: 'no-repeat',
             position: 'relative',
             borderRadius: '1rem'
           }}
      >
        <div className="burgundy-flair" />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(245, 245, 220, 0.1)',
            borderRadius: '1rem',
            overflow: 'hidden',
          }}
        >
          <div className="gold-flair" />
          <div
            className="relative z-10 text-center py-32 flex items-center justify-center"
            style={{
              width: '100%',
              height: '100%'
            }}
          >
            <div className="max-w-4xl mx-auto space-y-12 px-6 sm:px-8 lg:px-12">
               <p className="text-base sm:text-lg max-w-md mx-auto text-white/90 font-light uppercase">
                 {subtitle}
               </p>

               <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light mb-8 text-white animate-fade-in tracking-tight">
                 {title}
               </h1>


               <div className="h-px w-12 bg-white/60 mx-auto my-12" />

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                {cta1}
                {cta2}
              </div>
            </div>
          </div>
        </div>

    </div>
  </div>
  );
};

export default Hero;
