import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/navbar/Navbar";
import { BiShoppingBag } from "react-icons/bi";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../redux/cartSlice";
import { IoClose } from "react-icons/io5";
import Footer from "../../components/footer/Footer";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div>
      <Navbar />

      <div className="cart-container">
        <div className="cart-title-container">
          <BiShoppingBag className="cart-icon" />
          <h2 className="cart-title">Shopping Cart</h2>
        </div>
        {cartItems.length === 0 ? (
          <div className="empty-cart-message">
            <p>Your Cart is Empty</p>
            <span>Browse through our products and add items to your cart!</span>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items-section">
              <div className="cart-header">
                <div className="header-item">Product</div>
                <div className="header-item">Price</div>
                <div className="header-item">Quantity</div>
                <div className="header-item">Total</div>
              </div>

              {cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                  <div className="cart-product">
                    <img src={item.img} className="cart-product-image" />
                    <p>{item.title}</p>
                  </div>
                  <div className="cart-price">Rs {item.price}</div>
                  <div className="cart-quantity">
                    <button onClick={() => dispatch(decreaseQuantity(item))}>
                      -
                    </button>
                    <span>{item.quantity}</span>

                    <button onClick={() => dispatch(increaseQuantity(item))}>
                      +
                    </button>
                  </div>
                  <div className="cart-total">
                    Rs {parseFloat(item.price * item.quantity).toFixed(2)}
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => dispatch(removeFromCart(item))}
                  >
                    <IoClose size={20} />
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h3 className="summary-title">Order Summary</h3>
              <div className="summary-details">
                <div className="summary-item">
                  <span>Price: </span>
                  <span>Rs {totalPrice.toFixed(2)}</span>
                </div>
                <div className="summary-item">
                  <span>Delievery: </span>
                  <span>Free</span>
                </div>

                <div className="summary-item">
                  <span>Total: </span>
                  <span>Rs {totalPrice.toFixed(2)}</span>
                </div>
              </div>
              <button className="checkout-btn">Proceed to Checkout</button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
