"use client";

import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: '6', suffix: '+', label: 'Products in Development', description: 'Transformative platforms spanning every key sector' },
  { value: '4', suffix: '', label: 'Core Sectors', description: 'Deep Tech · Defense · Markets · Commerce' },
  { value: '100', suffix: '%', label: 'Open Innovation', description: 'Collaborative R&D with global partners' },
  { value: '24', suffix: '/7', label: 'Mission-Critical', description: 'Always-on infrastructure and support' },
];

export function StatsSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach(e => { if (e.isIntersecting) setVisible(true); }); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);

  return (
    <section ref={ref} className="relative py-20 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[200px] bg-[#ff6b35]/4 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`relative p-8 md:p-10 bg-[#050505] hover:bg-white/[0.02] transition-all duration-500 group ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms`, transitionProperty: 'opacity, transform' }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff6b35]/0 to-transparent group-hover:via-[#ff6b35]/30 transition-all duration-500" />
              <div className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-[#ff6b35] transition-colors duration-300">
                {stat.value}
                <span className="text-[#ff6b35]">{stat.suffix}</span>
              </div>
              <div className="text-sm font-semibold text-white/70 mb-1">{stat.label}</div>
              <div className="text-xs text-white/30 leading-relaxed">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
