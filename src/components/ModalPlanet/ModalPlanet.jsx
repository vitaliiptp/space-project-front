import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import React, { useEffect, useCallback } from "react";



export default function MyVerticallyCenteredModal(
  props,
  modalShow,
  setModalShow
) {


  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && modalShow) {
        setModalShow(false);
        console.log("I pressed");
      }
    },
    [setModalShow, modalShow]
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
        <Modal.Title id="contained-modal-title-vcenter">
          {props.name}
        </Modal.Title>
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
            <b>Gravity:</b> {props.showPlanetData.gravity} m/s²
          </p>
          <p>
            <b>Radius:</b> {props.showPlanetData.meanRadius} km
          </p>
          <p>
            <b>Orbital period:</b> {props.showPlanetData.sideralOrbit} days
          </p>
          <p>
            <b>Rotation period:</b> {props.showPlanetData.sideralRotation} days
          </p>
        </p>
      </Modal.Body>
      <Modal.Footer style={{ backgroundColor: "#0e1013" }}>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
