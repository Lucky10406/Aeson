"use client";

import { useEffect, useRef, useState } from 'react';
import { Cpu, Shield, ShoppingCart, Building2 } from 'lucide-react';

const services = [
  {
    icon: Cpu,
    num: '01',
    title: 'Deep Technology',
    tagline: 'R&D at the frontier',
    description: 'Advanced research and development in AI, quantum computing, biotechnology, and next-generation materials science.',
    features: ['Artificial Intelligence & ML', 'Quantum Computing Research', 'Advanced Materials Science', 'Biotechnology Innovation'],
  },
  {
    icon: Shield,
    num: '02',
    title: 'Defense & Strategic Tech',
    tagline: 'National security solutions',
    description: 'Cutting-edge defense technologies and strategic systems for national security, intelligence, and government clients.',
    features: ['Zero-Trust Cybersecurity', 'Advanced Surveillance', 'Secure Communications', 'Strategic Intelligence Fusion'],
  },
  {
    icon: ShoppingCart,
    num: '03',
    title: 'Online Market Platforms',
    tagline: 'AI-native commerce',
    description: 'Next-generation digital marketplaces powered by AI matching, blockchain-secured contracts, and real-time analytics.',
    features: ['B2B Marketplace Solutions', 'Blockchain Integration', 'Smart Contract Systems', 'Digital Commerce Tools'],
  },
  {
    icon: Building2,
    num: '04',
    title: 'Commercial & MNC Collaborations',
    tagline: 'Enterprise innovation',
    description: 'Strategic partnerships and open innovation programs co-designed with multinational corporations worldwide.',
    features: ['Innovation Consulting', 'Cross-Industry Partnerships', 'Technology Transfer', 'Joint Venture Development'],
  },
];

export function ServicesSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach(e => { if (e.isIntersecting) setVisible(true); }); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);

  return (
    <section id="services" ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-[#ff6b35]/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className={`flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-px bg-[#ff6b35]" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#ff6b35]">Our Services</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] tracking-tight">
              <span className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
                What We
                <br />
                Deliver
              </span>
            </h2>
          </div>
          <p className="text-white/40 text-sm leading-relaxed max-w-xs">
            Comprehensive solutions across sectors, designed to drive innovation and create lasting, measurable impact.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group relative p-8 bg-white/[0.02] border border-white/[0.07] rounded-2xl hover:border-[#ff6b35]/20 transition-all duration-500 overflow-hidden ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${150 + i * 100}ms` }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35]/0 to-[#ff6b35]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#ff6b35]/6 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                {/* Top row */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 bg-[#ff6b35]/8 rounded-xl flex items-center justify-center group-hover:bg-[#ff6b35]/15 transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-[#ff6b35]" />
                  </div>
                  <span className="text-4xl font-black text-white/5">{service.num}</span>
                </div>

                {/* Text */}
                <div className="text-xs font-semibold tracking-widest uppercase text-[#ff6b35]/60 mb-2">{service.tagline}</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed mb-6">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-xs text-white/35">
                      <div className="w-1 h-1 rounded-full bg-[#ff6b35]/60 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
