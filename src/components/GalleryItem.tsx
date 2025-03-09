
import React from 'react';
import AnimatedSection from './AnimatedSection';

interface GalleryItemProps {
  children: React.ReactNode;
  animation?: 'fade-in' | 'fade-up' | 'slide-in' | 'zoom-in';
  delay?: number;
  className?: string;
  onClick?: () => void;
}

const GalleryItem = ({ children, animation = 'fade-up', delay, className, onClick }: GalleryItemProps) => {
  return (
    <div onClick={onClick} className={className}>
      <AnimatedSection animation={animation} delay={delay}>
        {children}
      </AnimatedSection>
    </div>
  );
};

export default GalleryItem;
