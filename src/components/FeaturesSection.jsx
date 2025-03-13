import React from "react";
import { FaLeaf, FaRecycle, FaCheckCircle, FaBoxOpen } from "react-icons/fa";

const features = [
  {
    icon: <FaLeaf className="text-green-700 text-5xl mb-4" />,
    title: "Sustainable Products",
    description:
      "Explore our carefully curated selection of sustainable products, each designed to reduce your carbon footprint.",
  },
  {
    icon: <FaRecycle className="text-green-700 text-5xl mb-4" />,
    title: "Eco-Friendly Choices",
    description:
      "Make conscious choices with our eco-friendly products, knowing that your purchases promote ethical sourcing and responsible manufacturing.",
  },
  {
    icon: <FaCheckCircle className="text-green-700 text-5xl mb-4" />,
    title: "High-Quality Selection",
    description:
      "Invest in long-lasting and reliable products that meet our stringent quality standards, ensuring your satisfaction and their longevity.",
  },
  {
    icon: <FaBoxOpen className="text-green-700 text-5xl mb-4" />,
    title: "Sustainable Packaging",
    description:
      "Our sustainable packaging ensures that your orders arrive safely while minimizing their impact on the planet.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl lg:text-4xl font-bold text-green-900 mb-10">
        Why Choose Vasundhara Biofibers?
      </h2>
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            {feature.icon}
            <h3 className="text-xl font-semibold text-green-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-700 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
