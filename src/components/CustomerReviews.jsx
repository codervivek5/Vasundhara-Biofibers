import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaArrowLeft, FaArrowRight, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const reviews = [
  {
    name: "Sarah Johnson",
    role: "Verified Customer",
    review:
      "I absolutely love my Organic Cotton Tote Bag from Greenify! It's stylish, eco-friendly, and durable for everyday use.",
    rating: 5,
    date: "January 15, 2025",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Emily Brown",
    role: "Eco Enthusiast",
    review:
      "Amazing product! The quality of the fabric is superb, and it's perfect for daily use. Will definitely buy again.",
    rating: 4,
    date: "February 3, 2025",
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Michael Smith",
    role: "Frequent Shopper",
    review:
      "Stylish and practical! I carry this tote bag everywhere I go. The sustainability factor makes it even better.",
    rating: 5,
    date: "March 2, 2025",
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "David Wilson",
    role: "Sustainability Advocate",
    review:
      "The best eco-friendly tote I've ever used! Durable, spacious, and made with high-quality sustainable materials.",
    rating: 5,
    date: "February 20, 2025",
    image: "https://i.pravatar.cc/150?img=4",
  },
];

const CustomerReviews = () => {
  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <span key={i} className={`text-lg ${i < rating ? "text-yellow-500" : "text-gray-300"}`}>
          ★
        </span>
      ));
  };

  return (
    <div className="w-full py-16 px-4 sm:px-5 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <span className="text-green-500 font-medium text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-green-900 mt-2 text-center">What Our Customers Say</h2>
          <div className="w-16 h-1 bg-green-500 mt-4 rounded-full"></div>
        </div>

        <div className="relative w-full">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{ nextEl: ".next", prevEl: ".prev" }}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-14"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-green-100 h-full flex flex-col transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
                      <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-lg text-green-900">{review.name}</h3>
                      <p className="text-green-600 text-sm">{review.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {renderStars(review.rating)}
                  </div>
                  
                  <div className="flex-grow relative">
                    <FaQuoteLeft className="absolute top-0 left-0 text-green-100 text-xl" />
                    <p className="text-gray-700 mt-2 px-5 italic text-left h-24 overflow-hidden line-clamp-4">
                      {review.review}
                    </p>
                    <FaQuoteRight className="absolute bottom-0 right-0 text-green-100 text-xl" />
                  </div>
                  
                  <div className="text-right mt-4 text-gray-400 text-sm">
                    {review.date}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <button aria-label="Previous review" className="prev absolute left-0 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 bg-white shadow-lg rounded-full z-10 text-green-600 hover:bg-green-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
            <FaArrowLeft className="text-xs sm:text-base" />
          </button>
          <button aria-label="Next review" className="next absolute right-0 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 bg-white shadow-lg rounded-full z-10 text-green-600 hover:bg-green-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
            <FaArrowRight className="text-xs sm:text-base" />
          </button>
        </div>

        <div className="mt-10 text-center">
          <a href="#" className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 text-sm sm:text-base">
            See All Reviews
          </a>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;