import React, { useContext } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import MainContext from "../../context/MainContext";

const usePlanetDataFetched = () => {
  const [planetData, setPlanetData] = useState({});
  const { loading, setLoading } = useContext(MainContext);

  // Fetching data without async/await
  useEffect(() => {
    axios
      .get("https://api.le-systeme-solaire.net/rest/bodies/")
      .then((response) => response.data)
      .then((data) => {
        // console.log(data.bodies);
        setPlanetData(data.bodies);
        setLoading(false);
      });
  }, []);

  return { planetData, loading };
};

export default usePlanetDataFetched;
