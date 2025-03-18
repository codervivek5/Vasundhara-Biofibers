import React from "react";
import { motion } from "framer-motion";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";
import mainImg from "./images/main_img.png";

const SustainabilityMission = () => {
  const missionPoints = [
    { image: img1, title: "Eco-Friendly Packaging", description: "Using biodegradable materials to reduce environmental impact." },
    { image: img2, title: "Reducing Plastic Waste", description: "Committed to eliminating single-use plastics from our supply chain." },
    { image: img3, title: "Supporting Greener Future", description: "Investing in renewable energy and sustainable practices." },
    { image: img4, title: "Innovative & Sustainable Design", description: "Creating products that are both beautiful and environmentally responsible." },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="bg-gray-50 py-8">
      {/* Hero Section with Mission Statement */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Side - Text Content */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We aim to explore nature to sustain it. Our goal is to{" "}
              <span className="font-bold text-green-700">create packaging solutions</span>{" "}
              that not only serve businesses but also contribute positively to the
              environment. We are committed to{" "}
              <span className="font-bold text-green-700">reducing plastic</span> usage
              and supporting sustainable alternatives.
            </p>
            <motion.button
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={mainImg}
              alt="Sustainability Mission"
              className="rounded-xl  w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* Mission Points Section */}
      <motion.div
        className="container mx-auto px-4 md:px-6 mt-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h3 className="text-2xl font-bold text-center mb-12 text-green-800">Our Sustainability Initiatives</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {missionPoints.map((point, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              variants={itemVariants}
            >
              <div className="mb-4 overflow-hidden rounded-lg">
                <motion.img
                  src={point.image}
                  alt={point.title}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-green-700">{point.title}</h4>
              <p className="text-gray-600">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="container mx-auto px-4 md:px-6 mt-24 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-green-800">Join Us in Making a Difference</h3>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Together, we can create a more sustainable future. Learn how your business can partner with us.
        </p>
        <motion.button
          className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Partner With Us
        </motion.button>
      </motion.div>
    </div>
  );
};

export default SustainabilityMission;