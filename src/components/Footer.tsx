
import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 text-2xl font-display font-bold mb-4">
              <Camera className="h-6 w-6" />
              <span>Burggraeve Cinematics</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Fueling passion, Framing speed.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Youtube">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">Photography</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">Videography</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">Event Coverage</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">Marketing Packages</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">Dealership Solutions</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Automotive Lane</li>
              <li>Los Angeles, CA 90001</li>
              <li>info@burggraevecinematics.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
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
