import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Users,
  Award,
  CheckCircle,
  Star,
  Target,
  Heart,
  Shield,
  Lightbulb,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";

export default function AboutUsPage() {
  const milestones = [
    {
      year: "2018",
      title: "Company Founded",
      description: "Started our journey with a vision to serve the community",
    },
    {
      year: "2019",
      title: "Service Expansion",
      description: "Added government services and travel solutions",
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Embraced technology to serve customers better",
    },
    {
      year: "2021",
      title: "30,000+ Customers",
      description: "Reached a major milestone in customer satisfaction",
    },
    {
      year: "2024",
      title: "Present Day",
      description: "Continuing to grow and serve with excellence",
    },
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Customer First",
      description:
        "Every decision we make is guided by what's best for our customers",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trust & Reliability",
      description:
        "Building lasting relationships through consistent, dependable service",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description:
        "Continuously improving our services with new ideas and technology",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Focus",
      description: "Serving our local community with dedication and care",
    },
  ];

  const teamMembers = [
    {
      name: "Advait Swaroop",
      role: "Founder & CEO",
      description:
        "Visionary leader with 7+ years of experience in service industry",
    },
    {
      name: "Service Team",
      role: "Customer Support",
      description: "Dedicated professionals ensuring customer satisfaction",
    },
    {
      name: "Technical Team",
      role: "Digital Solutions",
      description: "Experts in government portals and digital services",
    },
  ];

  const achievements = [
    {
      number: "30,000+",
      label: "Happy Customers",
      description: "Satisfied clients across Punjab and beyond",
    },
    {
      number: "7+",
      label: "Years Experience",
      description: "Proven track record since 2018",
    },
    {
      number: "50+",
      label: "Services Offered",
      description: "Comprehensive solutions for all needs",
    },
    {
      number: "99%",
      label: "Success Rate",
      description: "Consistent delivery of quality services",
    },
  ];

  return (
    <>
      <Header />
      <div className="pt-24 min-h-screen bg-white [background-image:radial-gradient(#e6e7e9_10px,transparent_10px)] [background-size:16px_16px] bg-fixed font-roboto">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumb items={[{ name: "About Us", href: "/about" }]} />
        </div>

        {/* Our Story Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-[#0b234a] mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-lg text-gray-600">
                  <p>
                    Founded in 2018 by Advait Swaroop, our company began with a
                    simple yet powerful vision: to bridge the gap between
                    citizens and essential services. What started as a small
                    initiative in Sujanpur, Punjab, has grown into a trusted
                    service provider serving over 30,000 satisfied customers.
                  </p>
                  <p>
                    We recognized that navigating government services, travel
                    bookings, and educational processes can be overwhelming for
                    many people. Our mission was to simplify these processes and
                    provide reliable, professional assistance to our community.
                  </p>
                  <p>
                    Today, we continue to expand our services while maintaining
                    our core values of integrity, customer satisfaction, and
                    community service. Every day, we work tirelessly to ensure
                    that our clients receive the best possible service and
                    support.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#0b234a] to-[#1e3a5f] rounded-2xl p-8 text-white">
                <div className="text-center">
                  <img
                    src="/icon.png"
                    alt="Advait Swaroop Services"
                    className="w-24 h-24 rounded-full mx-auto mb-6"
                  />
                  <h3 className="text-2xl font-bold mb-2">
                    Advait Swaroop Services
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Your Trusted Service Partner
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#E6B837] mr-3" />
                      <span>7+ Years Experience</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#E6B837] mr-3" />
                      <span>30,000+ Happy Customers</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#E6B837] mr-3" />
                      <span>50+ Services Offered</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0b234a] mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-600">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="w-16 h-16 bg-[#E6B837] rounded-full flex items-center justify-center mx-auto mb-4 text-[#0b234a]">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0b234a] mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Journey Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0b234a] mb-4">
                Our Journey
              </h2>
              <p className="text-xl text-gray-600">
                Key milestones in our growth story
              </p>
            </div>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#E6B837]"></div>
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`flex items-center ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    <div className="w-1/2 px-6">
                      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                        <div className="text-2xl font-bold text-[#E6B837] mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-bold text-[#0b234a] mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                    <div className="w-1/2 flex justify-center">
                      <div className="w-4 h-4 bg-[#E6B837] rounded-full border-4 border-white shadow-lg"></div>
                    </div>
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0b234a] mb-4">
                Our Team
              </h2>
              <p className="text-xl text-gray-600">
                Meet the people behind our success
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100"
                >
                  <div className="w-20 h-20 bg-[#E6B837] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-[#0b234a]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0b234a] mb-2">
                    {member.name}
                  </h3>
                  <p className="text-[#E6B837] font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0b234a] mb-4">
                Our Achievements
              </h2>
              <p className="text-xl text-gray-600">
                Numbers that speak for our commitment
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-gradient-to-br from-[#0b234a] to-[#1e3a5f] rounded-2xl text-white"
                >
                  <div className="text-4xl font-bold text-[#E6B837] mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-lg font-semibold mb-2">
                    {achievement.label}
                  </div>
                  <div className="text-gray-300 text-sm">
                    {achievement.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl p-12 shadow-xl border-2 border-[#E6B837]">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-[#0b234a] mb-6">
                  Visit Our Office
                </h2>
                <img
                  className="h-2 rounded-3xl mx-auto mb-8"
                  src="/gline.png"
                  alt=""
                />
                <p className="text-xl text-gray-600">
                  We're located in the heart of Sujanpur, Punjab, ready to serve
                  you
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-[#0b234a] to-[#1e3a5f] rounded-2xl p-8 text-white">
                    <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>

                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-[#E6B837] rounded-full flex items-center justify-center">
                          <Phone size={20} className="text-[#0b234a]" />
                        </div>
                        <div>
                          <p className="font-semibold">Phone</p>
                          <p className="text-gray-300">+91 97804-94854</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-[#E6B837] rounded-full flex items-center justify-center">
                          <Mail size={20} className="text-[#0b234a]" />
                        </div>
                        <div>
                          <p className="font-semibold">Email</p>
                          <p className="text-gray-300">
                            advaitservicess@gmail.com
                          </p>
                          <p className="text-gray-300">gen.infoass@gmail.com</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-[#E6B837] rounded-full flex items-center justify-center mt-1">
                          <MapPin size={20} className="text-[#0b234a]" />
                        </div>
                        <div>
                          <p className="font-semibold">Address</p>
                          <p className="text-gray-300">
                            Adarsh Colony, Opposite Sericulture Gate Canal Road,
                            Sujanpur, Pathankot-145023, Punjab
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-[#E6B837] rounded-full flex items-center justify-center">
                          <Clock size={20} className="text-[#0b234a]" />
                        </div>
                        <div>
                          <p className="font-semibold">Business Hours</p>
                          <p className="text-gray-300">
                            Monday - Saturday: 9:00 AM - 7:00 PM
                          </p>
                          <p className="text-gray-300">
                            Sunday: 10:00 AM - 5:00 PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Google Map */}
                <div className="bg-white rounded-2xl p-4 shadow-2xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3371.9499930297284!2d75.60177397636447!3d32.31319717386084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391c799ac76c157d%3A0xa2c2f1be731e9c43!2sAdvait%20Swaroop%20Services!5e0!3m2!1sen!2sin!4v1760121142270!5m2!1sen!2sin"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Advait Swaroop Services Location"
                    className="rounded-lg"
                  ></iframe>
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
