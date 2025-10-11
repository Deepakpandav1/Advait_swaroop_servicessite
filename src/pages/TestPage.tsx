import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TestPage() {
  return (
    <>
      <Header />
      <div className="pt-24 min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-12 text-center">
          <h1 className="text-4xl font-bold text-[#0b234a] mb-4">
            Test Page - Routing Works!
          </h1>
          <p className="text-xl text-gray-600">
            If you can see this page, the routing is working correctly.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
