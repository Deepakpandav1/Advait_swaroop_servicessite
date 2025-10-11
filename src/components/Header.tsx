import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown, Settings } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { navigationData } from "../constants/navigation";
import NotificationSystem from "./NotificationSystem";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredSubmenu, setHoveredSubmenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactPressed, setIsContactPressed] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle scroll animation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click outside dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
        setHoveredSubmenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDropdownEnter = (dropdownId: string) => {
    // Clear any existing timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setActiveDropdown(dropdownId);
  };

  const handleDropdownLeave = () => {
    // Add delay before closing
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setHoveredSubmenu(null);
    }, 100); // Reduced delay to 100ms
  };

  const handleSubmenuEnter = (submenuId: string) => {
    // Clear any existing timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setHoveredSubmenu(submenuId);
  };

  const handleSubmenuLeave = () => {
    // Add delay before closing
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredSubmenu(null);
    }, 150);
  };

  const handleDropdownToggle = (dropdownId: string) => {
    setActiveDropdown(activeDropdown === dropdownId ? null : dropdownId);
    setHoveredSubmenu(null);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full flex h-24 items-center justify-between border-b-2 border-[#0B2351] bg-[#0B2351] px-5 z-50 shadow-lg transition-all duration-300 ${
        isScrolled ? "shadow-2xl backdrop-blur-sm bg-[#0B2351]/95" : ""
      }`}
    >
      {/* Logo */}
      <div>
        <Link to="/">
          <img className="h-20" src="/logo.png" alt="logo" />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav
        className="hidden lg:flex items-center space-x-8 font-bold relative"
        ref={dropdownRef}
      >
        {navigationData.map((item, index) => (
          <div key={index} className="relative">
            {item.children ? (
              <div className="relative group">
                {item.href ? (
                  <Link
                    to={item.href}
                    className="text-white hover:text-[#d4a94b] flex items-center space-x-1 transition-colors duration-200"
                    onMouseEnter={() => handleDropdownEnter(`nav-${index}`)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === `nav-${index}`
                          ? "rotate-180"
                          : "rotate-0"
                      }`}
                    />
                  </Link>
                ) : (
                  <button
                    className="text-white hover:text-[#d4a94b] flex items-center space-x-1 transition-colors duration-200"
                    onMouseEnter={() => handleDropdownEnter(`nav-${index}`)}
                    onMouseLeave={handleDropdownLeave}
                    onClick={() => handleDropdownToggle(`nav-${index}`)}
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === `nav-${index}`
                          ? "rotate-180"
                          : "rotate-0"
                      }`}
                    />
                  </button>
                )}

                {activeDropdown === `nav-${index}` && (
                  <div
                    className="absolute top-full left-0 mt-2 bg-white border-2 border-[#d4a94b] rounded-lg shadow-lg min-w-64 z-50 animate-in slide-in-from-top-2 duration-200"
                    onMouseEnter={() => handleDropdownEnter(`nav-${index}`)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <div className="py-2">
                      {item.children.map((child, childIndex) => (
                        <div key={childIndex} className="relative">
                          {child.children ? (
                            <div
                              className="relative"
                              onMouseEnter={() =>
                                handleSubmenuEnter(`sub-${index}-${childIndex}`)
                              }
                              onMouseLeave={handleSubmenuLeave}
                            >
                              <button className="w-full px-4 py-2 text-[#0A2351] hover:bg-gradient-to-r from-[#b98a2c] to-[#d4a94b] hover:text-white font-bold flex justify-between items-center text-left transition-all duration-200">
                                <span>{child.name}</span>
                                <ChevronDown
                                  className={`w-4 h-4 transition-transform duration-200 ${
                                    hoveredSubmenu ===
                                    `sub-${index}-${childIndex}`
                                      ? "rotate-180"
                                      : "rotate-0"
                                  }`}
                                />
                              </button>

                              {hoveredSubmenu ===
                                `sub-${index}-${childIndex}` && (
                                <div className="absolute left-full top-0 mt-0 bg-white border-2 border-[#d4a94b] rounded-lg shadow-lg min-w-64 z-50 animate-in slide-in-from-left-2 duration-200">
                                  <div className="py-2">
                                    {child.children.map(
                                      (grandChild, grandChildIndex) => (
                                        <Link
                                          key={grandChildIndex}
                                          to={grandChild.href || "#"}
                                          className="block px-4 py-2 text-[#0A2351] hover:bg-gradient-to-r from-[#b98a2c] to-[#d4a94b] hover:text-white font-bold transition-all duration-200"
                                        >
                                          {grandChild.name}
                                        </Link>
                                      )
                                    )}
                                  </div>
                                </div>
                              )}
                            </div>
                          ) : (
                            <Link
                              to={child.href || "#"}
                              className="block px-4 py-2 text-[#0A2351] hover:bg-gradient-to-r from-[#b98a2c] to-[#d4a94b] hover:text-white font-bold transition-all duration-200"
                            >
                              {child.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to={item.href || "#"}
                className="text-white hover:text-[#d4a94b] transition-colors duration-200"
              >
                {item.name}
              </Link>
            )}
          </div>
        ))}
      </nav>

      {/* Contact Us Button */}
      <div className="hidden lg:block">
        <div
          className={`h-9 w-48 rounded-3xl bg-[url('/gline.png')] bg-cover bg-center text-[#0B2351] font-bold p-1.5 text-center transition-all duration-150 ${
            isContactPressed
              ? "scale-95 shadow-inner"
              : "hover:scale-105 shadow-lg"
          }`}
          onMouseDown={() => setIsContactPressed(true)}
          onMouseUp={() => setIsContactPressed(false)}
          onMouseLeave={() => setIsContactPressed(false)}
        >
          <Link to="/contact" className="block">
            Contact Us
          </Link>
        </div>
      </div>

      {/* Mobile menu button */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white hover:text-[#d4a94b] transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-24 left-0 w-full bg-[#0B2351] border-t border-[#d4a94b]">
          <div className="px-4 py-4 space-y-2">
            {navigationData.map((item, index) => (
              <div key={index}>
                {item.children ? (
                  <div>
                    {item.href ? (
                      <Link
                        to={item.href}
                        className="block w-full text-left text-white hover:text-[#d4a94b] font-bold py-2"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <button
                        className="block w-full text-left text-white hover:text-[#d4a94b] font-bold py-2"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </button>
                    )}
                    <div className="ml-4 space-y-1">
                      {item.children.map((child, childIndex) => (
                        <Link
                          key={childIndex}
                          to={child.href || "#"}
                          className="block text-gray-300 hover:text-[#d4a94b] py-1"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href || "#"}
                    className="block text-white hover:text-[#d4a94b] font-bold py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Link
                to="/contact"
                className="block bg-[#d4a94b] text-[#0B2351] font-bold px-4 py-2 rounded-lg text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
