// SEO structured data and meta information for different page types
import { generateMetaKeywords, generatePageKeywords } from './keywordVariations';

export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Advait Swaroop Services",
  "alternateName": [
    "Advait Swaroop Services",
    "Advait Swaroop",
    "Advait Services", 
    "Ad Services",
    "AdServices",
    "Ad-Services",
    "Adservices",
    "Ad Services India",
    "AdServices India",
    "AdvaitSwaroop",
    "Advait-Swaroop",
    "Advait Swaroop Service",
    "Advait Swaroop Digital Services",
    "Advait Swaroop Seva",
    "Advait Swaroop Sewa",
    "Advait Swaroop Serves",
    "ASS",
    "AWS",
    "Advait Swaroop S",
    "Advait S Services",
    "Advaitswaroop",
    "Advaitswaroopservices"
  ],
  "url": "https://www.advaitswaroopservices.com",
  "logo": "https://www.advaitswaroopservices.com/logo.png",
  "description": "Comprehensive digital services platform offering government services, travel booking, business solutions, and more across India. Also known as Ad Services, AdServices, Advait Services, and Advait Swaroop Services.",
  "foundingDate": "2024",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN",
    "addressRegion": "India"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-XXXXXXXXXX",
    "contactType": "customer service",
    "availableLanguage": ["English", "Hindi"]
  },
  "sameAs": [
    "https://www.facebook.com/advaitswaroopservices",
    "https://www.twitter.com/advaitswaroopservices",
    "https://www.linkedin.com/company/advaitswaroopservices"
  ],
  "serviceArea": {
    "@type": "Country",
    "name": "India"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digital Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Government to Citizen Services",
          "description": "Complete government service assistance including Aadhaar, PAN, PMJAY, and more"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Travel Services",
          "description": "Flight booking, bus booking, rail tickets, and visa services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Business to Citizen Services",
          "description": "DSC services, recharges, and business solutions"
        }
      }
    ]
  }
};

export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Advait Swaroop Services",
  "url": "https://www.advaitswaroopservices.com",
  "description": "Your comprehensive digital services platform for government services, travel booking, and business solutions.",
  "publisher": {
    "@type": "Organization",
    "name": "Advait Swaroop Services"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.advaitswaroopservices.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const serviceStructuredData = (serviceName: string, serviceDescription: string, serviceUrl: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceName,
  "description": serviceDescription,
  "url": serviceUrl,
  "provider": {
    "@type": "Organization",
    "name": "Advait Swaroop Services"
  },
  "serviceType": "Digital Services",
  "areaServed": {
    "@type": "Country",
    "name": "India"
  },
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": serviceUrl,
    "serviceName": serviceName
  }
});

export const breadcrumbStructuredData = (breadcrumbs: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": crumb.url
  }))
});

