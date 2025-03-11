import React from "react";
// import ProductCard from "./ProductCard";
// import productImage1 from "../assets/product1.png";
// import productImage2 from "../assets/product2.png";

const ProductsSection = () => {
  return (
    <section className="p-8 bg-green-100">
      <h3 className="text-center text-2xl font-bold text-green-900">Our Best-Selling Sustainable Products</h3>
      <div className="mt-6 flex flex-col items-center space-y-6">
        <ProductCard image={productImage1} />
        <ProductCard image={productImage2} />
      </div>
    </section>
  );
};

export default ProductsSection;
