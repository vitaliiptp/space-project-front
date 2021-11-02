import React from 'react';

const HomePage = () => {
    return (
        <div  id="main" className="grid-container grid-container--home">
            <div>
                <h1 className="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">You are fascinated by the
                    <span className="d-block fs-900 ff-serif text-white">Space</span></h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ipsam libero
                    quaerat sapiente sunt tempora ullam. Debitis harum tempora vitae. Ad alias aut
                    dolores id labore laborum nemo optio ullam! </p>
            </div>
            <div>
                <a href="solar-system.html" className="large-button uppercase ff-serif text-dark bg-white">Ignition Sequence Start</a>
            </div>
        </div>
    );
};

export default HomePage;