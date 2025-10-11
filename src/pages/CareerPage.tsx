import { useState } from "react";
import {
  MapPin,
  Clock,
  Users,
  Briefcase,
  GraduationCap,
  Star,
  CheckCircle,
  ArrowRight,
  Mail,
  Phone,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";

export default function CareerPage() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);

  const jobOpenings = [
    {
      id: 1,
      title: "Customer Service Representative",
      department: "Customer Support",
      location: "Sujanpur, Punjab",
      type: "Full-time",
      experience: "1-3 years",
      description:
        "Handle customer inquiries, provide support for our services, and ensure customer satisfaction.",
      requirements: [
        "Excellent communication skills",
        "Customer service experience",
        "Knowledge of government services",
        "Basic computer skills",
      ],
      responsibilities: [
        "Answer customer calls and emails",
        "Provide information about our services",
        "Resolve customer issues",
        "Maintain customer records",
      ],
    },
    {
      id: 2,
      title: "Travel Consultant",
      department: "Travel Services",
      location: "Sujanpur, Punjab",
      type: "Full-time",
      experience: "2-4 years",
      description:
        "Assist customers with travel bookings, visa applications, and travel-related services.",
      requirements: [
        "Travel industry experience",
        "Knowledge of visa processes",
        "Strong interpersonal skills",
        "Attention to detail",
      ],
      responsibilities: [
        "Book flights, hotels, and transportation",
        "Process visa applications",
        "Provide travel advice",
        "Handle travel documentation",
      ],
    },
    {
      id: 3,
      title: "Government Services Specialist",
      department: "G2C Services",
      location: "Sujanpur, Punjab",
      type: "Full-time",
      experience: "2-5 years",
      description:
        "Help citizens with government service applications and documentation.",
      requirements: [
        "Knowledge of government portals",
        "Documentation expertise",
        "Problem-solving skills",
        "Patience and empathy",
      ],
      responsibilities: [
        "Assist with government applications",
        "Handle documentation",
        "Guide citizens through processes",
        "Maintain application records",
      ],
    },
    {
      id: 4,
      title: "Business Development Executive",
      department: "Business Development",
      location: "Sujanpur, Punjab",
      type: "Full-time",
      experience: "3-6 years",
      description:
        "Develop new business opportunities and maintain client relationships.",
      requirements: [
        "Sales and marketing experience",
        "Strong networking skills",
        "Business acumen",
        "Communication skills",
      ],
      responsibilities: [
        "Identify new business opportunities",
        "Build client relationships",
        "Develop service offerings",
        "Meet sales targets",
      ],
    },
  ];

  const benefits = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Environment",
      description: "Work with a supportive and collaborative team",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Learning Opportunities",
      description: "Continuous learning and skill development",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Career Growth",
      description: "Clear career progression and advancement opportunities",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Work-Life Balance",
      description: "Flexible working hours and work-life balance",
    },
  ];

  const companyValues = [
    "Customer First Approach",
    "Integrity and Transparency",
    "Innovation and Excellence",
    "Team Collaboration",
    "Social Responsibility",
  ];

  return (
    <>
      <Header />
      <div className="pt-24 min-h-screen bg-white [background-image:radial-gradient(#e6e7e9_10px,transparent_10px)] [background-size:16px_16px] bg-fixed font-roboto">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumb
            items={[
              { name: "Careers", href: "/careers" },
            ]}
          />
        </div>
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-5xl lg:text-6xl font-bold text-[#0b234a] leading-tight mb-6">
                Join Our
                <span className="block text-[#E6B837]">Growing Team</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
                Be part of Advait Swaroop Services and help us make a difference
                in people's lives through exceptional service delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#job-openings"
                  className="bg-[#E6B837] text-[#0b234a] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#d4a94b] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  View Open Positions
                </a>
                <a
                  href="#contact"
                  className="border-2 border-[#0b234a] text-[#0b234a] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#0b234a] hover:text-white transition-all duration-300"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Work With Us Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0b234a] mb-4">
                Why Work With Us?
              </h2>
              <p className="text-xl text-gray-600">
                Join a company that values its employees and provides growth
                opportunities
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-[#E6B837] rounded-full flex items-center justify-center mx-auto mb-4 text-[#0b234a]">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0b234a] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Values Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0b234a] to-[#1e3a5f]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
              <p className="text-xl text-gray-300">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {companyValues.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#E6B837] rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-[#0b234a]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#0b234a]">
                      {value}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings Section */}
        <section id="job-openings" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0b234a] mb-4">
                Current Openings
              </h2>
              <p className="text-xl text-gray-600">
                Explore exciting career opportunities with us
              </p>
            </div>
            <div className="space-y-6">
              {jobOpenings.map((job) => (
                <div
                  key={job.id}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#0b234a] mb-2">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 mb-4">
                        <div className="flex items-center text-gray-600">
                          <Briefcase className="w-4 h-4 mr-2" />
                          {job.department}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="w-4 h-4 mr-2" />
                          {job.location}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Clock className="w-4 h-4 mr-2" />
                          {job.type}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Star className="w-4 h-4 mr-2" />
                          {job.experience}
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{job.description}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 mt-4 lg:mt-0 lg:ml-6">
                      <button
                        onClick={() =>
                          setSelectedJob(selectedJob === job.id ? null : job.id)
                        }
                        className="bg-[#E6B837] text-[#0b234a] px-6 py-3 rounded-full font-semibold hover:bg-[#d4a94b] transition-colors"
                      >
                        {selectedJob === job.id
                          ? "Hide Details"
                          : "View Details"}
                      </button>
                      <a
                        href={`mailto:advaitservicess@gmail.com?subject=Application for ${job.title}`}
                        className="border-2 border-[#0b234a] text-[#0b234a] px-6 py-3 rounded-full font-semibold hover:bg-[#0b234a] hover:text-white transition-colors"
                      >
                        Apply Now
                      </a>
                    </div>
                  </div>

                  {selectedJob === job.id && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-lg font-semibold text-[#0b234a] mb-3">
                            Requirements
                          </h4>
                          <ul className="space-y-2">
                            {job.requirements.map((req, index) => (
                              <li key={index} className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-[#E6B837] mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-600">{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-[#0b234a] mb-3">
                            Responsibilities
                          </h4>
                          <ul className="space-y-2">
                            {job.responsibilities.map((resp, index) => (
                              <li key={index} className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-[#E6B837] mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-600">{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0b234a] mb-4">
                How to Apply
              </h2>
              <p className="text-xl text-gray-600">
                Simple steps to join our team
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#E6B837] rounded-full flex items-center justify-center mx-auto mb-4 text-[#0b234a] text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold text-[#0b234a] mb-2">
                  Find Your Role
                </h3>
                <p className="text-gray-600">
                  Browse our current openings and find the position that matches
                  your skills
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#E6B837] rounded-full flex items-center justify-center mx-auto mb-4 text-[#0b234a] text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold text-[#0b234a] mb-2">
                  Send Application
                </h3>
                <p className="text-gray-600">
                  Email your resume and cover letter to our HR team
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#E6B837] rounded-full flex items-center justify-center mx-auto mb-4 text-[#0b234a] text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold text-[#0b234a] mb-2">
                  Interview Process
                </h3>
                <p className="text-gray-600">
                  We'll review your application and schedule an interview if
                  you're a good fit
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl p-12 shadow-xl border-2 border-[#E6B837]">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-[#0b234a] mb-6">
                  Ready to Join Our Team?
                </h2>
                <img
                  className="h-2 rounded-3xl mx-auto mb-8"
                  src="/gline.png"
                  alt=""
                />
                <p className="text-xl text-gray-600 mb-8">
                  Send us your application or get in touch for more information
                  about career opportunities.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gradient-to-br from-[#0b234a] to-[#1e3a5f] rounded-2xl p-8 text-white">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-[#E6B837] rounded-full flex items-center justify-center mr-4">
                      <Mail className="w-6 h-6 text-[#0b234a]" />
                    </div>
                    <h3 className="text-2xl font-bold">Email Us</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Send your resume and cover letter to our HR team
                  </p>
                  <a
                    href="mailto:advaitservicess@gmail.com"
                    className="text-[#E6B837] font-semibold hover:text-[#d4a94b] transition-colors text-lg"
                  >
                    advaitservicess@gmail.com
                  </a>
                </div>

                <div className="bg-gradient-to-br from-[#0b234a] to-[#1e3a5f] rounded-2xl p-8 text-white">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-[#E6B837] rounded-full flex items-center justify-center mr-4">
                      <Phone className="w-6 h-6 text-[#0b234a]" />
                    </div>
                    <h3 className="text-2xl font-bold">Call Us</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Speak directly with our HR team for career inquiries
                  </p>
                  <a
                    href="tel:+919780494854"
                    className="text-[#E6B837] font-semibold hover:text-[#d4a94b] transition-colors text-lg"
                  >
                    +91 97804-94854
                  </a>
                </div>
              </div>

              <div className="text-center">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:advaitservicess@gmail.com?subject=Career Inquiry"
                    className="bg-gradient-to-r from-[#E6B837] to-[#d4a94b] text-[#0b234a] px-8 py-4 rounded-full font-bold text-lg hover:from-[#d4a94b] hover:to-[#E6B837] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Send Application
                  </a>
                  <a
                    href="/contact"
                    className="border-2 border-[#0b234a] text-[#0b234a] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#0b234a] hover:text-white transition-all duration-300"
                  >
                    Contact Us
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
