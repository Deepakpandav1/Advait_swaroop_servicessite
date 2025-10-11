import { useState } from "react";
import {
  Train,
  MapPin,
  Calendar,
  Users,
  Clock,
  Star,
  Shield,
  Phone,
  Mail,
  CreditCard,
  Smartphone,
  Banknote,
  ArrowRight,
  CheckCircle,
  User,
  Heart,
  Zap,
  Wifi,
  Coffee,
  Snowflake,
  UserCheck,
  GraduationCap,
} from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";

export default function RailTicketPage() {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    departureDate: "",
    returnDate: "",
    passengers: "1",
    class: "SL",
    quota: "GN",
    name: "",
    contact: "",
    email: "",
    message: "",
  });

  const trainClasses = [
    {
      code: "SL",
      name: "Sleeper",
      description: "Basic sleeper class",
      price: "₹500-800",
    },
    {
      code: "3A",
      name: "AC 3 Tier",
      description: "Air-conditioned 3-tier",
      price: "₹1,200-1,800",
    },
    {
      code: "2A",
      name: "AC 2 Tier",
      description: "Air-conditioned 2-tier",
      price: "₹1,800-2,500",
    },
    {
      code: "1A",
      name: "AC First",
      description: "First class AC",
      price: "₹3,000-5,000",
    },
    {
      code: "CC",
      name: "Chair Car",
      description: "AC chair car",
      price: "₹800-1,200",
    },
    {
      code: "EC",
      name: "Executive Class",
      description: "Executive chair car",
      price: "₹1,500-2,000",
    },
  ];

  const quotas = [
    { code: "GN", name: "General", description: "Regular booking" },
    { code: "TQ", name: "Tatkal", description: "Same day booking" },
    { code: "PT", name: "Premium Tatkal", description: "Dynamic pricing" },
    { code: "LD", name: "Ladies", description: "Ladies quota" },
    { code: "HP", name: "Handicapped", description: "Physically challenged" },
    { code: "FT", name: "Foreign Tourist", description: "Foreign nationals" },
  ];

  const popularRoutes = [
    {
      from: "Delhi",
      to: "Mumbai",
      duration: "16h 30m",
      trains: 8,
      price: "₹1,200",
    },
    {
      from: "Mumbai",
      to: "Bangalore",
      duration: "24h 15m",
      trains: 3,
      price: "₹1,800",
    },
    {
      from: "Delhi",
      to: "Kolkata",
      duration: "18h 45m",
      trains: 5,
      price: "₹1,500",
    },
    {
      from: "Bangalore",
      to: "Chennai",
      duration: "6h 30m",
      trains: 12,
      price: "₹600",
    },
    {
      from: "Delhi",
      to: "Jaipur",
      duration: "5h 15m",
      trains: 15,
      price: "₹400",
    },
    {
      from: "Mumbai",
      to: "Pune",
      duration: "3h 30m",
      trains: 20,
      price: "₹300",
    },
    {
      from: "Delhi",
      to: "Agra",
      duration: "2h 15m",
      trains: 25,
      price: "₹200",
    },
    {
      from: "Mumbai",
      to: "Goa",
      duration: "12h 00m",
      trains: 4,
      price: "₹800",
    },
  ];

  const trainTypes = [
    {
      name: "Rajdhani Express",
      description: "Premium AC trains",
      icon: <Star className="w-5 h-5" />,
    },
    {
      name: "Shatabdi Express",
      description: "Day trains with meals",
      icon: <Coffee className="w-5 h-5" />,
    },
    {
      name: "Duronto Express",
      description: "Non-stop trains",
      icon: <Zap className="w-5 h-5" />,
    },
    {
      name: "Vande Bharat",
      description: "Semi-high speed trains",
      icon: <Train className="w-5 h-5" />,
    },
    {
      name: "Garib Rath",
      description: "Budget AC trains",
      icon: <Heart className="w-5 h-5" />,
    },
    {
      name: "Jan Shatabdi",
      description: "Economy day trains",
      icon: <User className="w-5 h-5" />,
    },
  ];

  const amenities = [
    { name: "WiFi", icon: <Wifi className="w-5 h-5" />, available: true },
    { name: "AC", icon: <Snowflake className="w-5 h-5" />, available: true },
    { name: "Meals", icon: <Coffee className="w-5 h-5" />, available: true },
    { name: "Charging", icon: <Zap className="w-5 h-5" />, available: true },
    { name: "Blankets", icon: <Heart className="w-5 h-5" />, available: true },
    {
      name: "Entertainment",
      icon: <Star className="w-5 h-5" />,
      available: false,
    },
  ];

  const fareTypes = [
    {
      id: "regular",
      title: "Regular",
      icon: <UserCheck className="w-5 h-5" />,
    },
    { id: "defense", title: "Defense", icon: <Shield className="w-5 h-5" /> },
    {
      id: "student",
      title: "Student",
      icon: <GraduationCap className="w-5 h-5" />,
    },
    {
      id: "senior",
      title: "Senior Citizen",
      icon: <Heart className="w-5 h-5" />,
    },
    {
      id: "medical",
      title: "Doctors/Nurse",
      icon: <CheckCircle className="w-5 h-5" />,
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

  const whyChooseUs = [
    {
      title: "IRCTC Authorized",
      description:
        "Official IRCTC partner with direct booking access and real-time availability",
      icon: <Shield className="w-8 h-8" />,
    },
    {
      title: "24/7 Customer Support",
      description:
        "Round-the-clock assistance for all your railway booking needs",
      icon: <Phone className="w-8 h-8" />,
    },
    {
      title: "Easy Cancellation",
      description:
        "Flexible cancellation and rescheduling options with IRCTC rules",
      icon: <CheckCircle className="w-8 h-8" />,
    },
    {
      title: "Secure Booking",
      description: "Safe and secure payment processing with SSL encryption",
      icon: <Shield className="w-8 h-8" />,
    },
    {
      title: "Real-time PNR",
      description: "Instant PNR generation and live train status updates",
      icon: <Clock className="w-8 h-8" />,
    },
    {
      title: "Tatkal Booking",
      description: "Quick Tatkal and Premium Tatkal booking assistance",
      icon: <Zap className="w-8 h-8" />,
    },
  ];

  const faqs = [
    {
      question: "How far in advance can I book train tickets?",
      answer:
        "Regular tickets can be booked 120 days in advance, while Tatkal tickets can be booked 1 day in advance. Premium Tatkal is available on the same day of travel.",
    },
    {
      question: "What is the difference between Tatkal and Premium Tatkal?",
      answer:
        "Tatkal tickets are available 1 day in advance with fixed charges, while Premium Tatkal has dynamic pricing based on demand and availability.",
    },
    {
      question: "Can I cancel or modify my train booking?",
      answer:
        "Yes, you can cancel or modify your booking based on IRCTC rules. Cancellation charges and time limits vary by class and timing of cancellation.",
    },
    {
      question: "What documents do I need for train travel?",
      answer:
        "You need a valid government-issued photo ID like Aadhaar card, PAN card, driving license, or passport. The same ID used for booking should be carried during travel.",
    },
    {
      question: "Are meals included in train tickets?",
      answer:
        "Meals are included in Rajdhani and Shatabdi trains. For other trains, you can book meals separately or purchase from pantry car.",
    },
    {
      question: "How do I check my PNR status?",
      answer:
        "You can check your PNR status through our website, mobile app, or by calling our customer support. Real-time updates are provided for train status and seat availability.",
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Breadcrumb
          items={[
            { name: "Services", href: "/services" },
            { name: "Travel", href: "/travel" },
            { name: "Rail Ticket", href: "/travel/rail-ticket" },
          ]}
        />
      </div>
      <div className="pt-24 min-h-screen bg-white [background-image:radial-gradient(#e6e7e9_10px,transparent_10px)] [background-size:16px_16px] bg-fixed font-roboto">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl p-12 shadow-xl border-2 border-[#E6B837]">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Train className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-5xl font-bold text-[#0b234a] mb-6">
                  Train Ticket Booking
                </h1>
                <img
                  className="h-2 rounded-3xl mx-auto mb-8"
                  src="/gline.png"
                  alt=""
                />
                <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
                  Book your train tickets with IRCTC authorized partner. Get
                  confirmed tickets with the best deals and reliable booking
                  system.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Form Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold text-[#0b234a] mb-8 text-center">
                Book Your Train Ticket
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Route Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#0b234a] mb-2">
                      From Station <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <MapPin className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        name="from"
                        value={formData.from}
                        onChange={handleInputChange}
                        placeholder="Enter departure station"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E6B837] focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0b234a] mb-2">
                      To Station <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <MapPin className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        name="to"
                        value={formData.to}
                        onChange={handleInputChange}
                        placeholder="Enter destination station"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E6B837] focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#0b234a] mb-2">
                      Journey Date <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Calendar className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="date"
                        name="departureDate"
                        value={formData.departureDate}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E6B837] focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0b234a] mb-2">
                      Return Date (Optional)
                    </label>
                    <div className="relative">
                      <Calendar className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="date"
                        name="returnDate"
                        value={formData.returnDate}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E6B837] focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#0b234a] mb-2">
                      Passengers <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Users className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <select
                        name="passengers"
                        value={formData.passengers}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E6B837] focus:border-transparent"
                        required
                      >
                        <option value="1">1 Passenger</option>
                        <option value="2">2 Passengers</option>
                        <option value="3">3 Passengers</option>
                        <option value="4">4 Passengers</option>
                        <option value="5">5 Passengers</option>
                        <option value="6">6 Passengers</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0b234a] mb-2">
                      Class <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Star className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <select
                        name="class"
                        value={formData.class}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E6B837] focus:border-transparent"
                        required
                      >
                        {trainClasses.map((cls) => (
                          <option key={cls.code} value={cls.code}>
                            {cls.name} ({cls.code})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0b234a] mb-2">
                      Quota <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <select
                        name="quota"
                        value={formData.quota}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E6B837] focus:border-transparent"
                        required
                      >
                        {quotas.map((quota) => (
                          <option key={quota.code} value={quota.code}>
                            {quota.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Fare Type Selection */}
                <div>
                  <label className="block text-sm font-semibold text-[#0b234a] mb-4">
                    Fare Type
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    {fareTypes.map((fare) => (
                      <button
                        key={fare.id}
                        type="button"
                        className="p-3 rounded-lg border-2 border-gray-200 hover:border-[#E6B837] hover:bg-gray-50 transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        {fare.icon}
                        <span className="text-sm font-medium">
                          {fare.title}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Contact Information */}
                <div className="border-t pt-6">
                  <h3 className="text-xl font-bold text-[#0b234a] mb-4">
                    Contact Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#0b234a] mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E6B837] focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#0b234a] mb-2">
                        Contact Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="contact"
                        value={formData.contact}
                        onChange={handleInputChange}
                        placeholder="Enter your mobile number"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E6B837] focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#0b234a] mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email address"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E6B837] focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#0b234a] mb-2">
                        Special Requirements
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Any special requirements or preferences"
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E6B837] focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-[#E6B837] text-[#0b234a] px-12 py-4 rounded-full font-bold text-lg hover:bg-[#d4a94b] transition-colors shadow-lg"
                  >
                    Search Trains
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Train Classes */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0b234a] mb-4">
                Train Classes
              </h2>
              <p className="text-xl text-gray-600">
                Choose from various classes based on your comfort and budget
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trainClasses.map((cls, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-[#E6B837] rounded-full flex items-center justify-center text-[#0b234a]">
                        <Train className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#0b234a]">{cls.name}</h3>
                        <p className="text-sm text-gray-600">
                          {cls.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-2xl font-bold text-[#E6B837]">
                        {cls.price}
                      </p>
                      <p className="text-sm text-gray-500">Approximate fare</p>
                    </div>
                  </div>
                  <button className="w-full bg-[#0b234a] text-white py-2 rounded-lg font-semibold hover:bg-[#1e3a5f] transition-colors">
                    Book Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Routes */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0b234a] mb-4">
                Popular Train Routes
              </h2>
              <p className="text-xl text-gray-600">
                Most booked routes with multiple train options
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularRoutes.map((route, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-[#E6B837] rounded-full flex items-center justify-center text-[#0b234a]">
                        <Train className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#0b234a]">
                          {route.from} → {route.to}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {route.duration}
                        </p>
                        <p className="text-xs text-[#E6B837] font-semibold">
                          {route.trains} trains
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-2xl font-bold text-[#E6B837]">
                        {route.price}
                      </p>
                      <p className="text-sm text-gray-500">Starting from</p>
                    </div>
                  </div>
                  <button className="w-full bg-[#0b234a] text-white py-2 rounded-lg font-semibold hover:bg-[#1e3a5f] transition-colors">
                    Book Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Train Types */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0b234a] mb-4">
                Train Types
              </h2>
              <p className="text-xl text-gray-600">
                Different types of trains for various travel needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trainTypes.map((type, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-[#E6B837] rounded-full flex items-center justify-center text-[#0b234a]">
                      {type.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#0b234a]">
                      {type.name}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <button className="w-full bg-[#0b234a] text-white py-2 rounded-lg font-semibold hover:bg-[#1e3a5f] transition-colors">
                    View Trains
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Amenities */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0b234a] mb-4">
                Train Amenities
              </h2>
              <p className="text-xl text-gray-600">
                Modern amenities for comfortable travel
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {amenities.map((amenity, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl text-center transition-all duration-300 ${
                    amenity.available
                      ? "bg-[#E6B837] bg-opacity-10 border-2 border-[#E6B837]"
                      : "bg-gray-100 border-2 border-gray-200"
                  }`}
                >
                  <div
                    className={`w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center ${
                      amenity.available
                        ? "bg-[#E6B837] text-[#0b234a]"
                        : "bg-gray-300 text-gray-500"
                    }`}
                  >
                    {amenity.icon}
                  </div>
                  <p
                    className={`text-sm font-semibold ${
                      amenity.available ? "text-[#0b234a]" : "text-gray-500"
                    }`}
                  >
                    {amenity.name}
                  </p>
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

        {/* Why Choose Us */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0b234a] mb-4">
                Why Book with Us?
              </h2>
              <p className="text-xl text-gray-600">
                Experience the best in train booking services with IRCTC
                partnership
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0b234a] mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about train booking and travel
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                >
                  <h3 className="text-lg font-bold text-[#0b234a] mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">{faq.answer}</p>
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
                  Need Help with Train Booking?
                </h2>
                <img
                  className="h-2 rounded-3xl mx-auto mb-8"
                  src="/gline.png"
                  alt=""
                />
                <p className="text-xl text-gray-600 mb-8">
                  Our railway booking experts are here to help you find the best
                  trains and deals. Contact us for personalized assistance and
                  exclusive offers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-[#E6B837] to-[#d4a94b] text-[#0b234a] px-8 py-4 rounded-full font-bold text-lg hover:from-[#d4a94b] hover:to-[#E6B837] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Contact Railway Expert
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
