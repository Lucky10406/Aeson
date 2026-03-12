"use client";

import { useEffect, useRef, useState } from 'react';
import { Lock, Rocket, Package } from 'lucide-react';

export function ProductsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const comingSoonProducts = [
    {
      icon: Rocket,
      title: 'Innovation Platform',
      description: 'Next-generation collaboration tools',
    },
    {
      icon: Package,
      title: 'Enterprise Suite',
      description: 'Comprehensive business solutions',
    },
    {
      icon: Lock,
      title: 'Security Framework',
      description: 'Advanced protection systems',
    },
  ];

  return (
    <section
      id="products"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#ff6b35]/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 mb-4 bg-[#ff6b35]/10 border border-[#ff6b35]/30 rounded-full">
            <Lock className="w-3 h-3 text-[#ff6b35]" />
            <span className="text-sm text-[#ff6b35] font-semibold">Coming Soon</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Our Products
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Innovative products in development. Stay tuned for groundbreaking 
            solutions that will transform industries.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {comingSoonProducts.map((product, index) => (
            <div
              key={product.title}
              className={`group relative transition-all duration-1000 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${200 + index * 150}ms`,
              }}
            >
              <div className="relative h-full p-8 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl overflow-hidden">
                {/* Blur Effect */}
                <div className="absolute inset-0 backdrop-blur-[2px] bg-black/20" />
                
                {/* Locked Indicator */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-[#ff6b35]/20 border border-[#ff6b35]/30 rounded-full flex items-center justify-center">
                  <Lock className="w-5 h-5 text-[#ff6b35]" />
                </div>

                {/* Content */}
                <div className="relative filter blur-[1px] group-hover:blur-0 transition-all duration-300">
                  {/* Icon */}
                  <div className="w-16 h-16 mb-6 bg-white/5 rounded-xl flex items-center justify-center">
                    <product.icon className="w-8 h-8 text-gray-400" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold mb-4 text-gray-300">
                    {product.title}
                  </h3>
                  
                  <p className="text-gray-500 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Coming Soon Badge */}
                <div className="relative mt-6">
                  <div className="px-4 py-2 bg-[#ff6b35]/10 border border-[#ff6b35]/30 rounded-lg text-center">
                    <span className="text-sm text-[#ff6b35] font-semibold">Launching Soon</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-gray-400 mb-4">
            Want to be notified when we launch?
          </p>
          <button className="px-8 py-3 bg-transparent border-2 border-[#ff6b35]/30 text-[#ff6b35] rounded-lg hover:bg-[#ff6b35]/10 hover:border-[#ff6b35] transition-all duration-300 font-semibold">
            Join the Waitlist
          </button>
        </div>
      </div>
    </section>
  );
}
