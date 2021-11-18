import GoogleMapReact from "google-map-react";
import clipart1713723 from "./Image/clipart1713723.png";

function Map({ center, zoom }) {
  return (
    <div className="map-container" style={{ height: "100vh", width: "100vw" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <img
          src={clipart1713723}
          alt="International Space Station"
          className="iss-icon"
          lat={center.lat}
          lng={center.lng}
        />
      </GoogleMapReact>
    </div>
  );
}

Map.defaultProps = {
  center: {
    lat: 10.4806,
    lng: -66.9036,
  },
  zoom: 4,
};

export default Map;
