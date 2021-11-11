import React from 'react';
import {Link} from "react-router-dom";



const Footer = () => {
    return (
        <div className="primary-navigation flex" style={{color: "white", justifyContent: "center"}}>
            <ul style={{display: "flex"}}>
                <li>WelcomeToSpace&copy;{new Date().getFullYear()}</li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                </li>
                <li>GitHub</li>
            </ul>
        </div>
    )
}

export default Footer;
