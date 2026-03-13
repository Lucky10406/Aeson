"use client";

import emailjs from '@emailjs/browser';
import { useEffect, useRef, useState } from 'react';
import { Mail, MapPin, Phone, Send, Linkedin, Twitter, Github, MessageSquare, CheckCircle } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

// Initialize EmailJS
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '');

const contactInfo = [
  { icon: Mail, title: 'Email', value: 'aesoncore@gmail.com', link: 'mailto:aesoncore@gmail.com', description: 'Best for partnerships & inquiries' },
  { icon: Phone, title: 'Phone', value: '+91 8595524014', link: 'tel:+918595524014', description: 'Mon–Fri, 9am–6pm' },
  { icon: MapPin, title: 'Headquarters', value: 'New Delhi, India', link: '#', description: 'Global operations & partners' },
];

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/company/aesoncorps/', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  //{ icon: Github, href: '#', label: 'GitHub' },
  { icon: Mail, href: 'mailto:aesoncore@gmail.com', label: 'Email' },
];

const inquiryTypes = [
  'Partnership & Collaboration',
  'Defense Solutions',
  'Investment Inquiry',
  'Product Early Access',
  'Press & Media',
  'General Inquiry',
];

export function ContactPage() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', inquiryType: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach(e => { if (e.isIntersecting) setFormVisible(true); }); },
      { threshold: 0.1 }
    );
    if (formRef.current) observer.observe(formRef.current);
    return () => { if (formRef.current) observer.unobserve(formRef.current); };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validate required fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.inquiryType || !formData.message.trim()) {
      setError('Please fill in all required fields');
      setLoading(false);
      return;
    }

    try {
      // Get environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const receivingEmail = import.meta.env.VITE_RECEIVING_EMAIL;

      console.log('Sending contact email with:');
      console.log('Service ID:', serviceId);
      console.log('Template ID:', templateId);
      console.log('Receiving Email:', receivingEmail);
      console.log('Form Data:', formData);

      if (!serviceId || !templateId || !receivingEmail) {
        console.error('Missing environment variables!');
        console.error('VITE_EMAILJS_SERVICE_ID:', serviceId ? '✓ Set' : '✗ Missing');
        console.error('VITE_EMAILJS_TEMPLATE_ID:', templateId ? '✓ Set' : '✗ Missing');
        console.error('VITE_RECEIVING_EMAIL:', receivingEmail ? '✓ Set' : '✗ Missing');
        setError('Configuration error. Please contact support.');
        setLoading(false);
        return;
      }

      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          role: formData.company || 'Not provided', // Using company as role
          linkedin: formData.inquiryType, // Using inquiryType as linkedin field
          message: `Company: ${formData.company || 'Not provided'}\nInquiry Type: ${formData.inquiryType}\n\n${formData.message}`,
          to_email: receivingEmail,
        }
      );

      console.log('Contact email sent successfully:', response);
      setSubmitted(true);

      // Reset form after 5 seconds
      setTimeout(() => {
        setFormData({ name: '', email: '', company: '', inquiryType: '', message: '' });
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Contact email submission error:', error);

      if (error instanceof Error) {
        console.error('Error message:', error.message);
        console.error('Error stack:', error.stack);

        if (error.message.includes('400')) {
          setError('Email configuration error. Check your template variables.');
        } else if (error.message.includes('401') || error.message.includes('403')) {
          setError('Authentication failed. Check your Service ID and Public Key.');
        } else {
          setError(`Error: ${error.message}`);
        }
      } else {
        setError('Failed to send message. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEOHead
        title="Contact AESON"
        description="Contact AESON for partnerships, defense solutions, investment inquiries, or product early access. Reach out and let's build the future together."
        canonical="/contact"
        pageType="contact"
      />

      <div className="min-h-screen bg-[#050505]">
        {/* Hero */}
        <section className="relative pt-36 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-[#050505] grid-bg" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff6b35]/40 to-transparent" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#ff6b35]/6 rounded-full blur-[120px] animate-glow-breathe pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050505] to-transparent" />

          <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
            <div className={`transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 bg-[#ff6b35]/8 border border-[#ff6b35]/20 rounded-full">
                <MessageSquare className="w-3.5 h-3.5 text-[#ff6b35]" />
                <span className="text-xs tracking-widest text-[#ff6b35] font-semibold uppercase">Get in Touch</span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight mb-8">
                <span className="bg-gradient-to-b from-white via-white to-white/50 bg-clip-text text-transparent">
                  Contact AESON Today
                  <br />
                </span>
                <span className="bg-gradient-to-r from-[#ff6b35] via-[#ff8c5a] to-[#ffb085] bg-clip-text text-transparent text-glow-orange">
                  Let's Build Something Great
                </span>
              </h1>

              <p className="text-white/40 text-lg max-w-2xl mx-auto leading-relaxed">
                Whether you're a potential partner, investor, or just want to learn more about AESON,
                we'd love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section ref={formRef} className="relative py-12 md:py-16 pb-24">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff6b35]/20 to-transparent" />
          <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-[#ff6b35]/3 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <div className="grid lg:grid-cols-5 gap-10">
              {/* Left — Info */}
              <div className={`lg:col-span-2 transition-all duration-1000 ${formVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-px bg-[#ff6b35]" />
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#ff6b35]">Reach Us</span>
                </div>
                <h2 className="text-2xl font-black text-white mb-2">Contact Information</h2>
                <p className="text-white/35 text-sm mb-8 leading-relaxed">
                  Reach out through any of the channels below or fill in the form and our team will respond promptly.
                </p>

                {/* Contact cards */}
                <div className="space-y-3 mb-8">
                  {contactInfo.map((info) => (
                    <a
                      key={info.title}
                      href={info.link}
                      className="group flex items-start gap-4 p-4 bg-white/[0.02] border border-white/[0.07] rounded-xl hover:border-[#ff6b35]/20 transition-all duration-300"
                    >
                      <div className="w-10 h-10 bg-[#ff6b35]/8 rounded-xl flex items-center justify-center group-hover:bg-[#ff6b35]/15 transition-colors duration-300 flex-shrink-0">
                        <info.icon className="w-5 h-5 text-[#ff6b35]" />
                      </div>
                      <div>
                        <p className="text-[10px] text-white/25 mb-0.5 uppercase tracking-wider">{info.title}</p>
                        <p className="text-sm font-semibold text-white group-hover:text-[#ff6b35] transition-colors duration-300">{info.value}</p>
                        <p className="text-[10px] text-white/25 mt-0.5">{info.description}</p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Socials */}
                <div>
                  <h3 className="text-xs font-semibold text-white/30 tracking-widest uppercase mb-4">Follow AESON</h3>
                  <div className="flex items-center gap-2">
                    {socialLinks.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        aria-label={s.label}
                        className="w-9 h-9 bg-white/[0.04] hover:bg-[#ff6b35]/12 border border-white/[0.07] hover:border-[#ff6b35]/25 rounded-lg flex items-center justify-center transition-all duration-300 group/s"
                      >
                        <s.icon className="w-4 h-4 text-white/30 group-hover/s:text-[#ff6b35] transition-colors duration-300" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Response note */}
                <div className="mt-8 p-4 bg-[#ff6b35]/5 border border-[#ff6b35]/15 rounded-xl">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#ff6b35] rounded-full animate-pulse mt-1.5 flex-shrink-0" />
                    <p className="text-xs text-white/35 leading-relaxed">
                      We typically respond to all inquiries within{' '}
                      <span className="text-[#ff6b35] font-semibold">24–48 hours</span>.
                      For urgent matters, please call us directly.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right — Form */}
              <div className={`lg:col-span-3 transition-all duration-1000 delay-200 ${formVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <div className="relative p-8 md:p-10 bg-white/[0.02] border border-white/[0.07] rounded-2xl">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#ff6b35]/6 to-transparent rounded-bl-full rounded-tr-2xl" />
                  <div className="relative">
                    {submitted ? (
                      <div className="flex flex-col items-center justify-center py-16 text-center">
                        <div className="w-16 h-16 bg-[#ff6b35]/10 border border-[#ff6b35]/20 rounded-2xl flex items-center justify-center mb-4">
                          <CheckCircle className="w-8 h-8 text-[#ff6b35]" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Message Sent!</h3>
                        <p className="text-white/35 text-sm max-w-sm leading-relaxed">
                          Thank you for reaching out to AESON. Our team will review your message and get back to you within 24–48 hours.
                        </p>
                        <button
                          onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', company: '', inquiryType: '', message: '' }); }}
                          className="mt-8 px-6 py-2.5 border border-[#ff6b35]/30 text-[#ff6b35] rounded-full hover:bg-[#ff6b35]/8 transition-all duration-300 text-sm font-semibold"
                        >
                          Send Another Message
                        </button>
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
                            { label: 'Your Name *', name: 'name', type: 'text', placeholder: 'John Doe', required: true },
                            { label: 'Email Address *', name: 'email', type: 'email', placeholder: 'john@company.com', required: true },
                          ].map((field) => (
                            <div key={field.name}>
                              <label className="block text-xs font-semibold text-white/40 mb-2 uppercase tracking-wider">{field.label}</label>
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
                            <label className="block text-xs font-semibold text-white/40 mb-2 uppercase tracking-wider">Company</label>
                            <input
                              type="text"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              placeholder="Your Organization"
                              className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#ff6b35]/40 focus:ring-1 focus:ring-[#ff6b35]/20 transition-all duration-300"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-white/40 mb-2 uppercase tracking-wider">Inquiry Type *</label>
                            <select
                              name="inquiryType"
                              value={formData.inquiryType}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white text-sm focus:outline-none focus:border-[#ff6b35]/40 focus:ring-1 focus:ring-[#ff6b35]/20 transition-all duration-300 appearance-none"
                            >
                              <option value="" className="bg-[#0a0a0a]">Select inquiry type</option>
                              {inquiryTypes.map((t) => (
                                <option key={t} value={t} className="bg-[#0a0a0a]">{t}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-white/40 mb-2 uppercase tracking-wider">Message *</label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            placeholder="Tell us about your project, partnership idea, or inquiry..."
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
                          {loading ? 'Sending...' : 'Send Message'}
                          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}