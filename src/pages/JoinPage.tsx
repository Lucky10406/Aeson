"use client";

import emailjs from '@emailjs/browser';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import {
  Rocket,
  Users,
  TrendingUp,
  Award,
  Briefcase,
  Code,
  Shield,
  BarChart,
  Globe,
  Heart,
  Clock,
  MapPin,
  ArrowRight,
  Send,
  CheckCircle,
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

// Initialize EmailJS once when component loads
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '');

const benefits = [
  { icon: Rocket, title: 'Innovation First', description: 'Work on cutting-edge projects that push the boundaries of what is possible in deep technology.' },
  { icon: Users, title: 'World-Class Team', description: 'Collaborate with exceptional minds from defense, tech, finance, and academia.' },
  { icon: TrendingUp, title: 'Career Growth', description: 'Accelerate your career with mentorship, learning budgets, and unlimited growth opportunities.' },
  { icon: Award, title: 'Meaningful Impact', description: 'Make a real difference in critical industries that shape national security and global commerce.' },
  { icon: Globe, title: 'Global Reach', description: 'Work on international projects with multinational corporations and global defense partners.' },
  { icon: Heart, title: 'Culture & Wellbeing', description: 'A culture that values diversity, wellbeing, and the human side of innovation.' },
];

const openPositions = [
  { id: 1, title: 'Senior AI/ML Engineer', department: 'Engineering', location: 'Remote / Hybrid', type: 'Full-time', icon: Code, description: 'Build cutting-edge ML models and AI systems for our deep technology products.', tags: ['Python', 'PyTorch', 'MLOps', 'AI Research'] },
  { id: 2, title: 'Defense Technology Analyst', department: 'Defense', location: 'On-site', type: 'Full-time', icon: Shield, description: 'Analyze and develop strategic defense technology solutions for government and enterprise clients.', tags: ['Defense Tech', 'Intelligence', 'Security', 'Strategy'] },
  { id: 3, title: 'Blockchain / DeFi Engineer', department: 'Fintech', location: 'Remote', type: 'Full-time', icon: BarChart, description: 'Design and develop DeFi protocols and blockchain infrastructure for our fintech product suite.', tags: ['Solidity', 'Web3', 'DeFi', 'Ethereum'] },
  { id: 4, title: 'Product Manager — Marketplace', department: 'Product', location: 'Hybrid', type: 'Full-time', icon: Briefcase, description: 'Lead the development of our B2B marketplace product from concept to launch.', tags: ['Product Strategy', 'B2B', 'Agile', 'Marketplace'] },
  { id: 5, title: 'Strategic Partnerships Lead', department: 'Commercial', location: 'Remote / Travel', type: 'Full-time', icon: Globe, description: 'Build and nurture strategic partnerships with MNCs, defense contractors, and tech firms globally.', tags: ['Business Dev', 'Partnerships', 'MNC', 'Strategy'] },
];

const deptColors: Record<string, string> = {
  Engineering: 'text-blue-400 bg-blue-400/8 border-blue-400/20',
  Defense: 'text-red-400 bg-red-400/8 border-red-400/20',
  Fintech: 'text-yellow-400 bg-yellow-400/8 border-yellow-400/20',
  Product: 'text-purple-400 bg-purple-400/8 border-purple-400/20',
  Commercial: 'text-emerald-400 bg-emerald-400/8 border-emerald-400/20',
};

