import React from "react";
// import plantImage from "../assets/plant.png"; // Replace with actual image path

const HeroSection = () => {
  return (
    <section className="flex justify-between items-center bg-green-100 p-8">
      <div>
        <h2 className="text-4xl font-bold text-green-900">Vasundhara Biofibers</h2>
        <p className="text-lg text-gray-600">
          Redefining Packaging, Restoring Nature – One Fiber at a Time.
        </p>
        <div className="mt-4">
          <button className="bg-green-700 text-white px-4 py-2 rounded-lg mr-2">Explore Now</button>
          <button className="bg-gray-300 text-black px-4 py-2 rounded-lg">Know More</button>
        </div>
      </div>
      <img src={plantImage} alt="Plant in pot" className="w-1/3" />
    </section>
  );
};

export default HeroSection;
