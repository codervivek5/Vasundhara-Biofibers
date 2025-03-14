import React from "react";
import plantImage from "./images/img.png"; // Replace with the correct path to your image

const WhoWeAre = () => {
  return (
    <section className="bg-green-900 text-white py-10 px-5 md:px-20 shadow-lg">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold underline decoration-yellow-400 mt-2 mb-6">
          Who We Are?
        </h2>
        <p className="mt-4 text-lg md:text-xl leading-relaxed">
          At <span className="font-bold text-yellow-300">Vasundhara Biofibers</span>, we revolutionize packaging
          with <span className="font-bold text-yellow-300">sustainable, eco-friendly</span> solutions. Unlike
          traditional paper, our Biotech, Nanotech, and Engineering innovations
          <span className="font-bold text-yellow-300"> reduce chemical, water,</span> and energy usage while ensuring
          high quality and <span className="font-bold text-yellow-300">lower carbon emissions</span>.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-between mt-8 gap-6">
          <img src={plantImage} alt="Plants" className="w-40 md:w-48 rounded-lg " />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4 bg-green-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <p className="text-4xl font-bold">12+</p>
              <p className="text-lg">Our Partners</p>
            </div>
            <div className="p-4 bg-green-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <p className="text-4xl font-bold">50+</p>
              <p className="text-lg">B2B Customers</p>
            </div>
            <div className="p-4 bg-green-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <p className="text-4xl font-bold">1k+</p>
              <p className="text-lg">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
