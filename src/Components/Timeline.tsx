const timelineData = [
  {
    step: 1,
    title: "Inquiry",
    description: "You reach out with your event details, and we provide initial availability and information.",
    deliverable: "Response within 24 hours."
  },
  {
    step: 2,
    title: "Discovery Call",
    description: "We schedule a brief call to understand your vision, preferences, and requirements for the event.",
    deliverable: "A clear understanding of your needs."
  },
  {
    step: 3,
    title: "Proposal & Menu Design",
    description: "We craft a detailed proposal with a custom menu tailored to your tastes and event style.",
    deliverable: "A bespoke proposal and menu."
  },
  {
    step: 4,
    title: "Tasting (Optional)",
    description: "You have the option to taste a selection of dishes from your proposed menu.",
    deliverable: "Confidence in your menu choices."
  },
  {
    step: 5,
    title: "Planning & Logistics",
    description: "We finalize all the details, from timelines to rentals, ensuring a seamless experience.",
    deliverable: "A comprehensive event plan."
  },
  {
    step: 6,
    title: "Event Day",
    description: "Our team executes the plan flawlessly, allowing you to enjoy your event without a worry.",
    deliverable: "An unforgettable experience."
  }
];

interface TimelineProps {
  isProcessVisible: boolean;
}

const Timeline: React.FC<TimelineProps> = ({ isProcessVisible }) => {
  return (
    <div className="relative">
      <div className="absolute left-1/2 h-full border-l-2 border-gray-300"></div>
      {timelineData.map((item, index) => (
        <div key={index} className="mb-8 flex justify-between items-center w-full">
          <div className="w-1/2 pr-8 text-right">
            {index % 2 === 0 && (
              <div>
                <h3 className={`text-2xl font-light mb-2 transition-colors duration-500 ${isProcessVisible ? 'text-brass' : 'text-foreground'}`} style={{ fontFamily: 'Libre Baskerville, serif' }}>{item.title}</h3>
                <p className={`transition-colors duration-500 ${isProcessVisible ? 'text-white' : 'text-muted-foreground'}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>{item.description}</p>
                <p className={`text-sm mt-2 transition-colors duration-500 ${isProcessVisible ? 'text-white' : 'text-muted-foreground'}`} style={{ fontFamily: 'Montserrat, sans-serif' }}><em>{item.deliverable}</em></p>
              </div>
            )}
          </div>
          <div className="z-10 flex items-center justify-center bg-background">
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">{item.step}</div>
          </div>
          <div className="w-1/2 pl-8">
            {index % 2 !== 0 && (
              <div>
                <h3 className={`text-2xl font-light mb-2 transition-colors duration-500 ${isProcessVisible ? 'text-brass' : 'text-foreground'}`} style={{ fontFamily: 'Libre Baskerville, serif' }}>{item.title}</h3>
                <p className={`transition-colors duration-500 ${isProcessVisible ? 'text-white' : 'text-muted-foreground'}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>{item.description}</p>
                <p className={`text-sm mt-2 transition-colors duration-500 ${isProcessVisible ? 'text-white' : 'text-muted-foreground'}`} style={{ fontFamily: 'Montserrat, sans-serif' }}><em>{item.deliverable}</em></p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
