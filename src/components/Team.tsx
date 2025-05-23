import React from 'react';
import { Linkedin, Twitter, Globe } from 'lucide-react';

export const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Dr. Amina Khan",
      role: "Founder & CEO",
      bio: "Islamic finance expert with 15+ years of experience in venture capital and Shariah-compliant investments.",
      image: "prifile.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        website: "#"
      }
    },
    {
      name: "Yusuf Ibrahim",
      role: "Chief Investment Officer",
      bio: "Former investment banker specializing in ethical investments and Islamic financial instruments.",
      image: "prifile.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        website: "#"
      }
    },
    {
      name: "Layla Ahmed",
      role: "Head of Ventures",
      bio: "Startup veteran who has launched and scaled multiple successful Islamic tech companies.",
      image: "prifile.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        website: "#"
      }
    },
    {
      name: "Omar Malik",
      role: "Shariah Compliance Director",
      bio: "Islamic scholar with expertise in modern financial instruments and business ethics.",
      image: "prifile.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        website: "#"
      }
    },
  ];

  const advisors = [
    {
      name: "Prof. Fatima Rahman",
      role: "Islamic Finance Advisor",
      institution: "International Islamic University"
    },
    {
      name: "Sheikh Abdullah Hassan",
      role: "Shariah Compliance Advisor",
      institution: "Global Islamic Finance Council"
    },
    {
      name: "Dr. Ibrahim Suleiman",
      role: "Technology & Innovation Advisor",
      institution: "Tech4Ummah Foundation"
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-slate-100 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Team</h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Meet the dedicated professionals committed to building the Islamic ecosystem
            of the future while upholding the highest ethical standards.
          </p>
        </div>

        {/* Leadership Team */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group"
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-6">
                  <div className="flex space-x-3">
                    <a href={member.social.linkedin} className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                      <Linkedin className="h-5 w-5 text-emerald-700" />
                    </a>
                    <a href={member.social.twitter} className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                      <Twitter className="h-5 w-5 text-emerald-700" />
                    </a>
                    <a href={member.social.website} className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                      <Globe className="h-5 w-5 text-emerald-700" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800">{member.name}</h3>
                <p className="text-emerald-600 font-medium mb-3">{member.role}</p>
                <p className="text-slate-600 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Advisory Board */}
        <div className="bg-emerald-50 rounded-xl p-8 md:p-10">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Advisory Board</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {advisors.map((advisor, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-bold text-slate-800">{advisor.name}</h4>
                <p className="text-emerald-600 font-medium mb-2">{advisor.role}</p>
                <p className="text-slate-600 text-sm">{advisor.institution}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};