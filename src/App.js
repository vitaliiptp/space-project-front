import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import PictureOfTheDay from "./components/PictureOfTheDay/PictureOfTheDay";
import SolarSystem from "./components/SolarSystem/SolarSystem";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePage";
import InternationalSpaceStation from "./components/InternationSpaceStation/InternationalSpaceStation";
import Footer from "./components/Footer/Footer";
import ContactForm from "./components/ContactForm/ContactForm";
import MainContext from "./context/MainContext";
import LoginFormModal from "./components/LoginFormModal/LoginFormModal";
import SignUpFormModal from "./components/SignUpFormModal/SignUpFormModal";
import "./App.css";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [navToggle, setNavToggle] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loginStatus, setLoginStatus] = useState(false);
  const [email, setEmail] = useState("");

  // declare a new state variable for modal open
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignupModal, setOpenSignupModal] = useState(false);
  const [openContactModal, setOpenContactModal] = useState(false);
  // const [openPlanetModal, setOpenPlanetModal] = useState(false);

  // function to handle login/logout status
  const handleLoginStatus = () => {
    setLoginStatus(true);
  };
  const handleLogoutStatus = () => {
    setLoginStatus(false);
  };

  // function to handle email state from footer and login page
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  // function to handle modal open
  const handleShowLoginModal = () => {
    setOpenLoginModal(true);
  };

  const handleShowSignupModal = () => {
    setOpenSignupModal(true);
  };

  const handleShowContactModal = () => {
    setOpenContactModal(true);
  };

  // const handleShowPlanetModal = () => {
  //     setOpenPlanetModal(true);
  // };

  // function to handle modal close
  const handleCloseLoginModal = () => {
    setOpenLoginModal(false);
  };

  const handleCloseSignupModal = () => {
    setOpenSignupModal(false);
  };

  const handleCloseContactModal = () => {
    setOpenContactModal(false);
  };

  // const handleClosePlanetModal = () => {
  //     setOpenPlanetModal(false);
  // };

  return (
    <MainContext.Provider
      value={{
        activeTab: activeTab,
        setActiveTab: setActiveTab,
        loading: loading,
        setLoading: setLoading,
        // openPlanetModal: openPlanetModal,
        // handleShowPlanetModal: handleShowPlanetModal,
        // handleClosePlanetModal: handleClosePlanetModal
      }}
    >
      <Router>
        <div className={`App ${activeTab === "" ? "home" : activeTab}`}>
          <NavBar
            navToggle={navToggle}
            setNavToggle={setNavToggle}
            handleShowLoginModal={handleShowLoginModal}
            loginStatus={loginStatus}
            handleLogoutStatus={handleLogoutStatus}
          />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/picture-of-the-day" component={PictureOfTheDay} />
            <Route exact path="/solar-system" component={SolarSystem} />
            <Route path="/isp" component={InternationalSpaceStation} />
            <Route path="/contact" component={ContactForm} />
          </Switch>
          <Footer
            handleShowContactModal={handleShowContactModal}
            handleShowSignupModal={handleShowSignupModal}
            loginStatus={loginStatus}
            handleEmail={handleEmail}
          />
          <LoginFormModal
            openLoginModal={openLoginModal}
            handleCloseLoginModal={handleCloseLoginModal}
            handleShowSignupModal={handleShowSignupModal}
            loginStatus={loginStatus}
            handleLoginStatus={handleLoginStatus}
          />
          <SignUpFormModal
            openSignupModal={openSignupModal}
            handleCloseSignupModal={handleCloseSignupModal}
            handleShowLoginModal={handleShowLoginModal}
            handleEmail={handleEmail}
            email={email}
            loginStatus={loginStatus}
            handleLoginStatus={handleLoginStatus}
          />
          <ContactForm
            openContactModal={openContactModal}
            handleCloseContactModal={handleCloseContactModal}
          />
        </div>
      </Router>
    </MainContext.Provider>
  );
}
