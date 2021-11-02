import React, { useState, useEffect } from "react";
import axios from "axios";


// Catch Errors
// clint.messages()
// .list()
// .then(messages => console.log(`The most recent message is ${messages[0]}`)
// .catch(err => console.error(err)));

const apiKey = process.env.REACT_APP_NASA_KEY;

export default function NasaPhoto() {
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    // Send the request
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        console.log(data);
        setPhotoData(data);
      });
  }, []);

  // Alternative API connection using fetch
  //     fetchPhoto();
  //
  //     async function fetchPhoto() {
  //         const res = await fetch(
  //             `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
  //         );
  //         const data = await res.json();
  //         setPhotoData(data);
  //         console.log(data);
  //     }
  // }, []);

  if (!photoData) return <div />;

  return (
    <>
      <div className="nasa-photo">
        {photoData.media_type === "image" ? (
          <img src={photoData.url} alt={photoData.title} className="photo" />
        ) : (
          <iframe title="space-video" src={photoData.url} className="photo" />
        )}
        <div>
          <h1>{photoData.title}</h1>
          <p className="date">{photoData.date}</p>
          <p className="explanation">{photoData.explanation}</p>
        </div>
      </div>
    </>
  );
}
