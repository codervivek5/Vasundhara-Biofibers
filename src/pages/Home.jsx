import React from "react";
import HeroSection from "../components/heroSection/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
// import ProductsSection from "../components/productSection/ProductsSection";
import Product from "../components/productSection/Product";
import AboutUs from "../components/about/AboutUs";
import Partnerships from "../components/partnership/Partnership";
import CustomerReviews from "../components/CustomerReviews";

const Home = () => {
  return (
    <>
      <HeroSection/>
      <FeaturesSection/>
      {/* <ProductsSection/> */}
      <Product/>
      <AboutUs/>
      <Partnerships/>
      <CustomerReviews/>

    </>
  );
};

export default Home;
