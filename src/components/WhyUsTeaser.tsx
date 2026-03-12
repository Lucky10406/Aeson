"use client";

import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { ArrowRight, Layers, Crosshair, Network, Rocket } from 'lucide-react';

const points = [
  {
    icon: Layers,
    title: 'Multi-Sector Mastery',
    body: 'We operate simultaneously across deep tech, defense, markets, and fintech, turning cross-sector intelligence into unique competitive advantages.',
  },
  {
    icon: Crosshair,
    title: 'Defense-Grade Precision',
    body: 'Battle-tested methodologies from classified defense environments applied to commercial and enterprise use cases with uncompromising standards.',
  },
  {
    icon: Network,
    title: 'Open Innovation DNA',
    body: 'We build alongside partners. Co-creation with MNCs, academia, and governments ensures real-world fit from day one.',
  },
  {
    icon: Rocket,
    title: 'End-to-End Execution',
    body: 'From initial research and R&D through engineering, deployment, and scale. We manage the full innovation lifecycle under one roof.',
  },
];

export function WhyUsTeaser() {
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
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff6b35]/25 to-transparent" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#ff6b35]/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className={`grid lg:grid-cols-2 gap-16 items-start transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Left — text */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-px bg-[#ff6b35]" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#ff6b35]">Why AESON</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black leading-[1.05] tracking-tight mb-6">
              <span className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
                Built Different.
                <br />
                By Design.
              </span>
            </h2>
            <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-sm">
              Most companies pick one lane. AESON was purpose-built to operate at the
              convergence of sectors others treat as separate, turning that complexity into power.
            </p>
            <Link
              to="/why-us"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-[#ff6b35]/10 border border-[#ff6b35]/25 text-[#ff6b35] rounded-full text-sm font-semibold hover:bg-[#ff6b35] hover:text-white hover:border-[#ff6b35] transition-all duration-300"
            >
              Full Story
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* Right — points */}
          <div className="space-y-4">
            {points.map((point, i) => (
              <div
                key={point.title}
                className={`group flex gap-4 p-5 bg-white/[0.02] border border-white/[0.07] rounded-xl hover:border-[#ff6b35]/20 transition-all duration-500 ${
                  visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                <div className="w-10 h-10 bg-[#ff6b35]/8 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#ff6b35]/15 transition-colors duration-300">
                  <point.icon className="w-5 h-5 text-[#ff6b35]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">{point.title}</h4>
                  <p className="text-xs text-white/35 leading-relaxed">{point.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
