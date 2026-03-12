"use client";

import { useEffect, useRef, useState } from 'react';
import { Target, Lightbulb, Globe, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

const pillars = [
  {
    icon: Target,
    title: 'Innovation Focus',
    description: 'Driving breakthrough solutions in deep technology and strategic sectors where others fear to operate.',
    num: '01',
  },
  {
    icon: Lightbulb,
    title: 'Open Collaboration',
    description: 'Fostering transparent partnerships across industries, governments, and multinational corporations.',
    num: '02',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Operating at the intersection of defense, commerce, and digital markets on a worldwide scale.',
    num: '03',
  },
  {
    icon: Zap,
    title: 'Rapid Execution',
    description: 'Converting visionary ideas into market-ready solutions with speed and engineering precision.',
    num: '04',
  },
];

export function AboutSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach(e => { if (e.isIntersecting) setVisible(true); }); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);

  return (
    <section id="about" ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#050505]" />
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff6b35]/30 to-transparent" />
      {/* Ambient glow */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[#ff6b35]/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className={`max-w-3xl mb-20 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-px bg-[#ff6b35]" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#ff6b35]">About AESON</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] tracking-tight mb-6">
            <span className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
              Where Technology
              <br />
              Meets Strategy
            </span>
          </h2>
          <p className="text-white/40 text-lg leading-relaxed max-w-xl">
            AESON is a premier open innovation company operating at the forefront of deep technology and strategic defense solutions. We specialize in bridging the gap between cutting-edge research and real-world applications,
            creating transformative solutions where critical sectors converge.
          </p>
        </div>

        {/* Mission / Vision */}
        <div className={`grid md:grid-cols-2 gap-5 mb-16 transition-all duration-1000 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            {
              title: 'Our Mission',
              body: 'To accelerate innovation by bridging cutting-edge technology with real-world applications, empowering organizations to solve complex challenges and unlock new opportunities in an interconnected world.',
              accent: 'Mission',
            },
            {
              title: 'Our Vision',
              body: 'To be the premier catalyst for open innovation, creating a global ecosystem where deep technology, strategic defense solutions, and commercial collaborations converge to shape the future.',
              accent: 'Vision',
            },
          ].map((card) => (
            <div
              key={card.title}
              className="group relative p-8 bg-white/[0.02] border border-white/[0.07] rounded-2xl hover:border-[#ff6b35]/25 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#ff6b35]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="text-xs font-semibold tracking-widest uppercase text-[#ff6b35]/60 mb-3">{card.accent}</div>
              <h3 className="text-xl font-bold text-white mb-4">{card.title}</h3>
              <p className="text-white/40 leading-relaxed text-sm">{card.body}</p>
            </div>
          ))}
        </div>

        {/* Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={`group relative p-6 bg-white/[0.02] border border-white/[0.07] rounded-2xl hover:border-white/[0.14] transition-all duration-500 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${300 + i * 80}ms` }}
            >
              <div className="text-4xl font-black text-white/5 mb-4 leading-none">{p.num}</div>
              <div className="w-10 h-10 mb-4 bg-[#ff6b35]/8 rounded-xl flex items-center justify-center group-hover:bg-[#ff6b35]/15 transition-colors duration-300">
                <p.icon className="w-5 h-5 text-[#ff6b35]" />
              </div>
              <h4 className="text-sm font-bold text-white mb-2">{p.title}</h4>
              <p className="text-xs text-white/35 leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>

        {/* CTA link */}
        <div className={`mt-12 transition-all duration-1000 delay-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <Link
            to="/why-us"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#ff6b35] hover:gap-3 transition-all duration-300"
          >
            Discover why teams choose AESON
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
