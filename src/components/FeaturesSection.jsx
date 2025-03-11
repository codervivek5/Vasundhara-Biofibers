import React from "react";

const features = [
  { title: "Sustainable Products", description: "Carefully curated sustainable products to reduce carbon footprint." },
  { title: "Eco-Friendly Choices", description: "Ethical manufacturing promoting sustainability." },
  { title: "High-Quality Selection", description: "Premium biodegradable products." },
  { title: "Sustainable Packaging", description: "Safe, eco-friendly packaging to minimize environmental impact." }
];

const FeaturesSection = () => {
  return (
    <section className="text-center p-8">
      <h3 className="text-2xl font-bold text-green-900">Why Choose Vasundhara Biofibers?</h3>
      <div className="flex justify-around mt-6">
        {features.map((feature, index) => (
          <div key={index} className="w-1/4 p-4">
            <h4 className="text-lg font-bold">{feature.title}</h4>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