export const faqStructuredData = (faqs: Array<{question: string, answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

// Page-specific SEO data
export const pageSEOData = {
  home: {
    title: "Advait Swaroop Services - Digital Services Platform | Government Services, Travel Booking & Business Solutions",
    description: "Comprehensive digital services platform offering government services, travel booking, business solutions, and more. Get assistance with Aadhaar, PAN, PMJAY, flight booking, and business services across India.",
    keywords: generatePageKeywords('home'),
    structuredData: [organizationStructuredData, websiteStructuredData]
  },
  services: {
    title: "Our Services - Government, Travel & Business Solutions | Advait Swaroop Services",
    description: "Explore our comprehensive range of digital services including government services, travel booking, business solutions, and more. Professional assistance for all your service needs.",
    keywords: generatePageKeywords('services'),
    structuredData: [organizationStructuredData]
  },
  travel: {
    title: "Travel Services - Flight, Bus, Rail & Visa Booking | Advait Swaroop Services",
    description: "Complete travel solutions including flight booking, bus booking, rail tickets, and visa services. Professional travel assistance with competitive prices and excellent service.",
    keywords: generatePageKeywords('travel'),
    structuredData: [serviceStructuredData("Travel Services", "Complete travel solutions including flight, bus, rail, and visa services", "https://www.advaitswaroopservices.com/travel")]
  },
  g2c: {
    title: "Government to Citizen Services - Aadhaar, PAN, PMJAY & More | Advait Swaroop Services",
    description: "Professional assistance for all government services including Aadhaar card, PAN card, PMJAY, E-Shram, and more. Expert guidance for government service applications.",
    keywords: generatePageKeywords('g2c'),
    structuredData: [serviceStructuredData("Government to Citizen Services", "Complete government service assistance including Aadhaar, PAN, PMJAY, and more", "https://www.advaitswaroopservices.com/g2c")]
  },
  b2c: {
    title: "Business to Citizen Services - DSC, Recharge & Business Solutions | Advait Swaroop Services",
    description: "Professional business services including DSC (Digital Signature Certificate), mobile recharges, and business solutions. Streamline your business operations with our expert services.",
    keywords: generatePageKeywords('b2c'),
    structuredData: [serviceStructuredData("Business to Citizen Services", "Professional business services including DSC, recharges, and business solutions", "https://www.advaitswaroopservices.com/b2c")]
  },
  contact: {
    title: "Contact Us - Get Professional Service Assistance | Advait Swaroop Services",
    description: "Contact Advait Swaroop Services for professional assistance with government services, travel booking, and business solutions. Expert guidance and support for all your service needs.",
    keywords: "contact us, customer support, service assistance, help, support, Advait Swaroop Services contact",
    structuredData: [organizationStructuredData]
  },
  about: {
    title: "About Us - Professional Digital Services Platform | Advait Swaroop Services",
    description: "Learn about Advait Swaroop Services - your trusted partner for digital services, government assistance, travel booking, and business solutions. Professional service with a personal touch.",
    keywords: "about us, company, digital services, government services, travel services, business solutions, Advait Swaroop Services",
    structuredData: [organizationStructuredData]
  }
};

// Travel sub-services SEO data
export const travelServicesSEO = {
  airTicket: {
    title: "Air Ticket Booking - Domestic & International Flights | Advait Swaroop Services",
    description: "Book domestic and international flights with Advait Swaroop Services. Competitive prices, instant confirmation, and 24/7 customer support for all your air travel needs.",
    keywords: generatePageKeywords('travel') + ", air ticket booking, flight booking, domestic flights, international flights, airline tickets, flight reservation",
    structuredData: [serviceStructuredData("Air Ticket Booking", "Domestic and international flight booking services", "https://www.advaitswaroopservices.com/travel/air-ticket")]
  },
  busBooking: {
    title: "Bus Booking - Intercity & Interstate Bus Tickets | Advait Swaroop Services",
    description: "Book intercity and interstate bus tickets with Advait Swaroop Services. Comfortable travel options, competitive prices, and reliable service for all your bus travel needs.",
    keywords: generatePageKeywords('travel') + ", bus booking, bus tickets, intercity buses, interstate buses, bus reservation, travel booking",
    structuredData: [serviceStructuredData("Bus Booking", "Intercity and interstate bus ticket booking services", "https://www.advaitswaroopservices.com/travel/bus-booking")]
  },
  railTicket: {
    title: "Rail Ticket Booking - IRCTC Train Tickets | Advait Swaroop Services",
    description: "Book IRCTC train tickets with Advait Swaroop Services. Easy booking process, instant confirmation, and support for all your rail travel requirements across India.",
    keywords: generatePageKeywords('travel') + ", rail ticket booking, train tickets, IRCTC booking, railway tickets, train reservation, rail travel",
    structuredData: [serviceStructuredData("Rail Ticket Booking", "IRCTC train ticket booking services", "https://www.advaitswaroopservices.com/travel/rail-ticket")]
  },
  visaServices: {
    title: "Visa Services - International Travel Documentation | Advait Swaroop Services",
    description: "Professional visa services for international travel. Expert assistance with visa applications, documentation, and processing for various countries.",
    keywords: generatePageKeywords('travel') + ", visa services, international travel, visa application, travel documentation, visa processing, passport services",
    structuredData: [serviceStructuredData("Visa Services", "International travel visa services and documentation", "https://www.advaitswaroopservices.com/travel/visa")]
  }
};

// G2C services SEO data
export const g2cServicesSEO = {
  aadhaarCard: {
    title: "Aadhaar Card Services - Application, Update & Correction | Advait Swaroop Services",
    description: "Professional Aadhaar card services including new applications, updates, corrections, and biometric enrollment. Expert assistance for all Aadhaar-related services.",
    keywords: "Aadhaar card, Aadhaar services, Aadhaar application, Aadhaar update, Aadhaar correction, biometric enrollment",
    structuredData: [serviceStructuredData("Aadhaar Card Services", "Complete Aadhaar card services including application, update, and correction", "https://www.advaitswaroopservices.com/g2c/aadhaar-card")]
  },
  eshram: {
    title: "E-Shram Card Services - Registration & Benefits | Advait Swaroop Services",
    description: "Professional E-Shram card services including registration, benefits enrollment, and card management. Expert assistance for unorganized workers across India.",
    keywords: "E-Shram card, E-Shram registration, unorganized workers, labor card, E-Shram benefits, worker registration",
    structuredData: [serviceStructuredData("E-Shram Card Services", "E-Shram card registration and benefits services", "https://www.advaitswaroopservices.com/g2c/eshram")]
  },
  pmjay: {
    title: "PMJAY Services - Ayushman Bharat Health Insurance | Advait Swaroop Services",
    description: "Professional PMJAY (Ayushman Bharat) services including enrollment, card generation, and hospital empanelment. Expert assistance for health insurance benefits.",
    keywords: "PMJAY, Ayushman Bharat, health insurance, PMJAY card, health benefits, medical insurance",
    structuredData: [serviceStructuredData("PMJAY Services", "PMJAY Ayushman Bharat health insurance services", "https://www.advaitswaroopservices.com/g2c/pmjay")]
  }
};

// B2C services SEO data
export const b2cServicesSEO = {
  dsc: {
    title: "DSC Services - Digital Signature Certificate | Advait Swaroop Services",
    description: "Professional DSC (Digital Signature Certificate) services including new applications, renewals, and certificate management. Expert assistance for digital signatures.",
    keywords: "DSC, digital signature certificate, digital signature, certificate services, DSC application, digital certificates",
    structuredData: [serviceStructuredData("DSC Services", "Digital Signature Certificate services and applications", "https://www.advaitswaroopservices.com/b2c/dsc")]
  },
  recharge: {
    title: "Mobile Recharge Services - Prepaid & Postpaid | Advait Swaroop Services",
    description: "Mobile recharge services for all major telecom operators. Instant recharge, competitive rates, and 24/7 availability for all your mobile recharge needs.",
    keywords: "mobile recharge, prepaid recharge, postpaid recharge, telecom recharge, mobile top-up, recharge services",
    structuredData: [serviceStructuredData("Mobile Recharge Services", "Mobile recharge services for all telecom operators", "https://www.advaitswaroopservices.com/b2c/recharge")]
  }
};
