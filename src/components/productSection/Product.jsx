import React from 'react';
import product1 from './images/product1.png';
import product2 from './images/product2.png';
import product3 from './images/product3.png';
import subImage from './images/sub-image.png';
import bgImage from './images/background.png';

const products = [
  { image: product1, title: "Paper Bags", description: "High-quality, biodegradable paper bags supplied to brands like Blinkit, Zomato, and Samsung." },
  { image: product2, title: "Paper Bags", description: "High-quality, biodegradable paper bags supplied to brands like Blinkit, Zomato, and Samsung." },
  { image: product3, title: "Paper Bags", description: "High-quality, biodegradable paper bags supplied to brands like Blinkit, Zomato, and Samsung." }
];

const ProductSection = () => {
  return (
    <div
      className="w-full py-12 bg-cover bg-center flex flex-col items-center gap-8 px-4 md:px-16"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {products.map((product, index) => (
        <div
          key={index}
          className="relative w-full max-w-4xl bg-green-900 text-white p-6 rounded-lg flex flex-col md:flex-row gap-6 items-center"
        >
          {/* Circular Image */}
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white absolute -top-12 left-1/2 transform -translate-x-1/2 md:left-8 md:translate-x-0">
            <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
          </div>

          {/* Product Details */}
          <div className="flex flex-col text-center md:text-left mt-16 md:mt-0 md:ml-32">
            <h2 className="text-2xl md:text-3xl font-bold">{product.title}</h2>
            <p className="text-sm md:text-lg mt-2">{product.description}</p>
          </div>

          {/* Sub Images */}
          <div className="flex gap-2 mt-4 md:mt-0 md:ml-auto">
            {[1, 2, 3].map((_, i) => (
              <img
                key={i}
                src={subImage}
                alt="Small Product"
                className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-white object-cover"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductSection;
