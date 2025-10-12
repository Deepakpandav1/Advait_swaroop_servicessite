import { useState } from "react";
import {
  Globe,
  MapPin,
  Calendar,
  Users,
  Clock,
  Star,
  Shield,
  Phone,
  Mail,
  CreditCard,
  Smartphone,
  Banknote,
  ArrowRight,
  CheckCircle,
  User,
  Heart,
  Zap,
  Wifi,
  Coffee,
  Snowflake,
  UserCheck,
  GraduationCap,
  FileText,
  Camera,
  Plane,
} from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";

export default function VisaServicesPage() {
  const [formData, setFormData] = useState({
    destination: "",
    visaType: "",
    purpose: "",
    duration: "",
    name: "",
    contact: "",
    email: "",
    passportNumber: "",
    message: "",
  });

  const visaTypes = [
    {
      id: "tourist",
      title: "Tourist Visa",
      description: "For leisure and sightseeing",
      icon: <Globe className="w-6 h-6" />,
      duration: "30-90 days",
      processingTime: "7-15 days",
    },
    {
      id: "business",
      title: "Business Visa",
      description: "For business meetings and conferences",
      icon: <User className="w-6 h-6" />,
      duration: "30-180 days",
      processingTime: "10-20 days",
    },
    {
      id: "student",
      title: "Student Visa",
      description: "For educational purposes",
      icon: <GraduationCap className="w-6 h-6" />,
      duration: "1-5 years",
      processingTime: "15-30 days",
    },
    {
      id: "work",
      title: "Work Visa",
      description: "For employment opportunities",
      icon: <Zap className="w-6 h-6" />,
      duration: "1-3 years",
      processingTime: "20-45 days",
    },
    {
      id: "transit",
      title: "Transit Visa",
      description: "For short stopovers",
      icon: <Plane className="w-6 h-6" />,
      duration: "1-7 days",
      processingTime: "3-7 days",
    },
    {
      id: "medical",
      title: "Medical Visa",
      description: "For medical treatment",
      icon: <Heart className="w-6 h-6" />,
      duration: "30-180 days",
      processingTime: "7-15 days",
    },
  ];

  const popularDestinations = [
    {
      country: "United States",
      flag: "🇺🇸",
      visaType: "B1/B2",
      duration: "10 years",
      price: "₹15,000",
    },
    {
      country: "United Kingdom",
      flag: "🇬🇧",
      visaType: "Standard",
      duration: "6 months",
      price: "₹12,000",
    },
    {
      country: "Canada",
      flag: "🇨🇦",
      visaType: "Visitor",
      duration: "6 months",
      price: "₹8,000",
    },
    {
      country: "Australia",
      flag: "🇦🇺",
      visaType: "Tourist",
      duration: "1 year",
      price: "₹10,000",
    },
    {
      country: "Germany",
      flag: "🇩🇪",
      visaType: "Schengen",
      duration: "90 days",
      price: "₹7,000",
    },
    {
      country: "France",
      flag: "🇫🇷",
      visaType: "Schengen",
      duration: "90 days",
      price: "₹7,000",
    },
    {
      country: "Japan",
      flag: "🇯🇵",
      visaType: "Tourist",
      duration: "90 days",
      price: "₹3,000",
    },
    {
      country: "Singapore",
      flag: "🇸🇬",
      visaType: "Tourist",
      duration: "30 days",
      price: "₹2,000",
    },
  ];

  const requiredDocuments = [
    {
      name: "Passport",
      description: "Valid passport with 6 months validity",
      icon: <FileText className="w-5 h-5" />,
    },
    {
      name: "Photographs",
      description: "Recent passport size photographs",
      icon: <Camera className="w-5 h-5" />,
    },
    {
      name: "Application Form",
      description: "Completed visa application form",
      icon: <FileText className="w-5 h-5" />,
    },
    {
      name: "Bank Statements",
      description: "Last 3-6 months bank statements",
      icon: <Banknote className="w-5 h-5" />,
    },
    {
      name: "Travel Insurance",
      description: "Valid travel insurance policy",
      icon: <Shield className="w-5 h-5" />,
    },
    {
      name: "Flight Tickets",
      description: "Confirmed flight bookings",
      icon: <Plane className="w-5 h-5" />,
    },
    {
      name: "Hotel Bookings",
      description: "Confirmed accommodation bookings",
      icon: <MapPin className="w-5 h-5" />,
    },
    {
      name: "Employment Letter",
      description: "Letter from employer (if applicable)",
      icon: <User className="w-5 h-5" />,
    },
  ];

  const processingSteps = [
    {
      step: 1,
      title: "Document Collection",
      description: "Submit all required documents",
      duration: "1-2 days",
      icon: <FileText className="w-6 h-6" />,
    },
    {
      step: 2,
      title: "Application Submission",
      description: "Submit application to embassy/consulate",
      duration: "1 day",
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      step: 3,
      title: "Biometric Collection",
      description: "Provide fingerprints and photograph",
      duration: "30 minutes",
      icon: <Camera className="w-6 h-6" />,
    },
    {
      step: 4,
      title: "Interview (if required)",
      description: "Attend visa interview if scheduled",
      duration: "15-30 minutes",
      icon: <User className="w-6 h-6" />,
    },
    {
      step: 5,
      title: "Processing",
      description: "Embassy processes your application",
      duration: "7-30 days",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      step: 6,
      title: "Visa Collection",
      description: "Collect your passport with visa",
      duration: "1 day",
      icon: <Star className="w-6 h-6" />,
    },
  ];

  const paymentMethods = [
    {
      name: "Credit Card",
      icon: <CreditCard className="w-6 h-6" />,
      color: "bg-blue-500",
    },
    {
      name: "Net Banking",
      icon: <Banknote className="w-6 h-6" />,
      color: "bg-green-500",
    },
    {
      name: "UPI",
      icon: <Smartphone className="w-6 h-6" />,
      color: "bg-purple-500",
    },
    {
      name: "NEFT/RTGS",
      icon: <Banknote className="w-6 h-6" />,
      color: "bg-orange-500",
    },
    {
      name: "Cash",
      icon: <Banknote className="w-6 h-6" />,
      color: "bg-gray-500",
    },
    {
      name: "EMI",
      icon: <CreditCard className="w-6 h-6" />,
      color: "bg-pink-500",
    },
    {
      name: "Pay Later",
      icon: <Clock className="w-6 h-6" />,
      color: "bg-indigo-500",
    },
  ];

  const whyChooseUs = [
    {
      title: "Expert Guidance",
      description: "Professional visa consultants with years of experience",
      icon: <User className="w-8 h-8" />,
    },
    {
      title: "High Success Rate",
      description: "95%+ visa approval rate with proper documentation",
      icon: <CheckCircle className="w-8 h-8" />,
    },
    {
      title: "Fast Processing",
      description: "Expedited processing for urgent applications",
      icon: <Zap className="w-8 h-8" />,
    },
    {
      title: "Document Assistance",
      description: "Complete help with document preparation and verification",
      icon: <FileText className="w-8 h-8" />,
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your queries",
      icon: <Phone className="w-8 h-8" />,
    },
    {
      title: "Transparent Pricing",
      description: "No hidden charges, all costs clearly mentioned upfront",
      icon: <Shield className="w-8 h-8" />,
    },
  ];

  const faqs = [
    {
      question: "How long does visa processing take?",
      answer:
        "Processing time varies by country and visa type. Tourist visas typically take 7-15 days, while work visas may take 20-45 days. We provide accurate timelines for each destination.",
    },
    {
      question: "What documents do I need for visa application?",
      answer:
        "Required documents vary by country and visa type. Generally, you need a valid passport, photographs, application form, bank statements, travel insurance, and supporting documents based on your purpose of visit.",
    },
    {
      question: "Can I apply for multiple country visas?",
      answer:
        "Yes, you can apply for visas to multiple countries. We can help you plan your itinerary and apply for visas in the correct sequence to maximize your travel opportunities.",
    },
    {
      question: "What if my visa application is rejected?",
      answer:
        "If your visa is rejected, we provide detailed feedback on the reasons and help you reapply with improved documentation. Our success rate is 95%+ with proper guidance.",
    },
    {
      question: "Do you provide travel insurance?",
      answer:
        "Yes, we provide comprehensive travel insurance policies that meet visa requirements for most countries. Our insurance covers medical emergencies, trip cancellation, and other travel-related risks.",
    },
    {
      question: "Can you help with visa interview preparation?",
      answer:
        "Absolutely! We provide mock interviews, sample questions, and tips to help you prepare for visa interviews. Our experts guide you through the entire process.",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Breadcrumb
          items={[
            { name: "Services", href: "/services" },
            { name: "Travel", href: "/travel" },
            { name: "Visa Services", href: "/travel/visa" },
          ]}
        />
      </div>
      <div className="pt-24 min-h-screen bg-white [background-image:radial-gradient(#e6e7e9_10px,transparent_10px)] [background-size:16px_16px] bg-fixed font-roboto">
        {/* Hero Section */}

        {/* Booking Form Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold text-[#0b234a] mb-8 text-center">
                Apply for Visa
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Visa Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#0b234a] mb-2">
                      Destination Country{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <MapPin className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        name="destination"
                        value={formData.destination}
                        onChange={handleInputChange}
                        placeholder="Enter destination country"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E6B837] focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0b234a] mb-2">
                      Visa Type <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Globe className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <select
                        name="visaType"
                        value={formData.visaType}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E6B837] focus:border-transparent"
                        required
                      >
                        <option value="">Select Visa Type</option>
                        <option value="tourist">Tourist Visa</option>
                        <option value="business">Business Visa</option>
                        <option value="student">Student Visa</option>
                        <option value="work">Work Visa</option>
                        <option value="transit">Transit Visa</option>
                        <option value="medical">Medical Visa</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#0b234a] mb-2">
                      Purpose of Visit <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <select
                        name="purpose"
                        value={formData.purpose}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E6B837] focus:border-transparent"
                        required
                      >
                        <option value="">Select Purpose</option>
                        <option value="tourism">Tourism</option>
                        <option value="business">Business</option>
                        <option value="education">Education</option>
                        <option value="employment">Employment</option>
                        <option value="medical">Medical Treatment</option>
                        <option value="family">Family Visit</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0b234a] mb-2">
                      Duration of Stay <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Clock className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <select
                        name="duration"
                        value={formData.duration}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E6B837] focus:border-transparent"
                        required
                      >
                        <option value="">Select Duration</option>
                        <option value="7days">7 days</option>
                        <option value="15days">15 days</option>
                        <option value="30days">30 days</option>
                        <option value="90days">90 days</option>
                        <option value="6months">6 months</option>
                        <option value="1year">1 year</option>
                        <option value="multiple">Multiple Entry</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="border-t pt-6">
                  <h3 className="text-xl font-bold text-[#0b234a] mb-4">
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#0b234a] mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E6B837] focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#0b234a] mb-2">
                        Contact Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="contact"
                        value={formData.contact}
                        onChange={handleInputChange}
                        placeholder="Enter your mobile number"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E6B837] focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#0b234a] mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email address"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E6B837] focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#0b234a] mb-2">
                        Passport Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="passportNumber"
                        value={formData.passportNumber}
                        onChange={handleInputChange}
                        placeholder="Enter your passport number"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E6B837] focus:border-transparent"
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-[#0b234a] mb-2">
                        Additional Information
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Any additional information or special requirements"
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E6B837] focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-[#E6B837] text-[#0b234a] px-12 py-4 rounded-full font-bold text-lg hover:bg-[#d4a94b] transition-colors shadow-lg"
                  >
                    Apply for Visa
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Visa Types */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0b234a] mb-4">
                Types of Visas
              </h2>
              <p className="text-xl text-gray-600">
                Choose the right visa type for your travel purpose
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visaTypes.map((visa, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-[#E6B837] rounded-full flex items-center justify-center text-[#0b234a]">
                      {visa.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0b234a]">
                        {visa.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {visa.description}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Duration:</span>
                      <span className="text-sm font-semibold text-[#0b234a]">
                        {visa.duration}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Processing:</span>
                      <span className="text-sm font-semibold text-[#E6B837]">
                        {visa.processingTime}
                      </span>
                    </div>
                  </div>
                  <button className="w-full bg-[#0b234a] text-white py-2 rounded-lg font-semibold hover:bg-[#1e3a5f] transition-colors">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Destinations */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0b234a] mb-4">
                Popular Destinations
              </h2>
              <p className="text-xl text-gray-600">
                Most requested visa destinations with competitive pricing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularDestinations.map((destination, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">{destination.flag}</div>
                      <div>
                        <h3 className="font-bold text-[#0b234a]">
                          {destination.country}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {destination.visaType}
                        </p>
                        <p className="text-xs text-[#E6B837] font-semibold">
                          {destination.duration}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-2xl font-bold text-[#E6B837]">
                        {destination.price}
                      </p>
                      <p className="text-sm text-gray-500">Starting from</p>
                    </div>
                  </div>
                  <button className="w-full bg-[#0b234a] text-white py-2 rounded-lg font-semibold hover:bg-[#1e3a5f] transition-colors">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Required Documents */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0b234a] mb-4">
                Required Documents
              </h2>
              <p className="text-xl text-gray-600">
                Essential documents for visa application
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {requiredDocuments.map((doc, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
                >
                  <div className="w-16 h-16 bg-[#E6B837] rounded-full flex items-center justify-center mx-auto mb-4 text-[#0b234a]">
                    {doc.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#0b234a] mb-2">
                    {doc.name}
                  </h3>
                  <p className="text-sm text-gray-600">{doc.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Processing Steps */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0b234a] mb-4">
                Visa Processing Steps
              </h2>
              <p className="text-xl text-gray-600">
                Simple and transparent visa processing process
              </p>
            </div>

            <div className="space-y-8">
              {processingSteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-[#E6B837] rounded-full flex items-center justify-center text-[#0b234a] font-bold text-xl">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-4">
                        <h3 className="text-2xl font-bold text-[#0b234a]">
                          {step.title}
                        </h3>
                        <span className="bg-[#E6B837] text-[#0b234a] px-3 py-1 rounded-full text-sm font-semibold">
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      <div className="flex items-center space-x-2">
                        {step.icon}
                        <span className="text-sm text-gray-500">
                          Step {step.step}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0b234a] mb-4">
                Payment Methods
              </h2>
              <p className="text-xl text-gray-600">
                We accept all major payment methods for your convenience
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {paymentMethods.map((method, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
                >
                  <div
                    className={`w-12 h-12 ${method.color} rounded-full flex items-center justify-center mx-auto mb-3 text-white`}
                  >
                    {method.icon}
                  </div>
                  <p className="text-sm font-semibold text-[#0b234a]">
                    {method.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0b234a] mb-4">
                Why Choose Our Visa Services?
              </h2>
              <p className="text-xl text-gray-600">
                Professional visa assistance with high success rate
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((feature, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="w-16 h-16 bg-[#E6B837] rounded-full flex items-center justify-center mx-auto mb-4 text-[#0b234a]">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0b234a] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0b234a] mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about visa application and processing
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                >
                  <h3 className="text-lg font-bold text-[#0b234a] mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl p-12 shadow-xl border-2 border-[#E6B837]">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-[#0b234a] mb-6">
                  Need Help with Visa Application?
                </h2>
                <img
                  className="h-2 rounded-3xl mx-auto mb-8"
                  src="/gline.png"
                  alt=""
                />
                <p className="text-xl text-gray-600 mb-8">
                  Our visa experts are here to help you with your visa
                  application. Contact us for personalized assistance and expert
                  guidance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-[#E6B837] to-[#d4a94b] text-[#0b234a] px-8 py-4 rounded-full font-bold text-lg hover:from-[#d4a94b] hover:to-[#E6B837] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Contact Visa Expert
                  </a>
                  <a
                    href="tel:+919780494854"
                    className="border-2 border-[#0b234a] text-[#0b234a] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#0b234a] hover:text-white transition-all duration-300"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
