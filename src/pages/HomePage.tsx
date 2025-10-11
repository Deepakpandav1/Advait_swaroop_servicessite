import Header from "../components/Header";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import Breadcrumb from "../components/Breadcrumb";
import SEOHead from "../components/SEOHead";
import {
  pageSEOData,
  organizationStructuredData,
  websiteStructuredData,
} from "../utils/seoData";

export default function HomePage() {
  // Sample carousel data - you can replace these with your actual images
  const carouselItems = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Business Services",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Travel Services",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Government Services",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Education Services",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Financial Services",
    },
  ];

  return (
    <>
      <SEOHead
        title={pageSEOData.home.title}
        description={pageSEOData.home.description}
        keywords={pageSEOData.home.keywords}
        canonicalUrl="https://www.advaitswaroopservices.com/"
        structuredData={[organizationStructuredData, websiteStructuredData]}
      />
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Breadcrumb items={[{ name: "Home", href: "/" }]} />
      </div>
      {/* Carousel Section */}
      <div className="pt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Carousel
            items={carouselItems}
            autoPlay={true}
            autoPlayInterval={5000}
          />
        </div>
      </div>
      <div className="min-h-screen bg-white [background-image:radial-gradient(#e6e7e9_10px,transparent_10px)] [background-size:16px_16px] bg-fixed font-roboto">
        <div className="max-w-4xl mx-auto px-6 py-12 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-xl border-2 border-[#E6B837]">
            <h1 className="text-5xl font-bold text-[#0b234a] mb-6">
              Welcome to Advait Swaroop Services - Digital Services Platform
            </h1>
            <img
              className="h-2 rounded-3xl mx-auto mb-8"
              src="/gline.png"
              alt="Advait Swaroop Services Digital Services Platform - Ad Services, AdServices, Advait Services, Government Services, Travel Booking, Business Solutions"
            />
            <p className="text-xl text-gray-600 mb-8">
              Your comprehensive digital services platform for government
              services, travel booking, business solutions, and more across
              India. Get professional assistance with Aadhaar, PAN, PMJAY,
              flight booking, and business services. Whether you search for "Ad
              Services", "AdServices", "Advait Services", or "Advait Swaroop
              Services" - we provide the best government services, travel
              booking, and business solutions.
            </p>
            <div className="bg-gradient-to-r from-[#E6B837] to-[#d4a94b] rounded-full p-1 inline-block">
              <a
                href="/services"
                className="block bg-white text-[#0b234a] font-bold px-8 py-3 rounded-full hover:bg-gray-50 transition-colors"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Hidden SEO Content for Search Engines */}
      <div className="hidden">
        <h2>
          Ad Services, AdServices, Advait Services, Advait Swaroop Services
        </h2>
        <p>
          Ad Services India, AdServices India, Advait Services India, Advait
          Swaroop Services India. Government services, travel booking, business
          solutions, digital services. Best Ad Services, Top AdServices,
          Reliable Advait Services, Trusted Advait Swaroop Services. Ad Services
          Mumbai, AdServices Delhi, Advait Services Bangalore, Advait Swaroop
          Services Pune. Government assistance, travel assistance, business
          assistance, digital assistance. Professional Ad Services, Expert
          AdServices, Experienced Advait Services, Quality Advait Swaroop
          Services. Quick Ad Services, Fast AdServices, Urgent Advait Services,
          Immediate Advait Swaroop Services. Online Ad Services, Digital
          AdServices, E-Advait Services, Web Advait Swaroop Services. Ad
          Services help, AdServices support, Advait Services assistance, Advait
          Swaroop Services guidance. Ad Services contact, AdServices phone,
          Advait Services email, Advait Swaroop Services address. Ad Services
          reviews, AdServices ratings, Advait Services feedback, Advait Swaroop
          Services testimonials. Ad Services near me, AdServices nearby, Advait
          Services local, Advait Swaroop Services location. Ad Services cost,
          AdServices price, Advait Services fee, Advait Swaroop Services
          charges. Ad Services booking, AdServices appointment, Advait Services
          schedule, Advait Swaroop Services booking. Ad Services online,
          AdServices website, Advait Services portal, Advait Swaroop Services
          platform. Ad Services mobile, AdServices app, Advait Services
          application, Advait Swaroop Services mobile. Ad Services customer
          service, AdServices support team, Advait Services help desk, Advait
          Swaroop Services assistance. Ad Services quality, AdServices
          excellence, Advait Services standards, Advait Swaroop Services
          reliability. Ad Services experience, AdServices expertise, Advait
          Services knowledge, Advait Swaroop Services skills. Ad Services
          innovation, AdServices technology, Advait Services digital, Advait
          Swaroop Services modern. Ad Services future, AdServices growth, Advait
          Services development, Advait Swaroop Services progress. Ad Services
          vision, AdServices mission, Advait Services goals, Advait Swaroop
          Services objectives. Ad Services values, AdServices principles, Advait
          Services ethics, Advait Swaroop Services integrity. Ad Services
          commitment, AdServices dedication, Advait Services passion, Advait
          Swaroop Services care. Ad Services success, AdServices achievement,
          Advait Services results, Advait Swaroop Services outcomes. Ad Services
          satisfaction, AdServices happiness, Advait Services joy, Advait
          Swaroop Services delight. Ad Services trust, AdServices confidence,
          Advait Services faith, Advait Swaroop Services belief. Ad Services
          partnership, AdServices collaboration, Advait Services teamwork,
          Advait Swaroop Services unity. Ad Services community, AdServices
          society, Advait Services people, Advait Swaroop Services family. Ad
          Services world, AdServices global, Advait Services international,
          Advait Swaroop Services universal. Ad Services everywhere, AdServices
          anywhere, Advait Services always, Advait Swaroop Services forever.
        </p>
      </div>

      <Footer />
    </>
  );
}
