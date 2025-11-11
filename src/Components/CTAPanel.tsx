import { Button } from "@/Components/UI/button";
import { Link } from "react-router-dom";
import ctaBannerImage from "/Public/Courtey_Jon_McNielPhotography_Photocreditneeded_08.17-46-scaled.jpg";

interface CTAPanelProps {
  title: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

const CTAPanel: React.FC<CTAPanelProps> = ({
  title,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
}) => {
  return (
    <section
      className="cta-banner relative w-full h-[400px] md:h-[500px]"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${ctaBannerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'scroll',
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-libre-baskerville">
          {title}
        </h2>
        <div className="flex gap-4 flex-wrap justify-center">
          <Button asChild size="lg" className="uppercase">
            <Link to={primaryButtonLink}>{primaryButtonText}</Link>
          </Button>
          {secondaryButtonText && secondaryButtonLink && (
            <Button asChild size="lg" variant="ghost" className="uppercase text-white border border-white hover:bg-white hover:text-black">
              <Link to={secondaryButtonLink}>{secondaryButtonText}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTAPanel;