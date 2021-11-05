import React from "react";
import Planet from "../Planet/Planet";
import usePlanetDataFetch from "../PlanetDataFetch/PlanetDataFetch";
import Planets from "../../data";
import Loader from "../Loader/Loader";
import "./SolarSystem.css";

const SolarSystem = () => {
  const { loading } = usePlanetDataFetch();

  return (
      <>
        {loading ? (
            <Loader />
        ) : (
            <div className="solar-system-container">
              {Planets.map((planet) => (
                  <Planet name={planet.name} image={planet.image} />
              ))}
            </div>
        )}
      </>
  );
};

export default SolarSystem;
