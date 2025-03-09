
import React from 'react';

interface GalleryLightboxProps {
  selectedImage: string | null;
  onClose: () => void;
}

const GalleryLightbox: React.FC<GalleryLightboxProps> = ({ selectedImage, onClose }) => {
  if (!selectedImage) return null;
  
  return (
    <div 
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div className="relative max-w-6xl max-h-[90vh] w-full">
        <img 
          src={selectedImage} 
          alt="Enlarged view" 
          className="object-contain w-full h-full"
          onClick={(e) => e.stopPropagation()}
        />
        <button 
          className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
          onClick={onClose}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default GalleryLightbox;
