import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import GoogleMapsStatic from "../GoogleMapsStatic/GoogleMapsStatic";
import Loader from "../Loader/Loader";
import MainContext from "../../context/MainContext";




const InternationalSpaceStation = () => {
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const { loading, setLoading } = useContext(MainContext);



  useEffect(() => {
    axios
        .get("http://api.open-notify.org/iss-now.json")
        .then((response) => response.data)
        .then((data) => {
          setLongitude(parseFloat(data.iss_position.longitude));
          setLatitude(parseFloat(data.iss_position.latitude));
          setLoading(false);
        });
  }, []);



  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <GoogleMapsStatic center={{ lat: latitude, lng: longitude }} zoom={0} />
      )}
    </div>
  );
};

export default InternationalSpaceStation;
