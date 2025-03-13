import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import plant1 from "./images/plant1.png";
import plant2 from "./images/plant2.png";
import plant3 from "./images/plant3.png";
import backgroundShape from "./images/Vector.png"; // Background shape

const slides = [
  {
    title: "Vasundhara Biofibers",
    subtitle: "Redefining Packaging, Restoring Nature – One Fiber at a Time.",
    image: plant1,
  },
  {
    title: "Sustainable Solutions",
    subtitle: "Eco-friendly packaging for a greener tomorrow.",
    image: plant2,
  },
  {
    title: "Nature’s Best Alternative",
    subtitle: "Say goodbye to plastic, choose biodegradable solutions.",
    image: plant3,
  },
];

const HeroSection = () => {
  return (
    <section className="bg-green-100 py-10 md:py-16 px-4">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center text-center lg:text-left">
        {/* Text Content */}
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-green-900">
            Vasundhara Biofibers
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 mt-4">
            Redefining Packaging, Restoring Nature – One Fiber at a Time.
          </p>
          
          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row sm:space-x-4 justify-center lg:justify-start">
            <button className="bg-green-900 text-white px-6 py-3 rounded-lg hover:bg-green-800 mb-3 sm:mb-0">
              Explore now
            </button>
            <button className="border border-green-900 text-green-900 px-6 py-3 rounded-lg hover:bg-green-200">
              Know more
            </button>
          </div>
        </div>

        {/* Image Carousel with Background Shape */}
        <div className="lg:w-1/2 flex justify-center relative">
          {/* Background Image */}
          <img
            src={backgroundShape}
            alt="Background Shape"
            className="absolute -top-5 left-1/2 transform -translate-x-1/2 h-48 sm:h-60 md:h-72 lg:h-80 object-cover"
          />
          
          {/* Swiper Carousel */}
          <Swiper
            spaceBetween={20}
            centeredSlides={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg relative z-10"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center">
                  <img
                    src={slide.image}
                    alt="Eco Product"
                    className="h-56 sm:h-64 md:h-72 object-cover rounded-lg drop-shadow-md"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
