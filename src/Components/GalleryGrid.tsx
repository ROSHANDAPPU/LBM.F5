import { useState } from 'react';
import Masonry from 'react-masonry-css';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import culinaryArtistryImage from "@/assets/service-culinary.jpg";

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=900&fit=crop', alt: 'Grilled food', caption: 'Perfectly grilled food' },
  { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop', alt: 'Romantic dinner setup', caption: 'A romantic dinner for two' },
  { src: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&h=800&fit=crop', alt: 'Elegant wedding reception setup', caption: 'A beautiful wedding reception' },
  { src: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=600&h=900&fit=crop', alt: 'Breakfast', caption: 'A delicious breakfast' },
  { src: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200&h=600&fit=crop', alt: 'Corporate event table setting', caption: 'Corporate event setup' },
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop', alt: 'Fine dining experience', caption: 'An exquisite dining experience' },
  { src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=900&fit=crop', alt: 'Luxury event decor', caption: 'Luxurious event decoration' },
  { src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=800&fit=crop', alt: 'Executive catering service', caption: 'Catering for executives' },
  { src: culinaryArtistryImage, alt: 'Artistic culinary presentation', caption: 'Culinary artistry' },
  { src: 'https://images.unsplash.com/photo-1506280754576-f6fa8a873550?w=600&h=900&fit=crop', alt: 'Chef signature dish preparation', caption: 'Chef\'s signature dish' },
  { src: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=600&fit=crop', alt: 'Business lunch catering service', caption: 'Catering for a business lunch' },
  { src: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=800&h=800&fit=crop', alt: 'Seasonal menu presentation', caption: 'Seasonal menu highlight' },
  { src: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=1200&h=600&fit=crop', alt: 'Elegant wedding reception setup', caption: 'A beautiful wedding reception' },
  { src: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&h=900&fit=crop', alt: 'Corporate event table setting', caption: 'Corporate event setup' },
  { src: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&h=600&fit=crop', alt: 'Breakfast', caption: 'A delicious breakfast' },
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=800&fit=crop', alt: 'Fine dining experience', caption: 'An exquisite dining experience' },
  { src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&h=600&fit=crop', alt: 'Grilled food', caption: 'Perfectly grilled food' },
  { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=900&fit=crop', alt: 'Romantic dinner setup', caption: 'A romantic dinner for two' },
  { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop', alt: 'Plated dish', caption: 'A beautifully plated dish' },
  { src: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&h=900&fit=crop', alt: 'Dining table', caption: 'A well-set dining table' },
  { src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&h=800&fit=crop', alt: 'Pancakes', caption: 'Fluffy pancakes' },
  { src: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1200&h=600&fit=crop', alt: 'Healthy food', caption: 'A healthy meal' },
  { src: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=900&fit=crop', alt: 'Salad', caption: 'A fresh salad' },
  { src: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=800&h=600&fit=crop', alt: 'Fruits', caption: 'A variety of fruits' },
];

const GalleryGrid = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
    500: 1
  };

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {galleryImages.map((image, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg group cursor-pointer border-2 border-transparent" onClick={() => openLightbox(index)}>
            <div className="gallery-image-flair"></div>
            <img src={image.src} alt={image.alt} className="w-full h-auto object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-center p-4">{image.caption}</p>
            </div>
          </div>
        ))}
      </Masonry>
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={currentImageIndex}
        slides={galleryImages.map(img => ({ src: img.src, alt: img.alt, title: img.caption }))}
      />
    </>
  );
};

export default GalleryGrid;
