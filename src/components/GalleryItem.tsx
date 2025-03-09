
import React from 'react';
import AnimatedSection from './AnimatedSection';

interface GalleryItemProps {
  children: React.ReactNode;
  animation?: string;
  delay?: number;
  className?: string;
  onClick?: () => void;
}

const GalleryItem = ({ children, animation, delay, className, onClick }: GalleryItemProps) => {
  return (
    <div onClick={onClick} className={className}>
      <AnimatedSection animation={animation} delay={delay}>
        {children}
      </AnimatedSection>
    </div>
  );
};

export default GalleryItem;
