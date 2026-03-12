import { SEOHead } from '../components/SEOHead';
import { HeroSection } from '../components/HeroSection';
import { MarqueeStrip } from '../components/MarqueeStrip';
import { StatsSection } from '../components/StatsSection';
import { AboutSection } from '../components/AboutSection';
import { ServicesSection } from '../components/ServicesSection';
import { WhyUsTeaser } from '../components/WhyUsTeaser';
import { ProductsTeaser } from '../components/ProductsTeaser';
import { JoinSection } from '../components/JoinSection';

export function HomePage() {
  return (
    <>
      <SEOHead
        title="AESON — Open Innovation & Deep Technology Company"
        description="AESON is a premier open innovation company pioneering deep technology, defense solutions, prediction markets, fintech, and digital marketplaces. Discover the future with AESON."
        canonical="/"
        pageType="home"
      />
      <HeroSection />
      <MarqueeStrip />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <WhyUsTeaser />
      <ProductsTeaser />
      <JoinSection />
    </>
  );
}
