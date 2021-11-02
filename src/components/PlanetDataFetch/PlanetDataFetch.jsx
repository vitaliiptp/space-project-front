import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const PlanetDataFetch = () => {
  const [planetData, setPlanetData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          "https://api.le-systeme-solaire.net/rest/bodies/"
        );
        setPlanetData(response.bodies);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  // Fetching data without async/await
  // useEffect(() => {
  //     axios
  //         .get("https://api.le-systeme-solaire.net/rest/bodies/")
  //         .then((response) => response.data)
  //         .then((data) => {
  //             // console.log(data.bodies);
  //             setPlanetData(data.bodies);
  //         });
  // }, []);

  return {
    planetData,
    loading,
  };
};

export default PlanetDataFetch;
