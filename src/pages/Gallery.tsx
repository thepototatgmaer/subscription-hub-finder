
import React, { useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import GalleryHeader from '@/components/gallery/GalleryHeader';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import GalleryLightbox from '@/components/gallery/GalleryLightbox';
import galleryImages from '@/data/galleryImages';

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
        <GalleryHeader />

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
              <GalleryGrid 
                images={galleryImages.sports} 
                onImageClick={openLightbox} 
              />
            </TabsContent>
            
            <TabsContent value="luxury" className="mt-0">
              <GalleryGrid 
                images={galleryImages.luxury} 
                onImageClick={openLightbox} 
              />
            </TabsContent>
            
            <TabsContent value="vintage" className="mt-0">
              <GalleryGrid 
                images={galleryImages.vintage} 
                onImageClick={openLightbox} 
              />
            </TabsContent>
          </Tabs>
        </AnimatedSection>
      </div>

      <GalleryLightbox 
        selectedImage={selectedImage} 
        onClose={closeLightbox} 
      />
    </div>
  );
};

export default Gallery;
