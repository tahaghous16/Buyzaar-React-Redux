import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { footerLinks } from "../../data";
import { FaLocationDot } from "react-icons/fa6";
import payment from "../../assets/payment.png";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <h1 className="footer-logo">Buyzaar</h1>
        <p className="footer-desc">
          Buyzaar brings you trendy, high-quality outfits for every
          occasion—combining style, comfort, and affordability to match your
          unique look.
        </p>
        <div className="social-container">
          <div className="social-icon" style={{ backgroundColor: "#1877F2" }}>
            <FaFacebook className="icon" />
          </div>

          <div className="social-icon" style={{ backgroundColor: "#E4405F" }}>
            <FaInstagram className="icon" />
          </div>

          <div className="social-icon" style={{ backgroundColor: "#1DA1F2" }}>
            <CiTwitter className="icon" />
          </div>

          <div className="social-icon" style={{ backgroundColor: "#25D366" }}>
            <FaWhatsapp className="icon" />
          </div>
        </div>
      </div>

      <div className="footer-center">
        <h3>Useful Links</h3>
        <ul className="footer-list">
          {footerLinks.map((link) => (
            <li key={link.id} className="footer-list-item">
              {link.title}
            </li>
          ))}
        </ul>
      </div>

      <div className="footer-right">
        <h3 className="footer-title">Contact</h3>
        <div className="contact-item">
          <FaLocationDot style={{ marginRight: "10px" }} /> 123 street, City
        </div>

        <div className="contact-item">
          <FaPhoneAlt style={{ marginRight: "10px" }} /> +92 12345567
        </div>

        <div className="contact-item">
          <IoMdMail style={{ marginRight: "10px" }} /> taha@email.com
        </div>
        <img src={payment} alt="" className="payment" />
      </div>
    </div>
  );
};

export default Footer;
