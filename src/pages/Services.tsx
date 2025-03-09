
import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Video, Car, AreaChart, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/AnimatedSection';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    title: "Professional Photography",
    description: "High-resolution, magazine-quality images of your vehicles for websites, brochures, and advertisements. Our professional lighting and post-processing ensure every detail shines.",
    icon: Camera,
    price: "Starting at $499",
    features: [
      "Exterior and interior shots",
      "Custom angles and compositions",
      "Professional editing and color correction",
      "Quick turnaround time",
      "High-resolution files included"
    ]
  },
  {
    title: "Cinematic Videography",
    description: "Dynamic video content that showcases your vehicles in motion, highlighting performance, features, and design. Perfect for social media, websites, and TV commercials.",
    icon: Video,
    price: "Starting at $999",
    features: [
      "4K resolution filming",
      "Aerial drone footage",
      "Professional sound design",
      "Motion graphics and titles",
      "Multiple camera angles"
    ]
  },
  {
    title: "Event Coverage",
    description: "Complete documentation of auto shows, track days, launches, and promotional events with both photography and videography for comprehensive coverage.",
    icon: Car,
    price: "Starting at $1,499",
    features: [
      "Full-day coverage",
      "Both photo and video capture",
      "Social media highlights package",
      "Quick delivery of preview content",
      "Full editing and post-production"
    ]
  },
  {
    title: "Marketing Packages",
    description: "Integrated visual content solutions designed specifically for automotive marketing campaigns across multiple platforms and channels.",
    icon: AreaChart,
    price: "Starting at $2,499",
    features: [
      "Brand strategy consultation",
      "Content calendar planning",
      "Custom visual asset creation",
      "Social media optimization",
      "Performance tracking"
    ]
  },
  {
    title: "Dealership Solutions",
    description: "Systematic photography and video solutions for dealerships needing consistent, high-quality visuals for their entire inventory.",
    icon: Users,
    price: "Custom quote",
    features: [
      "Volume-based pricing",
      "Consistent brand standards",
      "Regular scheduling options",
      "Inventory management integration",
      "Staff training available"
    ]
  },
  {
    title: "Premium Collection",
    description: "Our ultimate service for exotic, luxury, and collectible vehicles. Museum-quality visuals with exceptional attention to detail and artistic direction.",
    icon: Star,
    price: "Starting at $3,999",
    features: [
      "Exclusive locations",
      "Artistic direction",
      "Coffee table book option",
      "Fine art prints available",
      "White glove service"
    ]
  }
];

const Services = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container px-4">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
            Our Services
          </h1>
          <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            Professional automotive visual services tailored to your specific needs and objectives.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <AnimatedSection 
              key={index} 
              animation="fade-up" 
              delay={index * 100}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription className="text-lg">{service.price}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link to="/contact">Request Quote</Link>
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Process Section */}
        <AnimatedSection className="mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
            Our Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <AnimatedSection animation="fade-up" delay={100} className="text-center">
              <div className="rounded-full w-16 h-16 bg-primary text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-xl font-bold mb-2">Consultation</h3>
              <p className="text-gray-600 dark:text-gray-300">We discuss your goals, vehicles, and specific needs to create a tailored plan.</p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={200} className="text-center">
              <div className="rounded-full w-16 h-16 bg-primary text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-xl font-bold mb-2">Planning</h3>
              <p className="text-gray-600 dark:text-gray-300">We scout locations, prepare equipment, and coordinate schedules for the shoot.</p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={300} className="text-center">
              <div className="rounded-full w-16 h-16 bg-primary text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-xl font-bold mb-2">Production</h3>
              <p className="text-gray-600 dark:text-gray-300">Our professional team captures stunning visuals of your vehicles.</p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={400} className="text-center">
              <div className="rounded-full w-16 h-16 bg-primary text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="text-xl font-bold mb-2">Delivery</h3>
              <p className="text-gray-600 dark:text-gray-300">We provide the final edited content ready for your marketing campaigns.</p>
            </AnimatedSection>
          </div>
        </AnimatedSection>

        {/* Call to Action */}
        <AnimatedSection animation="fade-in" className="bg-gradient-to-r from-primary/80 to-primary p-8 md:p-12 rounded-xl text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to showcase your vehicles?</h2>
          <p className="text-white/90 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your project and get a customized quote for your specific needs.
          </p>
          <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 hover:text-primary border-white">
            <Link to="/contact">Get Started</Link>
          </Button>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Services;
