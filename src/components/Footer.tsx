
import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Facebook, Instagram, Youtube, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-950 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Newsletter Section */}
        <div className="mb-12 p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-700/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left max-w-md">
              <h3 className="text-2xl font-display font-bold mb-2">Stay Updated</h3>
              <p className="text-gray-300">Get exclusive updates on our latest projects and offers.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Your email" 
                className="rounded-lg px-4 py-2 bg-gray-700/70 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary w-full md:w-auto"
              />
              <Button className="w-full sm:w-auto">Subscribe</Button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 text-2xl font-display font-bold mb-6 hover:text-primary transition-colors">
              <Camera className="h-6 w-6" />
              <span>Burggraeve Cinematics</span>
            </Link>
            <p className="text-gray-300 mb-6 font-light">
              Fueling passion, Framing speed.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-gray-400 hover:text-white transition-colors hover:scale-110" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors hover:scale-110" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors hover:scale-110" aria-label="Youtube">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors hover:scale-110" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 pb-2 border-b border-gray-700">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 transition-all duration-300 h-[2px] bg-primary"></span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 transition-all duration-300 h-[2px] bg-primary"></span>
                  <span>Gallery</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 transition-all duration-300 h-[2px] bg-primary"></span>
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 transition-all duration-300 h-[2px] bg-primary"></span>
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 transition-all duration-300 h-[2px] bg-primary"></span>
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 pb-2 border-b border-gray-700">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 transition-all duration-300 h-[2px] bg-primary"></span>
                  <span>Photography</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 transition-all duration-300 h-[2px] bg-primary"></span>
                  <span>Videography</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 transition-all duration-300 h-[2px] bg-primary"></span>
                  <span>Event Coverage</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 transition-all duration-300 h-[2px] bg-primary"></span>
                  <span>Marketing Packages</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 transition-all duration-300 h-[2px] bg-primary"></span>
                  <span>Dealership Solutions</span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 pb-2 border-b border-gray-700">Contact Us</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>123 Automotive Lane<br />Los Angeles, CA 90001</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:info@burggraevecinematics.com" className="hover:text-white transition-colors">
                  info@burggraevecinematics.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+15551234567" className="hover:text-white transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-800 my-12" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Burggraeve Cinematics. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
