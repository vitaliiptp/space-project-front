import React from "react";
import Planet from "../Planet/Planet";
import usePlanetDataFetch from "../PlanetDataFetched/PlanetDataFetched";
import Planets from "../../data";
import Loader from "../Loader/Loader";
import "./SolarSystem.scss";
// import Modal from 'react-bootstrap/Modal'
// import { Button} from 'react-bootstrap';


const SolarSystem = () => {
  const { loading } = usePlanetDataFetch();
  

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex-container solar-system-main-container">
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
