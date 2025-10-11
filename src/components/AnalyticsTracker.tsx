import React, { useEffect } from "react";

// Google Analytics and Tag Manager tracking utilities
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

interface PageViewEvent {
  page_title: string;
  page_location: string;
  page_path?: string;
}

// Initialize Google Analytics
export const initializeAnalytics = () => {
  if (typeof window !== "undefined" && window.gtag) {
    // Enhanced ecommerce tracking
    window.gtag("config", "G-YW0VGF6P2D", {
      page_title: "Advait Swaroop Services - Digital Services Platform",
      page_location: "https://www.advaitswaroopservices.com/",
      custom_map: {
        custom_parameter_1: "business_name",
        custom_parameter_2: "service_type",
      },
      // Enhanced measurement
      send_page_view: true,
      anonymize_ip: true,
      allow_google_signals: true,
      allow_ad_personalization_signals: true,
    });
  }
};

// Track page views
export const trackPageView = (pageData: PageViewEvent) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", "G-YW0VGF6P2D", {
      page_title: pageData.page_title,
      page_location: pageData.page_location,
      page_path: pageData.page_path,
    });
  }
};

// Track custom events
export const trackEvent = (eventData: AnalyticsEvent) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventData.action, {
      event_category: eventData.category,
      event_label: eventData.label,
      value: eventData.value,
    });
  }
};

// Track business-specific events
export const trackBusinessEvent = (
  eventName: string,
  serviceType: string,
  location?: string
) => {
  trackEvent({
    action: eventName,
    category: "Business",
    label: `${serviceType}${location ? ` - ${location}` : ""}`,
    value: 1,
  });
};

// Track service interactions
export const trackServiceInteraction = (
  serviceName: string,
  action: string
) => {
  trackEvent({
    action: action,
    category: "Service Interaction",
    label: serviceName,
    value: 1,
  });
};

// Track form submissions
export const trackFormSubmission = (formType: string, serviceType: string) => {
  trackEvent({
    action: "form_submit",
    category: "Form",
    label: `${formType} - ${serviceType}`,
    value: 1,
  });
};

// Track navigation
export const trackNavigation = (fromPage: string, toPage: string) => {
  trackEvent({
    action: "navigation",
    category: "User Journey",
    label: `${fromPage} to ${toPage}`,
    value: 1,
  });
};

// Track search queries
export const trackSearch = (searchQuery: string, resultsCount: number) => {
  trackEvent({
    action: "search",
    category: "User Interaction",
    label: searchQuery,
    value: resultsCount,
  });
};

// Track conversions
export const trackConversion = (conversionType: string, value: number) => {
  trackEvent({
    action: "conversion",
    category: "Business",
    label: conversionType,
    value: value,
  });
};

// Track business name searches (for our keyword strategy)
export const trackBusinessNameSearch = (searchTerm: string) => {
  trackEvent({
    action: "business_name_search",
    category: "Brand Awareness",
    label: searchTerm,
    value: 1,
  });
};

// Track service page views
export const trackServicePageView = (serviceName: string, pageType: string) => {
  trackPageView({
    page_title: `${serviceName} - ${pageType} | Advait Swaroop Services`,
    page_location: `https://www.advaitswaroopservices.com/${pageType}`,
    page_path: `/${pageType}`,
  });

  trackEvent({
    action: "page_view",
    category: "Service Pages",
    label: serviceName,
    value: 1,
  });
};

// Track contact form interactions
export const trackContactForm = (
  formType: "g2c" | "b2c" | "general",
  step: string
) => {
  trackEvent({
    action: "contact_form",
    category: "Lead Generation",
    label: `${formType} - ${step}`,
    value: 1,
  });
};

// Track admin dashboard usage
export const trackAdminAction = (action: string, details: string) => {
  trackEvent({
    action: "admin_action",
    category: "Admin Dashboard",
    label: `${action} - ${details}`,
    value: 1,
  });
};

// Track ticket management
export const trackTicketAction = (action: string, ticketType: string) => {
  trackEvent({
    action: "ticket_action",
    category: "Ticket Management",
    label: `${action} - ${ticketType}`,
    value: 1,
  });
};

// Analytics Tracker Component
interface AnalyticsTrackerProps {
  pageTitle: string;
  pagePath: string;
  serviceType?: string;
  location?: string;
}

const AnalyticsTracker: React.FC<AnalyticsTrackerProps> = ({
  pageTitle,
  pagePath,
  serviceType,
  location,
}) => {
  useEffect(() => {
    // Track page view
    trackPageView({
      page_title: pageTitle,
      page_location: `https://www.advaitswaroopservices.com${pagePath}`,
      page_path: pagePath,
    });

    // Track business name variations for SEO
    const businessNameVariations = [
      "Advait Swaroop Services",
      "Advait Swaroop",
      "Advait Services",
      "Ad Services",
      "AdServices",
      "Advait Swaroop Services India",
      "Ad Services India",
      "AdServices India",
    ];

    // Track business name awareness
    businessNameVariations.forEach((name) => {
      trackBusinessNameSearch(name);
    });

    // Track service-specific events
    if (serviceType) {
      trackServiceInteraction(serviceType, "page_view");
    }

    // Track location-specific events
    if (location) {
      trackBusinessEvent("location_view", serviceType || "general", location);
    }
  }, [pageTitle, pagePath, serviceType, location]);

  return null; // This component doesn't render anything
};

export default AnalyticsTracker;
