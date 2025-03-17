import React, { useState } from "react";
import { MapPin, Mail, Phone, Globe, ArrowRight } from "lucide-react";

const JoinUs = () => {
  const [activeTab, setActiveTab] = useState("contact");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    interest: "general"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Thank you for your interest! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "", interest: "general" });
  };

  return (
    <div className="max-w-4xl mb-12 mx-auto p-6 md:p-8 bg-white shadow-xl rounded-2xl border border-gray-200">
      {/* Header Section with improved styling */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-2">Join Us in Sustainability</h2>
        <div className="w-16 h-1 bg-green-500 mx-auto mb-4"></div>
        <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Be part of the movement! Choose <span className="font-semibold text-green-600">Vasundhara Biofibers</span> and contribute to a cleaner, greener planet by reducing plastic waste.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200 mb-6">
        <button 
          onClick={() => setActiveTab("contact")} 
          className={`px-4 py-2 font-medium ${activeTab === "contact" ? "text-green-600 border-b-2 border-green-500" : "text-gray-500"}`}
        >
          Contact Us
        </button>
        <button 
          onClick={() => setActiveTab("inquiry")} 
          className={`px-4 py-2 font-medium ${activeTab === "inquiry" ? "text-green-600 border-b-2 border-green-500" : "text-gray-500"}`}
        >
          Send Inquiry
        </button>
      </div>

      {/* Contact Details Section */}
      {activeTab === "contact" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ContactItem 
              icon={<MapPin className="text-red-500 w-6 h-6" />} 
              title="Our Address"
              text="DJAC Building, 3rd Floor, IIT Kanpur, 208016" 
            />
            <ContactItem 
              icon={<Mail className="text-blue-500 w-6 h-6" />} 
              title="Email Us"
              text="vasundharabiofibers@gmail.com" 
              link="mailto:vasundharabiofibers@gmail.com" 
            />
            <ContactItem 
              icon={<Phone className="text-green-500 w-6 h-6" />} 
              title="Call Us"
              text="+91 8528889576" 
              link="tel:+918528889576" 
            />
            <ContactItem 
              icon={<Globe className="text-blue-500 w-6 h-6" />} 
              title="Company"
              text="Vasundhara Biofibers" 
            />
          </div>

          {/* Google Map Section - Directly visible */}
          <div className="mt-6">
            <h3 className="font-medium text-gray-700 mb-3">Our Location</h3>
            <div className="rounded-lg overflow-hidden shadow-md border">
              <iframe
                className="w-full h-64 md:h-80"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.2419272861877!2d80.22955847541993!3d26.512338776888056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c477c8ab3b9ef%3A0x30e4b4f2f3b0d9b2!2sIIT%20Kanpur!5e0!3m2!1sen!2sin!4v1700000000000"
                allowFullScreen
                loading="lazy"
                title="Google Maps - IIT Kanpur"
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* Inquiry Form Section */}
      {activeTab === "inquiry" && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">I'm interested in</label>
            <select
              id="interest"
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="general">General Information</option>
              <option value="partnership">Business Partnership</option>
              <option value="products">Product Information</option>
              <option value="sustainability">Sustainability Initiatives</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors duration-200"
          >
            Send Message
            <ArrowRight size={18} className="ml-2" />
          </button>
        </form>
      )}

      
    </div>
  );
};

const ContactItem = ({ icon, title, text, link }) => (
  <div className="flex items-start space-x-4 bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
    <div className="bg-white p-2 rounded-full shadow-sm">{icon}</div>
    <div>
      <h3 className="text-sm font-semibold text-gray-700">{title}</h3>
      {link ? (
        <a href={link} className="text-gray-600 hover:text-green-600 transition-colors duration-200">
          {text}
        </a>
      ) : (
        <span className="text-gray-600">{text}</span>
      )}
    </div>
  </div>
);

export default JoinUs;