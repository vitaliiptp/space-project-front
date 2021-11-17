import React, { useState } from "react";
import styled from "styled-components";
import ModalPlanet from "../ModalPlanet/ModalPlanet";
import "./Planet.scss";
import usePlanetDataFetched from "../PlanetDataFetched/PlanetDataFetched";




const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;


const Planet = ({ name, image, size }) => {

  const [showPlanetData, setShowPlanetData] = useState("");
  const [openPlanetModal, setOpenPlanetModal] = useState(false);
  const { planetData } = usePlanetDataFetched();


  const openModal = () => {
    setOpenPlanetModal((prev) => !prev);
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
      <Container>
        <img
          style={{ width: size, cursor: 'pointer' }}
          src={image}
          alt={name}
          onClick={openModal}
        />
        <ModalPlanet
          show={openPlanetModal}
          onHide={() => setOpenPlanetModal(false)}
          name={name}
          image={image}
          showplanetdata={showPlanetData}
        />
      </Container>
    </div>
  );
};

export default Planet;