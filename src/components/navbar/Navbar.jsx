import React from "react";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalItems = cartItems.length;

  return (
    <nav className="navbar-container">
      <div className="navbar-wrapper">
        <Link to="/">
          <div className="navbar-left">
            <h1 className="navbar-logo">
              Buyzaar <span>.</span>
            </h1>
          </div>
        </Link>

        <div className="navbar-center">
          {/* (You can keep it empty or use it for future nav items) */}
        </div>

        <div className="navbar-right">
          <div className="navbar-searchContainer">
            <input type="text" placeholder="Search" className="navbar-input" />
            <IoSearch className="icon" />
          </div>
          <Link to={"/register"}>
            <div className="navbar-menuItem">Register</div>
          </Link>
          <Link to={"/login"}>
            <div className="navbar-menuItem">Login</div>
          </Link>
          <Link to="/cart">
            <div className="navbar-menuItem">
              <MdOutlineShoppingCart className="icon" />
              {totalItems > 0 && (
                <span className="cart-badge">{totalItems}</span>
              )}
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
