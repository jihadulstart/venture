import React from 'react';
import { ScaleIcon, HandCoinsIcon, HeartHandshakeIcon } from 'lucide-react';

export const Mission: React.FC = () => {
  const values = [
    {
      icon: <ScaleIcon className="h-10 w-10 text-emerald-600" />,
      title: "Shariah Compliance",
      description: "All investments and operations adhere to Islamic principles, ensuring ethical business practices.",
    },
    {
      icon: <HandCoinsIcon className="h-10 w-10 text-emerald-600" />,
      title: "Economic Empowerment",
      description: "Creating opportunities for financial growth and independence within the Muslim community.",
    },
    {
      icon: <HeartHandshakeIcon className="h-10 w-10 text-emerald-600" />,
      title: "Community Benefit",
      description: "Every venture aims to provide genuine value and solutions to challenges faced by Muslims globally.",
    },
  ];

  return (
    <section id="mission" className="py-20 relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-no-repeat bg-cover opacity-5 z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Mission & Values</h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Islamic Venture Studio is dedicated to creating an interconnected ecosystem of businesses 
            that uphold Islamic values while meeting the needs of Muslims worldwide.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mb-16">
          <div className="flex-1 bg-white rounded-xl shadow-sm p-8 transition-all hover:shadow-md">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Vision</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              To build the world's leading Islamic business ecosystem that empowers Muslims 
              globally through innovative, ethical, and Shariah-compliant ventures. We envision 
              a future where Muslims have access to products and services that honor their faith 
              while embracing modern innovation.
            </p>
            <div className="w-16 h-1 bg-emerald-600"></div>
          </div>
          
          <div className="flex-1 bg-white rounded-xl shadow-sm p-8 transition-all hover:shadow-md">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Approach</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              We combine deep expertise in Islamic finance and business principles with modern 
              venture studio methodologies. By providing capital, operational support, and strategic 
              guidance, we help founders build sustainable businesses that are both profitable and 
              aligned with Islamic values.
            </p>
            <div className="w-16 h-1 bg-emerald-600"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-sm p-8 text-center transition-all hover:shadow-md hover:-translate-y-1"
            >
              <div className="flex justify-center mb-6">{value.icon}</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{value.title}</h3>
              <p className="text-slate-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};