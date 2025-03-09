
import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';

const GalleryHeader: React.FC = () => {
  return (
    <AnimatedSection>
      <h1 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
        Our Gallery
      </h1>
      <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
        Browse our collection of automotive photography showcasing the beauty and power of exceptional vehicles.
      </p>
    </AnimatedSection>
  );
};

export default GalleryHeader;
