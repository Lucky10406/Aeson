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
  Lock,
  ArrowRight,
  Bell,
  CheckCircle,
  Zap,
  Globe,
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

const products = [
  {
    icon: Shield,
    title: 'Security Framework',
    subtitle: 'Enterprise-Grade Zero-Trust Security',
    status: 'soon',
    description:
      'A comprehensive security framework built for the modern threat landscape. Our zero-trust architecture provides end-to-end protection across networks, applications, and data layers.',
    features: [
      'Zero-trust network architecture',
      'AI-powered threat detection',
      'Real-time security monitoring',
      'Compliance automation (SOC2, ISO 27001)',
      'Encrypted communication channels',
      'Incident response orchestration',
    ],
    tag: 'Cybersecurity',
    accentClass: 'text-red-400',
    borderHover: 'hover:border-red-500/20',
    iconBg: 'bg-red-500/8',
  },

  {
    icon: TrendingUp,
    title: 'Prediction Market',
    subtitle: 'Collective Intelligence Platform',
    status: 'development',
    launchYear: '2026',
    description:
      'Harness the wisdom of crowds and advanced algorithms to generate accurate forecasts for strategic decision-making across geopolitical, financial, and technological domains.',
    features: [
      'Real-time market pricing engine',
      'Multi-domain prediction markets',
      'Institutional-grade analytics',
      'API integration ecosystem',
      'Liquidity & resolution protocols',
      'Risk-adjusted forecasting models',
    ],
    tag: 'Intelligence',
    accentClass: 'text-blue-400',
    borderHover: 'hover:border-blue-500/20',
    iconBg: 'bg-blue-500/8',
  },

  {
    icon: ShoppingBag,
    title: 'Marketplace',
    subtitle: 'AI-Powered B2B Commerce',
    status: 'development',
    launchYear: '2026',
    description:
      'Next-generation digital marketplace connecting enterprises with cutting-edge technology providers and strategic partners through AI-driven matching and blockchain-secured transactions.',
    features: [
      'AI-driven supplier matching',
      'Blockchain-secured contracts',
      'Smart escrow & payments',
      'Due diligence automation',
      'Cross-border trade compliance',
      'Real-time inventory tracking',
    ],
    tag: 'Commerce',
    accentClass: 'text-emerald-400',
    borderHover: 'hover:border-emerald-500/20',
    iconBg: 'bg-emerald-500/8',
  },

  {
    icon: Crosshair,
    title: 'Defense Solutions',
    subtitle: 'Next-Gen Strategic Technology',
    status: 'soon',
    description:
      'Advanced defense technology suite encompassing situational awareness, strategic intelligence, secure communications, and mission-critical decision support systems.',
    features: [
      'Situational awareness systems',
      'Strategic intelligence fusion',
      'Secure communications suite',
      'Autonomous threat assessment',
      'Mission planning & simulation',
      'Counter-drone technology',
    ],
    tag: 'Defense',
    accentClass: 'text-[#ff6b35]',
    borderHover: 'hover:border-[#ff6b35]/20',
    iconBg: 'bg-[#ff6b35]/8',
  },

  {
    icon: Server,
    title: 'Tech Infrastructure',
    subtitle: 'Mission-Critical Systems',
    status: 'soon',
    description:
      'Resilient, scalable infrastructure engineered for mission-critical environments. From edge computing to sovereign cloud deployments, built for performance under pressure.',
    features: [
      'Sovereign cloud architecture',
      'Edge computing deployment',
      'High-availability clustering',
      'Quantum-ready encryption',
      'Automated disaster recovery',
      'Infrastructure-as-code tooling',
    ],
    tag: 'Infrastructure',
    accentClass: 'text-cyan-400',
    borderHover: 'hover:border-cyan-500/20',
    iconBg: 'bg-cyan-500/8',
  },

  {
    icon: Landmark,
    title: 'Fintech Solutions',
    subtitle: 'Financial Ecosystem Transformation',
    status: 'development',
    launchYear: '2027',
    description:
      'Transforming financial ecosystems with cutting-edge blockchain, AI-driven risk modeling, and decentralized finance infrastructure for enterprises and institutions.',
    features: [
      'DeFi protocol development',
      'AI risk & fraud modeling',
      'Cross-border settlements',
      'Regulatory compliance engine',
      'Digital asset custody',
      'Institutional DeFi products',
    ],
    tag: 'Fintech',
    accentClass: 'text-yellow-400',
    borderHover: 'hover:border-yellow-500/20',
    iconBg: 'bg-yellow-500/8',
  },
];

