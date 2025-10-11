import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { getMainServices, getCompanyLinks } from "../utils/footerUtils";
import { useVisitorCounter } from "../hooks/useVisitorCounter";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const visitorCount = useVisitorCounter();

  const mainServices = getMainServices();
  const companyLinks = getCompanyLinks();

  return (
    <footer className="bg-gradient-to-br from-[#0b234a] via-[#1e3a5f] to-[#0b234a] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23E6B837%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <img
                  src="/logo.png"
                  alt="Advait Swaroop Services"
                  className="h-auto w-96"
                />
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed text-justify">
                Your trusted partner for comprehensive service solutions across
                education, travel, insurance, and government facilitation since
                2018.
              </p>

              {/* Contact Information */}
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">
                Our Services
              </h3>
              <ul className="space-y-3">
                {mainServices.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-[#E6B837] transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-[#E6B837] rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-[#E6B837] transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-[#E6B837] rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter & Social */}
            <div>
              {/* Social Media */}
              <div>
                <h4 className="text-white font-semibold mb-3">Follow Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-[#E6B837] rounded-full flex items-center justify-center hover:bg-[#d4a94b] transition-colors"
                  >
                    <span className="text-[#0b234a] font-bold text-sm">f</span>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-[#E6B837] rounded-full flex items-center justify-center hover:bg-[#d4a94b] transition-colors"
                  >
                    <span className="text-[#0b234a] font-bold text-sm">t</span>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-[#E6B837] rounded-full flex items-center justify-center hover:bg-[#d4a94b] transition-colors"
                  >
                    <span className="text-[#0b234a] font-bold text-sm">in</span>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-[#E6B837] rounded-full flex items-center justify-center hover:bg-[#d4a94b] transition-colors"
                  >
                    <span className="text-[#0b234a] font-bold text-sm">ig</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-gray-300 text-sm">
                  © {currentYear} Advait Swaroop Services. All rights reserved.
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  Designed & Managed by{" "}
                  <Link
                    to="/admin/login"
                    className="text-[#E6B837] font-semibold hover:text-[#d4a94b] transition-colors cursor-pointer"
                  >
                    Advait Swaroop Services
                  </Link>
                </p>
              </div>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#E6B837] transition-colors text-sm"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#E6B837] transition-colors text-sm"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#E6B837] transition-colors text-sm"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
