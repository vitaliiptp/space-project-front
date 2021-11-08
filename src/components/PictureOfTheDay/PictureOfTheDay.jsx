import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";

const apiKey = process.env.REACT_APP_NASA_KEY;

export default function NasaPhoto() {
    // const [showModal, setShowModal] = useState(false);
    const [photoData, setPhotoData] = useState(null);
    const [loading, setLoading] = useState(true);

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
                setLoading(false);
            });
    }, []);

    if (!photoData) return <div />;

    return (
        <div className="">
            {loading ? (
                <Loader />
            ) : (

                <div className="flex-container">
                    <div className="flex-container--pic-of-day">
                        <div className="flex-container--pic-of-day_img">
                            {photoData.media_type === "image" ? (
                                <img src={photoData.url} alt={photoData.title} className="photo" />
                            ) : (
                                <iframe title="space-video" src={photoData.url} className="photo" style={{width:"100%", height:"20rem"}}/>
                            )}
                        </div>
                        <div className="flex-container--pic-of-day_text">
                            <h1 className="text-accent fs-600 ff-sans-cond uppercase letter-spacing-1">{photoData.title}</h1>
                            <p className="text-accent fs-400 ff-sans-cond uppercase letter-spacing-3">{photoData.date}</p>
                            <p className="text-accent fs-400 ff-sans-cond letter-spacing-3">{photoData.explanation}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
