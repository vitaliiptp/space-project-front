import React from 'react';
import {Link} from "react-router-dom";
import { FaGithub } from 'react-icons/fa';
import './styles.scss';



const Footer = () => {
    return (


        <footer className="footer-container primary-header primary-navigation">
            <div className="footer-container--top">
                <form className="footer-container--top-form">
                    <input type="text" className="footer-container--input" placeholder="Your email" aria-label="Your email" />
                    <div>
                        <button className="btn ff-sans-cond uppercase text-white letter-spacing-2" type="button">Sign up</button>
                    </div>
                </form>
                <div className="footer-container--top-contact">
                    <button className="btn ff-sans-cond uppercase letter-spacing-2"><Link to="/contact" style={{ color: 'white' }}>Contact Us</Link></button>
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
    )
}

export default Footer;


