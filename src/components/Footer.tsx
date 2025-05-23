import React from 'react';
import { GlobeIcon, Instagram, Twitter, Linkedin, Facebook, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row justify-between mb-12 gap-8">
          {/* Brand */}
          <div className="lg:w-1/3">
            <div className="flex items-center space-x-2 mb-4">
              <GlobeIcon className="h-8 w-8 text-emerald-500" />
              <span className="font-bold text-xl">Islamic Venture Studio</span>
            </div>
            <p className="text-slate-400 mb-6 max-w-md">
              Building the future of Islamic business through ethical, innovative, 
              and Shariah-compliant ventures that serve the global Muslim community.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-slate-800 hover:bg-emerald-700 p-2 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-emerald-700 p-2 rounded-full transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-emerald-700 p-2 rounded-full transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-emerald-700 p-2 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-slate-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Services', 'Portfolio', 'Team', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-slate-400 hover:text-emerald-500 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-slate-700 pb-2">Our Services</h3>
            <ul className="space-y-2">
              {['Venture Building', 'Startup Incubation', 'Islamic Finance', 'Strategic Advisory', 'Shariah Compliance'].map((service) => (
                <li key={service}>
                  <a 
                    href="#"
                    className="text-slate-400 hover:text-emerald-500 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="lg:w-1/3">
            <h3 className="text-lg font-bold mb-4 border-b border-slate-700 pb-2">Subscribe to Our Newsletter</h3>
            <p className="text-slate-400 mb-4">
              Stay updated with our latest ventures, investment opportunities, and insights.
            </p>
            <form className="flex mb-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-2 rounded-l-md bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-emerald-500"
              />
              <button 
                type="submit"
                className="bg-emerald-700 hover:bg-emerald-800 px-4 py-2 rounded-r-md transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-slate-500 text-sm">
              We respect your privacy. Your information will never be shared.
            </p>
          </div>
        </div>
        
        <hr className="border-slate-800 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Islamic Venture Studio. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-slate-500">
            <a href="#" className="hover:text-emerald-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-500 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-emerald-500 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-emerald-700 hover:bg-emerald-800 text-white p-3 rounded-full shadow-lg transition-all hover:shadow-xl"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
};