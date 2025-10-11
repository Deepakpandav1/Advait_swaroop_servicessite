import {
  Building2,
  Plane,
  Train,
  Car,
  CreditCard,
  Shield,
  FileText,
  Users,
  Briefcase,
  Globe,
  Award,
  CheckCircle,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";

export default function PartnersPage() {
  const partners = [
    {
      name: "CSC e-Governance Services India Ltd",
      category: "Government Services",
      description:
        "Common Service Centres providing digital government services to citizens across India",
      services: [
        "Digital India Services",
        "Government Portal Access",
        "Citizen Services",
      ],
      logo: "https://i.pinimg.com/1200x/b8/80/42/b88042e38aecea79ae84c7358b4ba0a8.jpg",
    },
    {
      name: "MakeMyTrip",
      category: "Travel Services",
      description:
        "India's leading online travel company offering comprehensive travel solutions",
      services: [
        "Flight Bookings",
        "Hotel Bookings",
        "Bus Tickets",
        "Rail Tickets",
      ],
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5KtO6UO_scXnTXfXk99apcH4k6gnFPvTkwg&s",
    },
    {
      name: "Akbar Travels",
      category: "Travel Services",
      description:
        "Premier travel agency providing domestic and international travel services",
      services: [
        "International Travel",
        "Visa Services",
        "Travel Insurance",
        "Corporate Travel",
      ],
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcNEcgxCqtOlr-WZnl0m62OxEOLjRVXATf2g&s",
    },
    {
      name: "CSC Safar",
      category: "Travel Services",
      description:
        "Travel services through Common Service Centres for rural and urban areas",
      services: [
        "Railway Bookings",
        "Bus Bookings",
        "Flight Bookings",
        "Hotel Bookings",
      ],
      logo: "https://tourism.cscsafar.in/assets/images/safar_logo.jpeg",
    },
    {
      name: "TBO (Travel Boutique Online)",
      category: "Travel Technology",
      description:
        "Global travel distribution platform connecting travel agents with suppliers",
      services: [
        "Travel Distribution",
        "Hotel Bookings",
        "Flight Bookings",
        "Travel Technology",
      ],
      logo: "https://www.travelboutiqueonline.com/new-design/images/tbo_logo.png?ver=18052022",
    },
    {
      name: "HDFC Bank",
      category: "Banking & Financial Services",
      description:
        "Leading private sector bank providing comprehensive banking and financial solutions",
      services: [
        "Banking Services",
        "Loans",
        "Credit Cards",
        "Investment Solutions",
      ],
      logo: "https://yt3.googleusercontent.com/n2natE-oPkAPziTHOTnRXblQxBTGif1Prw7UYw-4BxQuCZVlvWLG51CDFGK2l-hZ1WJiUWNA=s900-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "CSC DigiPay",
      category: "Digital Payments",
      description: "Digital payment solutions through Common Service Centres",
      services: [
        "Digital Payments",
        "Bill Payments",
        "Money Transfer",
        "Banking Services",
      ],
      logo: "https://pbs.twimg.com/profile_images/1795337395337867264/0PpJwO-O_400x400.jpg",
    },
    {
      name: "BBPS (Bharat Bill Payment System)",
      category: "Bill Payment Services",
      description:
        "Unified bill payment system for various utility and service providers",
      services: [
        "Electricity Bills",
        "Water Bills",
        "Gas Bills",
        "Telecom Bills",
      ],
      logo: "https://www.banasbank.com/Content/banasbank.com/UploadedImage/RealImage/185BBPS.png",
    },
    {
      name: "Proteantech (formerly NSDL)",
      category: "Digital Services",
      description:
        "Leading technology company providing digital signature and authentication services",
      services: [
        "Digital Signatures",
        "Authentication Services",
        "Digital Certificates",
        "eKYC Services",
      ],
      logo: "https://s3-symbol-logo.tradingview.com/protean-egov-technologies-limi--600.png",
    },
    {
      name: "IRCTC",
      category: "Railway Services",
      description:
        "Indian Railway Catering and Tourism Corporation providing railway booking services",
      services: [
        "Railway Bookings",
        "Tourism Services",
        "Catering Services",
        "Hotel Bookings",
      ],
      logo: "https://media.licdn.com/dms/image/v2/C511BAQFEcOsOchDgQA/company-background_10000/company-background_10000/0/1583927757082/the_maharajas_cover?e=2147483647&v=beta&t=iqWhosV1uxaldaCx1d-64iGnprQBzFnnwuikjt3zwg8",
    },
    {
      name: "VSign",
      category: "Digital Services",
      description: "Digital signature and document authentication services",
      services: [
        "Digital Signatures",
        "Document Authentication",
        "eSign Services",
        "Digital Certificates",
      ],
      logo: "https://play-lh.googleusercontent.com/8_MUsgE8WfAqfLkd8XVo16wVtmThiMI1_vLPs-HGDDdJC6I734ixs6QTDvLFLhZMPQ",
    },
    {
      name: "Principal of Defence Account (Pension) - SPARSH",
      category: "Government Services",
      description:
        "SPARSH (System for Pension Administration Raksha) for defence pension services",
      services: [
        "Pension Services",
        "Defence Benefits",
        "Digital Pension",
        "Government Services",
      ],
      logo: "https://play-lh.googleusercontent.com/QqRYMzDqi8E_FJfdBz1qkhifunYrXFmu0cBfqn1mDxbaltvq8O2-kkKadOsSmYSqio4",
    },
    {
      name: "Insurance Dekho",
      category: "Insurance Services",
      description:
        "Digital insurance platform providing comprehensive insurance solutions",
      services: [
        "Life Insurance",
        "Health Insurance",
        "Motor Insurance",
        "Travel Insurance",
      ],
      logo: "https://play-lh.googleusercontent.com/23FDUOeNcdtbVet9gCMH7Xkgk2VlxXFhgm8axoJRfPlSrU3XWmp7DEcTWKL7gXJrIGc",
    },
    {
      name: "PB Partners",
      category: "Business Services",
      description: "Business partnership and collaboration services",
      services: [
        "Business Solutions",
        "Partnership Services",
        "Consulting",
        "Support Services",
      ],
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJujDzzS4nF1nwMeUsPSckoQf6ONoQxwyglQ&s",
    },
    {
      name: "MSME (Udyam Registration)",
      category: "Government Services",
      description:
        "Micro, Small and Medium Enterprises registration and support services",
      services: [
        "MSME Registration",
        "Business Support",
        "Government Schemes",
        "Financial Assistance",
      ],
      logo: "https://sonasis.in/wp-content/uploads/2019/02/SONASIS-MSME.png",
    },
  ];

  const categories = [
    "Government Services",
    "Travel Services",
    "Travel Technology",
    "Banking & Financial Services",
    "Digital Payments",
    "Bill Payment Services",
    "Digital Services",
    "Railway Services",
    "Insurance Services",
    "Business Services",
  ];

  const getPartnersByCategory = (category: string) => {
    return partners.filter((partner) => partner.category === category);
  };

  return (
    <>
      <Header />
      <div className="pt-24 min-h-screen bg-white [background-image:radial-gradient(#e6e7e9_10px,transparent_10px)] [background-size:16px_16px] bg-fixed font-roboto">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumb items={[{ name: "Partners", href: "/partners" }]} />
        </div>

        {/* Partners Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0b234a] mb-4">
                Our Trusted Partners
              </h2>
              <p className="text-xl text-gray-600">
                Strategic partnerships across various sectors
              </p>
            </div>

            {/* Partners Grid - Clean Single Card Design */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className="text-center">
                    {/* Logo Container - Uniform Size */}
                    <div className="w-20 h-20 mx-auto mb-4 bg-gray-50 rounded-xl flex items-center justify-center overflow-hidden">
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className="w-16 h-16 object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          e.currentTarget.nextElementSibling?.classList.remove(
                            "hidden"
                          );
                        }}
                      />
                      <div className="hidden w-12 h-12 bg-[#E6B837] rounded-full items-center justify-center text-[#0b234a] text-lg font-bold">
                        {partner.name.charAt(0)}
                      </div>
                    </div>

                    {/* Partner Name */}
                    <h4 className="text-lg font-bold text-[#0b234a] mb-2 line-clamp-2">
                      {partner.name}
                    </h4>

                    {/* Category */}
                    <p className="text-sm text-[#E6B837] font-semibold mb-3">
                      {partner.category}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {partner.description}
                    </p>

                    {/* Services */}
                    <div className="flex flex-wrap gap-1 justify-center">
                      {partner.services
                        .slice(0, 3)
                        .map((service, serviceIndex) => (
                          <span
                            key={serviceIndex}
                            className="bg-[#E6B837] text-[#0b234a] px-2 py-1 rounded-full text-xs font-medium"
                          >
                            {service}
                          </span>
                        ))}
                      {partner.services.length > 3 && (
                        <span className="text-xs text-gray-500">
                          +{partner.services.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-[#0b234a] to-[#1e3a5f] rounded-3xl p-12 text-white">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6">
                  Why Partner With Us?
                </h2>
                <p className="text-xl text-gray-300">
                  Our partnerships bring mutual benefits and enhanced value
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#E6B837] rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-[#0b234a]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Trusted Network</h3>
                  <p className="text-gray-300">
                    Access to our extensive customer base and trusted service
                    network
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-[#E6B837] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-[#0b234a]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Customer Reach</h3>
                  <p className="text-gray-300">
                    Serving 30,000+ customers across Punjab and beyond
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-[#E6B837] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-[#0b234a]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Quality Service</h3>
                  <p className="text-gray-300">
                    Maintaining high standards with 99% success rate
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-[#E6B837] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-[#0b234a]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    Digital Integration
                  </h3>
                  <p className="text-gray-300">
                    Seamless integration with modern digital platforms
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-[#E6B837] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-[#0b234a]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Reliability</h3>
                  <p className="text-gray-300">
                    Consistent and dependable service delivery
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-[#E6B837] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="w-8 h-8 text-[#0b234a]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Business Growth</h3>
                  <p className="text-gray-300">
                    Mutual growth opportunities and expanded market reach
                  </p>
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
                  Interested in Partnership?
                </h2>
                <img
                  className="h-2 rounded-3xl mx-auto mb-8"
                  src="/gline.png"
                  alt=""
                />
                <p className="text-xl text-gray-600 mb-8">
                  Join our network of trusted partners and expand your reach
                  with us
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:advaitservicess@gmail.com?subject=Partnership Inquiry"
                    className="bg-gradient-to-r from-[#E6B837] to-[#d4a94b] text-[#0b234a] px-8 py-4 rounded-full font-bold text-lg hover:from-[#d4a94b] hover:to-[#E6B837] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Become a Partner
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
