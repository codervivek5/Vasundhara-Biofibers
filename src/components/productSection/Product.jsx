import React, { useState } from 'react';
import product1 from './images/product1.png';
import product2 from './images/product2.png';
import product3 from './images/product3.png';
import subImage from './images/sub-image.png';

const products = [
  {
    image: product1,
    title: "Paper Bags",
    description: "High-quality, biodegradable paper bags supplied to brands like Blinkit, Zomato, and Samsung.",
    features: ["100% Biodegradable", "Custom Branding", "Multiple Sizes"]
  },
  {
    image: product2,
    title: "Paper Boxes",
    description: "Premium packaging solutions that combine durability with sustainability for food and retail industries.",
    features: ["Sturdy Design", "Food-Safe", "Eco-Friendly"]
  },
  {
    image: product3,
    title: "Gift Packaging",
    description: "Elegant and sustainable gift packaging solutions for special occasions and corporate gifting.",
    features: ["Luxurious Finish", "Customizable", "Plastic-Free"]
  }
];

const ProductSection = () => {
  const [activeThumb, setActiveThumb] = useState({});

  const handleThumbClick = (productIndex, thumbIndex) => {
    setActiveThumb({
      ...activeThumb,
      [productIndex]: thumbIndex
    });
  };

  return (
    <div className="py-16" style={{ 
      background: 'linear-gradient(135deg, #e6ffea 0%, #c1f0c1 100%)' 
    }}>
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-green-800 mb-16">
          <span className="relative pb-2">
            Eco-Friendly Products
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-green-600"></span>
          </span>
        </h1>

        {products.map((product, index) => (
          <div
            key={index}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center ${
              index < products.length - 1 ? 'mb-24' : ''
            } bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-2xl`}
          >
            <div className="w-full md:w-1/2 relative overflow-hidden">
              <div className="bg-gradient-to-r from-green-50 to-green-100 p-6">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-w-full h-auto mx-auto rounded-lg  transform transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-600 text-white text-xs uppercase font-bold rounded-full px-3 py-1">
                    Sustainable
                  </span>
                </div>
              </div>
              
              <div className="bg-green-800 p-4">
                <div className="flex justify-center space-x-3">
                  {[0, 1, 2].map((thumbIndex) => (
                    <button
                      key={thumbIndex}
                      onClick={() => handleThumbClick(index, thumbIndex)}
                      className={`rounded-full overflow-hidden border-2 transition-all duration-300 ${
                        activeThumb[index] === thumbIndex 
                          ? 'border-white scale-110' 
                          : 'border-green-700 opacity-80'
                      }`}
                      style={{ width: '70px', height: '70px' }}
                    >
                      <img
                        src={subImage}
                        alt={`${product.title} view ${thumbIndex + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className={`w-full md:w-1/2 p-8 md:p-12 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                {product.title}
              </h2>
              
              <div className={`h-1 w-16 bg-green-600 mb-6 ${index % 2 === 0 ? '' : 'ml-auto'}`}></div>
              
              <p className="text-lg text-gray-600 mb-8">
                {product.description.split(', ').map((text, i) => (
                  <React.Fragment key={i}>
                    {text}{i < product.description.split(', ').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
              
              <div className="mb-8">
                <ul className={`flex flex-wrap gap-3 ${index % 2 === 0 ? '' : 'justify-end'}`}>
                  {product.features.map((feature, i) => (
                    <li 
                      key={i}
                      className="bg-green-50 text-green-800 px-4 py-2 rounded-full text-sm font-medium flex items-center"
                    >
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className={`flex ${index % 2 === 0 ? '' : 'justify-end'}`}>
                <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center">
                  Learn More
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>
              
              <div className={`mt-8 flex items-center ${index % 2 === 0 ? '' : 'justify-end'}`}>
                <div className="text-sm text-gray-500">
                  <span className="block mb-1">Trusted by leading brands</span>
                  <div className="flex space-x-3">
                    {['Blinkit', 'Zomato', 'Samsung'].map((brand, i) => (
                      <span key={i} className="text-green-700 font-medium">{brand}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;