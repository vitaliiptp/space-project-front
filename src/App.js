import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import PictureOfTheDay from "./components/PictureOfTheDay/PictureOfTheDay";
import SolarSystem from "./components/SolarSystem/SolarSystem";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePage";
import InternationalSpaceStation from "./components/InternationSpaceStation/InternationalSpaceStation";
import Footer from "./components/Footer/Footer";
import ContactForm from "./components/ContactForm/ContactForm";
import NavigationContext from "./context/NavigationContext";
import "./App.css";
import ISS from "./components/InternationSpaceStation/ISS/indexISS";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [navToggle, setNavToggle] = useState(false);

  const [activeTab, setActiveTab] = useState('home')






  return (
    <Router>
      <div className={`App ${activeTab === "" ? "home" : activeTab}`}>
        <NavigationContext.Provider
          value={{
            activeTab: activeTab,
            setActiveTab: setActiveTab,
            navToggle: navToggle,
            setNavToggle: setNavToggle,
          }}
        >
          <NavBar />
        </NavigationContext.Provider>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/picture-of-the-day">
            <PictureOfTheDay />
          </Route>
          <Route exact path="/solar-system" component={SolarSystem} />
          <Route path="/isp" component={InternationalSpaceStation} />
          <Route path="/contact" component={ContactForm} />
        </Switch>
        <Footer />
      </div>
    </Router>
            <Route path="/map" component={ISS} />
  );
}
