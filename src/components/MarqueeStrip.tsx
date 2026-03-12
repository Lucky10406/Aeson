"use client";

interface MarqueeStripProps {
  reverse?: boolean;
  speed?: string;
}

const items = [
  'Deep Technology',
  'Defense Solutions',
  'Prediction Markets',
  'Open Innovation',
  'B2B Marketplace',
  'Fintech Solutions',
  'Zero-Trust Security',
  'AI-Powered Analytics',
  'Sovereign Infrastructure',
  'Enterprise Collaboration',
  'Blockchain & DeFi',
  'Strategic Intelligence',
];

const Dot = () => (
  <span className="inline-block w-1 h-1 rounded-full bg-[#ff6b35]/60 mx-6 flex-shrink-0" />
);

export function MarqueeStrip({ reverse = false, speed = '30s' }: MarqueeStripProps) {
  const content = [...items, ...items];

  return (
    <div className="relative overflow-hidden py-4 border-y border-white/[0.06] bg-[#050505]">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

      <div
        className={`flex whitespace-nowrap ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        }`}
        style={{ animationDuration: speed }}
      >
        {content.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="text-xs tracking-[0.15em] font-semibold uppercase text-white/30 hover:text-white/60 transition-colors duration-200 cursor-default flex-shrink-0">
              {item}
            </span>
            <Dot />
          </span>
        ))}
      </div>
    </div>
  );
}
