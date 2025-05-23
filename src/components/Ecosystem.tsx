import React from 'react';
import { Building2, Landmark, Briefcase, ShoppingBag, GraduationCap, HeartPulse } from 'lucide-react';

export const Ecosystem: React.FC = () => {
  const sectors = [
    {
      icon: <Landmark className="h-12 w-12 text-emerald-600 group-hover:text-white transition-colors" />,
      title: "Islamic Finance",
      description: "Shariah-compliant financial services, investment platforms, and wealth management solutions.",
    },
    {
      icon: <ShoppingBag className="h-12 w-12 text-emerald-600 group-hover:text-white transition-colors" />,
      title: "Halal Commerce",
      description: "Marketplace and retail solutions for halal products, ethical consumer goods, and services.",
    },
    {
      icon: <GraduationCap className="h-12 w-12 text-emerald-600 group-hover:text-white transition-colors" />,
      title: "Education & Learning",
      description: "Islamic education platforms, skill development, and lifelong learning solutions.",
    },
    {
      icon: <HeartPulse className="h-12 w-12 text-emerald-600 group-hover:text-white transition-colors" />,
      title: "Health & Wellness",
      description: "Healthcare solutions, wellness platforms, and mental health services aligned with Islamic values.",
    },
    {
      icon: <Building2 className="h-12 w-12 text-emerald-600 group-hover:text-white transition-colors" />,
      title: "PropTech",
      description: "Real estate platforms, Waqf management, and housing solutions for Muslim communities.",
    },
    {
      icon: <Briefcase className="h-12 w-12 text-emerald-600 group-hover:text-white transition-colors" />,
      title: "Business Services",
      description: "B2B solutions, professional services, and enterprise software for Islamic businesses.",
    },
  ];

  return (
    <section id="ecosystem" className="py-20 bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Islamic Ecosystem</h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            We're building an integrated network of ventures across key sectors that serve 
            the Muslim community while adhering to Islamic principles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl shadow-sm p-8 transition-all hover:bg-emerald-700 hover:shadow-md hover:-translate-y-1"
            >
              <div className="mb-6">{sector.icon}</div>
              <h3 className="text-xl font-bold text-slate-800 group-hover:text-white mb-3 transition-colors">{sector.title}</h3>
              <p className="text-slate-600 group-hover:text-white/90 transition-colors">{sector.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-white/50 backdrop-blur-sm rounded-xl shadow-sm p-6 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Integrated Islamic Ecosystem</h3>
            <p className="text-slate-600 mb-6">
              Our ventures don't operate in isolation. We create synergistic relationships between 
              businesses in our portfolio, forming a comprehensive ecosystem that serves Muslims 
              in all aspects of their lives while maintaining the highest ethical standards.
            </p>
            <div className="flex justify-center">
              <button className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-3 px-8 rounded-md transition-all shadow-md hover:shadow-lg">
                Explore Investment Opportunities
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};