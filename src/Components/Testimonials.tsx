import { useState, useEffect, useRef } from 'react';
import { useFadeInUp } from '@/Hooks/useScrollAnimation';

const testimonialsData = [
  {
    year: '2024',
    quote: '"La Bella Mesa transformed our corporate event into an unforgettable experience. The private cooking class was exceptional, with every dish bursting with flavor and presented beautifully. Our team left feeling inspired and well-fed!"',
    author: '– Sarah Johnson, Dallas Museum of Art',
    color: 'text-reserved-burgundy',
  },
  {
    year: '2024',
    quote: '"The corporate catering exceeded our expectations. Professional, delicious, and seamless. Our office retreat was a hit, thanks to the incredible attention to detail and the warmth of the service."',
    author: '– Michael Chen, Southwest Airlines',
    color: 'text-reserved-burgundy',
  },
  {
    year: '2024',
    quote: '"Our engagement dinner was magical. The culinary expertise shone through in every course. La Bella Mesa made our special moment even more memorable with their exquisite flavors and impeccable presentation."',
    author: '– Emily Rodriguez, St. Mark\'s Preparatory School',
    color: 'text-reserved-burgundy',
  },
  {
    year: '2023',
    quote: '"The wedding catering was outstanding. From the initial consultation to the final dessert, everything was perfect. Our guests still talk about how delicious everything was. Highly recommend!"',
    author: '– David Kim, Planned Parenthood',
    color: 'text-reserved-burgundy',
  },
  {
    year: '2023',
    quote: '"La Bella Mesa\'s private cooking class was an amazing experience. Learned so much and enjoyed the process. The food was phenomenal, and the instructor was knowledgeable and engaging."',
    author: '– Lisa Thompson, Dallas Zoo',
    color: 'text-reserved-burgundy',
  },
  {
    year: '2023',
    quote: '"Corporate event catering at its best. The variety of dishes catered to all dietary needs, and the presentation was stunning. Our team appreciated the health-conscious options too."',
    author: '– Robert Lee, Cedars Union',
    color: 'text-reserved-burgundy',
  },
  {
    year: '2024',
    quote: '"Our wedding day was made extraordinary by La Bella Mesa. The food was not just delicious but also a work of art. The service was impeccable, and our photographer captured every beautiful detail."',
    author: '– Anna Martinez, Latina Social Club DFW',
    color: 'text-reserved-burgundy',
  },
  {
    year: '2024',
    quote: '"The private cooking classes have been a game-changer for our community events. Engaging, educational, and utterly delicious. La Bella Mesa brings joy to every gathering."',
    author: '– James Wilson, 4dwn Nonprofit',
    color: 'text-reserved-burgundy',
  },
  {
    year: '2023',
    quote: '"Engagement celebrations deserve the best, and La Bella Mesa delivers. The intimate setting, combined with their culinary mastery, made our announcement dinner one for the books."',
    author: '– Maria Gonzalez, Lamplighter School',
    color: 'text-reserved-burgundy',
  },
  {
    year: '2024',
    quote: '"As a podcast host, I know good food, and La Bella Mesa\'s catering for our recording sessions was top-notch. Fresh, flavorful, and perfectly timed. A true partner in our success."',
    author: '– Carlos Ramirez, The Global Latin Factor Podcast',
    color: 'text-reserved-burgundy',
  },
];

const Testimonials = () => {
  const { elementRef, isVisible } = useFadeInUp();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % testimonialsData.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      ref={elementRef}
      className={`relative py-20 animate-fade-in-up ${isVisible ? 'animate-visible' : ''}`}
    >
      <div className="container mx-auto text-center">
        <div className="relative h-64">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <span className="text-sm font-semibold tracking-widest text-brass uppercase">
                {testimonial.year}
              </span>
              <blockquote className={`mt-4 text-2xl font-light italic max-w-2xl mx-auto font-serif ${testimonial.color || 'text-gray-800'}`}>
                {testimonial.quote}
              </blockquote>
              <p className="mt-4 text-base font-medium text-gray-600">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;