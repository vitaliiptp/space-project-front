import React from 'react';
import { Link } from "react-router-dom";


const InternationalSpaceStation = () => {
    return (
        <div className="flex-container grid-container">

                <div className="ISS__Button">
                    <Link to="/map" style={{ textDecoration: "none" }}>
                        <a className="large-button uppercase ff-serif text-dark bg-white">ISS</a>
                    </Link>
                </div>

                {/* <div className="People_InSpace">
                    <Link to="/solar-system" style={{ textDecoration: "none" }}>
                        <a className="large-button uppercase ff-serif text-dark bg-white">How Many People Are In Space Right Now</a>
                    </Link>
                </div> */}

        </div>
    );
};

export default InternationalSpaceStation;