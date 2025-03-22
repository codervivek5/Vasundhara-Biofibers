import React from "react";
import { motion } from "framer-motion";
import { Phone, Linkedin, Twitter, Facebook, Mail } from "lucide-react";
import TeamMember from "../../components/teamMember/TeamMember";

// Import team member images
import preetiImage from "./images/Preeti.png";
import manishImage from "./images/Manish.png";
import nehaImage from "./images/Neha.png";
import sudhakarImage from "./images/Sudhakar.png";
import simramImage from "./images/Simram.png";

const teamMembers = [
  {
    name: "Preeti Singh",
    role: "CEO/Founder",
    image: preetiImage,
    bio: "Founder and visionary leader with expertise in sustainable fiber technology and bioengineering. Leading Vasundhara Biofibers' mission to revolutionize eco-friendly materials.",
    social: [
      { type: "linkedin", url: "#" },
      { type: "twitter", url: "#" },
      { type: "mail", url: "#" }
    ],
  },
  {
    name: "Dr. Manish",
    role: "CTO/Nanotechnologist",
    image: manishImage,
    bio: "Expert in nanotechnology and advanced materials science. Leads research and development to create innovative bio-based solutions for industrial applications.",
    social: [
      { type: "linkedin", url: "#" },
      { type: "twitter", url: "#" },
      { type: "mail", url: "#" }
    ],
  },
  {
    name: "Dr. Neha Srivastava",
    role: "Technical Mentor/Biotechnologist",
    image: nehaImage,
    bio: "DST Scientist at IIT BHU with extensive expertise in biotechnology and sustainable manufacturing processes. Provides critical guidance on technological innovations.",
    social: [
      { type: "linkedin", url: "#" },
      { type: "facebook", url: "#" },
      { type: "mail", url: "#" }
    ],
  },
  {
    name: "Dr. Sudhakar Tripathi",
    role: "Business Mentor",
    image: sudhakarImage,
    bio: "Head of the IT Department at REC Ambedkar Nagar with extensive experience in business development and technology commercialization strategies.",
    social: [
      { type: "linkedin", url: "#" },
      { type: "twitter", url: "#" },
      { type: "mail", url: "#" }
    ],
  },
  {
    name: "Simram Sahani",
    role: "Advisor",
    image: simramImage,
    bio: "Co-founder of Health Zone Wellness with expertise in sustainable business practices and market development for eco-friendly consumer products.",
    social: [
      { type: "linkedin", url: "#" },
      { type: "twitter", url: "#" },
      { type: "mail", url: "#" }
    ],
  },
];

// Component for social icons
const SocialIcon = ({ type, url }) => {
  const icons = {
    linkedin: <Linkedin size={18} />,
    twitter: <Twitter size={18} />,
    facebook: <Facebook size={18} />,
    mail: <Mail size={18} />
  };
  
  return (
    <a 
      href={url} 
      className="bg-green-700 p-2 rounded-full text-white hover:bg-green-800 transition-all duration-300 transform hover:scale-110"
      target="_blank" 
      rel="noopener noreferrer"
    >
      {icons[type]}
    </a>
  );
};

// Enhanced TeamMember component (you may need to modify your existing TeamMember component)
const EnhancedTeamMember = ({ name, role, image, bio, social }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="relative group">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-64 object-cover object-center transition-all duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-green-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-green-800">{name}</h3>
        <p className="text-green-600 font-medium mb-3">{role}</p>
        <p className="text-gray-600 mb-4">{bio}</p>
        
        <div className="flex space-x-3 mt-4">
          {social.map((platform, index) => (
            <SocialIcon key={index} type={platform.type} url={platform.url} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Team = () => {
  return (
    <div className="bg-gradient-to-b from-green-50 to-green-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">Our Leadership Team</h1>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the innovative minds behind Vasundhara Biofibers. Our diverse team combines expertise in biotechnology, 
            materials science, and sustainable business practices to drive our mission forward.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <EnhancedTeamMember key={index} {...member} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center bg-green-800 text-white p-10 rounded-lg shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who are passionate about sustainable materials 
            and biotechnology. Get in touch to learn more about opportunities at Vasundhara Biofibers.
          </p>
          <a 
            href="tel:+1234567890" 
            className="inline-flex items-center px-6 py-3 bg-yellow-500 text-green-900 rounded-md font-semibold 
                     hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            <Phone size={20} className="mr-2" />
            CALL NOW
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Team;