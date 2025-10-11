import { useState } from "react";
import {
  FileText,
  Info,
  HelpCircle,
  FileSearch,
  ChevronDown,
  ChevronUp,
  Download,
  ExternalLink,
  CheckCircle,
  Clock,
  Users,
  Shield,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";

export default function ResourcesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const resourceSections = [
    {
      id: "implementation",
      title: "Implementation Guidelines",
      description: "Step-by-step guides for implementing our services",
      icon: <FileText className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      content: {
        overview:
          "Comprehensive implementation guidelines to help you get started with our services quickly and efficiently.",
        steps: [
          {
            title: "Initial Setup",
            description: "Configure your account and basic settings",
            duration: "15-30 minutes",
            requirements: [
              "Valid email address",
              "Business registration documents",
              "Bank account details",
            ],
          },
          {
            title: "Service Integration",
            description: "Integrate our services with your existing systems",
            duration: "1-2 hours",
            requirements: [
              "API access",
              "Technical documentation",
              "Testing environment",
            ],
          },
          {
            title: "Testing & Validation",
            description: "Test all services and validate functionality",
            duration: "2-4 hours",
            requirements: [
              "Test data",
              "Validation tools",
              "Quality assurance checklist",
            ],
          },
          {
            title: "Go Live",
            description: "Launch services for your customers",
            duration: "1 hour",
            requirements: [
              "Production environment",
              "Monitoring tools",
              "Support team ready",
            ],
          },
        ],
        benefits: [
          "Reduced implementation time",
          "Minimized technical errors",
          "Comprehensive support",
          "Scalable solutions",
        ],
      },
    },
    {
      id: "rti",
      title: "Right to Information",
      description: "Transparency and information access policies",
      icon: <Info className="w-8 h-8" />,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      content: {
        overview:
          "We believe in transparency and your right to access information about our services, policies, and procedures.",
        categories: [
          {
            title: "Service Information",
            description: "Detailed information about all our services",
            items: [
              "Service descriptions",
              "Pricing details",
              "Terms and conditions",
              "Service level agreements",
            ],
          },
          {
            title: "Company Information",
            description: "Information about our company and operations",
            items: [
              "Company registration",
              "Business licenses",
              "Financial information",
              "Organizational structure",
            ],
          },
          {
            title: "Policy Documents",
            description: "Our policies and procedures",
            items: [
              "Privacy policy",
              "Data protection",
              "Refund policy",
              "Complaint procedures",
            ],
          },
          {
            title: "Performance Reports",
            description: "Regular reports on our performance",
            items: [
              "Service delivery reports",
              "Customer satisfaction surveys",
              "Quality metrics",
              "Annual reports",
            ],
          },
        ],
        requestProcess: [
          "Submit written request",
          "Receive acknowledgment within 48 hours",
          "Information provided within 15 days",
          "Appeal process available if needed",
        ],
      },
    },
    {
      id: "faq",
      title: "Frequently Asked Questions",
      description: "Common questions and detailed answers",
      icon: <HelpCircle className="w-8 h-8" />,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      content: {
        overview:
          "Find answers to the most commonly asked questions about our services, policies, and procedures.",
        faqs: [
          {
            question: "How do I get started with your services?",
            answer:
              "Getting started is easy! Simply contact us through our website or visit our office. We'll guide you through the registration process and help you choose the services that best fit your needs. Our team will provide step-by-step assistance to ensure a smooth onboarding experience.",
            category: "Getting Started",
          },
          {
            question: "What documents do I need to provide?",
            answer:
              "The required documents vary by service type. Generally, you'll need valid ID proof, address proof, and relevant business documents. Our team will provide you with a complete checklist based on the services you're interested in. We also offer document verification assistance.",
            category: "Documentation",
          },
          {
            question: "How long does it take to process applications?",
            answer:
              "Processing times depend on the type of service and complexity of your application. Most services are processed within 3-7 business days, while some government services may take 15-30 days. We provide regular updates throughout the process and keep you informed of any delays.",
            category: "Processing",
          },
          {
            question: "What are your service charges?",
            answer:
              "Our service charges are competitive and transparent. We provide detailed pricing information upfront with no hidden fees. Charges vary by service type and complexity. We offer package deals for multiple services and special rates for regular customers.",
            category: "Pricing",
          },
          {
            question: "Do you provide customer support?",
            answer:
              "Yes! We provide comprehensive customer support through multiple channels including phone, email, and in-person assistance. Our support team is available during business hours and we also offer emergency support for urgent matters. We're committed to resolving your queries quickly and efficiently.",
            category: "Support",
          },
          {
            question: "Can I track my application status?",
            answer:
              "Absolutely! We provide real-time tracking for all applications. You can check your status through our online portal, receive SMS updates, or contact our support team. We believe in keeping our customers informed every step of the way.",
            category: "Tracking",
          },
          {
            question: "What if I'm not satisfied with the service?",
            answer:
              "Customer satisfaction is our priority. If you're not satisfied, please contact us immediately. We have a comprehensive complaint resolution process and will work with you to address any concerns. We also offer refunds in accordance with our refund policy.",
            category: "Complaints",
          },
          {
            question: "Do you offer services in multiple languages?",
            answer:
              "Yes, we understand the importance of clear communication. Our team can assist you in multiple languages including Hindi, Punjabi, and English. We also provide documentation in various languages to ensure you fully understand all processes and requirements.",
            category: "Language",
          },
        ],
      },
    },
    {
      id: "rfp",
      title: "Request for Proposal (RFP)",
      description: "Partnership and collaboration opportunities",
      icon: <FileSearch className="w-8 h-8" />,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      content: {
        overview:
          "We welcome proposals for partnerships, collaborations, and service enhancements that can benefit our customers and community.",
        proposalTypes: [
          {
            title: "Service Partnerships",
            description: "Collaborate with us to expand our service offerings",
            requirements: [
              "Proven track record",
              "Relevant certifications",
              "Quality standards compliance",
              "Customer service excellence",
            ],
          },
          {
            title: "Technology Solutions",
            description: "Propose innovative technology solutions",
            requirements: [
              "Technical expertise",
              "Scalable solutions",
              "Security compliance",
              "Integration capabilities",
            ],
          },
          {
            title: "Training Programs",
            description: "Offer training and skill development programs",
            requirements: [
              "Qualified trainers",
              "Comprehensive curriculum",
              "Certification programs",
              "Practical applications",
            ],
          },
          {
            title: "Community Initiatives",
            description: "Partner on community development projects",
            requirements: [
              "Social impact focus",
              "Community engagement",
              "Measurable outcomes",
              "Sustainable approach",
            ],
          },
        ],
        submissionProcess: [
          "Download RFP template",
          "Complete proposal document",
          "Submit with required attachments",
          "Initial review and feedback",
          "Detailed evaluation",
          "Final decision and notification",
        ],
        evaluationCriteria: [
          "Technical capability and expertise",
          "Financial stability and pricing",
          "Quality of proposed solution",
          "Timeline and delivery capability",
          "Past performance and references",
          "Innovation and value addition",
        ],
      },
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <Header />
      <div className="pt-24 min-h-screen bg-white [background-image:radial-gradient(#e6e7e9_10px,transparent_10px)] [background-size:16px_16px] bg-fixed font-roboto">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumb
            items={[
              { name: "Resources", href: "/resources" },
            ]}
          />
        </div>
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl p-12 shadow-xl border-2 border-[#E6B837]">
              <div className="text-center">
                <h1 className="text-5xl font-bold text-[#0b234a] mb-6">
                  Resources & Information
                </h1>
                <img
                  className="h-2 rounded-3xl mx-auto mb-8"
                  src="/gline.png"
                  alt=""
                />
                <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
                  Access comprehensive resources, guidelines, and information to
                  help you make the most of our services. Everything you need to
                  know in one place.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Resource Sections */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {resourceSections.map((section, index) => (
                <div
                  key={section.id}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${section.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                    >
                      {section.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#0b234a] mb-2">
                        {section.title}
                      </h3>
                      <p className="text-gray-600">{section.description}</p>
                    </div>
                  </div>

                  {/* Implementation Guidelines */}
                  {section.id === "implementation" && (
                    <div className="space-y-6">
                      <p className="text-gray-600">
                        {section.content.overview}
                      </p>
                      <div className="space-y-4">
                        {section.content.steps.map((step, stepIndex) => (
                          <div
                            key={stepIndex}
                            className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
                          >
                            <div className="w-8 h-8 bg-[#E6B837] rounded-full flex items-center justify-center text-[#0b234a] font-bold text-sm">
                              {stepIndex + 1}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-[#0b234a] mb-1">
                                {step.title}
                              </h4>
                              <p className="text-sm text-gray-600 mb-2">
                                {step.description}
                              </p>
                              <div className="flex items-center space-x-4 text-xs text-gray-500">
                                <span className="flex items-center">
                                  <Clock className="w-3 h-3 mr-1" />
                                  {step.duration}
                                </span>
                              </div>
                              <div className="mt-2">
                                <p className="text-xs font-medium text-gray-700 mb-1">
                                  Requirements:
                                </p>
                                <div className="flex flex-wrap gap-1">
                                  {step.requirements.map((req, reqIndex) => (
                                    <span
                                      key={reqIndex}
                                      className="bg-[#E6B837] text-[#0b234a] px-2 py-1 rounded-full text-xs"
                                    >
                                      {req}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="bg-gradient-to-r from-[#0b234a] to-[#1e3a5f] rounded-lg p-4 text-white">
                        <h4 className="font-semibold mb-2">Key Benefits</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {section.content.benefits.map(
                            (benefit, benefitIndex) => (
                              <div
                                key={benefitIndex}
                                className="flex items-center text-sm"
                              >
                                <CheckCircle className="w-4 h-4 mr-2 text-[#E6B837]" />
                                {benefit}
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Right to Information */}
                  {section.id === "rti" && (
                    <div className="space-y-6">
                      <p className="text-gray-600">
                        {section.content.overview}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {section.content.categories.map(
                          (category, catIndex) => (
                            <div
                              key={catIndex}
                              className="bg-gray-50 rounded-lg p-4"
                            >
                              <h4 className="font-semibold text-[#0b234a] mb-2">
                                {category.title}
                              </h4>
                              <p className="text-sm text-gray-600 mb-3">
                                {category.description}
                              </p>
                              <ul className="space-y-1">
                                {category.items.map((item, itemIndex) => (
                                  <li
                                    key={itemIndex}
                                    className="flex items-center text-sm text-gray-600"
                                  >
                                    <CheckCircle className="w-3 h-3 mr-2 text-[#E6B837]" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )
                        )}
                      </div>
                      <div className="bg-blue-50 rounded-lg p-4">
                        <h4 className="font-semibold text-[#0b234a] mb-3">
                          Request Process
                        </h4>
                        <div className="space-y-2">
                          {section.content.requestProcess.map(
                            (step, stepIndex) => (
                              <div
                                key={stepIndex}
                                className="flex items-center text-sm"
                              >
                                <div className="w-6 h-6 bg-[#E6B837] rounded-full flex items-center justify-center text-[#0b234a] text-xs font-bold mr-3">
                                  {stepIndex + 1}
                                </div>
                                {step}
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* FAQ Section */}
                  {section.id === "faq" && (
                    <div className="space-y-6">
                      <p className="text-gray-600">
                        {section.content.overview}
                      </p>
                      <div className="space-y-3">
                        {section.content.faqs.map((faq, faqIndex) => (
                          <div
                            key={faqIndex}
                            className="border border-gray-200 rounded-lg"
                          >
                            <button
                              onClick={() => toggleFaq(faqIndex)}
                              className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                            >
                              <div className="flex-1">
                                <h4 className="font-semibold text-[#0b234a] mb-1">
                                  {faq.question}
                                </h4>
                                <span className="text-xs text-[#E6B837] bg-[#E6B837] bg-opacity-10 px-2 py-1 rounded-full">
                                  {faq.category}
                                </span>
                              </div>
                              {openFaq === faqIndex ? (
                                <ChevronUp className="w-5 h-5 text-gray-500" />
                              ) : (
                                <ChevronDown className="w-5 h-5 text-gray-500" />
                              )}
                            </button>
                            {openFaq === faqIndex && (
                              <div className="px-4 pb-4">
                                <p className="text-gray-600 text-sm leading-relaxed">
                                  {faq.answer}
                                </p>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* RFP Section */}
                  {section.id === "rfp" && (
                    <div className="space-y-6">
                      <p className="text-gray-600">
                        {section.content.overview}
                      </p>
                      <div className="space-y-4">
                        {section.content.proposalTypes.map(
                          (type, typeIndex) => (
                            <div
                              key={typeIndex}
                              className="bg-gray-50 rounded-lg p-4"
                            >
                              <h4 className="font-semibold text-[#0b234a] mb-2">
                                {type.title}
                              </h4>
                              <p className="text-sm text-gray-600 mb-3">
                                {type.description}
                              </p>
                              <div>
                                <p className="text-xs font-medium text-gray-700 mb-2">
                                  Requirements:
                                </p>
                                <div className="flex flex-wrap gap-1">
                                  {type.requirements.map((req, reqIndex) => (
                                    <span
                                      key={reqIndex}
                                      className="bg-[#E6B837] text-[#0b234a] px-2 py-1 rounded-full text-xs"
                                    >
                                      {req}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-blue-50 rounded-lg p-4">
                          <h4 className="font-semibold text-[#0b234a] mb-3">
                            Submission Process
                          </h4>
                          <div className="space-y-2">
                            {section.content.submissionProcess.map(
                              (step, stepIndex) => (
                                <div
                                  key={stepIndex}
                                  className="flex items-center text-sm"
                                >
                                  <div className="w-6 h-6 bg-[#E6B837] rounded-full flex items-center justify-center text-[#0b234a] text-xs font-bold mr-3">
                                    {stepIndex + 1}
                                  </div>
                                  {step}
                                </div>
                              )
                            )}
                          </div>
                        </div>
                        <div className="bg-green-50 rounded-lg p-4">
                          <h4 className="font-semibold text-[#0b234a] mb-3">
                            Evaluation Criteria
                          </h4>
                          <div className="space-y-2">
                            {section.content.evaluationCriteria.map(
                              (criteria, criteriaIndex) => (
                                <div
                                  key={criteriaIndex}
                                  className="flex items-center text-sm"
                                >
                                  <CheckCircle className="w-4 h-4 mr-2 text-[#E6B837]" />
                                  {criteria}
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button className="flex items-center justify-center bg-[#E6B837] text-[#0b234a] px-6 py-3 rounded-lg font-semibold hover:bg-[#d4a94b] transition-colors">
                        <Download className="w-4 h-4 mr-2" />
                        Download Guide
                      </button>
                      <button className="flex items-center justify-center border-2 border-[#0b234a] text-[#0b234a] px-6 py-3 rounded-lg font-semibold hover:bg-[#0b234a] hover:text-white transition-colors">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Learn More
                      </button>
                    </div>
                  </div>
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
                  Need More Information?
                </h2>
                <img
                  className="h-2 rounded-3xl mx-auto mb-8"
                  src="/gline.png"
                  alt=""
                />
                <p className="text-xl text-gray-600 mb-8">
                  Can't find what you're looking for? Our team is here to help
                  you with any questions or additional information you may need.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-[#E6B837] to-[#d4a94b] text-[#0b234a] px-8 py-4 rounded-full font-bold text-lg hover:from-[#d4a94b] hover:to-[#E6B837] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Contact Us
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
