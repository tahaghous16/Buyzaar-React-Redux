import React from "react";
import { bestsellers } from "../../data";
import Products from "./Products";
const Bestsellers = () => {
  return <Products items={bestsellers} heading="Best Seller" />;
};

export default Bestsellers;
