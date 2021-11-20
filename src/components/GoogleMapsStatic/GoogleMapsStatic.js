import React from "react";
import GoogleMapReact from "google-map-react";
import satelliteImg from "../../assets/shared/satelliteImg.png";

const GoogleMapsStatic = ({ center, zoom }) => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key:
            // NOTE: Google API key was deactivated
            process.env.REACT_APP_GOOGLE_MAP_KEY_deactivated,
        }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <img
          src={satelliteImg}
          alt="International Space Station"
          style={{ width: "40px", height: "auto" }}
          lat={center.lat}
          lng={center.lng}
        />
      </GoogleMapReact>
    </div>
  );
};


export default GoogleMapsStatic;
