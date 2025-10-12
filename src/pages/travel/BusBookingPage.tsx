import { useState } from "react";
import {
  Bus,
  MapPin,
  Calendar,
  Users,
  Clock,
  Star,
  Wifi,
  Coffee,
  Snowflake,
  Shield,
  Phone,
  CreditCard,
  Smartphone,
  Banknote,
  CheckCircle,
  Heart,
  Zap,
  Search,
  Filter,
  ChevronDown,
  X,
} from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";

export default function BusBookingPage() {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    departureDate: "",
    returnDate: "",
    passengers: "1",
    name: "",
    contact: "",
    email: "",
    message: "",
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [requestNumber, setRequestNumber] = useState("");

  const busTypes = [
    {
      id: "ac",
      title: "AC Bus",
      description: "Air-conditioned luxury",
      icon: <Snowflake className="w-5 h-5" />,
      features: ["AC", "Comfortable Seats", "Water Bottle"],
    },
    {
      id: "nonac",
      title: "Non-AC Bus",
      description: "Regular buses",
      icon: <Bus className="w-5 h-5" />,
      features: ["Basic Seats", "Window Seats", "Affordable"],
    },
    {
      id: "sleeper",
      title: "Sleeper Bus",
      description: "Overnight comfort",
      icon: <Heart className="w-5 h-5" />,
      features: ["Berths", "Blankets", "Pillows"],
    },
    {
      id: "luxury",
      title: "Luxury Bus",
      description: "Premium amenities",
      icon: <Star className="w-5 h-5" />,
      features: ["WiFi", "Charging Points", "Entertainment"],
    },
  ];

  const popularRoutes = [
    {
      from: "Delhi",
      to: "Mumbai",
      price: "₹1,200",
      duration: "12h 30m",
      operator: "RedBus",
      departure: "20:00",
      arrival: "08:30",
    },
    {
      from: "Mumbai",
      to: "Bangalore",
      price: "₹1,800",
      duration: "14h 15m",
      operator: "VRL Travels",
      departure: "18:30",
      arrival: "08:45",
    },
    {
      from: "Delhi",
      to: "Goa",
      price: "₹2,500",
      duration: "18h 00m",
      operator: "Neeta Travels",
      departure: "19:00",
      arrival: "13:00",
    },
    {
      from: "Bangalore",
      to: "Chennai",
      price: "₹800",
      duration: "6h 30m",
      operator: "Orange Tours",
      departure: "22:00",
      arrival: "04:30",
    },
    {
      from: "Delhi",
      to: "Kolkata",
      price: "₹1,500",
      duration: "16h 45m",
      operator: "Sharma Travels",
      departure: "21:30",
      arrival: "14:15",
    },
    {
      from: "Mumbai",
      to: "Pune",
      price: "₹400",
      duration: "3h 30m",
      operator: "MSRTC",
      departure: "14:00",
      arrival: "17:30",
    },
  ];

  const busOperators = [
    { name: "RedBus", rating: 4.5, buses: 150, routes: 500 },
    { name: "VRL Travels", rating: 4.3, buses: 120, routes: 400 },
    { name: "Neeta Travels", rating: 4.4, buses: 100, routes: 350 },
    { name: "Orange Tours", rating: 4.2, buses: 80, routes: 300 },
    { name: "Sharma Travels", rating: 4.1, buses: 90, routes: 320 },
    { name: "MSRTC", rating: 4.0, buses: 200, routes: 600 },
  ];

  const amenities = [
    { name: "WiFi", icon: <Wifi className="w-5 h-5" />, available: true },
    { name: "AC", icon: <Snowflake className="w-5 h-5" />, available: true },
    { name: "Water", icon: <Coffee className="w-5 h-5" />, available: true },
    { name: "Charging", icon: <Zap className="w-5 h-5" />, available: true },
    { name: "Blankets", icon: <Heart className="w-5 h-5" />, available: false },
    {
      name: "Entertainment",
      icon: <Star className="w-5 h-5" />,
      available: true,
    },
  ];

  const whyChooseUs = [
    {
      title: "Best Price Guarantee",
      description: "Lowest prices guaranteed with instant comparison",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your needs",
      icon: <Phone className="w-6 h-6" />,
    },
    {
      title: "Easy Cancellation",
      description: "Flexible cancellation with minimal charges",
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      title: "Verified Operators",
      description: "All operators are verified and quality-checked",
      icon: <Shield className="w-6 h-6" />,
    },
  ];

  const paymentMethods = [
    {
      name: "Credit Card",
      icon: <CreditCard className="w-5 h-5" />,
      color: "bg-blue-500",
    },
    {
      name: "Net Banking",
      icon: <Banknote className="w-5 h-5" />,
      color: "bg-green-500",
    },
    {
      name: "UPI",
      icon: <Smartphone className="w-5 h-5" />,
      color: "bg-purple-500",
    },
    {
      name: "NEFT/RTGS",
      icon: <Banknote className="w-5 h-5" />,
      color: "bg-orange-500",
    },
    {
      name: "Cash",
      icon: <Banknote className="w-5 h-5" />,
      color: "bg-gray-500",
    },
    {
      name: "EMI",
      icon: <CreditCard className="w-5 h-5" />,
      color: "bg-pink-500",
    },
    {
      name: "Pay Later",
      icon: <Clock className="w-5 h-5" />,
      color: "bg-indigo-500",
    },
  ];

  const faqs = [
    {
      question: "How far in advance should I book my bus ticket?",
      answer:
        "For popular routes, booking 1-2 weeks in advance is recommended. For regular routes, booking 2-3 days in advance should be sufficient.",
    },
    {
      question: "Can I cancel or modify my bus booking?",
      answer:
        "Yes, most bus operators allow cancellation and modification with certain terms and conditions. Cancellation charges may apply depending on the timing.",
    },
    {
      question: "What documents do I need for bus travel?",
      answer:
        "You need a valid government-issued photo ID like Aadhaar card, PAN card, driving license, or passport. The same ID used for booking should be carried during travel.",
    },
    {
      question: "Are meals included in bus tickets?",
      answer:
        "Meal inclusion depends on the bus operator and route. Long-distance buses usually have meal stops, while short routes may not include meals.",
    },
    {
      question: "What is the baggage allowance?",
      answer:
        "Most buses allow 15-20kg baggage per passenger. Check with your specific operator for exact limits and any additional charges.",
    },
    {
      question: "How do I track my bus?",
      answer:
        "You can track your bus through our mobile app or website using your booking reference number. Real-time location updates are provided for most routes.",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateRequestNumber = () => {
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.floor(Math.random() * 1000)
      .toString()
      .padStart(3, "0");
    return `AS${timestamp}${random}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const requestNum = generateRequestNumber();
    setRequestNumber(requestNum);
    setShowSuccessModal(true);

    // Store query in localStorage for admin to check
    const query = {
      id: requestNum,
      type: "Bus Booking",
      customer: formData.name,
      contact: formData.contact,
      email: formData.email,
      from: formData.from,
      to: formData.to,
      date: formData.departureDate,
      passengers: formData.passengers,
      message: formData.message,
      timestamp: new Date().toISOString(),
      status: "Pending",
    };

    const existingQueries = JSON.parse(
      localStorage.getItem("travelQueries") || "[]"
    );
    existingQueries.push(query);
    localStorage.setItem("travelQueries", JSON.stringify(existingQueries));

    // Reset form
    setFormData({
      from: "",
      to: "",
      departureDate: "",
      returnDate: "",
      passengers: "1",
      name: "",
      contact: "",
      email: "",
      message: "",
    });
  };

  const closeModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Breadcrumb
          items={[
            { name: "Services", href: "/services" },
            { name: "Travel", href: "/travel" },
            { name: "Bus Booking", href: "/travel/bus-booking" },
          ]}
        />
      </div>
      <div className="pt-10 min-h-screen bg-white [background-image:radial-gradient(#e6e7e9_10px,transparent_10px)] [background-size:16px_16px] bg-fixed">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#0b234a] to-[#1e3a5f] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Book Bus Tickets
              </h1>
              <p className="text-xl mb-8">
                Comfortable bus travel across India with verified operators
              </p>
            </div>
          </div>
        </section>

        {/* Booking Form Section */}
        <section className="py-8 -mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Bus Search Form */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      From
                    </label>
                    <div className="relative">
                      <MapPin className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        name="from"
                        value={formData.from}
                        onChange={handleInputChange}
                        placeholder="Enter departure city"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b234a] focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      To
                    </label>
                    <div className="relative">
                      <MapPin className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        name="to"
                        value={formData.to}
                        onChange={handleInputChange}
                        placeholder="Enter destination city"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b234a] focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Departure
                    </label>
                    <div className="relative">
                      <Calendar className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="date"
                        name="departureDate"
                        value={formData.departureDate}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b234a] focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Return (Optional)
                    </label>
                    <div className="relative">
                      <Calendar className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="date"
                        name="returnDate"
                        value={formData.returnDate}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b234a] focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Passengers
                    </label>
                    <div className="relative">
                      <Users className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <select
                        name="passengers"
                        value={formData.passengers}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b234a] focus:border-transparent"
                        required
                      >
                        <option value="1">1 Passenger</option>
                        <option value="2">2 Passengers</option>
                        <option value="3">3 Passengers</option>
                        <option value="4">4 Passengers</option>
                        <option value="5">5+ Passengers</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bus Type Preference
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {busTypes.map((type) => (
                        <button
                          key={type.id}
                          type="button"
                          className="p-3 rounded-lg border-2 border-gray-200 hover:border-green-300 hover:bg-gray-50 transition-all duration-300 text-left"
                        >
                          <div className="flex items-center space-x-2">
                            {type.icon}
                            <span className="text-sm font-medium">
                              {type.title}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Contact Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b234a] focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Contact Number *
                      </label>
                      <input
                        type="tel"
                        name="contact"
                        value={formData.contact}
                        onChange={handleInputChange}
                        placeholder="Enter your mobile number"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b234a] focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email address"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b234a] focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Special Requirements
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Any special requirements or preferences"
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b234a] focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-[#0b234a] text-white px-12 py-4 rounded-lg font-semibold text-lg hover:bg-[#1e3a5f] transition-colors shadow-lg"
                  >
                    Search Buses
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Popular Routes */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Popular Bus Routes
              </h2>
              <p className="text-lg text-gray-600">
                Most booked routes with great deals and comfortable buses
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularRoutes.map((route, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <Bus className="w-5 h-5 text-[#0b234a]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {route.from} → {route.to}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {route.operator}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-[#0b234a]">
                        {route.price}
                      </p>
                      <p className="text-sm text-gray-500">Starting from</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <span>
                      {route.departure} - {route.arrival}
                    </span>
                    <span>{route.duration}</span>
                  </div>
                  <button className="w-full bg-[#0b234a] text-white py-2 rounded-lg font-semibold hover:bg-[#1e3a5f] transition-colors">
                    Book Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bus Operators */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Trusted Bus Operators
              </h2>
              <p className="text-lg text-gray-600">
                Partner with India's leading bus operators for safe and
                comfortable travel
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {busOperators.map((operator, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {operator.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-[#0b234a] fill-current" />
                      <span className="text-sm font-semibold">
                        {operator.rating}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-[#0b234a]">
                        {operator.buses}
                      </p>
                      <p className="text-sm text-gray-500">Buses</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-[#0b234a]">
                        {operator.routes}
                      </p>
                      <p className="text-sm text-gray-500">Routes</p>
                    </div>
                  </div>
                  <button className="w-full bg-[#0b234a] text-white py-2 rounded-lg font-semibold hover:bg-[#1e3a5f] transition-colors">
                    View Buses
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Amenities */}
        <section className="py-16 bg-white [background-image:radial-gradient(#e6e7e9_10px,transparent_10px)] [background-size:16px_16px] bg-fixed">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Bus Amenities
              </h2>
              <p className="text-lg text-gray-600">
                Modern amenities for comfortable travel
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {amenities.map((amenity, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl text-center transition-all duration-300 ${
                    amenity.available
                      ? "bg-green-100 border-2 border-green-200"
                      : "bg-gray-100 border-2 border-gray-200"
                  }`}
                >
                  <div
                    className={`w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center ${
                      amenity.available
                        ? "bg-[#0b234a] text-white"
                        : "bg-gray-300 text-gray-500"
                    }`}
                  >
                    {amenity.icon}
                  </div>
                  <p
                    className={`text-sm font-semibold ${
                      amenity.available ? "text-green-800" : "text-gray-500"
                    }`}
                  >
                    {amenity.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Our Bus Services?
              </h2>
              <p className="text-lg text-gray-600">
                Experience the best in bus booking services with unmatched
                benefits
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((feature, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white rounded-xl shadow-lg"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="py-16 bg-white [background-image:radial-gradient(#e6e7e9_10px,transparent_10px)] [background-size:16px_16px] bg-fixed">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Payment Methods
              </h2>
              <p className="text-lg text-gray-600">
                We accept all major payment methods for your convenience
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {paymentMethods.map((method, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 text-center"
                >
                  <div
                    className={`w-10 h-10 ${method.color} rounded-full flex items-center justify-center mx-auto mb-3 text-white`}
                  >
                    {method.icon}
                  </div>
                  <p className="text-sm font-semibold text-gray-900">
                    {method.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Common questions about bus booking and travel
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-[#0b234a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold mb-4">
                Need Help with Bus Booking?
              </h2>
              <p className="text-xl mb-8">
                Our travel experts are here to help you find the best buses and
                deals
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-[#0b234a] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
                >
                  Contact Travel Expert
                </a>
                <a
                  href="tel:+919780494854"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#0b234a] transition-colors"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md mx-4 shadow-2xl">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-[#0b234a]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Thank You for Your Booking Request!
              </h3>
              <p className="text-gray-600 mb-4">
                Your request has been submitted successfully. Our expert will be
                in touch with you shortly.
              </p>
              <div className="bg-green-50 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-600 mb-1">
                  Your Request Number:
                </p>
                <p className="text-lg font-bold text-[#0b234a]">
                  {requestNumber}
                </p>
              </div>
              <p className="text-sm text-gray-600 mb-6">
                You will receive an SMS and email confirmation shortly. Please
                check your messages for updates.
              </p>
              <button
                onClick={closeModal}
                className="bg-[#0b234a] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1e3a5f] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
