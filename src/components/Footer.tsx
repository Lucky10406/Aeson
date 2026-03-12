"use client";

import { Link } from 'react-router';
import { Linkedin, Twitter, Github, Mail, ArrowUpRight } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About AESON', href: '/#about' },
      { name: 'Why AESON', href: '/why-us' },
      { name: 'Our Services', href: '/#services' },
      { name: 'Products', href: '/products' },
      { name: 'Our Team', href: '/team' },
    ],
    resources: [
      { name: 'Join the Team', href: '/join' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/aesoncorps/', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    //{ icon: Github, href: '#', label: 'GitHub' },
    { icon: Mail, href: 'mailto:aesoncore@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="relative bg-[#050505] border-t border-white/[0.06] overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff6b35]/40 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#ff6b35]/4 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 md:py-20">
        {/* Top — Brand + Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link to="/" className="inline-block group mb-5">
              <span className="text-2xl font-black tracking-[0.15em] text-white group-hover:text-[#ff6b35] transition-colors duration-300">
                AESON
              </span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-6">
              Pioneering open innovation across deep technology, defense solutions,
              digital markets, and enterprise collaboration.
            </p>
            <div className="flex items-center gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 bg-white/[0.04] hover:bg-[#ff6b35]/15 border border-white/[0.08] hover:border-[#ff6b35]/40 rounded-lg flex items-center justify-center transition-all duration-300 group/s"
                >
                  <social.icon className="w-4 h-4 text-white/40 group-hover/s:text-[#ff6b35] transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-7 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-xs font-semibold text-white/30 tracking-widest uppercase mb-5">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="group flex items-center gap-1 text-sm text-white/50 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-white/30 tracking-widest uppercase mb-5">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith('/') ? (
                      <Link
                        to={link.href}
                        className="group flex items-center gap-1 text-sm text-white/50 hover:text-white transition-colors duration-200"
                      >
                        {link.name}
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            © {currentYear} AESON. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#ff6b35] rounded-full animate-pulse" />
            <span className="text-xs text-white/25">Building the future of innovation</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
