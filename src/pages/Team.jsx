import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const teamMembers = [
  {
    name: "Jeffrey Brown",
    role: "Creative Leader",
    image: "/images/jeffrey_brown.jpg",
    social: ["#", "#", "#"],
  },
  {
    name: "Ann Richmond",
    role: "Manager",
    image: "/images/ann_richmond.jpg",
    social: ["#", "#", "#"],
  },
  {
    name: "Alex Grinfield",
    role: "Programming Guru",
    image: "/images/alex_grinfield.jpg",
    social: ["#", "#", "#"],
  },
  {
    name: "Roxie Swanson",
    role: "Sales Manager",
    image: "/images/roxie_swanson.jpg",
    social: ["#", "#", "#"],
  },
];

const Team = () => {
  return (
    <div className="bg-light-green text-white p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 justify-center items-center">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="text-center flex flex-col items-center"
          >
            <img
              className="w-40 h-40 rounded-full mb-4"
              src={member.image}
              alt={member.name}
            />
            <h3 className="text-xl font-bold">{member.name}</h3>
            <p className="text-yellow-500 font-semibold">{member.role}</p>
            <p className="text-gray-400 text-sm my-2">
              Sample text. Click to select the text box.
            </p>
            <div className="flex space-x-4 mt-2">
              <a href={member.social[0]} className="text-gray-400 hover:text-white">
                <FaFacebookF />
              </a>
              <a href={member.social[1]} className="text-gray-400 hover:text-white">
                <FaTwitter />
              </a>
              <a href={member.social[2]} className="text-gray-400 hover:text-white">
                <FaInstagram />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-12">
        <h2 className="text-3xl font-bold">OUR PERFECT TEAM</h2>
        <p className="text-gray-400 text-sm mt-2">
          Sample text. Click to select the text box.
        </p>
        <button className="mt-4 bg-yellow-500 text-black px-6 py-2 rounded-md font-semibold hover:bg-yellow-600">
          📞 CALL NOW
        </button>
      </div>
    </div>
  );
};

export default Team;
