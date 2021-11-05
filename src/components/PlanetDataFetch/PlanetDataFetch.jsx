import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const usePlanetDataFetch = () => {
  const [planetData, setPlanetData] = useState({});
  const [loading, setLoading] = useState(true);

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

  return {
    planetData,
    loading,
  };
};

export default usePlanetDataFetch;
