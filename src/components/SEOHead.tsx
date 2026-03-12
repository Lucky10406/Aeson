import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  pageType?: 'home' | 'products' | 'team' | 'join' | 'contact';
}

const BASE_URL = 'https://aeson-web.vercel.app';

const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'AESON',
  alternateName: 'AESON Open Innovation',
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  description:
    'AESON is a premier open innovation company specializing in deep technology, defense solutions, digital marketplaces, and multinational B2B collaboration.',
  foundingDate: '2024',
  areaServed: 'Worldwide',
  knowsAbout: [
    'Open Innovation',
    'Deep Technology',
    'Defense Solutions',
    'Prediction Markets',
    'Fintech',
    'Security Frameworks',
    'Online Marketplaces',
    'Tech Infrastructure',
  ],
  sameAs: [],
};

export function SEOHead({ title, description, canonical, pageType = 'home' }: SEOHeadProps) {
  const fullTitle = title
    ? `${title} | AESON`
    : 'AESON — Open Innovation & Deep Technology Company';
  const fullDescription =
    description ||
    'AESON is a premier open innovation company pioneering deep technology, defense solutions, prediction markets, fintech, and digital marketplaces. Explore the future with AESON.';
  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : BASE_URL;

  useEffect(() => {
    document.title = fullTitle;

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.name = name;
        document.head.appendChild(el);
      }
      el.content = content;
    };

    const setOg = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    // Core SEO
    setMeta(
      'description',
      fullDescription
    );
    setMeta(
      'keywords',
      'AESON, open innovation, deep technology, defense solutions, prediction market, marketplace, security framework, tech infrastructure, fintech, B2B collaboration, multinational, deep tech startup'
    );
    setMeta('robots', 'index, follow');
    setMeta('author', 'AESON');
    setMeta('viewport', 'width=device-width, initial-scale=1');

    // Open Graph
    setOg('og:title', fullTitle);
    setOg('og:description', fullDescription);
    setOg('og:url', canonicalUrl);
    setOg('og:type', 'website');
    setOg('og:site_name', 'AESON');
    setOg('og:locale', 'en_US');

    // Twitter Card
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', fullDescription);
    setMeta('twitter:site', '@aeson');

    // Canonical
    let canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.rel = 'canonical';
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.href = canonicalUrl;

    // JSON-LD Organization structured data
    const schemaId = 'aeson-org-schema';
    let jsonLdEl = document.querySelector(`script#${schemaId}`);
    if (!jsonLdEl) {
      jsonLdEl = document.createElement('script');
      jsonLdEl.setAttribute('type', 'application/ld+json');
      jsonLdEl.id = schemaId;
      document.head.appendChild(jsonLdEl);
    }
    jsonLdEl.textContent = JSON.stringify(ORG_SCHEMA);

    // Website schema
    const websiteSchemaId = 'aeson-website-schema';
    let websiteJsonLd = document.querySelector(`script#${websiteSchemaId}`);
    if (!websiteJsonLd) {
      websiteJsonLd = document.createElement('script');
      websiteJsonLd.setAttribute('type', 'application/ld+json');
      websiteJsonLd.id = websiteSchemaId;
      document.head.appendChild(websiteJsonLd);
    }
    websiteJsonLd.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'AESON',
      url: BASE_URL,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${BASE_URL}/?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    });
  }, [fullTitle, fullDescription, canonicalUrl]);

  return null;
}
