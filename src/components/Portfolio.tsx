import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Finance', 'Commerce', 'Education', 'Health', 'Technology'];
  
  const projects = [
    {
      title: "Halal Invest",
      category: "Finance",
      description: "Shariah-compliant investment platform with ethical screening and portfolio management.",
      image: "prifile.jpg",
      status: "Live",
    },
    {
      title: "Muslim Marketplace",
      category: "Commerce",
      description: "Global marketplace connecting Muslim consumers with verified halal products and services.",
      image: "prifile.jpg",
      status: "Growth",
    },
    {
      title: "Quran Academy",
      category: "Education",
      description: "Interactive Quran learning platform with personalized lessons and progress tracking.",
      image: "prifile.jpg",
      status: "Live",
    },
    {
      title: "Halal Health",
      category: "Health",
      description: "Telehealth platform connecting patients with Muslim healthcare professionals.",
      image: "prifile.jpg",
      status: "Development",
    },
    {
      title: "Sukuk Flow",
      category: "Finance",
      description: "Sukuk issuance and trading platform for Islamic bonds and securities.",
      image: "prifile.jpg",
      status: "Early Stage",
    },
    {
      title: "Muslim Dev",
      category: "Technology",
      description: "Developer tools and resources optimized for Islamic app and website creation.",
      image: "prifile.jpg",
      status: "Beta",
    },
  ];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Portfolio</h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Discover our growing portfolio of Islamic ventures that are transforming 
            industries while upholding our core values.
          </p>
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full transition-all ${
                activeFilter === filter
                  ? 'bg-emerald-700 text-white font-medium'
                  : 'bg-white text-slate-700 hover:bg-emerald-50'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        
        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group"
            >
              <div className="relative h-52 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm text-emerald-700 text-sm font-medium px-3 py-1 rounded-full">
                  {project.status}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold text-slate-800">{project.title}</h3>
                  <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <p className="text-slate-600 mb-4">{project.description}</p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-emerald-700 font-medium hover:text-emerald-800 transition-colors"
                >
                  Learn more
                  <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};