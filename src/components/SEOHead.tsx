import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
  jsonLd?: object;
  breadcrumbs?: { name: string; url: string }[];
}

const SITE_URL = "https://nexshift-shine-site.lovable.app";
const OG_IMAGE = "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/19ccb211-7af0-409c-9ca5-5d9d724b82c6/id-preview-b4c96e1a--61a53322-89db-400e-b730-f4a1a1e1c51c.lovable.app-1771927742448.png";

const SEOHead = ({ title, description, canonical, type = "website", jsonLd, breadcrumbs }: SEOHeadProps) => {
  const fullTitle = `${title} | NexShift Media & Events`;
  const url = canonical ? `${SITE_URL}${canonical}` : SITE_URL;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "NexShift Media & Events",
    "description": "Nepal's premium creative agency specializing in digital marketing, event management, photography & videography.",
    "url": SITE_URL,
    "telephone": "+977-980-0000000",
    "email": "hello@nexshiftmedia.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kathmandu",
      "addressCountry": "NP"
    },
    "areaServed": "Nepal",
    "priceRange": "$$"
  };

  const breadcrumbSchema = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": crumb.name,
      "item": `${SITE_URL}${crumb.url}`
    }))
  } : null;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={OG_IMAGE} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />

      <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
      {breadcrumbSchema && <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>}
    </Helmet>
  );
};

export default SEOHead;
