import React, { useState } from "react";
import styled from "styled-components";
import MyVerticallyCenteredModal from "../ModalPlanet/ModalPlanet";
import "./Planet.css";
import usePlanetDataFetch from "../PlanetDataFetch/PlanetDataFetch";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Planet = ({ name, image, size }) => {
  //   // Params within React Router
  // const params = match.params;

  const [showModal, setShowModal] = useState(false);
  const { planetData } = usePlanetDataFetch();
  const [showPlanetData, setShowPlanetData] = useState("");
  const [modalShow, setModalShow] = React.useState(false);

  const openModal = () => {
    setModalShow((prev) => !prev);
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
          style={{ width: size }}
          src={image}
          alt={name}
          onClick={openModal}
          
        />
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
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

       {/*showModal={showModal}
          setShowModal={setShowModal}
          name={name}
          image={image}
  showPlanetData={showPlanetData}


onClick={() => setModalShow(true)}

*/}