import { useState } from "react";
import {
  Shield,
  Clock,
  CheckCircle,
  FileText,
  CreditCard,
  Smartphone,
  Wifi,
  Car,
  Phone,
  ArrowRight,
  Award,
  Lock,
  Upload,
  Eye,
  Search,
  ExternalLink,
  ChevronDown,
  Download,
  Smartphone as Mobile,
  Tv,
  Zap,
  Building,
  Globe,
  User,
  Mail,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import SEOHead from "../components/SEOHead";
import { createTicket } from "../utils/ticketManager";
import { pageSEOData } from "../utils/seoData";
import { useLocationTracking } from "../hooks/useLocationTracking";

export default function B2CPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Location tracking
  const {
    trackService,
    requestLocationPermission,
    requestNotificationPermission,
  } = useLocationTracking();

  const b2cServices = [
    {
      id: "dsc-signature",
      name: "Digital Signature Certificate - Signature",
      shortName: "DSC Signature",
      description:
        "Get your digital signature certificate for secure online transactions",
      fullDescription:
        "Digital Signature Certificate (DSC) for signature purposes enables secure digital signing of documents, forms, and transactions. It provides authentication, integrity, and non-repudiation for online activities.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-800",
      features: [
        "Secure digital signing of documents",
        "Legal validity under IT Act 2000",
        "Authentication and non-repudiation",
        "Compatible with government portals",
      ],
      eligibility: "Individuals, companies, and organizations",
      documents: ["Aadhaar Card", "PAN Card", "Address Proof", "Photo"],
      process: "Apply Online → Submit Documents → Verification → Get DSC",
      website: "https://www.digicert.com",
      logo: "🔐",
    },
    {
      id: "dsc-encryption",
      name: "Digital Signature Certificate - Encryption",
      shortName: "DSC Encryption",
      description: "Encryption certificate for secure data transmission",
      fullDescription:
        "DSC for encryption purposes provides secure data encryption and decryption capabilities. It ensures that sensitive information remains protected during transmission and storage.",
      icon: <Lock className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      textColor: "text-purple-800",
      features: [
        "Secure data encryption/decryption",
        "End-to-end data protection",
        "Compliance with security standards",
        "Advanced cryptographic algorithms",
      ],
      eligibility: "Businesses and organizations handling sensitive data",
      documents: [
        "Company Registration",
        "PAN Card",
        "Address Proof",
        "Authorization Letter",
      ],
      process:
        "Apply → Submit Documents → Technical Verification → Get Certificate",
      website: "https://www.verisign.com",
      logo: "🔒",
    },
    {
      id: "dsc-combos",
      name: "Digital Signature Certificate - Combos",
      shortName: "DSC Combos",
      description: "Combined signature and encryption certificates",
      fullDescription:
        "DSC Combos provide both signature and encryption capabilities in a single certificate. Ideal for businesses that need comprehensive digital security solutions.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      textColor: "text-green-800",
      features: [
        "Dual-purpose certificate",
        "Signature and encryption in one",
        "Cost-effective solution",
        "Simplified certificate management",
      ],
      eligibility: "Businesses requiring both signature and encryption",
      documents: [
        "Business Registration",
        "PAN Card",
        "Address Proof",
        "Technical Specifications",
      ],
      process:
        "Apply → Choose Combo → Submit Documents → Get Combined Certificate",
      website: "https://www.entrust.com",
      logo: "🛡️",
    },
    {
      id: "dsc-dgft",
      name: "Digital Signature Certificate - DGFT",
      shortName: "DSC DGFT",
      description:
        "Specialized DSC for DGFT (Directorate General of Foreign Trade) transactions",
      fullDescription:
        "DGFT-specific Digital Signature Certificate is required for all foreign trade transactions, import-export documentation, and DGFT portal activities.",
      icon: <Globe className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      textColor: "text-orange-800",
      features: [
        "DGFT portal compatibility",
        "Import-export documentation",
        "Foreign trade transactions",
        "Government compliance",
      ],
      eligibility: "Importers, exporters, and foreign trade businesses",
      documents: [
        "IEC Code",
        "PAN Card",
        "Business Registration",
        "Foreign Trade License",
      ],
      process: "Apply → Submit IEC → Verification → Get DGFT DSC",
      website: "https://dgft.gov.in",
      logo: "🌍",
    },
    {
      id: "mobile-recharge",
      name: "Mobile Recharge Services",
      shortName: "Mobile Recharge",
      description: "Recharge your mobile phone with all major operators",
      fullDescription:
        "Mobile recharge services for all major telecom operators including Airtel, Jio, Vi, BSNL, and others. Instant recharge with multiple payment options.",
      icon: <Mobile className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
      textColor: "text-pink-800",
      features: [
        "All major operators supported",
        "Instant recharge processing",
        "Multiple payment options",
        "Recharge history tracking",
      ],
      eligibility: "All mobile users with valid numbers",
      documents: ["Mobile Number", "Payment Method", "Email Address"],
      process: "Enter Number → Select Plan → Make Payment → Get Confirmation",
      website: "https://paytm.com",
      logo: "📱",
    },
    {
      id: "dth-recharge",
      name: "DTH Recharge Services",
      shortName: "DTH Recharge",
      description: "Recharge your DTH connection with all major providers",
      fullDescription:
        "DTH recharge services for Tata Sky, Airtel Digital TV, Dish TV, Sun Direct, and other DTH providers. Easy subscription management and channel packages.",
      icon: <Tv className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      textColor: "text-indigo-800",
      features: [
        "All DTH providers supported",
        "Channel package selection",
        "Subscription management",
        "Balance and validity checking",
      ],
      eligibility: "DTH subscribers with valid customer ID",
      documents: ["DTH Customer ID", "Payment Method", "Email Address"],
      process: "Enter Customer ID → Select Package → Make Payment → Activate",
      website: "https://www.tatasky.com",
      logo: "📺",
    },
    {
      id: "fastag-recharge",
      name: "FastTag Recharge Services",
      shortName: "FastTag Recharge",
      description: "Recharge your FastTag for seamless toll payments",
      fullDescription:
        "FastTag recharge services for all major banks and toll operators. Ensure smooth highway travel with sufficient FastTag balance.",
      icon: <Car className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      textColor: "text-yellow-800",
      features: [
        "All bank FastTags supported",
        "Instant balance top-up",
        "Transaction history",
        "Low balance alerts",
      ],
      eligibility: "FastTag holders with valid vehicle registration",
      documents: ["FastTag Number", "Vehicle Registration", "Payment Method"],
      process:
        "Enter FastTag → Select Amount → Make Payment → Get Confirmation",
      website: "https://www.npci.org.in",
      logo: "🚗",
    },
    {
      id: "broadband-recharge",
      name: "Broadband & Landline Recharge",
      shortName: "Broadband Recharge",
      description: "Recharge your broadband and landline connections",
      fullDescription:
        "Broadband and landline recharge services for BSNL, Airtel, Jio Fiber, and other ISPs. Manage your internet and phone connections easily.",
      icon: <Wifi className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
      textColor: "text-teal-800",
      features: [
        "All major ISPs supported",
        "Internet and phone recharges",
        "Plan selection and upgrades",
        "Usage monitoring",
      ],
      eligibility: "Broadband and landline subscribers",
      documents: ["Customer ID", "Phone Number", "Payment Method"],
      process: "Enter Customer ID → Select Plan → Make Payment → Activate",
      website: "https://www.bsnl.co.in",
      logo: "🌐",
    },
    {
      id: "wes",
      name: "WES (World Education Services)",
      shortName: "WES",
      description:
        "Educational credential evaluation and verification services",
      fullDescription:
        "WES provides credential evaluation services for international education, helping students and professionals get their foreign degrees recognized globally.",
      icon: <Building className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      bgColor: "bg-violet-50",
      borderColor: "border-violet-200",
      textColor: "text-violet-800",
      features: [
        "International credential evaluation",
        "Degree verification services",
        "Global recognition",
        "Professional assessment",
      ],
      eligibility: "Students and professionals with foreign degrees",
      documents: [
        "Original Degree Certificate",
        "Transcripts",
        "Identity Proof",
        "Passport Copy",
      ],
      process: "Apply Online → Submit Documents → Evaluation → Get Report",
      website: "https://www.wes.org",
      logo: "🎓",
    },
  ];

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Reliable",
      description: "All services are secure and government-compliant",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Fast Processing",
      description: "Quick and efficient service delivery",
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Data Protection",
      description: "Your personal information is fully protected",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Trusted Service",
      description: "Reliable services trusted by millions",
    },
  ];

  const stats = [
    { number: "25+", label: "B2C Services", color: "text-[#0b234a]" },
    { number: "5M+", label: "Customers Served", color: "text-[#E6B837]" },
    { number: "99.9%", label: "Success Rate", color: "text-[#0b234a]" },
    { number: "24/7", label: "Customer Support", color: "text-[#E6B837]" },
  ];

  const filteredServices = b2cServices.filter(
    (service) =>
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create ticket
      const ticket = createTicket({
        type: "B2C",
        service: formData.service,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        status: "New",
        priority: "Medium",
        source: "B2C Form",
      });

      console.log("Ticket created:", ticket);

      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
      });

      setSubmitSuccess(true);

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Error creating ticket:", error);
      alert("Failed to submit request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEOHead
        title={pageSEOData.b2c.title}
        description={pageSEOData.b2c.description}
        keywords={pageSEOData.b2c.keywords}
        canonicalUrl="https://www.advaitswaroopservices.com/b2c"
      />
      <Header />
      <div className="pt-24 min-h-screen bg-white [background-image:radial-gradient(#e6e7e9_10px,transparent_10px)] [background-size:16px_16px] bg-fixed font-roboto">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumb
            items={[
              { name: "Services", href: "/services" },
              { name: "B2C Services", href: "/b2c" },
            ]}
          />
        </div>

        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl lg:text-6xl font-bold text-[#0b234a] mb-6">
                Business to Citizen
                <span className="block text-[#E6B837]">Services</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Comprehensive business-to-consumer services for all your digital
                needs. From digital signatures to recharges, we provide secure
                and reliable solutions.
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search B2C services..."
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      // Track search with location
                      if (e.target.value.length > 2) {
                        trackService("B2C", "Search", e.target.value);
                      }
                    }}
                    className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b234a] focus:border-transparent text-lg"
                  />
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                      {stat.number}
                    </div>
                    <div className="text-sm font-semibold text-gray-700">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0b234a] to-[#1e3a5f]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Why Choose Our B2C Services?
              </h2>
              <p className="text-xl text-gray-300">
                Professional solutions for all your business and personal needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white rounded-2xl shadow-lg"
                >
                  <div className="w-16 h-16 bg-[#E6B837] rounded-full flex items-center justify-center mx-auto mb-4 text-[#0b234a]">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0b234a] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0b234a] mb-4">
                Available B2C Services
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive list of business-to-consumer services we provide
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className={`${service.bgColor} ${service.borderColor} border-2 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer`}
                  onClick={() => {
                    setSelectedService(
                      selectedService === service.id ? null : service.id
                    );
                    // Track service selection with location
                    if (selectedService !== service.id) {
                      trackService(
                        "B2C",
                        service.name,
                        `Selected ${service.name} service`
                      );
                    }
                  }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center text-white text-2xl`}
                      >
                        {service.logo}
                      </div>
                      <div>
                        <h3
                          className={`text-xl font-bold ${service.textColor} mb-1`}
                        >
                          {service.shortName}
                        </h3>
                        <p className="text-sm text-gray-600">{service.name}</p>
                      </div>
                    </div>
                    <ArrowRight
                      className={`w-6 h-6 ${
                        service.textColor
                      } transform transition-transform ${
                        selectedService === service.id ? "rotate-90" : ""
                      }`}
                    />
                  </div>

                  <p className={`${service.textColor} mb-6`}>
                    {service.description}
                  </p>

                  {selectedService === service.id && (
                    <div className="space-y-6 animate-fadeIn">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Key Features:
                        </h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, index) => (
                            <li
                              key={index}
                              className="flex items-center text-sm text-gray-600"
                            >
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Eligibility:
                        </h4>
                        <p className="text-sm text-gray-600">
                          {service.eligibility}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Required Documents:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {service.documents.map((doc, index) => (
                            <span
                              key={index}
                              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                            >
                              {doc}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Process:
                        </h4>
                        <p className="text-sm text-gray-600">
                          {service.process}
                        </p>
                      </div>

                      <div className="flex space-x-4">
                        <a
                          href={service.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center bg-[#0b234a] text-white px-4 py-2 rounded-lg hover:bg-[#1e3a5f] transition-colors"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Official Website
                        </a>
                        <button className="flex items-center bg-[#E6B837] text-[#0b234a] px-4 py-2 rounded-lg hover:bg-[#d4a94b] transition-colors font-semibold">
                          Get Service
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0b234a] mb-4">
                How It Works
              </h2>
              <p className="text-xl text-gray-600">
                Simple steps to access B2C services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Choose Service",
                  description:
                    "Select the B2C service you need from our comprehensive list",
                  icon: <Search className="w-8 h-8" />,
                },
                {
                  step: "2",
                  title: "Provide Details",
                  description: "Fill in the required information and documents",
                  icon: <FileText className="w-8 h-8" />,
                },
                {
                  step: "3",
                  title: "Make Payment",
                  description: "Complete the payment through secure channels",
                  icon: <CreditCard className="w-8 h-8" />,
                },
                {
                  step: "4",
                  title: "Get Service",
                  description:
                    "Receive your service or certificate as per the process",
                  icon: <CheckCircle className="w-8 h-8" />,
                },
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-[#E6B837] rounded-full flex items-center justify-center mx-auto mb-4 text-[#0b234a]">
                    {step.icon}
                  </div>
                  <div className="w-8 h-8 bg-[#0b234a] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-[#0b234a] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Request Form Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 mb-8 relative overflow-hidden bg-gray-50">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#E6B837] rounded-full opacity-10 animate-pulse"></div>
            <div
              className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#E6B837] rounded-full opacity-10 animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-[#E6B837] rounded-full opacity-5 animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>

          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#0b234a] mb-6 animate-fadeIn">
                Need Help with B2C Services?
              </h2>
              <p
                className="text-xl text-gray-600 mb-8 animate-fadeIn"
                style={{ animationDelay: "0.2s" }}
              >
                Get professional assistance for all your business-to-consumer
                service needs
              </p>

              {/* Trust Indicators */}
              <div
                className="flex flex-wrap justify-center gap-6 mb-8 animate-fadeIn"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="flex items-center space-x-2 bg-white shadow-lg rounded-full px-4 py-2">
                  <Shield className="w-5 h-5 text-[#E6B837]" />
                  <span className="text-[#0b234a] text-sm font-medium">
                    100% Secure
                  </span>
                </div>
                <div className="flex items-center space-x-2 bg-white shadow-lg rounded-full px-4 py-2">
                  <Clock className="w-5 h-5 text-[#E6B837]" />
                  <span className="text-[#0b234a] text-sm font-medium">
                    Quick Response
                  </span>
                </div>
                <div className="flex items-center space-x-2 bg-white shadow-lg rounded-full px-4 py-2">
                  <Award className="w-5 h-5 text-[#E6B837]" />
                  <span className="text-[#0b234a] text-sm font-medium">
                    Expert Guidance
                  </span>
                </div>
              </div>
            </div>

            {/* Professional Request Form */}
            <div
              className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 animate-fadeIn"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-[#0b234a] to-[#1e3a5f] rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0b234a] mb-2">
                  Request Free Consultation
                </h3>
                <p className="text-gray-600">
                  Fill out the form below and our experts will get back to you
                  within 24 hours
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-semibold text-[#0b234a] mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0b234a] focus:border-[#0b234a] transition-all duration-300 group-hover:border-gray-300"
                        required
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-semibold text-[#0b234a] mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0b234a] focus:border-[#0b234a] transition-all duration-300 group-hover:border-gray-300"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-[#0b234a] mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0b234a] focus:border-[#0b234a] transition-all duration-300 group-hover:border-gray-300"
                      required
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-[#0b234a] mb-2">
                    Select B2C Service *
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0b234a] focus:border-[#0b234a] transition-all duration-300 group-hover:border-gray-300 appearance-none bg-white"
                      required
                    >
                      <option value="">
                        Choose a service you need help with
                      </option>
                      {b2cServices.map((service) => (
                        <option key={service.id} value={service.id}>
                          {service.name}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-[#0b234a] mb-2">
                    Tell us about your requirements
                  </label>
                  <textarea
                    placeholder="Describe your specific needs, any questions you have, or the assistance you require..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0b234a] focus:border-[#0b234a] transition-all duration-300 group-hover:border-gray-300 resize-none"
                    required
                  />
                </div>

                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="terms"
                    className="w-4 h-4 text-[#0b234a] border-gray-300 rounded focus:ring-[#0b234a]"
                    required
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I agree to the{" "}
                    <a href="#" className="text-[#0b234a] hover:underline">
                      terms and conditions
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-[#0b234a] hover:underline">
                      privacy policy
                    </a>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#0b234a] to-[#1e3a5f] text-white py-4 rounded-xl font-bold text-lg hover:from-[#1e3a5f] hover:to-[#0b234a] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-2 group disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Request</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>

              {/* Success Message */}
              {submitSuccess && (
                <div
                  className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl text-center animate-fadeIn"
                  id="success-message"
                >
                  <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <h4 className="font-semibold text-green-800 mb-1">
                    Request Submitted Successfully!
                  </h4>
                  <p className="text-green-600 text-sm">
                    We'll get back to you within 24 hours.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
