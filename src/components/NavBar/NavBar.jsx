import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {NavbarBrand} from "react-bootstrap";
import logo from "../../assets/shared/logo3.png";

const NavBar = ({ activeTab, setActiveTab }) => {
    const [navToggle, setNavToggle] = useState(false);


    //assigning location variable
    const location = useLocation();
    //destructuring pathname from location
    const { pathname } = location;
    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");
    setActiveTab(splitLocation[1])



    const handleToggle = () => {
        console.log(navToggle);
        setNavToggle(!navToggle);
    };

    return (
        <div className="primary-header flex">
            <NavbarBrand>
                <Link to="/">
                    <img
                        className="logo flex"
                        src={logo}
                        alt="logo"
                    />
                </Link>
            </NavbarBrand>
            <button
                className="mobile-nav-toggle"
                aria-expanded={navToggle}
                aria-controls="primary-navigation"
                onClick={handleToggle}
            >
                <span className="sr-only">Menu</span>
            </button>
            <nav>
                <ul
                    data-visible={navToggle}
                    className="primary-navigation underline-indicators flex"
                >
                    <li className={activeTab === "" ? "active" : ""}>
                        <Link
                            to="/"
                            className="ff-sans-cond uppercase text-white letter-spacing-2"
                        >
                            <span aria-hidden="true">00</span>Home
                        </Link>
                    </li>
                    <li className={activeTab === "picture-of-the-day" ? "active" : ""}>
                        <Link
                            to="/picture-of-the-day"
                            className="ff-sans-cond uppercase text-white letter-spacing-2"
                        >
                            <span aria-hidden="true">01</span>Picture Of The Day
                        </Link>
                    </li>
                    <li className={activeTab === "solar-system" ? "active" : ""}>
                        <Link
                            to="/solar-system"
                            className="ff-sans-cond uppercase text-white letter-spacing-2"
                        >
                            <span aria-hidden="true">03</span>Solar System
                        </Link>
                    </li>
                    <li className={activeTab === "isp" ? "active" : ""}>
                        <Link
                            to="/isp"
                            className="ff-sans-cond uppercase text-white letter-spacing-2"
                        >
                            <span aria-hidden="true">04</span>Internation Space Station
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;
