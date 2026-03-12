"use client";

import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import {
  Shield,
  TrendingUp,
  ShoppingBag,
  Crosshair,
  Server,
  Landmark,
  ArrowRight,
} from 'lucide-react';

const products = [
  { icon: Shield, title: 'Security Framework', tag: 'Cybersecurity', tagline: 'Zero-trust architecture for the modern threat landscape' },
  { icon: TrendingUp, title: 'Prediction Market', tag: 'Intelligence', tagline: 'Collective intelligence for strategic foresight' },
  { icon: ShoppingBag, title: 'Marketplace', tag: 'Commerce', tagline: 'AI-powered B2B commerce and supplier matching' },
  { icon: Crosshair, title: 'Defense Solutions', tag: 'Defense', tagline: 'Next-gen situational awareness and strategic tech' },
  { icon: Server, title: 'Tech Infrastructure', tag: 'Infrastructure', tagline: 'Mission-critical sovereign cloud and edge computing' },
  { icon: Landmark, title: 'Fintech Solutions', tag: 'Fintech', tagline: 'DeFi protocols and AI-driven financial ecosystems' },
];

export function ProductsTeaser() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach(e => { if (e.isIntersecting) setVisible(true); }); },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);

  return (
    <section id="products" ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#ff6b35]/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className={`flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-px bg-[#ff6b35]" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#ff6b35]">Coming Soon</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] tracking-tight">
              <span className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
                The Future
                <br />
                Is Being Built
              </span>
            </h2>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <p className="text-white/40 text-sm max-w-xs text-right hidden md:block">
              Six transformative products under development — each designed to disrupt its sector.
            </p>
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-[#ff6b35]/10 border border-[#ff6b35]/25 text-[#ff6b35] rounded-full text-sm font-semibold hover:bg-[#ff6b35] hover:text-white hover:border-[#ff6b35] transition-all duration-300 self-start md:self-auto"
            >
              Explore All Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>

        {/* Products grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product, i) => (
            <div
              key={product.title}
              className={`group relative p-6 bg-white/[0.02] border border-white/[0.07] rounded-2xl hover:border-[#ff6b35]/20 transition-all duration-500 overflow-hidden cursor-default ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${150 + i * 80}ms` }}
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35]/0 to-[#ff6b35]/4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              {/* Dev badge */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5">
                <div className="w-1 h-1 bg-[#ff6b35] rounded-full animate-pulse" />
                <span className="text-[10px] tracking-wider text-[#ff6b35]/60 uppercase font-semibold">In Dev</span>
              </div>

              <div className="relative">
                {/* Tag */}
                <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[#ff6b35]/50 mb-4">{product.tag}</div>

                {/* Icon */}
                <div className="w-12 h-12 mb-5 bg-[#ff6b35]/8 rounded-xl flex items-center justify-center group-hover:bg-[#ff6b35]/15 transition-colors duration-300">
                  <product.icon className="w-6 h-6 text-[#ff6b35]" />
                </div>

                <h3 className="text-base font-bold text-white mb-2 group-hover:text-white transition-colors duration-300">
                  {product.title}
                </h3>
                <p className="text-xs text-white/30 leading-relaxed">{product.tagline}</p>

                {/* Bottom bar */}
                <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center gap-2">
                  <div className="flex gap-1">
                    {[0, 1, 2].map((d) => (
                      <div key={d} className="w-1 h-1 rounded-full bg-[#ff6b35]/30" style={{ animationDelay: `${d * 200}ms` }} />
                    ))}
                  </div>
                  <span className="text-[10px] text-white/25 uppercase tracking-wider">Launching Soon</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
