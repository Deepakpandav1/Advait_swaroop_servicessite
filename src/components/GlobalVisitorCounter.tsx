import { useEffect } from "react";
import { useLocation } from "@tanstack/react-router";

interface GlobalVisitorCounterProps {
  showCounter?: boolean;
}

export default function GlobalVisitorCounter({
  showCounter = false,
}: GlobalVisitorCounterProps) {
  const location = useLocation();

  useEffect(() => {
    // Track page visits globally for all pages
    const trackPageVisit = () => {
      // Create a hidden image element to trigger the counter
      const counterImg = document.createElement("img");
      counterImg.src =
        "https://hitwebcounter.com/counter/counter.php?page=21448874&style=0001&nbdigits=7&type=page&initCount=10230";
      counterImg.style.display = "none";
      counterImg.style.position = "absolute";
      counterImg.style.left = "-9999px";
      counterImg.style.top = "-9999px";
      counterImg.alt = "Visitor Counter";
      counterImg.title = "Counters";

      // Add to document to trigger the counter
      document.body.appendChild(counterImg);

      // Remove after a short delay to avoid cluttering
      setTimeout(() => {
        if (document.body.contains(counterImg)) {
          document.body.removeChild(counterImg);
        }
      }, 1000);
    };

    // Track the visit
    trackPageVisit();
  }, [location.pathname]); // Re-run when path changes

  // Only show the visible counter on admin login page
  if (!showCounter) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <a
        href="https://www.hitwebcounter.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <img
          src="https://hitwebcounter.com/counter/counter.php?page=21448874&style=0001&nbdigits=7&type=page&initCount=10230"
          title="Counters"
          alt="Counters"
          border="0"
          className="opacity-80 hover:opacity-100 transition-opacity"
        />
      </a>
    </div>
  );
}
