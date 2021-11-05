import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ModalPlanet from "../ModalPlanet/ModalPlanet";
import "./Planet.css";
import PlanetDataFetch from "../PlanetDataFetch/PlanetDataFetch";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Planet = ({ name, image, size }) => {
  //   // Params within React Router
  // const params = match.params;

  const [showModal, setShowModal] = useState(false);
  const { planetData, loading } = PlanetDataFetch();
  const [showPlanetData, setShowPlanetData] = useState("");

  const openModal = () => {
    setShowModal((prev) => !prev);
    planetDataFilter();
  };

  const planetDataFilter = () => {
    setShowPlanetData(
      planetData.filter((planet) => planet.englishName === name)[0]
    );
    console.log(showPlanetData);
  };

  return (
    <div className="planet">

      {/*/!*Params within React Router*!/*/}
      {/*<p>{params.planet}</p>*/}
      
    

      <Container>
        
        <img style={{width:size}}src={image} alt={name} onClick={openModal} />
        
        <ModalPlanet
          showModal={showModal}
          setShowModal={setShowModal}
          name={name}
          image={image}
          showPlanetData={showPlanetData}
        />
      </Container>
    </div>
  );
};

export default Planet;


/*{
      <div>
        {loading && <div>Loading</div>}
        {!loading && (
          <div>
            <button onClick={openModal}>More Info</button>
          </div>
        )}
      </div>}*/