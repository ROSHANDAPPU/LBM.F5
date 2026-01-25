import { Button } from "./UI/button";
import { useIsMobile } from "../Hooks/use-mobile";

interface HeroProps {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  cta1?: React.ReactNode;
  cta2?: React.ReactNode;
  video?: string;
  fullWidth?: boolean;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, cta1, cta2, video, fullWidth = false }) => {
  const isMobile = useIsMobile();
  const base = (import.meta as any).env?.BASE_URL || "/";
  const defaultVideo = isMobile ? "videos/hero mobile.mp4" : "videos/Hero desktop.mp4";
  const source = video || defaultVideo;
  const normalized = source.replace(/^\/?Public\//, "").replace(/^\//, "");
  const heroVideo = `${base}${normalized}`;

  return (
    <div className="hero-wrapper bg-transparent"
         style={{
           width: '100vw',
           height: fullWidth ? '100vh' : '90vh',
           paddingTop: fullWidth ? '0' : '2vh',
           paddingBottom: fullWidth ? '0' : '2vh',
           display: 'flex',
           flexDirection: 'column',
           justifyContent: 'center',
           alignItems: 'center',
           marginTop: fullWidth ? '0' : '40px'
         }}
    >
      <div className="hero-video-box"
           style={{
             maxWidth: fullWidth ? '100%' : '85%',
             width: '100%',
             height: fullWidth ? '100%' : '85%',
             position: 'relative',
             borderRadius: fullWidth ? '0' : '1rem'
           }}
      >
        <div className="burgundy-flair" />
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: fullWidth ? '0' : '1rem'
          }}
          src={heroVideo}
        >
          Your browser does not support the video tag.
        </video>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(245, 245, 220, 0.1)',
            borderRadius: fullWidth ? '0' : '1rem',
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
            <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12 px-6 sm:px-8 lg:px-12">
                <p className="text-base sm:text-lg max-w-md mx-auto text-white/90 font-light uppercase">
                  {subtitle}
                </p>

                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light mb-6 sm:mb-8 text-white animate-fade-in tracking-tight">
                  {title}
                </h1>


                <div className="h-px w-12 bg-white/60 mx-auto my-8 sm:my-12" />

               <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-6 sm:pt-8">
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