
import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Video, Award, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/AnimatedSection';

const teamMembers = [
  {
    name: "Alex Morgan",
    role: "Lead Photographer",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=300&auto=format&fit=crop",
    bio: "With over 10 years of experience in automotive photography, Alex has worked with major manufacturers and publications worldwide."
  },
  {
    name: "Sarah Chen",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop",
    bio: "Sarah brings her background in fine arts and commercial design to create unique visual storytelling for automotive clients."
  },
  {
    name: "James Wilson",
    role: "Videographer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&auto=format&fit=crop",
    bio: "A cinematographer specializing in automotive content, James creates dynamic videos that capture the essence of performance vehicles."
  },
  {
    name: "Maya Rodriguez",
    role: "Post-Production Specialist",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop",
    bio: "Maya's expertise in retouching and color grading ensures every image and video meets our exacting standards of quality."
  }
];

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container px-4">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
            About Us
          </h1>
          <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            We are a team of passionate automotive enthusiasts and visual storytellers dedicated to capturing the beauty and performance of exceptional vehicles.
          </p>
        </AnimatedSection>

        {/* Our Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <AnimatedSection animation="slide-in">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=700&auto=format&fit=crop" 
                alt="Car photography session" 
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                <p className="font-display text-4xl font-bold text-primary">10+</p>
                <p className="text-sm uppercase tracking-wider">Years Experience</p>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl font-display font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Founded in 2013, AutoLens began with a simple mission: to elevate automotive photography and videography to an art form. What started as a passion project by our founder, Alex Morgan, has grown into a full-service visual production company specializing exclusively in automotive content.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Over the years, we've had the privilege of working with major manufacturers, prestigious dealerships, renowned collectors, and automotive publications around the world. Our team combines technical expertise with artistic vision to create compelling visual stories for every vehicle we photograph.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Today, we continue to push the boundaries of automotive visual content, embracing new technologies and techniques while maintaining our commitment to quality and client satisfaction.
            </p>
            
            <div className="flex gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-primary h-5 w-5" />
                <span>1,000+ Photoshoots</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-primary h-5 w-5" />
                <span>500+ Video Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-primary h-5 w-5" />
                <span>200+ Satisfied Clients</span>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Our Team */}
        <AnimatedSection className="mb-24">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
            Meet Our Team
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <AnimatedSection 
                key={index} 
                animation="fade-up" 
                delay={index * 100}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300">{member.bio}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Why Choose Us */}
        <AnimatedSection className="mb-24">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
            Why Choose Us
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection animation="fade-up" delay={100} className="text-center p-8 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Camera className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Specialized Expertise</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We focus exclusively on automotive photography and videography, with specialized equipment and techniques developed for vehicles.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={200} className="text-center p-8 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Video className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Complete Solutions</h3>
              <p className="text-gray-600 dark:text-gray-300">
                From concept development to final delivery, we handle every aspect of your automotive visual content needs.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={300} className="text-center p-8 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Award-Winning Quality</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our work has been recognized in industry publications and competitions for its technical excellence and artistic merit.
              </p>
            </AnimatedSection>
          </div>
        </AnimatedSection>

        {/* Call to Action */}
        <AnimatedSection animation="fade-in" className="bg-gray-100 dark:bg-gray-800 p-12 rounded-xl text-center">
          <h2 className="text-3xl font-display font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            We're passionate about creating stunning visuals that showcase your vehicles in their best light. Contact us today to discuss your project.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default About;
