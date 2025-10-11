import React from "react";
import { Link } from "@tanstack/react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import {
  Plane,
  GraduationCap,
  Shield,
  Users,
  Building,
  CreditCard,
} from "lucide-react";

interface ServiceCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  color: string;
  subServices: string[];
}

export default function ServicesPage() {
  const handleServiceClick = (serviceId: string, href: string) => {
    console.log(`Navigating to ${serviceId}: ${href}`);
    // The Link component will handle the navigation
  };

  const services: ServiceCard[] = [
    {
      id: "travel",
      title: "Travel Services",
      description:
        "Complete travel solutions including flights, hotels, tours, and visa services.",
      icon: <Plane className="w-8 h-8" />,
      href: "/travel",
      color: "from-blue-500 to-cyan-500",
      subServices: [
        "Air Tickets",
        "Bus Booking",
        "Rail Tickets",
        "Visa Services",
      ],
    },
    {
      id: "education",
      title: "Education Services",
      description:
        "Educational guidance, admissions, counselling, and scholarship assistance.",
      icon: <GraduationCap className="w-8 h-8" />,
      href: "/education",
      color: "from-purple-500 to-pink-500",
      subServices: [
        "Admissions",
        "Counselling",
        "Scholarships",
        "Career Guidance",
      ],
    },
    {
      id: "insurance",
      title: "Insurance Services",
      description:
        "Comprehensive insurance coverage for health, travel, and vehicles.",
      icon: <Shield className="w-8 h-8" />,
      href: "/insurance",
      color: "from-green-500 to-emerald-500",
      subServices: [
        "Health Insurance",
        "Travel Insurance",
        "Vehicle Insurance",
        "Life Insurance",
      ],
    },
    {
      id: "g2c",
      title: "Government to Citizen (G2C)",
      description:
        "Government services facilitation including PMJAY, E-Shram, and Aadhaar services.",
      icon: <Building className="w-8 h-8" />,
      href: "/g2c",
      color: "from-orange-500 to-red-500",
      subServices: ["PMJAY", "E-Shram", "Aadhaar Card", "PAN Card", "Passport"],
    },
    {
      id: "b2c",
      title: "Business to Citizen (B2C)",
      description:
        "Personal services including DSC, recharges, and digital solutions.",
      icon: <Users className="w-8 h-8" />,
      href: "/b2c",
      color: "from-indigo-500 to-blue-500",
      subServices: [
        "Digital Signature",
        "Mobile Recharge",
        "DTH Recharge",
        "Fastag",
      ],
    },
    {
      id: "financial",
      title: "Financial Inclusion",
      description:
        "Banking and financial services to promote financial inclusion.",
      icon: <CreditCard className="w-8 h-8" />,
      href: "/financial",
      color: "from-yellow-500 to-orange-500",
      subServices: [
        "Banking Services",
        "Loan Assistance",
        "Investment Guidance",
        "Financial Planning",
      ],
    },
  ];

  return (
    <>
      <Header />
      <div className="pt-24 min-h-screen bg-white [background-image:radial-gradient(#e6e7e9_10px,transparent_10px)] [background-size:16px_16px] bg-fixed font-roboto">
        {/* Header Section */}
        <div className="max-w-6xl mx-auto px-6 py-12 text-center">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center mb-6">
            <Breadcrumb items={[{ name: "Services", href: "/services" }]} />
          </div>

          <h1 className="text-5xl font-bold text-[#0b234a] mb-6">
            Our Services
          </h1>
          <img
            className="h-2 rounded-3xl mx-auto mb-8"
            src="/gline.png"
            alt=""
          />
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Comprehensive service offerings designed to meet all your needs.
            From travel and education to government services and financial
            solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-6 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                to={service.href}
                className="group block cursor-pointer"
                onClick={() => handleServiceClick(service.id, service.href)}
              >
                <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-100 hover:border-[#E6B837] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer">
                  {/* Service Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {service.icon}
                  </div>

                  {/* Service Title */}
                  <h3 className="text-2xl font-bold text-[#0b234a] mb-4 group-hover:text-[#E6B837] transition-colors">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Sub Services */}
                  <div className="space-y-2 mb-6">
                    <h4 className="text-sm font-semibold text-[#0b234a] uppercase tracking-wide">
                      Available Services:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.subServices.map((subService, index) => (
                        <span
                          key={index}
                          className="inline-block bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full hover:bg-[#E6B837] hover:text-white transition-colors"
                        >
                          {subService}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Learn More Button */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-[#E6B837] font-semibold group-hover:text-[#0b234a] transition-colors">
                      <span>Learn More</span>
                      <svg
                        className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                    <div className="text-xs text-gray-400 group-hover:text-[#E6B837] transition-colors">
                      Click to explore
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="max-w-4xl mx-auto px-6 pb-12">
          <div className="bg-gradient-to-r from-[#0b234a] to-[#1a3a5c] rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Need Help Choosing the Right Service?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Our team is here to guide you to the perfect solution for your
              needs.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-[#E6B837] to-[#d4a94b] text-[#0b234a] font-bold px-8 py-4 rounded-full hover:from-[#d4a94b] hover:to-[#E6B837] transition-all duration-300 transform hover:scale-105"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
