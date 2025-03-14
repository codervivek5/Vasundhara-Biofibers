import backgroundImage from "./images/background.png"; // Adjust the path as needed

const AboutUs = () => {
  return (
    <div className="relative bg-cover bg-center py-16 px-6 md:px-12">
      {/* Dark overlay for better text visibility */}
      <div
        className="absolute inset-0 bg-black opacity-30"
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
      ></div>

      <div className="relative bg-white bg-opacity-70 p-8 rounded-lg max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-green-900 mb-4">About us</h2>
        <p className="text-gray-700 mb-6">
          At Vasundhara Biofibers, we are more than just an e-commerce website; we are a passionate
          community dedicated to fostering a sustainable and eco-friendly lifestyle. Our mission is
          to empower environmentally conscious consumers by offering a curated selection of
          high-quality, sustainable products that inspire positive change and make a difference in
          the world.
        </p>
        <h3 className="text-xl font-semibold text-black mb-2">Mission Statement</h3>
        <p className="text-gray-700 mb-6">
          "To be the leading platform for sustainable living, providing eco-friendly products and
          fostering a green community that promotes conscious consumption and environmental
          responsibility."
        </p>
        <h3 className="text-xl font-semibold text-black mb-2">Vision Statement</h3>
        <p className="text-gray-700">
          "To create a greener future for generations to come, where every choice matters, and
          sustainability is at the core of everyday living. We envision a world where eco-friendly
          practices are the norm, and together, we can make a significant impact on the health of
          our planet."
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
