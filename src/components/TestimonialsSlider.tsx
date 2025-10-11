import { useState, useEffect } from "react";
import { testimonialsData, type Testimonial } from "../constants/testimonials";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Group testimonials into sets of 3
  const testimonialsPerSlide = 3;
  const totalSlides = Math.ceil(testimonialsData.length / testimonialsPerSlide);

  // Get current testimonials for display
  const getCurrentTestimonials = (): Testimonial[] => {
    const startIndex = currentIndex * testimonialsPerSlide;
    return testimonialsData.slice(
      startIndex,
      startIndex + testimonialsPerSlide
    );
  };

  // Auto-rotate testimonials every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning && !isHovered) {
        nextSlide();
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isTransitioning, isHovered]);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const getAvatarColor = (name: string) => {
    const colors = [
      "bg-[#E6B837]",
      "bg-[#0b234a]",
      "bg-gradient-to-r from-[#E6B837] to-[#d4a94b]",
      "bg-gradient-to-r from-[#0b234a] to-[#1e3a5f]",
      "bg-blue-600",
      "bg-green-600",
      "bg-purple-600",
      "bg-red-600",
    ];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  return (
    <div className="w-full">
      {/* Testimonials Container with Horizontal Sliding */}
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {Array.from({ length: totalSlides }, (_, slideIndex) => (
            <div key={slideIndex} className="w-full flex-shrink-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonialsData
                  .slice(
                    slideIndex * testimonialsPerSlide,
                    (slideIndex + 1) * testimonialsPerSlide
                  )
                  .map((testimonial, index) => (
                    <div
                      key={`${testimonial.id}-${slideIndex}-${index}`}
                      className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                      <div className="flex items-center mb-4">
                        <div
                          className={`w-12 h-12 ${getAvatarColor(
                            testimonial.name
                          )} rounded-full flex items-center justify-center text-white font-bold text-lg`}
                        >
                          {testimonial.avatar}
                        </div>
                        <div className="ml-4">
                          <h4 className="font-semibold text-[#0b234a]">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-gray-500">
                            {testimonial.service}
                          </p>
                          <div className="flex text-[#E6B837] mt-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <span key={i}>★</span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 italic leading-relaxed">
                        "{testimonial.comment}"
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons - Bottom of testimonials */}
      <div className="flex justify-center items-center mt-8 space-x-4">
        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          className="w-12 h-12 bg-[#0b234a] text-white rounded-full flex items-center justify-center hover:bg-[#1e3a5f] transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous testimonials"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="flex space-x-2">
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true);
                  setCurrentIndex(index);
                  setTimeout(() => setIsTransitioning(false), 500);
                }
              }}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex
                  ? "bg-[#E6B837]"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          className="w-12 h-12 bg-[#0b234a] text-white rounded-full flex items-center justify-center hover:bg-[#1e3a5f] transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next testimonials"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
