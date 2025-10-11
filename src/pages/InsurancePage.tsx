import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";

export default function InsurancePage() {
  return (
    <>
      <Header />
      <div className="pt-24 min-h-screen bg-white [background-image:radial-gradient(#e6e7e9_10px,transparent_10px)] [background-size:16px_16px] bg-fixed font-roboto">
        <div className="max-w-4xl mx-auto px-6 py-12 text-center">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center mb-8">
            <Breadcrumb
              items={[
                { name: "Services", href: "/services" },
                { name: "Insurance", href: "/insurance" },
              ]}
            />
          </div>

          <div className="bg-white rounded-3xl p-12 shadow-xl border-2 border-[#E6B837]">
            <h1 className="text-5xl font-bold text-[#0b234a] mb-6">
              Insurance Services
            </h1>
            <img
              className="h-2 rounded-3xl mx-auto mb-8"
              src="/gline.png"
              alt=""
            />
            <p className="text-xl text-gray-600 mb-8">
              Protect what matters most with our insurance solutions
            </p>
            <div className="bg-gradient-to-r from-[#E6B837] to-[#d4a94b] rounded-full p-1 inline-block">
              <a
                href="/"
                className="block bg-white text-[#0b234a] font-bold px-8 py-3 rounded-full hover:bg-gray-50 transition-colors"
              >
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
