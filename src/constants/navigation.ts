export interface NavigationItem {
  name: string;
  href?: string;
  children?: NavigationItem[];
}

export const navigationData: NavigationItem[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Services", href: "/services" ,
    children: [
      {
        name: "Travel",
        href: "/travel",
        children: [
          { name: "Air Ticket", href: "/travel/air-ticket" },
          { name: "Bus Booking", href: "/travel/bus-booking" },
          { name: "Rail Ticket Booking", href: "/travel/rail-ticket" },
          { name: "Visa Services", href: "/travel/visa" },
        ],
      },
      {
        name: "Government to Citizen",
        href: "/g2c",
      },
      {
        name: "B2C",
        href: "/b2c",
      },
      { name: "Education", href: "/education" },
      { name: "Financial Inclusion", href: "/financial-inclusion" },
    ],
  },
  { name: "Partners", href: "/partners" },
  {
    name: "Resources",
    children: [
      { name: "Implementation Guidelines", href: "/resources/implementation" },
      { name: "Right to Information", href: "/resources/rti" },
      { name: "FAQ's", href: "/resources/faq" },
      { name: "RFP (Request for Proposal)", href: "/resources/rfp" },
    ],
  },
  { name: "About Us", href: "/about" },
  { name: "Careers", href: "/careers" },
];
