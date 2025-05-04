import React from "react";
import Navbar from "../components/navbar/Navbar";
import Slider from "../components/slider/Slider";
import Categories from "../components/categories/Categories";
import NewArrivals from "../components/products/NewArrivals";
import Bestsellers from "../components/products/Bestseller";
import Newsletter from "../components/newsletter/Newsletter";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Categories />
      <NewArrivals />
      <Bestsellers />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
