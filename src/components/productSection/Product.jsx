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

        {products.map((product, index) => (
          <div
            key={index}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center ${index < products.length - 1 ? 'mb-16' : ''}`}
          >
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <img
                src={product.image}
                alt={product.title}
                className="max-w-full h-auto mx-auto"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-right">
              <h2 className="text-5xl font-bold text-gray-800 mb-4">{product.title}</h2>
              <p className="text-xl text-gray-700 mb-6">
                {product.description.split(', ').map((text, i) => (
                  <React.Fragment key={i}>
                    {text}<br />
                  </React.Fragment>
                ))}
              </p>
              <div className="flex bg-green-900 justify-center md:justify-end">
                <div className="flex space-x-2">
                  {[1, 2, 3].map((_, i) => (
                    <div key={i} className="rounded-full overflow-hidden border-4 border-green-800" style={{ width: '80px', height: '80px', backgroundColor: '#024930' }}>
                      <img
                        src={subImage}
                        alt={`${product.title} view ${i + 1}`}
                        className="w-full h-full object-cover"
                      />                    </div>
                  ))}
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