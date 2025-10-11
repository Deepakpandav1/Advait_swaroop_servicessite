import { useState } from "react";
import {
  Plane,
  Calendar,
  Users,
  MapPin,
  Clock,
  Shield,
  Star,
  ArrowRight,
  CheckCircle,
  Phone,
  CreditCard,
  Smartphone,
  Banknote,
  GraduationCap,
  UserCheck,
  Heart,
  Snowflake,
  Sun,
  Mountain,
  Search,
  Filter,
  SortAsc,
  ChevronDown,
  X,
  RotateCcw,
  Globe,
  Calendar as CalendarIcon,
  User,
  Baby,
  Info,
} from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";
import SEOHead from "../../components/SEOHead";
import { travelServicesSEO } from "../../utils/seoData";

export default function AirTicketPage() {
  const [selectedTab, setSelectedTab] = useState("oneway");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [requestNumber, setRequestNumber] = useState("");
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    departureDate: "",
    returnDate: "",
    adults: 1,
    children: 0,
    infants: 0,
    class: "Economy",
    fareType: "Regular",
    name: "",
    contact: "",
    email: "",
    message: "",
  });

  const bookingTypes = [
    {
      id: "oneway",
      title: "One Way",
      icon: <Plane className="w-5 h-5" />,
      active: true,
    },
    {
      id: "roundtrip",
      title: "Round Trip",
      icon: <RotateCcw className="w-5 h-5" />,
      active: false,
    },
    {
      id: "multicity",
      title: "Multi City",
      icon: <Globe className="w-5 h-5" />,
      active: false,
    },
    {
      id: "calendarfare",
      title: "Calendar Fare",
      icon: <CalendarIcon className="w-5 h-5" />,
      active: false,
    },
    {
      id: "advancesearch",
      title: "Advance Search",
      icon: <Search className="w-5 h-5" />,
      active: false,
    },
    {
      id: "groupbooking",
      title: "Group Booking",
      icon: <Users className="w-5 h-5" />,
      active: false,
      badge: "New",
    },
  ];

  const fareTypes = [
    { id: "regular", title: "Regular Fares", active: true },
    { id: "student", title: "Student Fares", active: false },
    { id: "marine", title: "Marine Fares", active: false },
    { id: "senior", title: "Senior Citizen", active: false },
    { id: "armed", title: "Armed Forces", active: false },
  ];

  const passengerOptions = [
    {
      type: "adults",
      label: "Adult (12+ Yrs)",
      icon: <User className="w-4 h-4" />,
      value: formData.adults,
    },
    {
      type: "children",
      label: "Children (2-12 Yrs)",
      icon: <User className="w-4 h-4" />,
      value: formData.children,
    },
    {
      type: "infants",
      label: "Infant (< 2 Yrs)",
      icon: <Baby className="w-4 h-4" />,
      value: formData.infants,
    },
  ];

  const classOptions = [
    "Economy",
    "Premium Economy",
    "Business",
    "First Class",
  ];

  const popularRoutes = [
    {
      from: "Delhi",
      to: "Mumbai",
      price: "₹3,500",
      duration: "2h 15m",
      airline: "IndiGo",
      departure: "06:30",
      arrival: "08:45",
    },
    {
      from: "Mumbai",
      to: "Bangalore",
      price: "₹4,200",
      duration: "1h 45m",
      airline: "SpiceJet",
      departure: "14:20",
      arrival: "16:05",
    },
    {
      from: "Delhi",
      to: "Goa",
      price: "₹5,800",
      duration: "2h 30m",
      airline: "Air India",
      departure: "09:15",
      arrival: "11:45",
    },
    {
      from: "Bangalore",
      to: "Chennai",
      price: "₹2,800",
      duration: "1h 20m",
      airline: "Vistara",
      departure: "18:30",
      arrival: "19:50",
    },
    {
      from: "Delhi",
      to: "Kolkata",
      price: "₹4,500",
      duration: "2h 00m",
      airline: "GoAir",
      departure: "12:45",
      arrival: "14:45",
    },
    {
      from: "Mumbai",
      to: "Delhi",
      price: "₹3,200",
      duration: "2h 10m",
      airline: "IndiGo",
      departure: "20:15",
      arrival: "22:25",
    },
  ];

  const topDestinations = [
    {
      category: "Honeymoon",
      icon: <Heart className="w-5 h-5" />,
      places: [
        "Goa",
        "Kerala",
        "Kashmir",
        "Manali",
        "Shimla",
        "Ooty",
        "Munnar",
        "Andaman",
      ],
    },
    {
      category: "Summer",
      icon: <Sun className="w-5 h-5" />,
      places: [
        "Shimla",
        "Manali",
        "Darjeeling",
        "Ooty",
        "Munnar",
        "Coorg",
        "Kodaikanal",
        "Nainital",
      ],
    },
    {
      category: "Winter",
      icon: <Snowflake className="w-5 h-5" />,
      places: [
        "Kashmir",
        "Manali",
        "Shimla",
        "Gulmarg",
        "Auli",
        "Spiti Valley",
        "Ladakh",
        "Sikkim",
      ],
    },
    {
      category: "Adventure",
      icon: <Mountain className="w-5 h-5" />,
      places: [
        "Ladakh",
        "Spiti Valley",
        "Rishikesh",
        "Manali",
        "Goa",
        "Andaman",
        "Kerala",
        "Himachal",
      ],
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
      title: "Secure Booking",
      description: "Safe and secure payment processing",
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
      question: "How far in advance should I book my flight?",
      answer:
        "For domestic flights, booking 2-4 weeks in advance usually gives you the best prices. For international flights, 6-8 weeks in advance is recommended for better deals.",
    },
    {
      question: "Can I cancel or modify my flight booking?",
      answer:
        "Yes, most airlines allow cancellation and modification with certain terms and conditions. Cancellation charges may apply depending on the fare type and timing.",
    },
    {
      question: "What documents do I need for domestic flights?",
      answer:
        "For domestic flights, you need a valid government-issued photo ID like Aadhaar card, PAN card, driving license, or passport. No passport is required for domestic travel.",
    },
    {
      question: "Are meals included in flight tickets?",
      answer:
        "Meal inclusion depends on the airline and fare type. Full-service carriers usually include meals, while low-cost carriers may charge extra for meals and beverages.",
    },
    {
      question: "What is the baggage allowance?",
      answer:
        "Baggage allowance varies by airline and fare type. Typically, domestic flights allow 15-20kg checked baggage and 7kg cabin baggage. Check with your specific airline for exact limits.",
    },
    {
      question: "How do I check-in for my flight?",
      answer:
        "You can check-in online 24-48 hours before departure, at the airport kiosk, or at the airline counter. Online check-in is recommended to save time at the airport.",
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
      type: "Flight Booking",
      customer: formData.name,
      contact: formData.contact,
      email: formData.email,
      from: formData.from,
      to: formData.to,
      date: formData.departureDate,
      passengers: `${formData.adults} Adult${
        formData.children > 0 ? `, ${formData.children} Child` : ""
      }${formData.infants > 0 ? `, ${formData.infants} Infant` : ""}`,
      class: formData.class,
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
      adults: 1,
      children: 0,
      infants: 0,
      class: "Economy",
      fareType: "Regular",
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
      <SEOHead
        title={travelServicesSEO.airTicket.title}
        description={travelServicesSEO.airTicket.description}
        keywords={travelServicesSEO.airTicket.keywords}
        canonicalUrl="https://www.advaitswaroopservices.com/travel/air-ticket"
      />
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Breadcrumb
          items={[
            { name: "Services", href: "/services" },
            { name: "Travel", href: "/travel" },
            { name: "Air Ticket", href: "/travel/air-ticket" },
          ]}
        />
      </div>
      <div className="pt-24 min-h-screen bg-white [background-image:radial-gradient(#e6e7e9_10px,transparent_10px)] [background-size:16px_16px] bg-fixed">
        {/* Progress Bar */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-[#0b234a] rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <span className="text-[#0b234a] font-semibold">
                    Flight Search
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 text-sm font-bold">2</span>
                  </div>
                  <span className="text-gray-600">Flight Results</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 text-sm font-bold">3</span>
                  </div>
                  <span className="text-gray-600">Passenger Details</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 text-sm font-bold">4</span>
                  </div>
                  <span className="text-gray-600">Review Booking</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 text-sm font-bold">5</span>
                  </div>
                  <span className="text-gray-600">Booking Confirmation</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Booking Form */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Flight Type Selection */}
                <div className="border-b border-gray-200 pb-6">
                  <div className="flex flex-wrap gap-4">
                    {bookingTypes.map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setSelectedTab(type.id)}
                        className={`relative flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                          selectedTab === type.id
                            ? "bg-[#0b234a] text-white shadow-lg"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          {type.icon}
                          <span className="font-semibold">{type.title}</span>
                        </div>
                        {type.badge && (
                          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                            {type.badge}
                          </span>
                        )}
                        {type.id === "groupbooking" && (
                          <Info className="w-4 h-4 text-gray-400" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Flight Search Form */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* From/To Section */}
                  <div className="lg:col-span-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Departure
                        </label>
                        <div className="relative">
                          <MapPin className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <input
                            type="text"
                            name="from"
                            value={formData.from}
                            onChange={handleInputChange}
                            placeholder="Enter Origin"
                            className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b234a] focus:border-transparent text-lg"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Arrival
                        </label>
                        <div className="relative">
                          <MapPin className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <input
                            type="text"
                            name="to"
                            value={formData.to}
                            onChange={handleInputChange}
                            placeholder="Enter Destination"
                            className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b234a] focus:border-transparent text-lg"
                            required
                          />
                        </div>
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          <RotateCcw className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Date Section */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Departure Date
                      </label>
                      <div className="relative">
                        <Calendar className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="date"
                          name="departureDate"
                          value={formData.departureDate}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b234a] focus:border-transparent text-lg"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Return Date
                      </label>
                      <div className="relative">
                        <Calendar className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="date"
                          name="returnDate"
                          value={formData.returnDate}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b234a] focus:border-transparent text-lg"
                          disabled={selectedTab === "oneway"}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Fare Type Selection */}
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Select a fare type
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {fareTypes.map((fare) => (
                      <button
                        key={fare.id}
                        type="button"
                        onClick={() =>
                          setFormData((prev) => ({
                            ...prev,
                            fareType: fare.title,
                          }))
                        }
                        className={`px-6 py-3 rounded-lg border-2 transition-all duration-300 font-semibold ${
                          formData.fareType === fare.title
                            ? "border-[#0b234a] bg-[#0b234a] text-white"
                            : "border-gray-300 text-gray-700 hover:border-[#0b234a] hover:bg-gray-50"
                        }`}
                      >
                        {fare.title}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Passenger Details */}
                <div className="border-t border-gray-200 pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {passengerOptions.map((passenger) => (
                      <div key={passenger.type}>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {passenger.label}
                        </label>
                        <div className="relative">
                          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                            {passenger.icon}
                          </div>
                          <select
                            name={passenger.type}
                            value={passenger.value}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b234a] focus:border-transparent text-lg appearance-none"
                          >
                            {Array.from({ length: 9 }, (_, i) => (
                              <option key={i} value={i}>
                                {i}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                        </div>
                      </div>
                    ))}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Class
                      </label>
                      <div className="relative">
                        <Star className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <select
                          name="class"
                          value={formData.class}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b234a] focus:border-transparent text-lg appearance-none"
                        >
                          {classOptions.map((cls) => (
                            <option key={cls} value={cls}>
                              {cls}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Options */}
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-[#0b234a] border-gray-300 rounded focus:ring-[#0b234a]"
                        />
                        <span className="text-sm text-gray-700">
                          Show Direct Flights
                        </span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-[#0b234a] border-gray-300 rounded focus:ring-[#0b234a]"
                        />
                        <span className="text-sm text-gray-700">
                          Open Search Combination
                        </span>
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                          New
                        </span>
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="bg-[#0b234a] text-white px-12 py-4 rounded-lg font-bold text-lg hover:bg-[#1e3a5f] transition-colors shadow-lg flex items-center space-x-2"
                    >
                      <span>SEARCH</span>
                      <Plane className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="border-t border-gray-200 pt-6">
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
              </form>
            </div>
          </div>
        </section>

        {/* Popular Routes */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Popular Routes
              </h2>
              <p className="text-lg text-gray-600">
                Most booked domestic routes with great deals
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
                      <div className="w-10 h-10 bg-[#0b234a]/10 rounded-full flex items-center justify-center">
                        <Plane className="w-5 h-5 text-[#0b234a]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {route.from} → {route.to}
                        </h3>
                        <p className="text-sm text-gray-600">{route.airline}</p>
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

        {/* Top Destinations */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Top Destinations
              </h2>
              <p className="text-lg text-gray-600">
                Discover amazing places across India
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {topDestinations.map((category, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-[#0b234a]/10 rounded-full flex items-center justify-center">
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {category.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.places.slice(0, 4).map((place, placeIndex) => (
                      <span
                        key={placeIndex}
                        className="bg-[#0b234a]/10 text-[#0b234a] px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {place}
                      </span>
                    ))}
                    {category.places.length > 4 && (
                      <span className="text-sm text-gray-500">
                        +{category.places.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white [background-image:radial-gradient(#e6e7e9_10px,transparent_10px)] [background-size:16px_16px] bg-fixed">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Us?
              </h2>
              <p className="text-lg text-gray-600">
                Experience the best in flight booking services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((feature, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white rounded-xl shadow-lg"
                >
                  <div className="w-12 h-12 bg-[#0b234a]/10 rounded-full flex items-center justify-center mx-auto mb-4">
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
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Payment Methods
              </h2>
              <p className="text-lg text-gray-600">
                We accept all major payment methods
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
        <section className="py-16 bg-white [background-image:radial-gradient(#e6e7e9_10px,transparent_10px)] [background-size:16px_16px] bg-fixed">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Common questions about flight booking
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
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#0b234a] rounded-2xl p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">
                Need Help with Flight Booking?
              </h2>
              <p className="text-xl mb-8">
                Our travel experts are here to help you find the best flights
                and deals
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
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Thank You for Your Booking Request!
              </h3>
              <p className="text-gray-600 mb-4">
                Your request has been submitted successfully. Our expert will be
                in touch with you shortly.
              </p>
              <div className="bg-[#0b234a] text-white rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-200 mb-1">
                  Your Request Number:
                </p>
                <p className="text-lg font-bold text-[#E6B837]">
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
