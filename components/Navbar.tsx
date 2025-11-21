import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from '../types';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const leftLinks: NavLink[] = [
    { name: 'Home', href: '#home' },
    { name: 'Perfumes', href: '#perfumes' },
    { name: 'Menu', href: '#menu' },
  ];

  const rightLinks: NavLink[] = [
    { name: 'Offers', href: '#offers' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-chocolate/90 backdrop-blur-md py-2 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between md:justify-center relative">
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-brand-pink"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>

          {/* Desktop Left Menu */}
          <div className="hidden md:flex items-center space-x-8 absolute left-4 lg:left-20">
            {leftLinks.map((link) => (
              <button 
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-white hover:text-brand-pink font-sans text-sm tracking-widest uppercase transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Logo Center */}
          <div className="text-center z-10">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-brand-pink tracking-tighter">
              L'Odeur
            </h1>
            <span className="text-[10px] uppercase tracking-[0.3em] text-white">Exquise</span>
          </div>

          {/* Desktop Right Menu */}
          <div className="hidden md:flex items-center space-x-8 absolute right-4 lg:right-20">
            {rightLinks.map((link) => (
              <button 
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-white hover:text-brand-pink font-sans text-sm tracking-widest uppercase transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-brand-chocolate/95 backdrop-blur-xl border-t border-white/10">
            <div className="flex flex-col p-6 space-y-4">
              {[...leftLinks, ...rightLinks].map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-white hover:text-brand-pink font-sans text-lg"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;