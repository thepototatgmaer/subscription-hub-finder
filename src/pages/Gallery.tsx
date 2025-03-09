
import React, { useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const galleryImages = {
  sports: [
    {
      src: "https://images.unsplash.com/photo-1544207916-df1cae3cd122?q=80&w=900&auto=format&fit=crop",
      alt: "Red sports car on coastal road",
    },
    {
      src: "https://images.unsplash.com/photo-1494905998402-395d579af36f?q=80&w=900&auto=format&fit=crop",
      alt: "Blue sports car in studio",
    },
    {
      src: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=900&auto=format&fit=crop",
      alt: "Sports car on race track",
    },
    {
      src: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?q=80&w=900&auto=format&fit=crop",
      alt: "Vintage sports car",
    },
    {
      src: "https://images.unsplash.com/photo-1514867644123-6385d58d3cd4?q=80&w=900&auto=format&fit=crop",
      alt: "Yellow sports car front view",
    },
    {
      src: "https://images.unsplash.com/photo-1605515298946-d663d6932162?q=80&w=900&auto=format&fit=crop",
      alt: "Modern sports car interior",
    },
  ],
  luxury: [
    {
      src: "https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=900&auto=format&fit=crop",
      alt: "Luxury sedan in showroom",
    },
    {
      src: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=900&auto=format&fit=crop",
      alt: "Black luxury car on city street",
    },
    {
      src: "https://images.unsplash.com/photo-1566433469209-5c1c2e184c19?q=80&w=900&auto=format&fit=crop",
      alt: "Luxury SUV on mountain road",
    },
    {
      src: "https://images.unsplash.com/photo-1532581291347-9c39cf10a73c?q=80&w=900&auto=format&fit=crop",
      alt: "Luxury car dashboard",
    },
    {
      src: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=900&auto=format&fit=crop",
      alt: "Luxury car detail",
    },
    {
      src: "https://images.unsplash.com/photo-1537984822441-cfe9d6cb617d?q=80&w=900&auto=format&fit=crop",
      alt: "Luxury convertible",
    },
  ],
  vintage: [
    {
      src: "https://images.unsplash.com/photo-1541038018777-5d35a6f6b05d?q=80&w=900&auto=format&fit=crop",
      alt: "Classic vintage car",
    },
    {
      src: "https://images.unsplash.com/photo-1569759276108-31b8e7e43e7b?q=80&w=900&auto=format&fit=crop",
      alt: "Vintage car headlight",
    },
    {
      src: "https://images.unsplash.com/photo-1590083948608-525d72263a60?q=80&w=900&auto=format&fit=crop",
      alt: "Vintage car dashboard",
    },
    {
      src: "https://images.unsplash.com/photo-1562911791-c7a97b729ec5?q=80&w=900&auto=format&fit=crop",
      alt: "Vintage car in countryside",
    },
    {
      src: "https://images.unsplash.com/photo-1591293815087-095797the975?q=80&w=900&auto=format&fit=crop",
      alt: "Vintage car detail",
    },
    {
      src: "https://images.unsplash.com/photo-1565262353542-09e6ceab6407?q=80&w=900&auto=format&fit=crop",
      alt: "Vintage car interior",
    },
  ]
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openLightbox = (src: string) => {
    setSelectedImage(src);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container px-4">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
            Our Gallery
          </h1>
          <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            Browse our collection of automotive photography showcasing the beauty and power of exceptional vehicles.
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fade-in" className="mb-16">
          <Tabs defaultValue="sports" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="sports">Sports</TabsTrigger>
                <TabsTrigger value="luxury">Luxury</TabsTrigger>
                <TabsTrigger value="vintage">Vintage</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="sports" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryImages.sports.map((image, index) => (
                  <AnimatedSection 
                    key={index} 
                    animation="zoom-in" 
                    delay={index * 100}
                    className="overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform hover:scale-[1.02] group"
                    onClick={() => openLightbox(image.src)}
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
            </TabsContent>
            
            <TabsContent value="luxury" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryImages.luxury.map((image, index) => (
                  <AnimatedSection 
                    key={index} 
                    animation="zoom-in" 
                    delay={index * 100}
                    className="overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform hover:scale-[1.02] group"
                    onClick={() => openLightbox(image.src)}
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
            </TabsContent>
            
            <TabsContent value="vintage" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryImages.vintage.map((image, index) => (
                  <AnimatedSection 
                    key={index} 
                    animation="zoom-in" 
                    delay={index * 100}
                    className="overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform hover:scale-[1.02] group"
                    onClick={() => openLightbox(image.src)}
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
            </TabsContent>
          </Tabs>
        </AnimatedSection>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
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
              onClick={closeLightbox}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