export function JoinPage() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [benefitsVisible, setBenefitsVisible] = useState(false);
  const [positionsVisible, setPositionsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', role: '', linkedin: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const benefitsRef = useRef<HTMLDivElement>(null);
  const positionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const makeObserver = (ref: React.RefObject<HTMLDivElement | null>, setter: (v: boolean) => void) => {
      const obs = new IntersectionObserver(
        (entries) => { entries.forEach(e => { if (e.isIntersecting) setter(true); }); },
        { threshold: 0.1 }
      );
      if (ref.current) obs.observe(ref.current);
      return obs;
    };
    const o1 = makeObserver(benefitsRef, setBenefitsVisible);
    const o2 = makeObserver(positionsRef, setPositionsVisible);
    return () => {
      if (benefitsRef.current) o1.unobserve(benefitsRef.current);
      if (positionsRef.current) o2.unobserve(positionsRef.current);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validate required fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.role || !formData.message.trim()) {
      setError('Please fill in all required fields');
      setLoading(false);
      return;
    }

    try {
      await emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  {
    from_name: formData.name,
    from_email: formData.email,
    role: formData.role,
    linkedin: formData.linkedin || 'Not provided',
    message: formData.message,
    to_email: import.meta.env.VITE_RECEIVING_EMAIL || '',
  }
);

      setSubmitted(true);
      // Reset form after 5 seconds
      setTimeout(() => {
        setFormData({ name: '', email: '', role: '', linkedin: '', message: '' });
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Email submission error:', error);
      setError('Failed to submit application. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEOHead
        title="Join the Team — Careers at AESON"
        description="Join AESON's world-class team of innovators. Explore open positions in AI engineering, defense technology, fintech, product, and strategic partnerships."
        canonical="/join"
        pageType="join"
      />

      <div className="min-h-screen bg-[#050505]">
        {/* Hero */}
        <section className="relative pt-36 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[#050505] grid-bg" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff6b35]/40 to-transparent" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#ff6b35]/6 rounded-full blur-[120px] animate-glow-breathe pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050505] to-transparent" />

          <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
            <div className={`transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 bg-[#ff6b35]/8 border border-[#ff6b35]/20 rounded-full">
                <Rocket className="w-3.5 h-3.5 text-[#ff6b35]" />
                <span className="text-xs tracking-widest text-[#ff6b35] font-semibold uppercase">We're Hiring</span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight mb-8">
                <span className="bg-gradient-to-b from-white via-white to-white/50 bg-clip-text text-transparent">Build the Future<br /></span>
                <span className="bg-gradient-to-r from-[#ff6b35] via-[#ff8c5a] to-[#ffb085] bg-clip-text text-transparent text-glow-orange">
                  With AESON
                </span>
              </h1>

              <p className="text-white/40 text-lg max-w-2xl mx-auto leading-relaxed">
                We're assembling a world-class team to pioneer the next generation of deep technology.
                If you're exceptional at what you do and want to change the world, you belong here.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section ref={benefitsRef} className="relative py-16 md:py-20">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff6b35]/20 to-transparent" />
          <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <div className={`mb-12 transition-all duration-1000 ${benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-px bg-[#ff6b35]" />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#ff6b35]">Why Join</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black leading-[1.05] tracking-tight">
                <span className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">Why Join AESON?</span>
              </h2>
              <p className="text-white/35 text-sm mt-3 max-w-xl">
                We offer more than a job — we offer a mission, a community, and a chance to leave your mark on history.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className={`group relative p-6 bg-white/[0.02] border border-white/[0.07] rounded-2xl hover:border-[#ff6b35]/20 transition-all duration-500 overflow-hidden ${
                    benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${150 + index * 80}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35]/0 to-[#ff6b35]/4 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
                  <div className="relative">
                    <div className="w-10 h-10 mb-4 bg-[#ff6b35]/8 rounded-xl flex items-center justify-center group-hover:bg-[#ff6b35]/15 transition-colors duration-300">
                      <benefit.icon className="w-5 h-5 text-[#ff6b35]" />
                    </div>
                    <h4 className="text-sm font-bold text-white mb-2">{benefit.title}</h4>
                    <p className="text-xs text-white/35 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions + Form */}
        <section id="positions" ref={positionsRef} className="relative py-16 md:py-20 pb-24">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
          <div className="absolute inset-0 bg-[#050505]" />
          <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-[#ff6b35]/3 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">
            {/* Positions header */}
            <div className={`mb-10 transition-all duration-1000 ${positionsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-px bg-[#ff6b35]" />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#ff6b35]">Open Roles</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black leading-[1.05] tracking-tight">
                <span className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">Open Positions</span>
              </h2>
              <p className="text-white/35 text-sm mt-3 max-w-xl">
                Current openings across our key departments. Don't see your role? Apply anyway.
              </p>
            </div>

            {/* Position list */}
            <div className="space-y-3 mb-12">
              {openPositions.map((position, index) => (
                <div
                  key={position.id}
                  className={`group relative p-5 bg-white/[0.02] border border-white/[0.07] rounded-2xl hover:border-[#ff6b35]/20 transition-all duration-500 cursor-pointer ${
                    positionsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                  style={{ transitionDelay: `${150 + index * 80}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b35]/0 to-[#ff6b35]/3 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
                  <div className="relative flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="w-10 h-10 bg-[#ff6b35]/8 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#ff6b35]/15 transition-colors duration-300">
                      <position.icon className="w-5 h-5 text-[#ff6b35]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-sm font-bold text-white group-hover:text-[#ff6b35] transition-colors duration-300">{position.title}</h3>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${deptColors[position.department]}`}>
                          {position.department}
                        </span>
                      </div>
                      <p className="text-xs text-white/35 mb-1.5">{position.description}</p>
                      <div className="flex flex-wrap items-center gap-3 text-[10px] text-white/25">
                        <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {position.location}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {position.type}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2 flex-shrink-0">
                      <div className="flex gap-1">
                        {position.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="px-2 py-0.5 bg-white/[0.04] border border-white/[0.07] rounded text-[10px] text-white/30">{tag}</span>
                        ))}
                      </div>
                      <div className="flex items-center gap-1 text-[#ff6b35] text-xs font-bold group-hover:gap-2 transition-all duration-300">
                        Apply <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Application Form */}
            <div
              className={`relative p-8 md:p-10 bg-white/[0.02] border border-white/[0.07] rounded-2xl transition-all duration-1000 delay-600 ${positionsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#ff6b35]/6 to-transparent rounded-bl-full" />
              <div className="relative">
                <h3 className="text-xl font-bold text-white mb-1">Apply Now</h3>
                <p className="text-white/35 text-sm mb-8">
                  Don't see your perfect role? Submit your application and we'll reach out when something matches.
                </p>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 bg-[#ff6b35]/10 border border-[#ff6b35]/20 rounded-2xl flex items-center justify-center mb-4">
                      <CheckCircle className="w-8 h-8 text-[#ff6b35]" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Application Received!</h4>
                    <p className="text-white/35 text-sm max-w-sm">
                      Thank you for your interest in joining AESON. We'll review your application and be in touch soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {error && (
                      <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                        {error}
                      </div>
                    )}

                    <div className="grid sm:grid-cols-2 gap-5">
                      {[
                        { label: 'Full Name *', name: 'name', type: 'text', placeholder: 'Your Name', required: true },
                        { label: 'Email Address *', name: 'email', type: 'email', placeholder: 'you@example.com', required: true },
                      ].map((field) => (
                        <div key={field.name}>
                          <label className="block text-xs font-semibold text-white/50 mb-2 uppercase tracking-wider">{field.label}</label>
                          <input
                            type={field.type}
                            name={field.name}
                            value={(formData as any)[field.name]}
                            onChange={handleChange}
                            required={field.required}
                            placeholder={field.placeholder}
                            className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#ff6b35]/40 focus:ring-1 focus:ring-[#ff6b35]/20 transition-all duration-300"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-white/50 mb-2 uppercase tracking-wider">Role Interested In *</label>
                        <select
                          name="role"
                          value={formData.role}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white text-sm focus:outline-none focus:border-[#ff6b35]/40 focus:ring-1 focus:ring-[#ff6b35]/20 transition-all duration-300 appearance-none"
                        >
                          <option value="" className="bg-[#0a0a0a]">Select a role</option>
                          {openPositions.map((p) => (
                            <option key={p.id} value={p.title} className="bg-[#0a0a0a]">{p.title}</option>
                          ))}
                          <option value="other" className="bg-[#0a0a0a]">Other / Open Application</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-white/50 mb-2 uppercase tracking-wider">LinkedIn Profile</label>
                        <input
                          type="url"
                          name="linkedin"
                          value={formData.linkedin}
                          onChange={handleChange}
                          placeholder="linkedin.com/in/yourname"
                          className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#ff6b35]/40 focus:ring-1 focus:ring-[#ff6b35]/20 transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-white/50 mb-2 uppercase tracking-wider">Why AESON? *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        placeholder="Tell us why you want to join AESON and what you'd bring to the team..."
                        className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#ff6b35]/40 focus:ring-1 focus:ring-[#ff6b35]/20 transition-all duration-300 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className={`group w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#ff6b35] hover:bg-[#ff8c5a] text-white rounded-xl font-semibold transition-all duration-300 ${
                        loading
                          ? 'opacity-50 cursor-not-allowed'
                          : 'hover:shadow-[0_0_30px_rgba(255,107,53,0.35)] hover:scale-[1.01]'
                      }`}
                    >
                      {loading ? 'Submitting...' : 'Submit Application'}
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}