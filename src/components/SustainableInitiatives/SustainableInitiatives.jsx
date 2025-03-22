import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Check, Award, Leaf, Droplet, BarChart } from "lucide-react";
import impactImage from "./images/img1.webp";
import supportImage from "./images/img2.webp";
import mainImage from "./images/img3.webp";

const SustainableInitiatives = () => {
  // Animation controls for sections that will animate when scrolled into view
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const impactData = [
    { icon: <Droplet size={20} />, text: "38% reduction in water usage" },
    { icon: <Leaf size={20} />, text: "77% reduction in chemical consumption" },
    { icon: <BarChart size={20} />, text: "57% reduction in carbon emissions" },
    { icon: <Check size={20} />, text: "15-17% increase in farmers' income" },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 px-6 md:px-20">
     

      {/* What We Do Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-24">
          {/* Left Side - Text Content */}
          <motion.div
            className="max-w-lg"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center mb-4 bg-green-100 px-4 py-2 rounded-full">
              <Leaf className="text-green-600 mr-2" size={18} />
              <span className="text-green-800 font-medium">Sustainable Solutions</span>
            </div>
            <h2 className="text-4xl font-bold text-green-800 mb-6">
              What We <span className="relative inline-block">
                Do
                <span className="absolute bottom-1 left-0 w-full h-2 bg-green-200 -z-10"></span>
              </span>
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              At <strong className="text-green-700">Vasundhara Biofibers</strong>, we specialize in producing
              <strong className="text-green-700"> high-quality paper bags, agro-pulp-based products,</strong> and
              sustainable gifting options. Our products have been adopted by renowned
              brands like Blinkit, Zomato, and Samsung.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We also manufacture agro-planters, crafted from agricultural biomass (rice straw) with the support of self-help
              groups (SHGs) led by women.
            </p>
            <motion.button
              className="mt-8 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium flex items-center transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Learn More
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </motion.button>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-green-200 rounded-lg transform -rotate-3"></div>
              <img
                src={mainImage}
                alt="Vasundhara Biofibers"
                className="rounded-lg shadow-lg w-full h-auto object-cover relative z-10"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Our Impact Section */}
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={containerVariants}
        className="mb-24"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">MEASURABLE RESULTS</span>
            <h3 className="text-3xl font-bold text-green-800 mt-4">Our Impact</h3>
            <div className="h-1 w-20 bg-green-500 mx-auto mt-4 rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="order-2 md:order-1">
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <ul className="space-y-6">
                  {impactData.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      variants={itemVariants}
                      custom={index}
                    >
                      <div className="bg-green-100 p-2 rounded-lg text-green-600 mr-4">
                        {item.icon}
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">{item.text}</p>
                        <div className="mt-2 bg-gray-100 rounded-full h-2">
                          <div
                            className="bg-green-500 h-2 rounded-full"
                            style={{
                              width: item.text.includes("38%")
                                ? "38%"
                                : item.text.includes("77%")
                                ? "77%"
                                : item.text.includes("57%")
                                ? "57%"
                                : "17%",
                            }}
                          ></div>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-lg transform rotate-3"></div>
                <img
                  src={impactImage}
                  alt="Impact"
                  className="rounded-lg shadow-lg w-full h-auto object-cover relative z-10"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Support & Recognition Section */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">TRUSTED PARTNERS</span>
          <h3 className="text-3xl font-bold text-green-800 mt-4">Our Support & Recognition</h3>
          <div className="h-1 w-20 bg-green-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants}>
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="flex flex-col space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  We are backed by esteemed government bodies such as the Department of Science and
                  Technology, Ministry of Agriculture, and are <strong className="text-green-700">recognized by DPIIT</strong> and the
                  Government of Uttar Pradesh.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We also receive incubation support from
                  <strong className="text-green-700"> IIT Kanpur, IIT BHU, and REC Ambedkar Nagar.</strong>
                </p>

                <div className="flex flex-wrap gap-4 mt-6">
                  <div className="bg-gray-50 rounded-lg p-4 flex items-center">
                    <Award className="text-green-600 mr-2" size={20} />
                    <span className="text-sm font-medium">DPIIT Recognition</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 flex items-center">
                    <Award className="text-green-600 mr-2" size={20} />
                    <span className="text-sm font-medium">UP Government</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 flex items-center">
                    <Award className="text-green-600 mr-2" size={20} />
                    <span className="text-sm font-medium">IIT Incubation</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="relative">
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-green-200 rounded-lg transform rotate-3"></div>
              <img
                src={supportImage}
                alt="Support & Recognition"
                className="rounded-lg shadow-lg w-full h-auto object-cover relative z-10"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-24 text-center max-w-3xl mx-auto"
      >
        <h3 className="text-2xl font-bold text-green-800 mb-4">Join Our Sustainable Journey</h3>
        <p className="text-gray-600 mb-8">
          Partner with us to make a positive environmental impact while growing your business with sustainable solutions.
        </p>
        <motion.button
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-medium shadow-lg transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Get in Touch
        </motion.button>
      </motion.div>
    </div>
  );
};

export default SustainableInitiatives;