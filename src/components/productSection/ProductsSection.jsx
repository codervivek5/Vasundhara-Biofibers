import React from 'react';
import product1 from './images/product1.png';
import product2 from './images/product2.png';
import product3 from './images/product3.png';
import subImage from './images/sub-image.png';

const products = [
  { image: product1, title: "Paper Bags", description: "High-quality, biodegradable paper bags supplied to brands like Blinkit, Zomato, and Samsung." },
  { image: product2, title: "Cardboard Boxes", description: "Durable, eco-friendly cardboard boxes designed for secure packaging and shipping." },
  { image: product3, title: "Gift Packaging", description: "Elegant, sustainable gift packaging options that combine aesthetics with environmental responsibility." }
];

const ProductSection = () => {
  return (
    <div className="bg-green-100 py-12">
      <div className="container max-w-6xl mx-auto px-6 md:px-12">
        {products.map((product, index) => (
          <div key={index} className={`flex flex-col gap-6 mb-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
            
            {/* Product Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={product.image}
                alt={product.title}
                className="max-w-xs w-full h-auto object-cover rounded-lg "
              />
            </div>

            {/* Product Details */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">{product.title}</h2>
              <p className="text-lg text-green-800">{product.description}</p>
              
              {/* Rounded Sub-Images Container */}
              <div className="flex items-center gap-4 bg-green-900 p-4 rounded-full mt-6">
                {[1, 2, 3].map((_, i) => (
                  <img
                    key={i}
                    src={thumbIndex === 0 ? product.image : `./images/${product.title.toLowerCase().replace(' ', '-')}-view-${thumbIndex}.png`}
                    alt="Small Product"
                    className="w-20 h-20 rounded-full border border-green-500 object-cover"
                  />
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
