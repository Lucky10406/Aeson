"use client";

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Why AESON', href: '/why-us' },
    { name: 'Our Team', href: '/team' },
    { name: 'Join', href: '/join' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#050505]/80 backdrop-blur-xl border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-[68px] md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group flex-shrink-0">
            <div className="relative">
              <span className="text-xl font-black tracking-[0.15em] text-white group-hover:text-[#ff6b35] transition-colors duration-300">
                AESON
              </span>
              <div className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-gradient-to-r from-[#ff6b35] to-[#ff8c5a] group-hover:w-full transition-all duration-300" />
            </div>
          </Link>

          {/* Desktop Nav — centered */}
          <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-4 py-2 text-sm tracking-wide transition-all duration-200 rounded-lg ${
                  isActive(item.href)
                    ? 'text-white bg-white/[0.06]'
                    : 'text-white/50 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/contact"
              className={`group flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                location.pathname === '/contact'
                  ? 'bg-[#ff6b35] text-white'
                  : 'bg-[#ff6b35]/10 border border-[#ff6b35]/30 text-[#ff6b35] hover:bg-[#ff6b35] hover:text-white hover:border-[#ff6b35]'
              }`}
            >
              Contact Us
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white/60 hover:text-white transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 py-4 space-y-1 bg-[#050505]/95 backdrop-blur-xl border-b border-white/[0.06]">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center px-4 py-3 text-sm rounded-xl transition-all duration-200 ${
                isActive(item.href)
                  ? 'text-white bg-white/[0.08]'
                  : 'text-white/50 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-[#ff6b35] text-white rounded-xl text-sm font-semibold"
            >
              Contact Us <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
