import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import React, { useEffect, useCallback } from "react";
import "./PlanetModal.scss";

const PlanetModal = (props, openPlanetModal, setOpenPlanetModal) => {
  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && openPlanetModal) {
        setOpenPlanetModal(false);
        console.log("I pressed");
      }
    },
    [setOpenPlanetModal, openPlanetModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        style={{ backgroundColor: "#0e1013", color: "#00a1cc" }}
        closeButton
      >
        <Modal.Title>{props.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "#0e1013",
          color: "white",
        }}
      >
        <img style={{ width: "250px" }} src={props.image} alt={props.name} />
        <p>
          <p>
            <b>Gravity:</b> {props.showplanetdata.gravity} m/s²
          </p>
          <p>
            <b>Radius:</b> {props.showplanetdata.meanRadius} km
          </p>
          <p>
            <b>Orbital period:</b> {props.showplanetdata.sideralOrbit} days
          </p>
          <p>
            <b>Rotation period:</b> {props.showplanetdata.sideralRotation} days
          </p>
        </p>
      </Modal.Body>
      <Modal.Footer style={{ backgroundColor: "#0e1013" }}>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PlanetModal;
