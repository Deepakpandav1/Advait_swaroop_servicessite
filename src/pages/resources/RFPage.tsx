import {
  FileSearch,
  Download,
  Upload,
  CheckCircle,
  Clock,
  Users,
  Award,
  Target,
  Shield,
  Zap,
  Globe,
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";

export default function RFPage() {
  const proposalTypes = [
    {
      title: "Service Partnerships",
      description: "Collaborate with us to expand our service offerings",
      icon: <Users className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
      requirements: [
        "Proven track record in relevant field",
        "Relevant certifications and licenses",
        "Quality standards compliance",
        "Customer service excellence",
        "Financial stability",
        "Insurance coverage",
      ],
      benefits: [
        "Access to our customer base",
        "Shared marketing opportunities",
        "Technical support and training",
        "Revenue sharing model",
      ],
    },
    {
      title: "Technology Solutions",
      description: "Propose innovative technology solutions",
      icon: <Zap className="w-8 h-8" />,
      color: "from-green-500 to-green-600",
      requirements: [
        "Technical expertise and experience",
        "Scalable and secure solutions",
        "Security compliance certification",
        "Integration capabilities",
        "24/7 technical support",
        "Documentation and training",
      ],
      benefits: [
        "Direct integration with our systems",
        "Co-development opportunities",
        "Technical partnership benefits",
        "Market expansion support",
      ],
    },
    {
      title: "Training Programs",
      description: "Offer training and skill development programs",
      icon: <Award className="w-8 h-8" />,
      color: "from-purple-500 to-purple-600",
      requirements: [
        "Qualified and certified trainers",
        "Comprehensive curriculum design",
        "Certification programs",
        "Practical applications and case studies",
        "Assessment and evaluation methods",
        "Ongoing support and updates",
      ],
      benefits: [
        "Access to our employee base",
        "Customized training programs",
        "Certification partnerships",
        "Long-term collaboration",
      ],
    },
    {
      title: "Community Initiatives",
      description: "Partner on community development projects",
      icon: <Globe className="w-8 h-8" />,
      color: "from-orange-500 to-orange-600",
      requirements: [
        "Social impact focus and mission",
        "Community engagement experience",
        "Measurable outcomes and metrics",
        "Sustainable approach and methodology",
        "Local network and connections",
        "Transparency and accountability",
      ],
      benefits: [
        "Community impact amplification",
        "Shared resources and expertise",
        "Brand visibility and recognition",
        "Social responsibility fulfillment",
      ],
    },
  ];

  const submissionProcess = [
    {
      step: 1,
      title: "Download RFP Template",
      description: "Get the official RFP template and guidelines",
      duration: "Immediate",
      requirements: [
        "RFP template download",
        "Guidelines review",
        "Requirements understanding",
      ],
    },
    {
      step: 2,
      title: "Complete Proposal Document",
      description: "Fill out the proposal with all required information",
      duration: "1-2 weeks",
      requirements: [
        "Detailed proposal",
        "Supporting documents",
        "Technical specifications",
        "Financial details",
      ],
    },
    {
      step: 3,
      title: "Submit with Attachments",
      description: "Submit your complete proposal package",
      duration: "1 day",
      requirements: [
        "Online submission",
        "Document uploads",
        "Confirmation receipt",
      ],
    },
    {
      step: 4,
      title: "Initial Review and Feedback",
      description: "We review and provide initial feedback",
      duration: "1-2 weeks",
      requirements: [
        "Proposal review",
        "Feedback provision",
        "Clarification requests",
      ],
    },
    {
      step: 5,
      title: "Detailed Evaluation",
      description: "Comprehensive evaluation of your proposal",
      duration: "2-3 weeks",
      requirements: [
        "Technical evaluation",
        "Financial assessment",
        "Reference checks",
        "Site visits",
      ],
    },
    {
      step: 6,
      title: "Final Decision and Notification",
      description: "Receive final decision and next steps",
      duration: "1 week",
      requirements: [
        "Decision notification",
        "Contract preparation",
        "Implementation planning",
      ],
    },
  ];

  const evaluationCriteria = [
    {
      title: "Technical Capability",
      weight: "30%",
      description: "Technical expertise and solution quality",
      factors: [
        "Relevant experience",
        "Technical competence",
        "Innovation",
        "Scalability",
      ],
    },
    {
      title: "Financial Stability",
      weight: "25%",
      description: "Financial health and pricing competitiveness",
      factors: [
        "Financial statements",
        "Pricing competitiveness",
        "Value proposition",
        "Payment terms",
      ],
    },
    {
      title: "Quality of Solution",
      weight: "20%",
      description: "Quality and effectiveness of proposed solution",
      factors: [
        "Solution design",
        "Quality standards",
        "Performance metrics",
        "Risk assessment",
      ],
    },
    {
      title: "Delivery Capability",
      weight: "15%",
      description: "Timeline and delivery capability",
      factors: [
        "Project timeline",
        "Resource availability",
        "Delivery methodology",
        "Risk mitigation",
      ],
    },
    {
      title: "Past Performance",
      weight: "10%",
      description: "Track record and references",
      factors: [
        "Client references",
        "Past project success",
        "Industry reputation",
        "Awards and recognition",
      ],
    },
  ];

  const submissionRequirements = [
    "Company profile and credentials",
    "Technical proposal with detailed specifications",
    "Financial proposal with cost breakdown",
    "Project timeline and milestones",
    "Team qualifications and experience",
    "Quality assurance and testing procedures",
    "Risk management and mitigation strategies",
    "Support and maintenance plans",
    "References from previous clients",
    "Certifications and compliance documents",
  ];

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Breadcrumb
          items={[
            { name: "Resources", href: "/resources" },
            { name: "Request for Proposal", href: "/resources/rfp" },
          ]}
        />
      </div>
      <div className="pt-24 min-h-screen bg-white [background-image:radial-gradient(#e6e7e9_10px,transparent_10px)] [background-size:16px_16px] bg-fixed font-roboto">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl p-12 shadow-xl border-2 border-[#E6B837]">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <FileSearch className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-5xl font-bold text-[#0b234a] mb-6">
                  Request for Proposal (RFP)
                </h1>
                <img
                  className="h-2 rounded-3xl mx-auto mb-8"
                  src="/gline.png"
                  alt=""
                />
                <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
                  We welcome proposals for partnerships, collaborations, and
                  service enhancements that can benefit our customers and
                  community. Submit your innovative ideas and solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-[#E6B837] text-[#0b234a] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#d4a94b] transition-colors shadow-lg">
                    <Download className="w-5 h-5 inline mr-2" />
                    Download RFP Template
                  </button>
                  <button className="border-2 border-[#0b234a] text-[#0b234a] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#0b234a] hover:text-white transition-colors">
                    <Upload className="w-5 h-5 inline mr-2" />
                    Submit Proposal
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Proposal Types */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0b234a] mb-4">
                Types of Proposals We Accept
              </h2>
              <p className="text-xl text-gray-600">
                Submit proposals for various partnership opportunities
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {proposalTypes.map((type, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${type.color} rounded-xl flex items-center justify-center text-white`}
                    >
                      {type.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#0b234a] mb-2">
                        {type.title}
                      </h3>
                      <p className="text-gray-600">{type.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-[#0b234a] mb-3">
                        Requirements
                      </h4>
                      <ul className="space-y-2">
                        {type.requirements.map((req, reqIndex) => (
                          <li
                            key={reqIndex}
                            className="flex items-center text-sm text-gray-600"
                          >
                            <CheckCircle className="w-4 h-4 mr-2 text-[#E6B837]" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0b234a] mb-3">
                        Benefits
                      </h4>
                      <ul className="space-y-2">
                        {type.benefits.map((benefit, benefitIndex) => (
                          <li
                            key={benefitIndex}
                            className="flex items-center text-sm text-gray-600"
                          >
                            <ArrowRight className="w-4 h-4 mr-2 text-[#E6B837]" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Submission Process */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0b234a] mb-4">
                Submission Process
              </h2>
              <p className="text-xl text-gray-600">
                Follow these steps to submit your proposal successfully
              </p>
            </div>

            <div className="space-y-8">
              {submissionProcess.map((step, index) => (
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

        {/* Evaluation Criteria */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0b234a] mb-4">
                Evaluation Criteria
              </h2>
              <p className="text-xl text-gray-600">
                How we evaluate and score your proposals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {evaluationCriteria.map((criteria, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-[#E6B837] rounded-full flex items-center justify-center mx-auto mb-3 text-[#0b234a] font-bold text-lg">
                      {criteria.weight}
                    </div>
                    <h3 className="text-xl font-bold text-[#0b234a] mb-2">
                      {criteria.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {criteria.description}
                    </p>
                  </div>

                  <div className="space-y-2">
                    {criteria.factors.map((factor, factorIndex) => (
                      <div
                        key={factorIndex}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 mr-2 text-[#E6B837]" />
                        {factor}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Submission Requirements */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-[#0b234a] to-[#1e3a5f] rounded-3xl p-12 text-white">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">
                  Submission Requirements
                </h2>
                <p className="text-xl text-gray-300">
                  Essential documents and information for your proposal
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {submissionRequirements.map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#E6B837] rounded-full flex items-center justify-center text-[#0b234a] font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-300">{requirement}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-300 mb-6">
                  All documents must be submitted in PDF format. Maximum file
                  size: 10MB per document.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-[#E6B837] text-[#0b234a] px-6 py-3 rounded-full font-semibold hover:bg-[#d4a94b] transition-colors">
                    Download Checklist
                  </button>
                  <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-[#0b234a] transition-colors">
                    Submit Proposal
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
                  Questions About RFP Process?
                </h2>
                <img
                  className="h-2 rounded-3xl mx-auto mb-8"
                  src="/gline.png"
                  alt=""
                />
                <p className="text-xl text-gray-600 mb-8">
                  Our RFP team is here to help you with any questions about the
                  proposal process, requirements, or evaluation criteria.
                  Contact us for personalized assistance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-[#E6B837] to-[#d4a94b] text-[#0b234a] px-8 py-4 rounded-full font-bold text-lg hover:from-[#d4a94b] hover:to-[#E6B837] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Contact RFP Team
                  </a>
                  <a
                    href="tel:+919780494854"
                    className="border-2 border-[#0b234a] text-[#0b234a] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#0b234a] hover:text-white transition-all duration-300"
                  >
                    Call RFP Officer
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
