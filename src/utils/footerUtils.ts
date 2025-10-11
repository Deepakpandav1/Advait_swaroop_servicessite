import type { NavigationItem } from "../constants/navigation";

export interface FooterLink {
  name: string;
  href: string;
}

// Extract all navigation links recursively
export const extractAllLinks = (items: NavigationItem[]): FooterLink[] => {
  const links: FooterLink[] = [];
  
  items.forEach((item) => {
    if (item.href) {
      links.push({
        name: item.name,
        href: item.href
      });
    }
    
    if (item.children) {
      links.push(...extractAllLinks(item.children));
    }
  });
  
  return links;
};

// Get main service categories for footer
export const getMainServices = (): FooterLink[] => {
  return [
    { name: "Travel Services", href: "/travel" },
    { name: "Government Services", href: "/g2c" },
    { name: "Business Services", href: "/b2c" },
    { name: "Education", href: "/education" },
    { name: "Insurance", href: "/insurance" },
    { name: "Financial Inclusion", href: "/financial-inclusion" }
  ];
};

// Get company links
export const getCompanyLinks = (): FooterLink[] => {
  return [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" },
    { name: "Partners", href: "/partners" },
    { name: "Resources", href: "/resources" }
  ];
};
