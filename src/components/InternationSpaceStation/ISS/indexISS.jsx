import './Image/ISS.css';
import Map from './Map'
//import Loader from "../../Loader/Loader";
import { useState, useEffect } from 'react'
import axios from 'axios'

function ISS() {
  
  const [loading, setLoading] = useState(true);
  const [longitude, setLongitude] = useState(-66.9036)
  const [latitude, setLatitude] = useState(10.4806)

  console.log('api key2',process.env.REACT_APP_API_KEY)

  useEffect (() => {
    getLocation()
  }, [] )

  const getLocation = async () => {
    setLoading(true)

    const res = await axios.get('http://api.open-notify.org/iss-now.json')

    const { longitude, latitude } = await res.data.iss_position

    setLongitude(parseFloat(longitude))
    setLatitude(parseFloat(latitude))
    setLoading(false)

  }

 

  return (
    <div className="ISS">{!loading ?  <Map center={{lat: latitude, lng:longitude}} zoom={4} /> : <h1>Loading...</h1>  }
     
     
    </div>
  );
}

export default ISS;
