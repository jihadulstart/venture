import React, { useState, useEffect } from 'react';
import { GlobeIcon, Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a 
            href="#" 
            className="flex items-center space-x-2 text-emerald-700 transition-transform hover:scale-105"
          >
            <GlobeIcon className="h-8 w-8" />
            <span className="font-bold text-xl md:text-2xl">Islamic Venture Studio</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'Mission', 'Ecosystem', 'Portfolio', 'Team', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`font-medium hover:text-emerald-600 transition-colors ${
                  isScrolled ? 'text-slate-800' : 'text-slate-700'
                }`}
              >
                {item}
              </a>
            ))}
            <button className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-2 px-5 rounded-md transition-all shadow-md hover:shadow-lg">
              Connect
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-800 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 animate-fadeIn">
            <nav className="flex flex-col space-y-4">
              {['Home', 'Mission', 'Ecosystem', 'Portfolio', 'Team', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="font-medium text-slate-800 hover:text-emerald-600 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-3 px-5 rounded-md transition-all shadow-sm hover:shadow-md w-full mt-2">
                Connect
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};