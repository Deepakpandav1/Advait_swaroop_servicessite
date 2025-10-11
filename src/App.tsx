import {
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Users,
  Award,
  Clock,
} from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PerformanceOptimizer from "./components/PerformanceOptimizer";

import TestimonialsSlider from "./components/TestimonialsSlider";

const carouselItems = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600&q=80&auto=format&fit=crop",
    alt: "Business Services",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80&auto=format&fit=crop",
    alt: "Travel Services",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=1600&q=80&auto=format&fit=crop",
    alt: "Government Services",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1600&q=80&auto=format&fit=crop",
    alt: "Education Services",
  },
];

function App() {
  const topServices = [
    {
      key: "education",
      title: "Education",
      desc: "Admissions, counselling, scholarships guidance and more.",
      href: "/education",
      icon: "🎓",
      color: "from-blue-500 to-cyan-500",
    },
    {
      key: "travel",
      title: "Travel",
      desc: "Flights, hotels, tours and hassle‑free itineraries.",
      href: "/travel",
      icon: "✈️",
      color: "from-green-500 to-emerald-500",
    },
    {
      key: "insurance",
      title: "Insurance",
      desc: "Health, travel and vehicle coverage options.",
      href: "/insurance",
      icon: "🛡️",
      color: "from-purple-500 to-pink-500",
    },
    {
      key: "b2c",
      title: "B2C Services",
      desc: "Personalized consumer services for everyday needs.",
      href: "/b2c",
      icon: "👤",
      color: "from-orange-500 to-red-500",
    },
    {
      key: "g2c",
      title: "G2C Services",
      desc: "Government-to-citizen facilitation services.",
      href: "/g2c",
      icon: "🏛️",
      color: "from-indigo-500 to-blue-500",
    },
  ];

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "30000+ Happy Customers",
      desc: "Trusted by thousands of satisfied clients",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "7+ Years Experience",
      desc: "Proven track record since 2018",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Support",
      desc: "Round-the-clock assistance for your needs",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "100% Reliable",
      desc: "Consistent, dependable service delivery",
    },
  ];

  const stats = [
    { number: "30000+", label: "Happy Customers", color: "text-[#E6B837]" },
    { number: "7+", label: "Years Experience", color: "text-[#0b234a]" },
    { number: "50+", label: "Services Offered", color: "text-[#E6B837]" },
    { number: "99%", label: "Success Rate", color: "text-[#0b234a]" },
  ];

  return (
    <>
      <PerformanceOptimizer />
      <Header />
      <div className="pt-24 min-h-screen bg-white [background-image:radial-gradient(#e6e7e9_10px,transparent_10px)] [background-size:16px_16px] bg-fixed font-roboto">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Hero Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-5xl lg:text-6xl font-bold text-[#0b234a] leading-tight">
                    Your Trusted
                    <span className="block text-[#E6B837]">
                      Service Partner
                    </span>
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Comprehensive solutions for education, travel, insurance,
                    and government services. Making your life easier with
                    professional, reliable assistance.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/services"
                    className="bg-[#E6B837] text-[#0b234a] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#d4a94b] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Explore Services
                  </a>
                  <a
                    href="/contact"
                    className="border-2 border-[#0b234a] text-[#0b234a] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#0b234a] hover:text-white transition-all duration-300"
                  >
                    Get Started
                  </a>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-6 pt-8">
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-2xl font-bold text-[#0b234a]">
                      30000+
                    </div>
                    <div className="text-sm text-gray-600">Happy Customers</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-2xl font-bold text-[#0b234a]">7+</div>
                    <div className="text-sm text-gray-600">
                      Years Experience
                    </div>
                  </div>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative">
                <div className="relative z-10">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80&auto=format&fit=crop"
                    alt="Professional Services"
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-72 h-72 bg-[#E6B837] rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-[#0b234a] rounded-full opacity-20 blur-3xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0b234a] mb-4">
                Why Choose Us?
              </h2>
              <p className="text-xl text-gray-600">
                We provide exceptional service with a personal touch
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-[#E6B837] rounded-full flex items-center justify-center mx-auto mb-4 text-[#0b234a]">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0b234a] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0b234a] to-[#1e3a5f]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Our Services
              </h2>
              <p className="text-xl text-gray-300">
                Comprehensive solutions for all your needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {topServices.map((service) => (
                <a
                  key={service.key}
                  href={service.href}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="text-center">
                    <div className="text-6xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-[#0b234a] mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{service.desc}</p>
                    <div className="inline-flex items-center text-[#E6B837] font-semibold group-hover:text-[#d4a94b] transition-colors">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold text-[#0b234a] mb-6 text-center">
                About Advait Swaroop Services
              </h2>
              <div className="flex justify-between items-center gap-5 max-w-5xl mx-auto">
                <div className="text-justify w-3xl">
                  <p className="text-lg text-gray-600 mb-6">
                    Since 2018, we have been providing comprehensive service
                    solutions across education, travel, insurance, and
                    government services. Our commitment to excellence and
                    customer satisfaction has made us a trusted partner for
                    thousands of clients.
                  </p>
                  <p className="text-lg text-gray-600 mb-8">
                    We understand that every client has unique needs, and we
                    tailor our services to provide the best possible outcomes.
                    Our experienced team is dedicated to making your journey
                    smooth and successful.
                  </p>
                </div>
                <div className="flex items-center space-x-4 h-96 border-2 border-amber-500 rounded-4xl bg-white">
                  <div className="items-center flex flex-col">
                    <img
                      src="/icon.png"
                      alt="Advait Swaroop Services"
                      className="w-16 h-30 rounded-full"
                    />
                    <h3 className="text-xl font-bold text-[#0b234a] text-center">
                      Advait Swaroop Services
                    </h3>
                    <p className="text-gray-600">
                      Your Trusted Service Partner
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#E6B837] to-[#d4a94b]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0b234a] mb-4">
                Our Impact in Numbers
              </h2>
              <p className="text-xl text-[#0b234a]">
                Building trust through measurable results
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold text-[#0b234a] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-[#0b234a]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0b234a] mb-4">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-600">
                Real feedback from satisfied clients
              </p>
            </div>
            <TestimonialsSlider />
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0b234a] to-[#1e3a5f]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of satisfied customers who trust Advait Swaroop
              Services for all their needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/services"
                className="bg-[#E6B837] text-[#0b234a] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#d4a94b] transition-colors shadow-lg"
              >
                Explore Our Services
              </a>
              <a
                href="/contact"
                className="bg-white text-[#0b234a] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Contact Us Today
              </a>
            </div>
          </div>
        </section>

        {/* Visit Our Office Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 ">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0b234a] mb-4">
                Visit Our Office
              </h2>
              <p className="text-xl text-gray-600">
                Advait Swaroop Services, Adarsh Colony, Canal Rd, opp.
                Sericulture Gate, Sujanpur, Punjab 145023
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                          Sujanpur, Pathankot-145023
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
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
        </section>
      </div>
      <Footer />
    </>
  );
}

export default App;
