import {
  Info,
  FileText,
  Clock,
  CheckCircle,
  Download,
  Mail,
  Phone,
  MapPin,
  Shield,
  Users,
  Award,
  BookOpen,
} from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";

export default function RightToInformationPage() {
  const informationCategories = [
    {
      title: "Service Information",
      description: "Detailed information about all our services",
      icon: <BookOpen className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
      items: [
        "Service descriptions and features",
        "Pricing details and fee structure",
        "Terms and conditions",
        "Service level agreements",
        "Processing timelines",
        "Required documentation",
      ],
    },
    {
      title: "Company Information",
      description: "Information about our company and operations",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-green-600",
      items: [
        "Company registration details",
        "Business licenses and certifications",
        "Financial information and reports",
        "Organizational structure",
        "Board of directors",
        "Annual reports",
      ],
    },
    {
      title: "Policy Documents",
      description: "Our policies and procedures",
      icon: <Shield className="w-8 h-8" />,
      color: "from-purple-500 to-purple-600",
      items: [
        "Privacy policy and data protection",
        "Refund and cancellation policy",
        "Complaint procedures",
        "Quality assurance policies",
        "Employee policies",
        "Environmental policies",
      ],
    },
    {
      title: "Performance Reports",
      description: "Regular reports on our performance",
      icon: <Award className="w-8 h-8" />,
      color: "from-orange-500 to-orange-600",
      items: [
        "Service delivery reports",
        "Customer satisfaction surveys",
        "Quality metrics and KPIs",
        "Annual performance reports",
        "Audit reports",
        "Compliance certificates",
      ],
    },
  ];

  const requestProcess = [
    {
      step: 1,
      title: "Submit Request",
      description: "Submit your written request through any of our channels",
      duration: "Immediate",
      requirements: [
        "Written request",
        "Clear description of information needed",
        "Contact details",
      ],
    },
    {
      step: 2,
      title: "Acknowledgment",
      description: "Receive acknowledgment of your request",
      duration: "Within 48 hours",
      requirements: [
        "Request number",
        "Expected response time",
        "Contact person details",
      ],
    },
    {
      step: 3,
      title: "Information Processing",
      description: "We process and prepare the requested information",
      duration: "5-10 days",
      requirements: [
        "Information gathering",
        "Document preparation",
        "Review and verification",
      ],
    },
    {
      step: 4,
      title: "Information Delivery",
      description: "Receive the requested information",
      duration: "Within 15 days",
      requirements: [
        "Complete information",
        "Supporting documents",
        "Explanation if any",
      ],
    },
  ];

  const requestChannels = [
    {
      title: "Online Request",
      description: "Submit your request through our website",
      icon: <FileText className="w-6 h-6" />,
      details: "Fill out our online RTI form with all required details",
    },
    {
      title: "Email Request",
      description: "Send your request via email",
      icon: <Mail className="w-6 h-6" />,
      details: "Email to: rti@advaitservices.com",
    },
    {
      title: "Phone Request",
      description: "Call us to submit your request",
      icon: <Phone className="w-6 h-6" />,
      details: "Call: +91 97804-94854",
    },
    {
      title: "In-Person Request",
      description: "Visit our office to submit your request",
      icon: <MapPin className="w-6 h-6" />,
      details: "Visit our office during business hours",
    },
  ];

  const feesAndCharges = [
    {
      type: "Basic Information",
      fee: "Free",
      description: "General information about our services",
    },
    {
      type: "Detailed Reports",
      fee: "₹50 per page",
      description: "Comprehensive reports and documents",
    },
    {
      type: "Certified Copies",
      fee: "₹100 per document",
      description: "Certified copies of official documents",
    },
    {
      type: "Urgent Processing",
      fee: "₹200 additional",
      description: "Express processing within 7 days",
    },
  ];

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Breadcrumb
          items={[
            { name: "Resources", href: "/resources" },
            {
              name: "Right to Information",
              href: "/resources/right-to-information",
            },
          ]}
        />
      </div>
      <div className="pt-24 min-h-screen bg-white [background-image:radial-gradient(#e6e7e9_10px,transparent_10px)] [background-size:16px_16px] bg-fixed font-roboto">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl p-12 shadow-xl border-2 border-[#E6B837]">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Info className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-5xl font-bold text-[#0b234a] mb-6">
                  Right to Information
                </h1>
                <img
                  className="h-2 rounded-3xl mx-auto mb-8"
                  src="/gline.png"
                  alt=""
                />
                <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
                  We believe in transparency and your right to access
                  information about our services, policies, and procedures.
                  Submit your information requests through multiple channels.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-[#E6B837] text-[#0b234a] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#d4a94b] transition-colors shadow-lg">
                    <FileText className="w-5 h-5 inline mr-2" />
                    Submit RTI Request
                  </button>
                  <button className="border-2 border-[#0b234a] text-[#0b234a] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#0b234a] hover:text-white transition-colors">
                    <Download className="w-5 h-5 inline mr-2" />
                    Download RTI Form
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Information Categories */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0b234a] mb-4">
                Information Categories
              </h2>
              <p className="text-xl text-gray-600">
                Types of information you can request from us
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {informationCategories.map((category, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center text-white`}
                    >
                      {category.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#0b234a] mb-2">
                        {category.title}
                      </h3>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 mr-3 text-[#E6B837]" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Request Process */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0b234a] mb-4">
                Request Process
              </h2>
              <p className="text-xl text-gray-600">
                How to submit and track your information requests
              </p>
            </div>

            <div className="space-y-8">
              {requestProcess.map((step, index) => (
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

                      <div>
                        <h4 className="font-semibold text-[#0b234a] mb-3">
                          Requirements:
                        </h4>
                        <div className="space-y-2">
                          {step.requirements.map((req, reqIndex) => (
                            <div
                              key={reqIndex}
                              className="flex items-center text-sm text-gray-600"
                            >
                              <CheckCircle className="w-4 h-4 mr-2 text-[#E6B837]" />
                              {req}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Request Channels */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0b234a] mb-4">
                How to Submit Your Request
              </h2>
              <p className="text-xl text-gray-600">
                Multiple convenient ways to submit your information requests
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {requestChannels.map((channel, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
                >
                  <div className="w-16 h-16 bg-[#E6B837] rounded-full flex items-center justify-center mx-auto mb-4 text-[#0b234a]">
                    {channel.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0b234a] mb-2">
                    {channel.title}
                  </h3>
                  <p className="text-gray-600 mb-3">{channel.description}</p>
                  <p className="text-sm text-gray-500">{channel.details}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fees and Charges */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-[#0b234a] to-[#1e3a5f] rounded-3xl p-12 text-white">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Fees and Charges</h2>
                <p className="text-xl text-gray-300">
                  Transparent pricing for information requests
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {feesAndCharges.map((fee, index) => (
                  <div
                    key={index}
                    className="bg-white bg-opacity-10 rounded-lg p-6"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold">{fee.type}</h3>
                      <span className="text-2xl font-bold text-[#E6B837]">
                        {fee.fee}
                      </span>
                    </div>
                    <p className="text-gray-300">{fee.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-300 mb-4">
                  All fees are payable in advance. Payment can be made through
                  cash, cheque, or online transfer.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-[#E6B837] text-[#0b234a] px-6 py-3 rounded-full font-semibold hover:bg-[#d4a94b] transition-colors">
                    View Payment Options
                  </button>
                  <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-[#0b234a] transition-colors">
                    Download Fee Structure
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl p-12 shadow-xl border-2 border-[#E6B837]">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-[#0b234a] mb-6">
                  Need Help with Your Request?
                </h2>
                <img
                  className="h-2 rounded-3xl mx-auto mb-8"
                  src="/gline.png"
                  alt=""
                />
                <p className="text-xl text-gray-600 mb-8">
                  Our RTI team is here to help you with any questions about
                  information requests, fees, or the process. Contact us for
                  personalized assistance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-[#E6B837] to-[#d4a94b] text-[#0b234a] px-8 py-4 rounded-full font-bold text-lg hover:from-[#d4a94b] hover:to-[#E6B837] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Contact RTI Team
                  </a>
                  <a
                    href="tel:+919780494854"
                    className="border-2 border-[#0b234a] text-[#0b234a] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#0b234a] hover:text-white transition-all duration-300"
                  >
                    Call RTI Officer
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