function ProductCard({ product, index, isVisible }: {
  product: typeof products[0];
  index: number;
  isVisible: boolean;
}) {
  return (
    <div
      className={`group relative transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${150 + index * 100}ms` }}
    >
      <div className={`relative h-full p-7 bg-white/[0.02] border border-white/[0.07] ${product.borderHover} rounded-2xl overflow-hidden transition-all duration-500`}>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-[#ff6b35]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Dev badge */}
        <div className="absolute top-5 right-5 flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b35] animate-pulse" />
          <span className="text-[10px] tracking-widest text-[#ff6b35]/60 uppercase font-semibold">
  {product.status === 'development' ? 'In Development' : 'Coming Soon'}
</span>
        </div>

        <div className="relative">
          {/* Tag */}
          <div className={`text-[10px] font-semibold tracking-[0.2em] uppercase ${product.accentClass} opacity-70 mb-5`}>{product.tag}</div>

          {/* Icon */}
          <div className={`w-14 h-14 mb-5 ${product.iconBg} rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
            <product.icon className={`w-7 h-7 ${product.accentClass}`} />
          </div>

          <h3 className="text-xl font-bold text-white mb-1">{product.title}</h3>
          <p className={`text-xs font-semibold mb-4 ${product.accentClass} opacity-80`}>{product.subtitle}</p>
          <p className="text-white/35 text-sm leading-relaxed mb-5">{product.description}</p>

          <ul className="space-y-2 mb-5">
            {product.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-xs text-white/30">
                <CheckCircle className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${product.accentClass} opacity-50`} />
                {f}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 p-3 bg-white/[0.03] border border-white/[0.06] rounded-xl">
            <div className="flex gap-1">
              {[0,1,2].map(d => <div key={d} className={`w-1 h-1 rounded-full ${product.accentClass} opacity-30`} />)}
            </div>
            <span className="text-[10px] text-white/25 uppercase tracking-widest">
  {product.launchYear ? `Launch ${product.launchYear}` : 'Launching Soon'}
</span>
          </div>
        </div>

        {/* Corner decoration */}
        <div className="absolute bottom-0 right-0 w-28 h-28 bg-gradient-to-tl from-white/[0.02] to-transparent rounded-tl-full" />
      </div>
    </div>
  );
}

export function ProductsPage() {
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
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  return (
    <>
      <SEOHead
        title="AESON Products — Security Framework, Prediction Market & More"
        description="Explore AESON's upcoming products: Security Framework, Prediction Market, B2B Marketplace, Defense Solutions, Tech Infrastructure, and Fintech Solutions. All coming soon."
        canonical="/products"
        pageType="products"
      />

      <div className="min-h-screen bg-[#050505]">
        {/* Hero */}
        <section className="relative pt-36 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[#050505] grid-bg" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff6b35]/40 to-transparent" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#ff6b35]/6 rounded-full blur-[120px] animate-glow-breathe pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050505] to-transparent" />

          <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
            <div className={`transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 bg-[#ff6b35]/8 border border-[#ff6b35]/20 rounded-full">
                <Lock className="w-3.5 h-3.5 text-[#ff6b35]" />
                <span className="text-xs tracking-widest text-[#ff6b35] font-semibold uppercase">Products Coming Soon</span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight mb-8">
                <span className="bg-gradient-to-b from-white via-white to-white/50 bg-clip-text text-transparent">
                  AESON Products
                  <br />
                </span>
                <span className="bg-gradient-to-r from-[#ff6b35] via-[#ff8c5a] to-[#ffb085] bg-clip-text text-transparent text-glow-orange">
                 — Pioneering Solutions
                </span>
              </h1>

              <p className="text-white/40 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
                Six transformative products engineered to disrupt industries. Built on deep technology,
                designed for the future. Arriving soon.
              </p>

              {/* Stats */}
              <div className={`inline-grid grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06] mb-12 transition-all duration-1000 delay-300 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                {[
                  { value: '6', label: 'Products' },
                  { value: '∞', label: 'Potential' },
                  { value: '2026', label: 'Launch Year' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-[#050505] px-8 py-5 text-center">
                    <div className="text-2xl font-black text-[#ff6b35]">{stat.value}</div>
                    <div className="text-xs text-white/25 mt-1 tracking-wider uppercase">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-400 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <Link
                  to="/contact"
                  className="group flex items-center gap-2 px-7 py-3.5 bg-[#ff6b35] hover:bg-[#ff8c5a] text-white rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,107,53,0.4)] hover:scale-[1.03]"
                >
                  <Bell className="w-4 h-4" />
                  Get Early Access
                </Link>
                <Link
                  to="/"
                  className="flex items-center gap-2 px-7 py-3.5 bg-white/[0.04] border border-white/[0.1] text-white rounded-full font-semibold hover:bg-white/[0.08] transition-all duration-300"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section ref={sectionRef} className="relative py-16 md:py-24">
          <div className="absolute inset-0 bg-[#050505]" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff6b35]/20 to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
              {products.map((product, index) => (
                <ProductCard key={product.title} product={product} index={index} isVisible={isVisible} />
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[#050505]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#ff6b35]/5 rounded-full blur-[80px] pointer-events-none animate-glow-breathe" />

          <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
            <div className="p-10 md:p-14 bg-gradient-to-br from-[#ff6b35]/8 via-transparent to-[#ff6b35]/4 border border-[#ff6b35]/15 rounded-3xl overflow-hidden relative">
              <div className="absolute inset-0 grid-bg opacity-30" />
              <div className="relative">
                <Zap className="w-10 h-10 text-[#ff6b35] mx-auto mb-4" />
                <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
                  Be Part of What's Coming
                </h2>
                <p className="text-white/35 mb-8 text-sm leading-relaxed">
                  Our products are being built with input from industry leaders. Join our early access
                  program and shape the future of deep technology.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    to="/contact"
                    className="group flex items-center gap-2 px-8 py-3.5 bg-[#ff6b35] hover:bg-[#ff8c5a] text-white rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,107,53,0.4)] hover:scale-[1.03]"
                  >
                    Request Early Access
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                  <Link
                    to="/join"
                    className="flex items-center gap-2 px-8 py-3.5 bg-white/[0.04] border border-white/[0.1] text-white rounded-full font-semibold hover:bg-white/[0.08] transition-all duration-300"
                  >
                    <Globe className="w-4 h-4" /> Join the Team
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
