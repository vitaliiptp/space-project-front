import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import PictureOfTheDay from "./components/PictureOfTheDay/PictureOfTheDay";
import SolarSystem from "./components/SolarSystem/SolarSystem";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePage";
import Planet from "./components/Planet/Planet";
import InternationalSpaceStation from "./components/InternationSpaceStation/InternationalSpaceStation";

export default function App() {
  return (
    <Router>
      <div className="App home">
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/picture-of-the-day">
            <PictureOfTheDay />
          </Route>
          <Route exact path="/solar-system" component={SolarSystem} />
          <Route path="/isp" component={InternationalSpaceStation} />

          {/*/!*Params within React Router*!/*/}
          {/*<Route exact path="/solar-system/:planet" component={Planet} />*/}

        </Switch>
      </div>
    </Router>
  );
}
