import React, { useState, useEffect } from "react";
import Planet from "../Planet/Planet";
import Planets from "../../data";
import "./SolarSystem.css";

const SolarSystem = () => {
  return (
    <div className="solar-system-container" style={{display:"flex"}}>
      {Planets.map((planet) => (
        <Planet size={planet.size} name={planet.name} image={planet.image} />
      ))}
    </div>
  );
};

export default SolarSystem;
