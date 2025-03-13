import React from "react";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 lg:px-16">
        
        <div className="flex flex-col md:flex-row justify-between">
          
          {/* Left Section */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-lg font-bold bg-green-100 text-green-900 px-3 py-1 rounded-lg inline-block">
              Vasundhara Biofibers
            </h2>

            {/* Navigation Links */}
            <div className="mt-4 space-y-2">
              <h3 className="text-md font-semibold">Pages</h3>
              <div className="flex space-x-6 text-gray-300">
                <a href="#" className="hover:text-white">Home</a>
                <a href="#" className="hover:text-white">Team</a>
                <a href="#" className="hover:text-white">About us</a>
                <a href="#" className="hover:text-white">Contact us</a>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
            <a href="#" className="text-white hover:text-gray-400" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
              </a>
              <a href="#" className="text-white hover:text-gray-400" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a href="#" className="text-white hover:text-gray-400" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
              </a>
              <a href="#" className="text-white hover:text-gray-400" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
            </div>

            {/* Terms & Copyright */}
            <p className="text-sm text-gray-400 mt-4">
              Terms & services <br />
              &copy; {new Date().getFullYear()} vasundharabiofibers. All rights reserved.
            </p>
          </div>

          {/* Right Section */}
          <div>
            <h3 className="text-md font-semibold">Contact us</h3>
            <div className="mt-4 space-y-3">
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faPhone} className="text-white" />
                <span>+91 8528889576</span>
              </div>
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faEnvelope} className="text-white" />
                <span>info@vasundharabiofibers.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faLocationDot} className="text-white" />
                <span>DJAC Building, 3rd Floor, IIT Kanpur, 208016</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
