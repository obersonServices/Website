import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  /** Single schema or array of schemas (JSON-LD) */
  schema?: object | object[];
  /** Override the canonical URL (defaults to current path) */
  canonical?: string;
  /** OG image URL for social sharing previews */
  ogImage?: string;
  /** Author name for E-E-A-T signals */
  author?: string;
}

const DEFAULT_OG_IMAGE = 'https://www.oberon-services.com/og-image.png';
const SITE_NAME = 'Oberon Services';
const TWITTER_HANDLE = '@OberonSecurity';

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  schema,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  author = 'Oberon Services Security Team',
}) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // ── 1. Title ──────────────────────────────────────────────────────────────
    document.title = title;

    // ── Helper: upsert a <meta> tag ───────────────────────────────────────────
    const setMeta = (
      attr: 'name' | 'property' | 'http-equiv',
      key: string,
      content: string
    ) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // ── Helper: upsert a <link> tag ───────────────────────────────────────────
    const setLink = (rel: string, href: string, extra?: Record<string, string>) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
      if (extra) {
        Object.entries(extra).forEach(([k, v]) => el!.setAttribute(k, v));
      }
    };

    // ── 2. Basic Meta ─────────────────────────────────────────────────────────
    setMeta('name', 'description', description);
    setMeta('name', 'robots', 'index, follow');
    setMeta('name', 'author', author);

    // ── 3. Canonical ──────────────────────────────────────────────────────────
    const cleanPath = pathname === '/' ? '' : pathname.replace(/\/$/, '');
    const canonicalUrl = canonical ?? `https://www.oberon-services.com${cleanPath}`;
    setLink('canonical', canonicalUrl);

    // ── 4. Open Graph ─────────────────────────────────────────────────────────
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:site_name', SITE_NAME);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:image', ogImage);
    setMeta('property', 'og:image:width', '1200');
    setMeta('property', 'og:image:height', '630');
    setMeta('property', 'og:image:alt', `${SITE_NAME} — ${title}`);

    // ── 5. Twitter Card ───────────────────────────────────────────────────────
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:site', TWITTER_HANDLE);
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', ogImage);

    // ── 6. Structured Data (JSON-LD) ──────────────────────────────────────────
    // Remove all previously injected schemas
    document.querySelectorAll('script[type="application/ld+json"].seo-schema').forEach(el => el.remove());

    const schemas = schema ? (Array.isArray(schema) ? schema : [schema]) : [];
    schemas.forEach(s => {
      const script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.classList.add('seo-schema');
      script.textContent = JSON.stringify(s);
      document.head.appendChild(script);
    });
  }, [title, description, schema, pathname, canonical, ogImage, author]);

  return null;
};

export default SEO;
