import React from 'react';
import product1 from './images/product1.png';
import product2 from './images/product2.png';
import product3 from './images/product3.png';
import subImage from './images/sub-image.png';

const products = [
  { 
    image: product1, 
    title: "Paper Bags", 
    description: "High-quality, biodegradable paper bags supplied to brands like Blinkit, Zomato, and Samsung." 
  },
  { 
    image: product2, 
    title: "Paper Bags", 
    description: "High-quality, biodegradable paper bags supplied to brands like Blinkit, Zomato, and Samsung." 
  },
  { 
    image: product3, 
    title: "Paper Bags", 
    description: "High-quality, biodegradable paper bags supplied to brands like Blinkit, Zomato, and Samsung." 
  }
];

const ProductSection = () => {
  return (
    <div className="py-8" style={{ backgroundColor: '#d0ffd0' }}>
      <div className="container mx-auto px-16">

        {/* First Product - Left image, right text with thumbnail row */}
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <img 
              src={product1} 
              alt="Paper Bags" 
              className="max-w-full h-auto mx-auto"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-right">
            <h2 className="text-5xl font-bold text-gray-800 mb-4">Paper Bags</h2>
            <p className="text-xl text-gray-700 mb-6">
              High-quality, biodegradable paper<br />
              bags supplied to brands like<br />
              Blinkit, Zomato, and Samsung.
            </p>
            <div className="flex bg-green-900 justify-center md:justify-end">
              <div className="flex space-x-2">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="rounded-full overflow-hidden border-4 border-green-800" style={{ width: '80px', height: '80px', backgroundColor: '#024930' }}>
                    <img 
                      src={subImage} 
                      alt={`Product view ${i+1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Second Product - Right image, left text with thumbnail stripe */}
        <div className="flex flex-col md:flex-row-reverse items-center mb-16">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <img 
              src={product2} 
              alt="Paper Bags" 
              className="max-w-full h-auto mx-auto"
            />
          </div>
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h2 className="text-5xl font-bold text-gray-800 mb-4">Paper Bags</h2>
            <p className="text-xl text-gray-700 mb-6">
              High-quality, biodegradable<br />
              paper bags supplied to brands<br />
              like Blinkit, Zomato, and Samsung.
            </p>
            <div className="rounded-full bg-green-900 p-4 flex justify-center space-x-2 max-w-md">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="rounded-full overflow-hidden" style={{ width: '70px', height: '70px' }}>
                  <img 
                    src={subImage} 
                    alt={`Product view ${i+1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Third Product - Left image, right text with thumbnail row */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <img 
              src={product3} 
              alt="Paper Bags" 
              className="max-w-full h-auto mx-auto"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-right">
            <h2 className="text-5xl font-bold text-gray-800 mb-4">Paper Bags</h2>
            <p className="text-xl text-gray-700 mb-6">
              High-quality, biodegradable<br />
              paper bags supplied to brands<br />
              like Blinkit, Zomato, and Samsung.
            </p>
            <div className="rounded-full bg-green-900 p-4 flex justify-center md:justify-end space-x-2">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="rounded-full overflow-hidden" style={{ width: '70px', height: '70px' }}>
                  <img 
                    src={subImage} 
                    alt={`Product view ${i+1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;