
import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';

interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
  onImageClick: (src: string) => void;
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ images, onImageClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image, index) => (
        <AnimatedSection 
          key={index} 
          animation="zoom-in" 
          delay={index * 100}
          className="overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform hover:scale-[1.02] group"
          onClick={() => onImageClick(image.src)}
        >
          <div className="relative aspect-[4/3]">
            <img 
              src={image.src} 
              alt={image.alt} 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <p className="text-white text-lg font-medium">View Larger</p>
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
};

export default GalleryGrid;
