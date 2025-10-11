import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import { X, Send, User, Phone, Mail, MessageSquare } from "lucide-react";

interface FormData {
  name: string;
  mobile: string;
  email: string;
  query: string;
}

interface FormErrors {
  name?: string;
  mobile?: string;
  email?: string;
  query?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    mobile: "",
    email: "",
    query: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [requestNumber, setRequestNumber] = useState("");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Mobile validation
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[0-9]{10}$/.test(formData.mobile.replace(/\D/g, ""))) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Query validation
    if (!formData.query.trim()) {
      newErrors.query = "Query is required";
    } else if (formData.query.trim().length < 10) {
      newErrors.query = "Query must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const generateRequestNumber = () => {
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.floor(Math.random() * 1000)
      .toString()
      .padStart(3, "0");
    return `AS${timestamp}${random}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Generate request number
      const requestNum = generateRequestNumber();
      setRequestNumber(requestNum);

      // Store contact query in localStorage for admin to check
      const query = {
        id: requestNum,
        type: "Contact Form",
        name: formData.name,
        phone: formData.mobile,
        email: formData.email,
        message: formData.query,
        timestamp: new Date().toISOString(),
        status: "Pending",
      };

      const existingQueries = JSON.parse(
        localStorage.getItem("contactQueries") || "[]"
      );
      existingQueries.push(query);
      localStorage.setItem("contactQueries", JSON.stringify(existingQueries));

      // Reset form
      setFormData({
        name: "",
        mobile: "",
        email: "",
        query: "",
      });

      // Show success popup
      setShowSuccessPopup(true);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeSuccessPopup = () => {
    setShowSuccessPopup(false);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeSuccessPopup();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      closeSuccessPopup();
    }
  };

  return (
    <>
      <Header />
      <div className="pt-24 min-h-screen bg-white [background-image:radial-gradient(#e6e7e9_10px,transparent_10px)] [background-size:16px_16px] bg-fixed font-roboto">
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center mb-8">
            <Breadcrumb items={[{ name: "Contact", href: "/contact" }]} />
          </div>

          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-[#0b234a] mb-6">
              Get in Touch
            </h1>
            <img
              className="h-2 rounded-3xl mx-auto mb-8"
              src="/gline.png"
              alt=""
            />
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have a question or need support? We're here to help! Send us your
              query and our team will get back to you as soon as possible.
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-[#E6B837]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-[#0b234a]"
                  >
                    <User className="inline w-4 h-4 mr-2" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E6B837] transition-colors ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name}</p>
                  )}
                </div>

                {/* Mobile Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="mobile"
                    className="block text-sm font-semibold text-[#0b234a]"
                  >
                    <Phone className="inline w-4 h-4 mr-2" />
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E6B837] transition-colors ${
                      errors.mobile ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your mobile number"
                  />
                  {errors.mobile && (
                    <p className="text-red-500 text-sm">{errors.mobile}</p>
                  )}
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-[#0b234a]"
                >
                  <Mail className="inline w-4 h-4 mr-2" />
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E6B837] transition-colors ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              {/* Query Field */}
              <div className="space-y-2">
                <label
                  htmlFor="query"
                  className="block text-sm font-semibold text-[#0b234a]"
                >
                  <MessageSquare className="inline w-4 h-4 mr-2" />
                  Your Query *
                </label>
                <textarea
                  id="query"
                  name="query"
                  value={formData.query}
                  onChange={handleInputChange}
                  rows={5}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E6B837] transition-colors resize-none ${
                    errors.query ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Please describe your query or question in detail..."
                />
                {errors.query && (
                  <p className="text-red-500 text-sm">{errors.query}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#E6B837] to-[#d4a94b] text-[#0b234a] font-bold py-4 px-8 rounded-full hover:from-[#d4a94b] hover:to-[#E6B837] transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#0b234a]"></div>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Submit Query</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Success Popup */}
      {showSuccessPopup && (
        <div
          className="fixed inset-0 bg-transparent flex items-center justify-center z-50"
          onClick={handleOverlayClick}
          onKeyDown={handleKeyDown}
          tabIndex={-1}
        >
          <div className="bg-white rounded-2xl p-8 max-w-md mx-4 shadow-2xl transform animate-in zoom-in-95 duration-300">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                <svg
                  className="h-8 w-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0b234a] mb-4">
                Thank You!
              </h3>
              <p className="text-gray-600 mb-4">
                Your query has been submitted successfully. Our team will
                contact you as soon as possible.
              </p>
              <div className="bg-[#0b234a] text-white rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-200 mb-1">
                  Your Request Number:
                </p>
                <p className="text-lg font-bold text-[#E6B837]">
                  {requestNumber}
                </p>
              </div>
              <p className="text-sm text-gray-600 mb-6">
                You will receive an SMS and email confirmation shortly. Please
                check your messages for updates.
              </p>
              <button
                onClick={closeSuccessPopup}
                className="bg-gradient-to-r from-[#E6B837] to-[#d4a94b] text-[#0b234a] font-bold py-3 px-6 rounded-full hover:from-[#d4a94b] hover:to-[#E6B837] transition-all duration-300 transform hover:scale-105"
              >
                Close
              </button>
            </div>
            <button
              onClick={closeSuccessPopup}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
