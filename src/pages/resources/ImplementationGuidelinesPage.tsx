import {
  FileText,
  Clock,
  CheckCircle,
  Download,
  ArrowRight,
  Users,
  Shield,
  Zap,
  Target,
  Award,
} from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";

export default function ImplementationGuidelinesPage() {
  const implementationSteps = [
    {
      title: "Initial Setup",
      description: "Configure your account and basic settings",
      duration: "15-30 minutes",
      icon: <Users className="w-6 h-6" />,
      requirements: [
        "Valid email address",
        "Business registration documents",
        "Bank account details",
        "Contact information",
      ],
      deliverables: [
        "Account activation",
        "Basic profile setup",
        "Initial service access",
      ],
    },
    {
      title: "Service Integration",
      description: "Integrate our services with your existing systems",
      duration: "1-2 hours",
      icon: <Zap className="w-6 h-6" />,
      requirements: [
        "API access credentials",
        "Technical documentation",
        "Testing environment",
        "Integration specifications",
      ],
      deliverables: [
        "API integration complete",
        "Service endpoints configured",
        "Authentication setup",
      ],
    },
    {
      title: "Testing & Validation",
      description: "Test all services and validate functionality",
      duration: "2-4 hours",
      icon: <Shield className="w-6 h-6" />,
      requirements: [
        "Test data sets",
        "Validation tools",
        "Quality assurance checklist",
        "Performance metrics",
      ],
      deliverables: [
        "Test results report",
        "Performance validation",
        "Security compliance check",
      ],
    },
    {
      title: "Go Live",
      description: "Launch services for your customers",
      duration: "1 hour",
      icon: <Target className="w-6 h-6" />,
      requirements: [
        "Production environment ready",
        "Monitoring tools configured",
        "Support team available",
        "Backup systems in place",
      ],
      deliverables: [
        "Live service deployment",
        "Customer access enabled",
        "Monitoring active",
      ],
    },
  ];

  const benefits = [
    {
      title: "Reduced Implementation Time",
      description: "Streamlined process saves 40% of typical setup time",
      icon: <Clock className="w-8 h-8" />,
    },
    {
      title: "Minimized Technical Errors",
      description: "Proven methodology reduces errors by 60%",
      icon: <Shield className="w-8 h-8" />,
    },
    {
      title: "Comprehensive Support",
      description: "24/7 technical support throughout implementation",
      icon: <Users className="w-8 h-8" />,
    },
    {
      title: "Scalable Solutions",
      description: "Built to grow with your business needs",
      icon: <Award className="w-8 h-8" />,
    },
  ];

  const bestPractices = [
    "Start with a pilot project to test the waters",
    "Ensure all team members are trained before go-live",
    "Maintain regular communication with our support team",
    "Document all customizations and configurations",
    "Plan for regular system updates and maintenance",
    "Establish clear escalation procedures for issues",
  ];

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Breadcrumb
          items={[
            { name: "Resources", href: "/resources" },
            {
              name: "Implementation Guidelines",
              href: "/resources/implementation-guidelines",
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
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-5xl font-bold text-[#0b234a] mb-6">
                  Implementation Guidelines
                </h1>
                <img
                  className="h-2 rounded-3xl mx-auto mb-8"
                  src="/gline.png"
                  alt=""
                />
                <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
                  Comprehensive step-by-step guidelines to help you implement
                  our services quickly and efficiently. Follow our proven
                  methodology for successful deployment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-[#E6B837] text-[#0b234a] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#d4a94b] transition-colors shadow-lg">
                    <Download className="w-5 h-5 inline mr-2" />
                    Download PDF Guide
                  </button>
                  <button className="border-2 border-[#0b234a] text-[#0b234a] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#0b234a] hover:text-white transition-colors">
                    <Users className="w-5 h-5 inline mr-2" />
                    Contact Implementation Team
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Steps */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0b234a] mb-4">
                Implementation Process
              </h2>
              <p className="text-xl text-gray-600">
                Follow these steps for successful implementation
              </p>
            </div>

            <div className="space-y-8">
              {implementationSteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white">
                        {step.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-4">
                        <h3 className="text-2xl font-bold text-[#0b234a]">
                          {step.title}
                        </h3>
                        <span className="bg-[#E6B837] text-[#0b234a] px-3 py-1 rounded-full text-sm font-semibold">
                          Step {index + 1}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{step.description}</p>

                      <div className="flex items-center space-x-6 mb-6">
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-2" />
                          Duration: {step.duration}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-[#0b234a] mb-3">
                            Requirements
                          </h4>
                          <ul className="space-y-2">
                            {step.requirements.map((req, reqIndex) => (
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
                            Deliverables
                          </h4>
                          <ul className="space-y-2">
                            {step.deliverables.map((deliverable, delIndex) => (
                              <li
                                key={delIndex}
                                className="flex items-center text-sm text-gray-600"
                              >
                                <ArrowRight className="w-4 h-4 mr-2 text-[#E6B837]" />
                                {deliverable}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0b234a] mb-4">
                Why Follow Our Guidelines?
              </h2>
              <p className="text-xl text-gray-600">
                Proven benefits of our implementation methodology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="w-16 h-16 bg-[#E6B837] rounded-full flex items-center justify-center mx-auto mb-4 text-[#0b234a]">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0b234a] mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Best Practices Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-[#0b234a] to-[#1e3a5f] rounded-3xl p-12 text-white">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Best Practices</h2>
                <p className="text-xl text-gray-300">
                  Follow these recommendations for optimal results
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {bestPractices.map((practice, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#E6B837] rounded-full flex items-center justify-center text-[#0b234a] font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-300">{practice}</p>
                  </div>
                ))}
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
                  Need Implementation Support?
                </h2>
                <img
                  className="h-2 rounded-3xl mx-auto mb-8"
                  src="/gline.png"
                  alt=""
                />
                <p className="text-xl text-gray-600 mb-8">
                  Our implementation team is ready to help you every step of the
                  way. Get personalized support and guidance for your specific
                  needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-[#E6B837] to-[#d4a94b] text-[#0b234a] px-8 py-4 rounded-full font-bold text-lg hover:from-[#d4a94b] hover:to-[#E6B837] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Get Implementation Support
                  </a>
                  <a
                    href="tel:+919780494854"
                    className="border-2 border-[#0b234a] text-[#0b234a] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#0b234a] hover:text-white transition-all duration-300"
                  >
                    Call Implementation Team
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
