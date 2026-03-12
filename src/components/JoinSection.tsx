"use client";

import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { ArrowRight, Users, Rocket, TrendingUp, Award } from 'lucide-react';

const perks = [
  { icon: Rocket, label: 'Innovation First' },
  { icon: Users, label: 'World-Class Team' },
  { icon: TrendingUp, label: 'Rapid Growth' },
  { icon: Award, label: 'Meaningful Impact' },
];

export function JoinSection() {
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
    <section id="join" ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff6b35]/25 to-transparent" />

      {/* Big ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#ff6b35]/6 rounded-full blur-[120px] pointer-events-none animate-glow-breathe" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Main CTA block — Crimzon gradient banner style */}
        <div
          className={`relative rounded-3xl overflow-hidden transition-all duration-1000 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35]/15 via-[#050505] to-[#ff8c5a]/8" />
          <div className="absolute inset-0 border border-[#ff6b35]/15 rounded-3xl" />

          {/* Corner glows */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#ff6b35]/10 rounded-full blur-[60px]" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#ff6b35]/8 rounded-full blur-[60px]" />

          {/* Grid pattern inside card */}
          <div className="absolute inset-0 grid-bg opacity-50" />

          <div className="relative px-8 md:px-16 py-16 md:py-20 text-center">
            {/* Perks row */}
            <div className={`flex flex-wrap items-center justify-center gap-3 mb-10 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {perks.map((perk) => (
                <div key={perk.label} className="flex items-center gap-2 px-4 py-2 bg-white/[0.04] border border-white/[0.08] rounded-full">
                  <perk.icon className="w-3.5 h-3.5 text-[#ff6b35]" />
                  <span className="text-xs font-semibold text-white/60">{perk.label}</span>
                </div>
              ))}
            </div>

            <h2
              className={`text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] tracking-tight mb-5 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                Ready to Build
                <br />
                the Future?
              </span>
            </h2>

            <p
              className={`text-white/40 text-base max-w-xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              We're assembling an exceptional team to pioneer the next generation of deep technology.
              If you're driven by purpose and excellence, you belong here.
            </p>

            <div
              className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <Link
                to="/join"
                className="group flex items-center gap-2 px-8 py-4 bg-[#ff6b35] hover:bg-[#ff8c5a] text-white rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,107,53,0.4)] hover:scale-[1.03]"
              >
                Join AESON
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/join#positions"
                className="flex items-center gap-2 px-8 py-4 bg-white/[0.04] border border-white/[0.1] text-white rounded-full font-semibold hover:bg-white/[0.08] hover:border-white/[0.18] transition-all duration-300"
              >
                View Open Roles
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
