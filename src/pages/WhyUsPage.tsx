"use client";

import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import {
  Layers,
  Crosshair,
  Network,
  Rocket,
  Shield,
  Globe,
  TrendingUp,
  Cpu,
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

/* ─── data ──────────────────────────────────────────────────── */

const differentiators = [
  {
    icon: Layers,
    num: '01',
    title: 'Multi-Sector Intelligence',
    body: 'AESON operates simultaneously across deep technology, defense, digital markets, and fintech. This cross-sector presence generates unique intelligence that single-sector firms simply cannot replicate — turning complexity into competitive advantage.',
    proof: ['4 concurrent sectors', 'Cross-pollinating insights', 'Unified innovation pipeline'],
  },
  {
    icon: Crosshair,
    num: '02',
    title: 'Defense-Grade Standards',
    body: 'Our methodologies are forged in defense-grade environments where failure is not an option. We apply these zero-compromise standards to every commercial engagement — delivering unprecedented reliability and security at enterprise scale.',
    proof: ['Zero-trust by default', 'Mission-critical infrastructure', 'Classified-to-commercial transfer'],
  },
  {
    icon: Network,
    num: '03',
    title: 'Open Innovation DNA',
    body: 'We don\'t just consult and walk away. AESON co-creates alongside partners — embedding within their ecosystems, sharing risk, and building together. Our open innovation model means partners gain a strategic ally, not a vendor.',
    proof: ['Co-development partnerships', 'Shared R&D investment', 'Long-term strategic alignment'],
  },
  {
    icon: Rocket,
    num: '04',
    title: 'End-to-End Execution',
    body: 'From blue-sky research to market-ready product — AESON manages the complete innovation lifecycle. No fragmentation, no handoffs, no gaps. One team that sees ideas through from inception to global scale.',
    proof: ['Full lifecycle ownership', 'Integrated R&D + engineering', 'Rapid iteration cycles'],
  },
  {
    icon: Globe,
    num: '05',
    title: 'Global MNC Reach',
    body: 'Our partnership network spans multinational corporations, government agencies, and academic institutions across continents. AESON projects are born global — designed for international scale from the first line of code.',
    proof: ['Multinational partner network', 'Government & enterprise access', 'Regulatory expertise across jurisdictions'],
  },
  {
    icon: Cpu,
    num: '06',
    title: 'Proprietary Technology Stack',
    body: 'Unlike consultancies that rely solely on third-party tools, AESON builds proprietary platforms and products. Our internal technology creates compounding advantages and IP that generate long-term value for partners.',
    proof: ['6+ proprietary products', 'Owned IP stack', 'Platform-first thinking'],
  },
];

const approach = [
  { step: '01', title: 'Identify', body: 'We spot high-impact opportunities at the convergence of sectors — where others see chaos, we see signal.' },
  { step: '02', title: 'Research', body: 'Deep domain expertise meets rigorous market intelligence to validate and refine every opportunity.' },
  { step: '03', title: 'Engineer', body: 'Engineering-first product development with defense-grade precision and Silicon Valley velocity.' },
  { step: '04', title: 'Partner', body: 'Open collaboration with industry leaders to ensure real-world product-market fit from day one.' },
  { step: '05', title: 'Scale', body: 'Global deployment through our MNC partnership network — built for international scale from the start.' },
];

const values = [
  { icon: Shield, title: 'Integrity', body: 'We operate with unwavering transparency and accountability in every decision and partnership.' },
  { icon: TrendingUp, title: 'Excellence', body: 'Defense-grade standards applied to every deliverable — no exceptions, no compromises.' },
  { icon: Star, title: 'Curiosity', body: 'Relentless exploration of emerging technologies and unconventional problem-solving approaches.' },
  { icon: Zap, title: 'Impact', body: 'Every project is evaluated on the scale of real-world impact it generates — not just revenue.' },
];

/* ─── section components ─────────────────────────────────────── */

function SectionTag({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 mb-6">
      <div className="w-8 h-px bg-[#ff6b35]" />
      <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#ff6b35]">{label}</span>
    </div>
  );
}

function useVisible(threshold = 0.15) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach(e => { if (e.isIntersecting) setVisible(true); }); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);
  return { ref, visible };
}

