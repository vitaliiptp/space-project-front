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
import ISS from "./components/InternationSpaceStation/ISS/indexISS";
import LoginFormModal from "./components/LoginFormModal/LoginFormModal";
import SignUpForm from "./components/SignUp/SignUpForm";
import "./App.css";
import SignUpFormModal from "./components/SignUp/SignUpForm";



export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [navToggle, setNavToggle] = useState(false);
  const [loading, setLoading] = useState(true);




    // declare a new state variable for modal open
    const [openLoginModal, setOpenLoginModal] = useState(false);
    const [openSignupModal, setOpenSignupModal] = useState(false);
    const [openContactModal, setOpenContactModal] = useState(false);
    // const [openPlanetModal, setOpenPlanetModal] = useState(false);


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




  return (
    <MainContext.Provider
      value={{
        activeTab: activeTab,
        setActiveTab: setActiveTab,
        loading: loading,
        setLoading: setLoading,

          // showModal: showModal,
          // setShowModal: setShowModal
      }}
    >
      <Router>
        <div className={`App ${activeTab === "" ? "home" : activeTab}`}>
          <NavBar navToggle={navToggle} setNavToggle={setNavToggle} handleShowLoginModal={handleShowLoginModal}/>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/picture-of-the-day" component={PictureOfTheDay} />
            <Route exact path="/solar-system" component={SolarSystem} />
            <Route path="/isp" component={InternationalSpaceStation} />
            <Route path="/contact" component={ContactForm} />
            <Route path="/map" component={ISS} />
            {/*<Route path="/login" component={LoginFormModal} />*/}
            {/*<Route path="/signup" component={SignUpForm} />*/}
          </Switch>
          <Footer handleShowContactModal={handleShowContactModal} handleShowSignupModal={handleShowSignupModal} />
        <LoginFormModal openLoginModal={openLoginModal} handleCloseLoginModal={handleCloseLoginModal} handleShowSignupModal={handleShowSignupModal} />
            <SignUpFormModal openSignupModal={openSignupModal} handleCloseSignupModal={handleCloseSignupModal} handleShowLoginModal={handleShowLoginModal} />
        <ContactForm openContactModal={openContactModal} handleCloseContactModal={handleCloseContactModal} />
        </div>
      </Router>
    </MainContext.Provider>
  );
}
