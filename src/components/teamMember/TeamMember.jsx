import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const TeamMember = ({ name, role, image, bio, social }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="text-center flex flex-col items-center">
      <img className="w-40 h-40 rounded-full mb-4" src={image} alt={name} />
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-yellow-500 font-semibold">{role}</p>
      <p className="text-gray-400 text-sm my-2">{bio || "No bio available."}</p>
      <div className="flex space-x-4 mt-2">
        <a href={social[0]} className="text-gray-400 hover:text-white"><FaFacebookF /></a>
        <a href={social[1]} className="text-gray-400 hover:text-white"><FaTwitter /></a>
        <a href={social[2]} className="text-gray-400 hover:text-white"><FaInstagram /></a>
      </div>
    </motion.div>
  );
};

export default TeamMember;
