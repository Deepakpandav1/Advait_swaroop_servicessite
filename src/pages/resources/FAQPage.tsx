import { useState } from "react";
import {
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Search,
  Filter,
  Clock,
  Users,
  Shield,
  CreditCard,
  FileText,
  Phone,
  Globe,
} from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";

export default function FAQPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const faqCategories = [
    "All",
    "Getting Started",
    "Documentation",
    "Processing",
    "Pricing",
    "Support",
    "Tracking",
    "Complaints",
    "Language",
  ];

  const faqs = [
    {
      question: "How do I get started with your services?",
      answer:
        "Getting started is easy! Simply contact us through our website or visit our office. We'll guide you through the registration process and help you choose the services that best fit your needs. Our team will provide step-by-step assistance to ensure a smooth onboarding experience. You can also call us directly or fill out our online inquiry form for immediate assistance.",
      category: "Getting Started",
      tags: ["registration", "onboarding", "getting started"],
    },
    {
      question: "What documents do I need to provide?",
      answer:
        "The required documents vary by service type. Generally, you'll need valid ID proof, address proof, and relevant business documents. Our team will provide you with a complete checklist based on the services you're interested in. We also offer document verification assistance and can help you obtain any missing documents. Common documents include Aadhaar card, PAN card, bank statements, and business registration certificates.",
      category: "Documentation",
      tags: ["documents", "requirements", "verification"],
    },
    {
      question: "How long does it take to process applications?",
      answer:
        "Processing times depend on the type of service and complexity of your application. Most services are processed within 3-7 business days, while some government services may take 15-30 days. We provide regular updates throughout the process and keep you informed of any delays. You can track your application status online or contact our support team for real-time updates.",
      category: "Processing",
      tags: ["processing time", "timeline", "updates"],
    },
    {
      question: "What are your service charges?",
      answer:
        "Our service charges are competitive and transparent. We provide detailed pricing information upfront with no hidden fees. Charges vary by service type and complexity. We offer package deals for multiple services and special rates for regular customers. All fees are clearly displayed on our website, and we provide detailed quotes before starting any work.",
      category: "Pricing",
      tags: ["pricing", "fees", "costs"],
    },
    {
      question: "Do you provide customer support?",
      answer:
        "Yes! We provide comprehensive customer support through multiple channels including phone, email, and in-person assistance. Our support team is available during business hours and we also offer emergency support for urgent matters. We're committed to resolving your queries quickly and efficiently. You can reach us through phone, email, live chat, or by visiting our office.",
      category: "Support",
      tags: ["support", "help", "assistance"],
    },
    {
      question: "Can I track my application status?",
      answer:
        "Absolutely! We provide real-time tracking for all applications. You can check your status through our online portal, receive SMS updates, or contact our support team. We believe in keeping our customers informed every step of the way. Our tracking system provides detailed updates on each stage of your application process.",
      category: "Tracking",
      tags: ["tracking", "status", "updates"],
    },
    {
      question: "What if I'm not satisfied with the service?",
      answer:
        "Customer satisfaction is our priority. If you're not satisfied, please contact us immediately. We have a comprehensive complaint resolution process and will work with you to address any concerns. We also offer refunds in accordance with our refund policy. Our quality assurance team ensures that all issues are resolved promptly and to your satisfaction.",
      category: "Complaints",
      tags: ["complaints", "refunds", "satisfaction"],
    },
    {
      question: "Do you offer services in multiple languages?",
      answer:
        "Yes, we understand the importance of clear communication. Our team can assist you in multiple languages including Hindi, Punjabi, and English. We also provide documentation in various languages to ensure you fully understand all processes and requirements. Our multilingual support ensures that language barriers don't prevent you from accessing our services.",
      category: "Language",
      tags: ["languages", "multilingual", "communication"],
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods including cash, cheque, bank transfer, UPI, and online payments. We also offer installment plans for certain services. All payments are secure and processed through verified channels. We provide receipts for all transactions and maintain detailed payment records for your convenience.",
      category: "Pricing",
      tags: ["payment", "methods", "billing"],
    },
    {
      question: "Do you provide home visits for services?",
      answer:
        "Yes, we offer home visits for certain services where it's more convenient for our customers. This includes document collection, form filling assistance, and consultation services. Home visit charges may apply depending on the location and service type. We prioritize customer convenience and accessibility in all our service delivery methods.",
      category: "Support",
      tags: ["home visits", "convenience", "accessibility"],
    },
    {
      question: "What is your refund policy?",
      answer:
        "We offer refunds in accordance with our refund policy, which varies by service type. Generally, refunds are processed within 7-14 business days for eligible cases. We have a clear refund process and our team will guide you through the necessary steps. All refund requests are reviewed on a case-by-case basis to ensure fair resolution.",
      category: "Complaints",
      tags: ["refunds", "policy", "money back"],
    },
    {
      question: "How do I update my contact information?",
      answer:
        "You can update your contact information through our online portal, by calling our support team, or by visiting our office. It's important to keep your contact details current to ensure you receive important updates about your applications. We recommend updating your information immediately if there are any changes to avoid missing critical communications.",
      category: "Getting Started",
      tags: ["contact", "updates", "information"],
    },
  ];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesCategory =
      selectedCategory === "All" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Getting Started":
        return <Users className="w-4 h-4" />;
      case "Documentation":
        return <FileText className="w-4 h-4" />;
      case "Processing":
        return <Clock className="w-4 h-4" />;
      case "Pricing":
        return <CreditCard className="w-4 h-4" />;
      case "Support":
        return <Phone className="w-4 h-4" />;
      case "Tracking":
        return <Shield className="w-4 h-4" />;
      case "Complaints":
        return <HelpCircle className="w-4 h-4" />;
      case "Language":
        return <Globe className="w-4 h-4" />;
      default:
        return <HelpCircle className="w-4 h-4" />;
    }
  };

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Breadcrumb
          items={[
            { name: "Resources", href: "/resources" },
            { name: "FAQ", href: "/resources/faq" },
          ]}
        />
      </div>
      <div className="pt-24 min-h-screen bg-white [background-image:radial-gradient(#e6e7e9_10px,transparent_10px)] [background-size:16px_16px] bg-fixed font-roboto">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl p-12 shadow-xl border-2 border-[#E6B837]">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <HelpCircle className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-5xl font-bold text-[#0b234a] mb-6">
                  Frequently Asked Questions
                </h1>
                <img
                  className="h-2 rounded-3xl mx-auto mb-8"
                  src="/gline.png"
                  alt=""
                />
                <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
                  Find answers to the most commonly asked questions about our
                  services, policies, and procedures. Can't find what you're
                  looking for? Contact us!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search questions, answers, or keywords..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E6B837] focus:border-transparent"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Filter className="w-5 h-5 text-gray-400" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E6B837] focus:border-transparent"
                  >
                    {faqCategories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="text-sm text-gray-500">
                Showing {filteredFaqs.length} of {faqs.length} questions
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors rounded-2xl"
                  >
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-xs text-[#E6B837] bg-[#E6B837] bg-opacity-10 px-3 py-1 rounded-full flex items-center">
                          {getCategoryIcon(faq.category)}
                          <span className="ml-2">{faq.category}</span>
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold text-[#0b234a] mb-2">
                        {faq.question}
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {faq.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    {openFaq === index ? (
                      <ChevronUp className="w-6 h-6 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-500 flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <div className="border-t border-gray-200 pt-4">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {filteredFaqs.length === 0 && (
              <div className="text-center py-12">
                <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  No questions found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your search terms or browse all categories
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Popular Questions */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0b234a] mb-4">
                Popular Questions
              </h2>
              <p className="text-xl text-gray-600">
                Most frequently asked questions by our customers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {faqs.slice(0, 6).map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-[#E6B837] rounded-full flex items-center justify-center text-[#0b234a]">
                      {getCategoryIcon(faq.category)}
                    </div>
                    <span className="text-sm text-[#E6B837] font-semibold">
                      {faq.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#0b234a] mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {faq.answer}
                  </p>
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
                  Still Have Questions?
                </h2>
                <img
                  className="h-2 rounded-3xl mx-auto mb-8"
                  src="/gline.png"
                  alt=""
                />
                <p className="text-xl text-gray-600 mb-8">
                  Can't find the answer you're looking for? Our support team is
                  here to help. Contact us through any of the channels below for
                  personalized assistance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-[#E6B837] to-[#d4a94b] text-[#0b234a] px-8 py-4 rounded-full font-bold text-lg hover:from-[#d4a94b] hover:to-[#E6B837] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Contact Support
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
