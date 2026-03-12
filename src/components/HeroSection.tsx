"use client";

import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { ArrowRight, ChevronDown } from 'lucide-react';

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Floating particles
    const particles: { x: number; y: number; r: number; vx: number; vy: number; o: number }[] = [];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        o: Math.random() * 0.4 + 0.1,
      });
    }

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Grid lines
      ctx.strokeStyle = 'rgba(255,107,53,0.03)';
      ctx.lineWidth = 1;
      const gs = 80;
      for (let i = 0; i < canvas.width; i += gs) {
        ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, canvas.height); ctx.stroke();
      }
      for (let i = 0; i < canvas.height; i += gs) {
        ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(canvas.width, i); ctx.stroke();
      }

      // Particles
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.fillStyle = `rgba(255,107,53,${p.o})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Connections
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.strokeStyle = `rgba(255,107,53,${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  const scrollDown = () => {
    const el = document.querySelector('#about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ background: '#050505' }} />

      {/* Gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#ff6b35]/8 rounded-full blur-[120px] animate-glow-breathe" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#ff6b35]/5 rounded-full blur-[100px] animate-glow-breathe" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#ff6b35]/3 rounded-full blur-[160px]" />
      </div>

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-radial-[ellipse_at_center] from-transparent to-[#050505]/80 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 lg:px-10 text-center pt-28">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-1.5 mb-8 bg-[#ff6b35]/8 border border-[#ff6b35]/20 rounded-full transition-all duration-700 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="w-1.5 h-1.5 bg-[#ff6b35] rounded-full animate-pulse" />
          <span className="text-xs tracking-widest text-[#ff6b35] font-semibold uppercase">Open Innovation Platform</span>
        </div>

        {/* Heading */}
        <h1
          className={`text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-black mb-6 leading-[0.95] tracking-tight transition-all duration-700 delay-100 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="bg-gradient-to-b from-white via-white to-white/50 bg-clip-text text-transparent">
            Pioneering the
            <br />
            Future of{' '}
          </span>
          <span className="bg-gradient-to-r from-[#ff6b35] via-[#ff8c5a] to-[#ffb085] bg-clip-text text-transparent text-glow-orange">
            Deep Tech
          </span>
        </h1>

        {/* Sub */}
        <p
          className={`text-base sm:text-lg text-white/45 max-w-2xl mx-auto leading-relaxed mb-10 transition-all duration-700 delay-200 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          AESON bridges cutting-edge technology with real-world impact — across defense,
          digital markets, fintech, and enterprise collaboration at a global scale.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <Link
            to="/products"
            className="group flex items-center gap-2 px-7 py-3.5 bg-[#ff6b35] hover:bg-[#ff8c5a] text-white rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,107,53,0.4)] hover:scale-[1.03]"
          >
            Explore Products
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <Link
            to="/why-us"
            className="flex items-center gap-2 px-7 py-3.5 bg-white/[0.04] border border-white/[0.1] text-white rounded-full font-semibold hover:bg-white/[0.08] hover:border-white/[0.18] transition-all duration-300 backdrop-blur-sm"
          >
            Why AESON?
          </Link>
        </div>

        {/* Stats row */}
        <div
          className={`flex flex-wrap items-center justify-center gap-8 mt-16 pt-16 border-t border-white/[0.06] transition-all duration-700 delay-500 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {[
            { value: '6+', label: 'Products In Dev' },
            { value: '4', label: 'Key Sectors' },
            { value: 'MNC', label: 'Grade Partnerships' },
            { value: '∞', label: 'Innovation Potential' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-black text-white mb-1">{s.value}</div>
              <div className="text-xs text-white/30 tracking-wider uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group"
        aria-label="Scroll down"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-white/25 group-hover:text-[#ff6b35]/60 transition-colors duration-300">Scroll</span>
        <ChevronDown className="w-4 h-4 text-white/20 group-hover:text-[#ff6b35]/50 animate-bounce transition-colors duration-300" />
      </button>
    </section>
  );
}
