
import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Video, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/AnimatedSection';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1588258219511-64eb629cb833?q=80&w=1920&auto=format&fit=crop")', 
            backgroundPosition: 'center 25%',
          }}
        >
          <div className="absolute inset-0 bg-black/50 z-0"></div>
        </div>

        <div className="container z-10 px-4 text-center">
          <AnimatedSection animation="fade-up" delay={300}>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              Capturing Automotive Excellence
            </h1>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={600}>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Premium photography and videography services for automotive enthusiasts,
              dealerships, and manufacturers.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={900}>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="font-medium">
                <Link to="/gallery">View Gallery</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white/10">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16">
              Our Expertise
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection animation="fade-up" delay={200} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-6">
                <Camera className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Photography</h3>
              <p className="text-gray-600 dark:text-gray-300">
                High-quality, professional automotive photography that highlights every curve and detail of your vehicle.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-6">
                <Video className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Videography</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Dynamic and cinematic videos that capture the essence and performance of your vehicles in motion.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={600} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-6">
                <Car className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Event Coverage</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Comprehensive documentation of automotive shows, races, and promotional events with our professional team.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24">
        <div className="container px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16">
              Featured Work
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="fade-in">
            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                <CarouselItem>
                  <div className="p-1">
                    <div className="overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544207916-df1cae3cd122?q=80&w=1000&auto=format&fit=crop" 
                        alt="Luxury sports car" 
                        className="w-full h-[500px] object-cover object-center hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-1">
                    <div className="overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?q=80&w=1000&auto=format&fit=crop" 
                        alt="Vintage classic car" 
                        className="w-full h-[500px] object-cover object-center hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-1">
                    <div className="overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?q=80&w=1000&auto=format&fit=crop" 
                        alt="Modern SUV on mountain road" 
                        className="w-full h-[500px] object-cover object-center hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={300} className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/gallery">View Full Gallery</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16">
              What Our Clients Say
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedSection animation="fade-up" delay={200} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <div className="flex flex-col h-full">
                <p className="text-gray-600 dark:text-gray-300 italic mb-6">
                  "AutoLens delivered exceptional photography for our dealership. Their attention to detail and creative approach made our inventory stand out online."
                </p>
                <div className="mt-auto">
                  <p className="font-bold">John Carter</p>
                  <p className="text-sm text-gray-500">Premium Motors</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <div className="flex flex-col h-full">
                <p className="text-gray-600 dark:text-gray-300 italic mb-6">
                  "The video production for our new model launch exceeded our expectations. Professional, dynamic and exactly what we needed to create buzz."
                </p>
                <div className="mt-auto">
                  <p className="font-bold">Sarah Wright</p>
                  <p className="text-sm text-gray-500">Marketing Director, AutoElite</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
