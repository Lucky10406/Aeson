"use client";

import { useEffect, useRef, useState } from 'react';
import { Linkedin, Mail } from 'lucide-react';

export function TeamSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const teamMembers = [
    {
      name: 'Founder & CEO',
      role: 'Chief Executive Officer',
      bio: 'Visionary leader driving innovation across deep tech and defense sectors',
      initials: 'F',
    },
    {
      name: 'Chief Technology Officer',
      role: 'Head of Technology',
      bio: 'Leading our technical vision and R&D initiatives',
      initials: 'CT',
    },
    {
      name: 'Chief Strategy Officer',
      role: 'Strategic Partnerships',
      bio: 'Building bridges between industries and innovation',
      initials: 'CS',
    },
    {
      name: 'VP of Defense Solutions',
      role: 'Defense & Security',
      bio: 'Expert in strategic defense technology and security systems',
      initials: 'VD',
    },
    {
      name: 'VP of Commercial',
      role: 'Business Development',
      bio: 'Expanding our commercial partnerships and market presence',
      initials: 'VC',
    },
    {
      name: 'Head of Innovation',
      role: 'Innovation & Research',
      bio: 'Pioneering next-generation technologies and solutions',
      initials: 'HI',
    },
  ];

  return (
    <section
      id="team"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ff6b35] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-block px-4 py-1 mb-4 bg-[#ff6b35]/10 border border-[#ff6b35]/30 rounded-full">
            <span className="text-sm text-[#ff6b35] font-semibold">Our Team</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Meet the Innovators
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A diverse team of experts committed to pushing the boundaries of 
            technology and innovation.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className={`group relative transition-all duration-1000 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${200 + index * 100}ms`,
              }}
            >
              <div className="relative h-full p-6 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl hover:border-[#ff6b35]/50 transition-all duration-300">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35]/0 to-[#ff6b35]/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
                
                <div className="relative">
                  {/* Avatar */}
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-[#ff6b35]/20 to-[#ff6b35]/5 border border-[#ff6b35]/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-[#ff6b35]">{member.initials}</span>
                  </div>

                  {/* Info */}
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#ff6b35] transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-sm text-[#ff6b35] mb-3">{member.role}</p>
                    <p className="text-sm text-gray-400 leading-relaxed">{member.bio}</p>
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center justify-center gap-3 pt-4 border-t border-white/10">
                    <a
                      href="#"
                      className="w-9 h-9 bg-white/5 hover:bg-[#ff6b35]/20 border border-white/10 hover:border-[#ff6b35]/50 rounded-lg flex items-center justify-center transition-all duration-300 group/link"
                    >
                      <Linkedin className="w-4 h-4 text-gray-400 group-hover/link:text-[#ff6b35] transition-colors duration-300" />
                    </a>
                    <a
                      href="#"
                      className="w-9 h-9 bg-white/5 hover:bg-[#ff6b35]/20 border border-white/10 hover:border-[#ff6b35]/50 rounded-lg flex items-center justify-center transition-all duration-300 group/link"
                    >
                      <Mail className="w-4 h-4 text-gray-400 group-hover/link:text-[#ff6b35] transition-colors duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
