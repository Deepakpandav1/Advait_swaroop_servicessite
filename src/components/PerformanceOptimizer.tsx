import { useEffect } from "react";

export default function PerformanceOptimizer() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload critical CSS
      const criticalCSS = document.createElement("link");
      criticalCSS.rel = "preload";
      criticalCSS.href = "/src/styles.css";
      criticalCSS.as = "style";
      criticalCSS.onload = () => {
        criticalCSS.rel = "stylesheet";
      };
      document.head.appendChild(criticalCSS);

      // Preload critical fonts
      const fontPreload = document.createElement("link");
      fontPreload.rel = "preload";
      fontPreload.href =
        "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap";
      fontPreload.as = "style";
      fontPreload.crossOrigin = "anonymous";
      document.head.appendChild(fontPreload);

      // Preload critical images
      const criticalImages = ["/logo.png", "/icon.png", "/gline.png"];

      criticalImages.forEach((src) => {
        const link = document.createElement("link");
        link.rel = "preload";
        link.href = src;
        link.as = "image";
        document.head.appendChild(link);
      });
    };

    // Optimize images
    const optimizeImages = () => {
      const images = document.querySelectorAll("img");
      images.forEach((img) => {
        // Add loading="lazy" for non-critical images
        if (!img.hasAttribute("loading")) {
          img.setAttribute("loading", "lazy");
        }

        // Add decoding="async" for better performance
        if (!img.hasAttribute("decoding")) {
          img.setAttribute("decoding", "async");
        }
      });
    };

    // Add resource hints
    const addResourceHints = () => {
      // DNS prefetch for external domains
      const dnsPrefetchDomains = [
        "https://fonts.googleapis.com",
        "https://fonts.gstatic.com",
        "https://images.unsplash.com",
      ];

      dnsPrefetchDomains.forEach((domain) => {
        const link = document.createElement("link");
        link.rel = "dns-prefetch";
        link.href = domain;
        document.head.appendChild(link);
      });
    };

    // Initialize performance optimizations
    preloadCriticalResources();
    addResourceHints();

    // Optimize images after a short delay to ensure DOM is ready
    setTimeout(optimizeImages, 100);

    // Add performance monitoring
    if ("performance" in window) {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === "largest-contentful-paint") {
            console.log("LCP:", entry.startTime);
          }
          if (entry.entryType === "first-input") {
            console.log("FID:", entry.processingStart - entry.startTime);
          }
          if (entry.entryType === "layout-shift") {
            console.log("CLS:", entry.value);
          }
        }
      });

      try {
        observer.observe({
          entryTypes: [
            "largest-contentful-paint",
            "first-input",
            "layout-shift",
          ],
        });
      } catch (e) {
        console.log("Performance Observer not supported");
      }
    }

    // Add service worker for caching
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => {
        // Service worker registration failed, but that's okay
      });
    }
  }, []);

  return null;
}
