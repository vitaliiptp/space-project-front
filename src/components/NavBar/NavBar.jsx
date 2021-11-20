import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavbarBrand } from "react-bootstrap";
import MainContext from "../../context/MainContext";
import logo from "../../assets/shared/logo3.png";

const NavBar = ({
  navToggle,
  setNavToggle,
  handleShowLoginModal,
  loginStatus,
  handleLogoutStatus,
}) => {
  const { activeTab, setActiveTab } = useContext(MainContext);

  //assigning location variable
  const location = useLocation();
  //destructuring pathname from location
  const { pathname } = location;
  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");
  setActiveTab(splitLocation[1]);

  const handleToggle = () => {
    setNavToggle(!navToggle);
  };

  const LogInOnClickHandler = () => {
    handleToggle();
    handleShowLoginModal();
  };

  return (
    <div className="primary-header flex">
      <NavbarBrand>
        <Link to="/">
          <img className="logo flex" src={logo} alt="logo" />
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
          <li
            className={activeTab === "" ? "active" : ""}
            onClick={handleToggle}
          >
            <Link
              to="/"
              className="ff-sans-cond uppercase text-white letter-spacing-2"
            >
              <span aria-hidden="true">00</span>Home
            </Link>
          </li>
          <li
            className={activeTab === "picture-of-the-day" ? "active" : ""}
            onClick={handleToggle}
          >
            <Link
              to="/picture-of-the-day"
              className="ff-sans-cond uppercase text-white letter-spacing-2"
            >
              <span aria-hidden="true">01</span>Picture Of The Day
            </Link>
          </li>
          <li
            className={activeTab === "solar-system" ? "active" : ""}
            onClick={handleToggle}
          >
            <Link
              to="/solar-system"
              className="ff-sans-cond uppercase text-white letter-spacing-2"
            >
              <span aria-hidden="true">03</span>Solar System
            </Link>
          </li>
          <li
            className={activeTab === "isp" ? "active" : ""}
            onClick={handleToggle}
          >
            <Link
              to="/isp"
              className="ff-sans-cond uppercase text-white letter-spacing-2"
            >
              <span aria-hidden="true">04</span>Internation Space Station
            </Link>
          </li>

          {loginStatus ? (
            <li onClick={handleLogoutStatus}>
              <a className="ff-sans-cond uppercase text-accent letter-spacing-2">
                <span>Log Out</span>
              </a>
            </li>
          ) : (
            <li onClick={LogInOnClickHandler}>
              <a className="ff-sans-cond uppercase text-accent letter-spacing-2">
                <>
                  <span>LogIn/ </span>
                  <span>SignUp</span>
                </>
              </a>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
