import React from "react";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import "./Products.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const Products = ({ items, heading }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };
  const navigate = useNavigate();
  const handleviewDetails = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <div>
      <h1 className="heading">{heading}</h1>
      <div className="products-container">
        {items.map((item) => (
          <div key={item.id} className="product-container">
            <img src={item.img} alt="" className="product-image" />
            <div className="product-desc">
              <h3>{item.title}</h3>
              <span>Rs {item.price}</span>
            </div>
            <div className="product-info">
              <button className="icon" onClick={() => handleAddToCart(item)}>
                <CiShoppingCart /> Add to Cart
              </button>

              <button
                className="icon"
                onClick={() => handleviewDetails(item.id)}
              >
                <CiSearch /> View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
