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
    <section className="bg-green-100 py-16">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center">

        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left relative">
          <h1 className="text-7xl lg:text-8xl mb-5 font-extrabold text-green-900">
            Vasundhara Biofibers
          </h1>
          <p className="text-xl lg:text-2xl text-gray-700 mt-4">
            Redefining Packaging, Restoring Nature – One Fiber at a Time.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex space-x-4 justify-center lg:justify-start">
            <button className="bg-green-900 text-white px-6 py-3 rounded-lg hover:bg-green-800">
              Explore now
            </button>
            <button className="border border-green-900 text-green-900 px-6 py-3 rounded-lg hover:bg-green-200">
              Know more
            </button>
          </div>
        </div>

        {/* Image Carousel with Background Shape */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 relative flex justify-center ">
          {/* Background Image */}
          <img
            src={backgroundShape}
            alt="Background Shape"
            className="absolute -top-10 left-1/2 transform -translate-x-1/2 h-80  object-cover"
          />

          {/* Swiper Carousel */}
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            className="w-full max-w-lg relative z-10"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center">
                  <img
                    src={slide.image}
                    alt="Eco Product"
                    className="h-72 object-cover rounded-lg drop-shadow-md"
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
