import React from "react";
import Planet from "../Planet/Planet";
import usePlanetDataFetch from "../PlanetDataFetch/PlanetDataFetch";
import Planets from "../../data";
import Loader from "../Loader/Loader";
import "./SolarSystem.css";
import Modal from 'react-bootstrap/Modal'
import { Button} from 'react-bootstrap';


const SolarSystem = () => {
  const { loading } = usePlanetDataFetch();
  

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex-container">
          {Planets.map((planet) => (
            <Planet
              size={planet.size}
              name={planet.name}
              image={planet.image}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default SolarSystem;
