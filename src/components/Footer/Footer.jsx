import React from "react";
import { FaGithub } from "react-icons/fa";
import Swal from "sweetalert2";
import "./Footer.scss";

const Footer = ({
  handleShowContactModal,
  handleShowSignupModal,
  loginStatus,
  handleEmail,
}) => {
  const handleSignUp = () => {
    if (loginStatus) Swal.fire("You are already logged in");
    else handleShowSignupModal();
  };

  return (
    <footer className="footer-container footer primary-footer">
      <div className="footer-container--top">
        <form className="footer-container--top-form">
          <input
            type="text"
            className="footer-container--input"
            placeholder="Your email"
            aria-label="Your email"
            onChange={handleEmail}
          />
          <div>
            <button
              className="btn ff-sans-cond uppercase text-white letter-spacing-2"
              type="button"
              onClick={handleSignUp}
            >
              Sign up
            </button>
          </div>
        </form>
        <div className="footer-container--top-contact">
          <button
            className="btn ff-sans-cond uppercase letter-spacing-2"
            onClick={handleShowContactModal}
          >
            Contact Us
          </button>
        </div>
        <div className="footer-container--top-social">
          <FaGithub size={30} className="github-icon" />
        </div>
      </div>
      <div className="footer-container--bottom">
        <div className="text-accent ff-sans-cond letter-spacing-3 text-white">
          WelcomeToSpace&copy;{new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
