import React from "react";
import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav
      className={`flex items-center space-x-2 text-sm ${className}`}
      aria-label="Breadcrumb"
    >
      {/* Home Link */}
      <Link
        to="/"
        className="flex items-center text-[#E6B837] hover:text-[#0b234a] transition-colors duration-200"
      >
        <Home className="w-4 h-4 mr-1" />
        <span className="font-medium">Home</span>
      </Link>

      {/* Breadcrumb Items */}
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          {index === items.length - 1 ? (
            // Last item (current page) - not clickable
            <span className="text-[#0b234a] font-medium">{item.name}</span>
          ) : (
            // Clickable breadcrumb items
            <Link
              to={item.href}
              className="text-[#E6B837] hover:text-[#0b234a] transition-colors duration-200 font-medium"
            >
              {item.name}
            </Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
