import {
  Plane,
  Bus,
  Train,
  Globe,
  MapPin,
  Clock,
  Star,
  Shield,
  Phone,
  CheckCircle,
  ArrowRight,
  Users,
  Calendar,
  CreditCard,
  Smartphone,
  Banknote,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import SEOHead from "../components/SEOHead";
import { pageSEOData } from "../utils/seoData";

export default function TravelPage() {
  const travelServices = [
    {
      title: "Air Ticket Booking",
      description:
        "Book domestic and international flights with the best deals",
      icon: <Plane className="w-8 h-8" />,
      features: [
        "Best Price Guarantee",
        "24/7 Support",
        "Easy Cancellation",
        "Real-time Updates",
      ],
      href: "/travel/air-ticket",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Bus Booking",
      description:
        "Comfortable bus travel across India with verified operators",
      icon: <Bus className="w-8 h-8" />,
      features: [
        "Verified Operators",
        "Live Tracking",
        "Multiple Payment Options",
        "Easy Booking",
      ],
      href: "/travel/bus-booking",
      color: "from-green-500 to-green-600",
    },
    {
      title: "Rail Ticket Booking",
      description:
        "IRCTC authorized train ticket booking with instant confirmation",
      icon: <Train className="w-8 h-8" />,
      features: [
        "IRCTC Authorized",
        "Tatkal Booking",
        "PNR Status",
        "Real-time Updates",
      ],
      href: "/travel/rail-ticket",
      color: "from-red-500 to-red-600",
    },
    {
      title: "Visa Services",
      description: "Expert visa assistance for countries worldwide",
      icon: <Globe className="w-8 h-8" />,
      features: [
        "Expert Guidance",
        "High Success Rate",
        "Document Assistance",
        "Fast Processing",
      ],
      href: "/travel/visa",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const popularDestinations = [
    {
      name: "Goa",
      type: "Beach Destination",
      price: "₹5,000",
      duration: "3-5 days",
    },
    {
      name: "Kashmir",
      type: "Hill Station",
      price: "₹8,000",
      duration: "5-7 days",
    },
    {
      name: "Kerala",
      type: "Backwaters",
      price: "₹6,000",
      duration: "4-6 days",
    },
    {
      name: "Rajasthan",
      type: "Heritage",
      price: "₹7,000",
      duration: "5-7 days",
    },
    {
      name: "Himachal Pradesh",
      type: "Adventure",
      price: "₹9,000",
      duration: "6-8 days",
    },
    {
      name: "Tamil Nadu",
      type: "Temples",
      price: "₹4,000",
      duration: "3-5 days",
    },
  ];

  const whyChooseUs = [
    {
      title: "Best Price Guarantee",
      description: "We guarantee the lowest prices for all travel bookings",
      icon: <Shield className="w-8 h-8" />,
    },
    {
      title: "24/7 Customer Support",
      description: "Round-the-clock assistance for all your travel needs",
      icon: <Phone className="w-8 h-8" />,
    },
    {
      title: "Easy Cancellation",
      description: "Flexible cancellation and rescheduling options",
      icon: <CheckCircle className="w-8 h-8" />,
    },
    {
      title: "Secure Booking",
      description: "Safe and secure payment processing with SSL encryption",
      icon: <Shield className="w-8 h-8" />,
    },
  ];

  const paymentMethods = [
    {
      name: "Credit Card",
      icon: <CreditCard className="w-6 h-6" />,
      color: "bg-blue-500",
    },
    {
      name: "Net Banking",
      icon: <Banknote className="w-6 h-6" />,
      color: "bg-green-500",
    },
    {
      name: "UPI",
      icon: <Smartphone className="w-6 h-6" />,
      color: "bg-purple-500",
    },
    {
      name: "NEFT/RTGS",
      icon: <Banknote className="w-6 h-6" />,
      color: "bg-orange-500",
    },
    {
      name: "Cash",
      icon: <Banknote className="w-6 h-6" />,
      color: "bg-gray-500",
    },
    {
      name: "EMI",
      icon: <CreditCard className="w-6 h-6" />,
      color: "bg-pink-500",
    },
    {
      name: "Pay Later",
      icon: <Clock className="w-6 h-6" />,
      color: "bg-indigo-500",
    },
  ];

  return (
    <>
      <SEOHead
        title={pageSEOData.travel.title}
        description={pageSEOData.travel.description}
        keywords={pageSEOData.travel.keywords}
        canonicalUrl="https://www.advaitswaroopservices.com/travel"
      />
      <Header />
      <div className="pt-24 min-h-screen bg-white [background-image:radial-gradient(#e6e7e9_10px,transparent_10px)] [background-size:16px_16px] bg-fixed font-roboto">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumb
            items={[
              { name: "Services", href: "/services" },
              { name: "Travel", href: "/travel" },
            ]}
          />
        </div>
        {/* Hero Section */}

        {/* Travel Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0b234a] mb-4">
                Our Travel Services
              </h2>
              <p className="text-xl text-gray-600">
                Choose from our comprehensive range of travel services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {travelServices.map((service, index) => (
                <a
                  key={index}
                  href={service.href}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className="flex items-start space-x-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                    >
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#0b234a] mb-3 group-hover:text-[#E6B837] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {service.description}
                      </p>
                      <div className="grid grid-cols-2 gap-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center text-sm text-gray-600"
                          >
                            <CheckCircle className="w-4 h-4 mr-2 text-[#E6B837]" />
                            {feature}
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center text-[#E6B837] font-semibold group-hover:text-[#d4a94b] transition-colors">
                        <span>Book Now</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Destinations */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0b234a] mb-4">
                Popular Destinations
              </h2>
              <p className="text-xl text-gray-600">
                Most booked destinations with great deals and packages
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularDestinations.map((destination, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-[#E6B837] rounded-full flex items-center justify-center text-[#0b234a]">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#0b234a]">
                          {destination.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {destination.type}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Duration:</span>
                      <span className="text-sm font-semibold text-[#0b234a]">
                        {destination.duration}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Price:</span>
                      <span className="text-sm font-semibold text-[#E6B837]">
                        {destination.price}
                      </span>
                    </div>
                  </div>
                  <button className="w-full bg-[#0b234a] text-white py-2 rounded-lg font-semibold hover:bg-[#1e3a5f] transition-colors">
                    Book Package
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0b234a] mb-4">
                Why Choose Our Travel Services?
              </h2>
              <p className="text-xl text-gray-600">
                Experience the best in travel booking with unmatched benefits
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((feature, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="w-16 h-16 bg-[#E6B837] rounded-full flex items-center justify-center mx-auto mb-4 text-[#0b234a]">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0b234a] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0b234a] mb-4">
                Payment Methods
              </h2>
              <p className="text-xl text-gray-600">
                We accept all major payment methods for your convenience
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {paymentMethods.map((method, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
                >
                  <div
                    className={`w-12 h-12 ${method.color} rounded-full flex items-center justify-center mx-auto mb-3 text-white`}
                  >
                    {method.icon}
                  </div>
                  <p className="text-sm font-semibold text-[#0b234a]">
                    {method.name}
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
                  Need Help with Travel Planning?
                </h2>
                <img
                  className="h-2 rounded-3xl mx-auto mb-8"
                  src="/gline.png"
                  alt=""
                />
                <p className="text-xl text-gray-600 mb-8">
                  Our travel experts are here to help you plan your perfect
                  journey. Contact us for personalized assistance and exclusive
                  travel deals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-[#E6B837] to-[#d4a94b] text-[#0b234a] px-8 py-4 rounded-full font-bold text-lg hover:from-[#d4a94b] hover:to-[#E6B837] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Contact Travel Expert
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
