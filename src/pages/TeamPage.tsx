"use client";

import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { Linkedin, Mail, ArrowRight, Users } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

const teamMembers = [
  {
    name: 'Mayuresh Sharma',
    role: 'Founder & Chief Technology Officer',
    bio: 'Visionary leader driving innovation across deep tech and defense sectors with decades of experience in strategic technology development.',
    initials: 'MS',
    department: 'Engineering',
  },
  {
    name: 'Shreya Negi',
    role: 'Chief Executive Officer',
    bio: 'Leading our technical vision and R&D initiatives, with deep expertise in AI, quantum computing, and advanced systems architecture.',
    initials: 'SN',
    department: 'Leadership',
  },
];

const departmentColors: Record<string, { badge: string; dot: string }> = {
  Leadership: { badge: 'text-[#ff6b35] bg-[#ff6b35]/8 border-[#ff6b35]/20', dot: 'bg-[#ff6b35]' },
  Engineering: { badge: 'text-blue-400 bg-blue-400/8 border-blue-400/20', dot: 'bg-blue-400' },
  Strategy: { badge: 'text-purple-400 bg-purple-400/8 border-purple-400/20', dot: 'bg-purple-400' },
  Defense: { badge: 'text-red-400 bg-red-400/8 border-red-400/20', dot: 'bg-red-400' },
  Commercial: { badge: 'text-emerald-400 bg-emerald-400/8 border-emerald-400/20', dot: 'bg-emerald-400' },
  Research: { badge: 'text-cyan-400 bg-cyan-400/8 border-cyan-400/20', dot: 'bg-cyan-400' },
};

export function TeamPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach(e => { if (e.isIntersecting) setIsVisible(true); }); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  return (
    <>
      <SEOHead
        title="Our Team — Meet the Innovators at AESON"
        description="Meet the visionary team behind AESON — leaders in deep technology, defense, strategy, and commercial innovation driving the future of open innovation."
        canonical="/team"
        pageType="team"
      />

      <div className="min-h-screen bg-[#050505]">
        {/* Hero */}
        <section className="relative pt-36 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[#050505] grid-bg" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff6b35]/40 to-transparent" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#ff6b35]/6 rounded-full blur-[120px] animate-glow-breathe pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050505] to-transparent" />

          <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
            <div className={`transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 bg-[#ff6b35]/8 border border-[#ff6b35]/20 rounded-full">
                <Users className="w-3.5 h-3.5 text-[#ff6b35]" />
                <span className="text-xs tracking-widest text-[#ff6b35] font-semibold uppercase">Our Team</span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight mb-8">
                <span className="bg-gradient-to-b from-white via-white to-white/50 bg-clip-text text-transparent">
                  Meet the{' '}
                </span>
                <span className="bg-gradient-to-r from-[#ff6b35] via-[#ff8c5a] to-[#ffb085] bg-clip-text text-transparent text-glow-orange">
                  Innovators
                </span>
              </h1>

              <p className="text-white/40 text-lg max-w-2xl mx-auto leading-relaxed">
                A diverse team of world-class experts united by a single mission —
                to pioneer the future of open innovation across deep technology, defense, and global commerce.
              </p>
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section ref={sectionRef} className="relative py-16 pb-24">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff6b35]/20 to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
              {teamMembers.map((member, index) => {
                const colors = departmentColors[member.department];
                return (
                  <div
                    key={member.name}
                    className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                    style={{ transitionDelay: `${150 + index * 80}ms` }}
                  >
                    <div className="relative h-full p-7 bg-white/[0.02] border border-white/[0.07] rounded-2xl hover:border-[#ff6b35]/15 transition-all duration-500 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35]/0 to-[#ff6b35]/4 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />

                      <div className="relative">
                        {/* Department badge */}
                        <div className="mb-5">
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${colors.badge}`}>
                            <div className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                            {member.department}
                          </span>
                        </div>

                        {/* Avatar */}
                        <div className="w-16 h-16 mx-auto mb-5 bg-gradient-to-br from-[#ff6b35]/15 to-[#ff6b35]/5 border border-[#ff6b35]/20 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                          <span className="text-lg font-black text-[#ff6b35]">{member.initials}</span>
                        </div>

                        {/* Info */}
                        <div className="text-center mb-5">
                          <h3 className="text-base font-bold text-white mb-0.5 group-hover:text-[#ff6b35] transition-colors duration-300">
                            {member.name}
                          </h3>
                          <p className="text-xs text-[#ff6b35]/60 mb-3 font-semibold">{member.role}</p>
                          <p className="text-xs text-white/35 leading-relaxed">{member.bio}</p>
                        </div>

                        {/* Social */}
                        <div className="flex items-center justify-center gap-2 pt-4 border-t border-white/[0.06]">
                          {[
                            { icon: Linkedin, label: 'LinkedIn' },
                            { icon: Mail, label: 'Email' },
                          ].map(({ icon: Icon, label }) => (
                            <a
                              key={label}
                              href="#"
                              aria-label={label}
                              className="w-8 h-8 bg-white/[0.04] hover:bg-[#ff6b35]/12 border border-white/[0.07] hover:border-[#ff6b35]/25 rounded-lg flex items-center justify-center transition-all duration-300 group/link"
                            >
                              <Icon className="w-3.5 h-3.5 text-white/30 group-hover/link:text-[#ff6b35] transition-colors duration-300" />
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Join CTA */}
            <div
              className={`relative p-10 md:p-14 bg-gradient-to-br from-[#ff6b35]/8 via-transparent to-[#ff6b35]/4 border border-[#ff6b35]/15 rounded-3xl overflow-hidden text-center transition-all duration-1000 delay-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="absolute inset-0 grid-bg opacity-30" />
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#ff6b35]/10 to-transparent rounded-bl-full" />
              <div className="relative">
                <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
                  Want to Join This Team?
                </h2>
                <p className="text-white/35 mb-8 text-sm max-w-lg mx-auto leading-relaxed">
                  We're always looking for exceptional people who are passionate about building
                  transformative technology. Explore open positions and apply today.
                </p>
                <Link
                  to="/join"
                  className="group inline-flex items-center gap-2 px-8 py-3.5 bg-[#ff6b35] hover:bg-[#ff8c5a] text-white rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,107,53,0.4)] hover:scale-[1.03]"
                >
                  Join Our Team
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}