/* ─── page ───────────────────────────────────────────────────── */

export function WhyUsPage() {
  const [heroVisible, setHeroVisible] = useState(false);
  const diffSect = useVisible(0.05);
  const approachSect = useVisible(0.1);
  const valuesSect = useVisible(0.1);
  const ctaSect = useVisible(0.2);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <SEOHead
        title="Why AESON — The Open Innovation Advantage"
        description="Discover why world-class organizations choose AESON for deep technology, defense solutions, and open innovation. Our cross-sector mastery and defense-grade standards set us apart."
        canonical="/why-us"
        pageType="home"
      />

      <div className="min-h-screen bg-[#050505]">
        {/* ── Hero ── */}
        <section className="relative pt-36 pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-[#050505] grid-bg" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff6b35]/40 to-transparent" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#ff6b35]/6 rounded-full blur-[120px] animate-glow-breathe pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050505] to-transparent" />

          <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
            <div className={`transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 bg-[#ff6b35]/8 border border-[#ff6b35]/20 rounded-full">
                <div className="w-1.5 h-1.5 bg-[#ff6b35] rounded-full animate-pulse" />
                <span className="text-xs tracking-widest text-[#ff6b35] font-semibold uppercase">Why AESON</span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight mb-8">
                <span className="bg-gradient-to-b from-white via-white to-white/50 bg-clip-text text-transparent">
                  The Open
                  <br />
                  Innovation
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#ff6b35] via-[#ff8c5a] to-[#ffb085] bg-clip-text text-transparent text-glow-orange">
                  Advantage
                </span>
              </h1>

              <p className="text-white/40 text-lg max-w-2xl mx-auto leading-relaxed">
                Most companies specialize in one sector. AESON was purposefully built to operate
                at the convergence of many — transforming that complexity into an unmatched strategic edge.
              </p>
            </div>
          </div>
        </section>

        {/* ── Differentiators ── */}
        <section ref={diffSect.ref} className="relative py-20 md:py-28">
          <div className="absolute inset-0 bg-[#050505]" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff6b35]/20 to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <div className={`mb-16 transition-all duration-1000 ${diffSect.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <SectionTag label="Our Differentiators" />
              <h2 className="text-4xl sm:text-5xl font-black leading-[1.05] tracking-tight">
                <span className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
                  What Sets AESON Apart
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
              {differentiators.map((d, i) => (
                <div
                  key={d.num}
                  className={`group relative p-7 bg-white/[0.02] border border-white/[0.07] rounded-2xl hover:border-[#ff6b35]/20 transition-all duration-500 overflow-hidden ${
                    diffSect.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${100 + i * 80}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35]/0 to-[#ff6b35]/4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                  <div className="relative">
                    <div className="flex items-start justify-between mb-5">
                      <div className="w-12 h-12 bg-[#ff6b35]/8 rounded-xl flex items-center justify-center group-hover:bg-[#ff6b35]/15 transition-colors duration-300">
                        <d.icon className="w-6 h-6 text-[#ff6b35]" />
                      </div>
                      <span className="text-3xl font-black text-white/5">{d.num}</span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-3">{d.title}</h3>
                    <p className="text-white/35 text-sm leading-relaxed mb-5">{d.body}</p>

                    <ul className="space-y-1.5">
                      {d.proof.map((p) => (
                        <li key={p} className="flex items-center gap-2 text-xs text-white/30">
                          <CheckCircle className="w-3.5 h-3.5 text-[#ff6b35]/50 flex-shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Our Approach ── */}
        <section ref={approachSect.ref} className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-[#050505]" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
          <div className="absolute bottom-1/3 right-0 w-[500px] h-[400px] bg-[#ff6b35]/4 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <div className={`mb-16 transition-all duration-1000 ${approachSect.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <SectionTag label="Our Approach" />
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <h2 className="text-4xl sm:text-5xl font-black leading-[1.05] tracking-tight">
                  <span className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
                    How We Work
                  </span>
                </h2>
                <p className="text-white/35 text-sm max-w-xs leading-relaxed">
                  A proven five-stage innovation process refined through real-world deployments across sectors.
                </p>
              </div>
            </div>

            {/* Process steps */}
            <div className="relative">
              {/* Connecting line */}
              <div className="hidden lg:block absolute top-12 left-[calc(10%+24px)] right-[calc(10%+24px)] h-px bg-gradient-to-r from-[#ff6b35]/20 via-[#ff6b35]/10 to-[#ff6b35]/20" />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                {approach.map((step, i) => (
                  <div
                    key={step.step}
                    className={`group relative p-6 bg-white/[0.02] border border-white/[0.07] rounded-2xl hover:border-[#ff6b35]/20 transition-all duration-500 ${
                      approachSect.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${100 + i * 100}ms` }}
                  >
                    <div className="w-10 h-10 bg-[#ff6b35]/10 border border-[#ff6b35]/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#ff6b35]/20 transition-colors duration-300">
                      <span className="text-xs font-bold text-[#ff6b35]">{step.step}</span>
                    </div>
                    <h4 className="text-sm font-bold text-white mb-2">{step.title}</h4>
                    <p className="text-xs text-white/30 leading-relaxed">{step.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Values ── */}
        <section ref={valuesSect.ref} className="relative py-20 md:py-28">
          <div className="absolute inset-0 bg-[#050505]" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
          <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#ff6b35]/4 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <div className={`mb-16 transition-all duration-1000 ${valuesSect.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <SectionTag label="Our Values" />
              <h2 className="text-4xl sm:text-5xl font-black leading-[1.05] tracking-tight">
                <span className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
                  What We Stand For
                </span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {values.map((v, i) => (
                <div
                  key={v.title}
                  className={`group relative p-7 bg-white/[0.02] border border-white/[0.07] rounded-2xl hover:border-[#ff6b35]/20 transition-all duration-500 overflow-hidden ${
                    valuesSect.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${100 + i * 80}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35]/0 to-[#ff6b35]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  <div className="relative">
                    <div className="w-12 h-12 bg-[#ff6b35]/8 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#ff6b35]/15 transition-colors duration-300">
                      <v.icon className="w-6 h-6 text-[#ff6b35]" />
                    </div>
                    <h4 className="text-base font-bold text-white mb-2">{v.title}</h4>
                    <p className="text-xs text-white/35 leading-relaxed">{v.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section ref={ctaSect.ref} className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[#050505]" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff6b35]/25 to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#ff6b35]/5 rounded-full blur-[100px] pointer-events-none animate-glow-breathe" />

          <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
            <div
              className={`relative p-10 md:p-16 bg-gradient-to-br from-[#ff6b35]/10 via-transparent to-[#ff6b35]/5 border border-[#ff6b35]/15 rounded-3xl overflow-hidden transition-all duration-1000 ${ctaSect.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#ff6b35]/10 to-transparent rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#ff6b35]/8 to-transparent rounded-tr-full" />
              <div className="absolute inset-0 grid-bg opacity-30" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-[#ff6b35]/10 border border-[#ff6b35]/20 rounded-full">
                  <div className="w-1.5 h-1.5 bg-[#ff6b35] rounded-full animate-pulse" />
                  <span className="text-xs tracking-widest text-[#ff6b35] font-semibold uppercase">Ready to Start?</span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-[1.05] tracking-tight mb-5">
                  <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                    Let's Build Something
                    <br />
                    Extraordinary Together
                  </span>
                </h2>

                <p className="text-white/40 text-sm max-w-lg mx-auto leading-relaxed mb-10">
                  Whether you're exploring a partnership, seeking a strategic collaborator, or looking
                  to join our team — AESON is ready to move forward with you.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    to="/contact"
                    className="group flex items-center gap-2 px-8 py-4 bg-[#ff6b35] hover:bg-[#ff8c5a] text-white rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,107,53,0.4)] hover:scale-[1.03]"
                  >
                    Contact AESON
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                  <Link
                    to="/products"
                    className="flex items-center gap-2 px-8 py-4 bg-white/[0.04] border border-white/[0.1] text-white rounded-full font-semibold hover:bg-white/[0.08] hover:border-white/[0.18] transition-all duration-300"
                  >
                    Explore Products
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
