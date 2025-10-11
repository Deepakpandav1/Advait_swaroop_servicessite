import React from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
  noIndex?: boolean;
  noFollow?: boolean;
}

export default function SEOHead({
  title,
  description,
  keywords = "",
  canonicalUrl = "",
  ogImage = "/logo.png",
  ogType = "website",
  twitterCard = "summary_large_image",
  structuredData,
  noIndex = false,
  noFollow = false,
}: SEOHeadProps) {
  const fullTitle = title.includes("Advait Swaroop Services")
    ? title
    : `${title} | Advait Swaroop Services - Digital Services Platform`;
  const fullDescription =
    description ||
    "Advait Swaroop Services - Your comprehensive digital services platform for government services, travel booking, business solutions, and more.";
  const fullKeywords =
    keywords ||
    "digital services, government services, travel booking, business solutions, online services, India";
  const fullCanonicalUrl =
    canonicalUrl || (typeof window !== "undefined" ? window.location.href : "");
  const fullOgImage = ogImage.startsWith("http")
    ? ogImage
    : `${
        typeof window !== "undefined" ? window.location.origin : ""
      }${ogImage}`;

  return (
    <>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={fullKeywords} />
      <meta name="author" content="Advait Swaroop Services" />
      <meta
        name="robots"
        content={`${noIndex ? "noindex" : "index"},${
          noFollow ? "nofollow" : "follow"
        }`}
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0b234a" />
      <meta name="msapplication-TileColor" content="#0b234a" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta
        name="apple-mobile-web-app-title"
        content="Advait Swaroop Services"
      />

      {/* Canonical URL */}
      {fullCanonicalUrl && <link rel="canonical" href={fullCanonicalUrl} />}

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Advait Swaroop Services" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:site" content="@AdvaitSwaroopServices" />
      <meta name="twitter:creator" content="@AdvaitSwaroopServices" />

      {/* Additional SEO Meta Tags */}
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="India" />
      <meta name="geo.position" content="20.5937;78.9629" />
      <meta name="ICBM" content="20.5937, 78.9629" />
      <meta name="language" content="en-IN" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />

      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData, null, 2),
          }}
        />
      )}
    </>
  );
}
