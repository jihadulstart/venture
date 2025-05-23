import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollPos = window.scrollY;
      const opacity = Math.max(1 - scrollPos / 700, 0);
      const translateY = scrollPos * 0.3;
      
      heroRef.current.style.opacity = opacity.toString();
      heroRef.current.style.transform = `translateY(${translateY}px)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-slate-50 opacity-90">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6044226/pexels-photo-6044226.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50"></div>
      </div>
      
      <div 
        ref={heroRef}
        className="container mx-auto px-4 md:px-6 z-10 text-center transition-all duration-300"
      >
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-800 mb-6 leading-tight">
          Building the <span className="text-emerald-700">Islamic</span> Ecosystem
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
          Islamic Venture Studio partners with visionary founders to create values-aligned 
          businesses that serve the global Muslim community.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-3 px-8 rounded-md transition-all shadow-md hover:shadow-lg flex items-center space-x-2 group">
            <span>Explore Our Vision</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="border-2 border-emerald-700 text-emerald-700 hover:bg-emerald-50 font-semibold py-3 px-8 rounded-md transition-all">
            Connect With Us
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-slate-500 text-sm mb-2">Scroll to discover</span>
        <div className="w-1 h-12 bg-gradient-to-b from-emerald-700 to-transparent rounded-full"></div>
      </div>
    </section>
  );
};