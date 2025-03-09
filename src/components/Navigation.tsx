
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Camera, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-2xl font-display font-bold"
        >
          <Camera className="h-6 w-6" />
          <span>Burggraeve Cinematics</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-medium transition-colors hover:text-primary ${
                location.pathname === link.path
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-300"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-900 shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium py-2 transition-colors hover:text-primary ${
                  location.pathname === link.path
                    ? 'text-primary border-l-4 border-primary pl-2'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navigation;
