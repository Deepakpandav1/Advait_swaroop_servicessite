import { useState } from "react";
import {
  Shield,
  Clock,
  CheckCircle,
  FileText,
  CreditCard,
  Globe,
  Heart,
  Building,
  User,
  Phone,
  Mail,
  ArrowRight,
  Award,
  Lock,
  Upload,
  Eye,
  Search,
  ExternalLink,
  ChevronDown,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import SEOHead from "../components/SEOHead";
import { createTicket } from "../utils/ticketManager";
import { pageSEOData } from "../utils/seoData";
import { useLocationTracking } from "../hooks/useLocationTracking";

export default function G2CPage() {
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

  const g2cServices = [
    {
      id: "pmjay",
      name: "PMJAY - Ayushman Bharat",
      shortName: "PMJAY",
      description:
        "Access healthcare benefits under the Ayushman Bharat scheme",
      fullDescription:
        "Pradhan Mantri Jan Arogya Yojana (PMJAY) provides health insurance coverage of ₹5 lakh per family per year for secondary and tertiary care hospitalization to over 10.74 crore poor and vulnerable families.",
      icon: <Heart className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      textColor: "text-red-800",
      features: [
        "Health insurance coverage up to ₹5 lakh per family",
        "Coverage for secondary and tertiary care",
        "Cashless treatment at empaneled hospitals",
        "No age limit or pre-existing condition exclusions",
      ],
      eligibility:
        "Families listed in SECC database, RSBY beneficiaries, and other vulnerable groups",
      documents: [
        "Aadhaar Card",
        "Ration Card",
        "Income Certificate",
        "Family Photo",
      ],
      process:
        "Register → Verify Documents → Get Golden Card → Avail Treatment",
      website: "https://pmjay.gov.in",
      logo: "🏥",
    },
    {
      id: "eshram",
      name: "E-Shram Card",
      shortName: "E-Shram",
      description:
        "Register for the E-Shram card and access social security benefits",
      fullDescription:
        "E-Shram is a national database of unorganized workers to provide them with social security benefits including accident insurance, pension, and other welfare schemes.",
      icon: <User className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-800",
      features: [
        "Universal Account Number (UAN) for workers",
        "Accident insurance coverage of ₹2 lakh",
        "Pension benefits under PM-SYM",
        "Access to various government schemes",
      ],
      eligibility:
        "Unorganized workers aged 16-59 years with valid mobile number",
      documents: [
        "Aadhaar Card",
        "Bank Account Details",
        "Mobile Number",
        "Photo",
      ],
      process: "Register → Verify Details → Get E-Shram Card → Access Benefits",
      website: "https://eshram.gov.in",
      logo: "🆔",
    },
    {
      id: "aadhaar",
      name: "Aadhaar Card Services",
      shortName: "Aadhaar",
      description:
        "Apply for new Aadhaar card, update details, or download e-Aadhaar",
      fullDescription:
        "Aadhaar is a 12-digit unique identity number issued by UIDAI to all residents of India. It serves as proof of identity and address for various government and private services.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      textColor: "text-green-800",
      features: [
        "12-digit unique identity number",
        "Biometric authentication",
        "Proof of identity and address",
        "Required for various government services",
      ],
      eligibility: "All residents of India (citizens and non-citizens)",
      documents: [
        "Birth Certificate",
        "Address Proof",
        "Identity Proof",
        "Photo",
      ],
      process:
        "Book Appointment → Visit Center → Biometric Capture → Get Aadhaar",
      website: "https://uidai.gov.in",
      logo: "🆔",
    },
    {
      id: "pan",
      name: "PAN Card Services",
      shortName: "PAN Card",
      description: "Apply for new PAN card or update existing PAN details",
      fullDescription:
        "Permanent Account Number (PAN) is a 10-character alphanumeric identifier issued by Income Tax Department. It's mandatory for financial transactions and tax purposes.",
      icon: <FileText className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      textColor: "text-purple-800",
      features: [
        "10-character alphanumeric identifier",
        "Required for financial transactions",
        "Mandatory for tax filing",
        "Valid across India",
      ],
      eligibility: "Indian citizens, NRIs, and foreign nationals",
      documents: ["Aadhaar Card", "Address Proof", "Identity Proof", "Photo"],
      process: "Apply Online → Upload Documents → Pay Fee → Get PAN Card",
      website: "https://incometax.gov.in",
      logo: "📄",
    },
    {
      id: "jeevan-pramaan",
      name: "Jeevan Pramaan",
      shortName: "Jeevan Pramaan",
      description: "Digital life certificate for pensioners",
      fullDescription:
        "Jeevan Pramaan is a digital life certificate for pensioners that eliminates the need for physical presence at pension disbursing offices. It uses Aadhaar-based biometric authentication.",
      icon: <Building className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      textColor: "text-orange-800",
      features: [
        "Digital life certificate",
        "Aadhaar-based authentication",
        "No physical presence required",
        "Valid for one year",
      ],
      eligibility: "All pensioners with Aadhaar number",
      documents: ["Aadhaar Card", "Pension Payment Order", "Mobile Number"],
      process: "Register → Biometric Authentication → Generate Certificate",
      website: "https://jeevanpramaan.gov.in",
      logo: "👴",
    },
    {
      id: "passport",
      name: "Passport Services",
      shortName: "Passport",
      description: "Apply for new passport or renew existing passport",
      fullDescription:
        "Passport services include fresh passport application, renewal, re-issue, and various other passport-related services through the Passport Seva portal.",
      icon: <Globe className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      textColor: "text-indigo-800",
      features: [
        "Fresh passport application",
        "Passport renewal and re-issue",
        "Online appointment booking",
        "Track application status",
      ],
      eligibility: "Indian citizens and eligible foreign nationals",
      documents: [
        "Birth Certificate",
        "Address Proof",
        "Identity Proof",
        "Photo",
      ],
      process: "Apply Online → Book Appointment → Visit PSK → Get Passport",
      website: "https://passportindia.gov.in",
      logo: "📘",
    },
    {
      id: "gem",
      name: "Government E-Market Place (GeM)",
      shortName: "GeM",
      description: "Access government procurement portal for businesses",
      fullDescription:
        "GeM is a one-stop national public procurement portal for all government departments, PSUs, and autonomous bodies to procure goods and services.",
      icon: <Building className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
      textColor: "text-teal-800",
      features: [
        "Government procurement portal",
        "Transparent bidding process",
        "Direct purchase facility",
        "Vendor registration and management",
      ],
      eligibility: "Registered businesses and service providers",
      documents: [
        "GST Registration",
        "PAN Card",
        "Bank Account Details",
        "Business Registration Certificate",
      ],
      process: "Register → Verify Documents → Start Bidding → Win Contracts",
      website: "https://gem.gov.in",
      logo: "🏛️",
    },
    {
      id: "electricity",
      name: "Electricity Bill Collection",
      shortName: "Electricity Bills",
      description: "Pay electricity bills and manage utility services",
      fullDescription:
        "Online electricity bill payment and management services for various state electricity boards and distribution companies across India.",
      icon: <CreditCard className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      textColor: "text-yellow-800",
      features: [
        "Online bill payment",
        "Bill history and downloads",
        "Multiple payment options",
        "SMS and email notifications",
      ],
      eligibility: "All electricity consumers with valid connection",
      documents: [
        "Consumer Number",
        "Mobile Number",
        "Email Address",
        "Bank Account Details",
      ],
      process: "Enter Consumer Number → View Bill → Make Payment → Get Receipt",
      website: "https://paytm.com/electricity-bill-payment",
      logo: "⚡",
    },
    {
      id: "udyam",
      name: "Udyam Services",
      shortName: "Udyam",
      description: "MSME registration and business support services",
      fullDescription:
        "Udyam is the new online registration system for Micro, Small and Medium Enterprises (MSMEs) that provides various benefits and support services.",
      icon: <Building className="w-8 h-8" />,
      color: "from-emerald-500 to-green-500",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      textColor: "text-emerald-800",
      features: [
        "MSME registration",
        "Priority sector lending",
        "Government tenders access",
        "Tax benefits and subsidies",
      ],
      eligibility: "Micro, Small and Medium Enterprises",
      documents: [
        "Aadhaar Card",
        "PAN Card",
        "Business Registration",
        "Bank Account Details",
      ],
      process:
        "Register → Upload Documents → Get Udyam Certificate → Access Benefits",
      website: "https://udyamregistration.gov.in",
      logo: "🏢",
    },
    {
      id: "epfo",
      name: "EPFO Services",
      shortName: "EPFO",
      description: "Employee Provident Fund Organization services",
      fullDescription:
        "EPFO provides social security services including provident fund, pension, and insurance benefits to organized sector employees in India.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      bgColor: "bg-violet-50",
      borderColor: "border-violet-200",
      textColor: "text-violet-800",
      features: [
        "PF account management",
        "Pension services",
        "Insurance benefits",
        "Online claim processing",
      ],
      eligibility: "Organized sector employees and employers",
      documents: [
        "Aadhaar Card",
        "PAN Card",
        "Bank Account Details",
        "Employment Certificate",
      ],
      process: "Register → Link Aadhaar → Access Services → Process Claims",
      website: "https://www.epfindia.gov.in",
      logo: "💼",
    },
  ];

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Government Verified",
      description: "All services are officially verified and secure",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Fast Processing",
      description: "Quick and efficient service delivery",
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Secure & Safe",
      description: "Your data is protected with highest security",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Reliable Service",
      description: "Trusted by millions of citizens",
    },
  ];

  const stats = [
    { number: "50+", label: "Government Services", color: "text-[#0b234a]" },
    { number: "10M+", label: "Citizens Served", color: "text-[#E6B837]" },
    { number: "99%", label: "Success Rate", color: "text-[#0b234a]" },
    { number: "24/7", label: "Online Support", color: "text-[#E6B837]" },
  ];

  const filteredServices = g2cServices.filter(
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
        type: "G2C",
        service: formData.service,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        status: "New",
        priority: "Medium",
        source: "G2C Form",
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
        title={pageSEOData.g2c.title}
        description={pageSEOData.g2c.description}
        keywords={pageSEOData.g2c.keywords}
        canonicalUrl="https://www.advaitswaroopservices.com/g2c"
      />
      <Header />
      <div className="pt-24 min-h-screen bg-white [background-image:radial-gradient(#e6e7e9_10px,transparent_10px)] [background-size:16px_16px] bg-fixed font-roboto">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumb
            items={[
              { name: "Services", href: "/services" },
              { name: "G2C Services", href: "/g2c" },
            ]}
          />
        </div>

        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl lg:text-6xl font-bold text-[#0b234a] mb-6">
                Government to Citizen
                <span className="block text-[#E6B837]">Services</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto text-justify">
                Access all essential government services in one place. From
                healthcare to identity documents, we help you navigate
                government services with ease and confidence.
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search government services..."
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      // Track search with location
                      if (e.target.value.length > 2) {
                        trackService("G2C", "Search", e.target.value);
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
                Why Choose Our G2C Services?
              </h2>
              <p className="text-xl text-gray-300">
                Professional assistance for all your government service needs
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
                Available Government Services
              </h2>
              <p className="text-xl text-gray-600 text-justify">
                Comprehensive list of government services we can help you with
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
                        "G2C",
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

                      <div className="text-center">
                        <button
                          onClick={() => {
                            // Scroll to the Request Free Consultation section
                            const formSection = document.querySelector(
                              "section:last-of-type"
                            );
                            if (formSection) {
                              formSection.scrollIntoView({
                                behavior: "smooth",
                              });
                            }
                          }}
                          className="inline-flex items-center bg-gradient-to-r from-[#0b234a] to-[#1e3a5f] text-white px-6 py-3 rounded-lg hover:from-[#1e3a5f] hover:to-[#0b234a] transition-all duration-300 transform hover:scale-105 font-semibold"
                        >
                          Apply Now
                          <ArrowRight className="w-4 h-4 ml-2" />
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0b234a] mb-4">
                How It Works
              </h2>
              <p className="text-xl text-gray-600 text-justify">
                Simple steps to access government services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Choose Service",
                  description:
                    "Select the government service you need assistance with",
                  icon: <Search className="w-8 h-8" />,
                },
                {
                  step: "2",
                  title: "Document Preparation",
                  description: "We help you prepare all required documents",
                  icon: <FileText className="w-8 h-8" />,
                },
                {
                  step: "3",
                  title: "Application Process",
                  description: "We guide you through the application process",
                  icon: <Upload className="w-8 h-8" />,
                },
                {
                  step: "4",
                  title: "Track & Follow-up",
                  description:
                    "Monitor your application status and get updates",
                  icon: <Eye className="w-8 h-8" />,
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gray-50">
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
                Need Help with Government Services?
              </h2>
              <p
                className="text-xl text-gray-600 mb-8 animate-fadeIn text-justify"
                style={{ animationDelay: "0.2s" }}
              >
                Get professional assistance for all your government service
                needs
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
                    Select Government Service *
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
                      {g2cServices.map((service) => (
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
