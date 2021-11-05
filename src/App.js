import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import PictureOfTheDay from "./components/PictureOfTheDay/PictureOfTheDay";
import SolarSystem from "./components/SolarSystem/SolarSystem";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePage";
import Planet from "./components/Planet/Planet";
import InternationalSpaceStation from "./components/InternationSpaceStation/InternationalSpaceStation";
import {useState} from "react";



export default function App() {

  const [activeTab, setActiveTab] = useState('home')






  return (
      <Router>
        <div className={`App ${activeTab === "" ? "home" : activeTab}`}>
          <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/picture-of-the-day">
              <PictureOfTheDay />
            </Route>
            <Route exact path="/solar-system" component={SolarSystem} />
            <Route path="/isp" component={InternationalSpaceStation} />
          </Switch>
        </div>
      </Router>

  );
}
