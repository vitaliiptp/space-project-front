import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../assets/shared/logo.png'

const NavBar = () => {
    return (
        <div className="primary-header flex">
            <div>
                <img src={Icon} style={{ width: "15em", aspectRatio: "1" }} />
            </div>
            <button className="mobile-nav-toggle" aria-controls="primary-navigation"><span className="sr-only"
                   aria-expanded="false">Menu</span>
            </button>
            <nav>
                <ul id="primary-navigation" data-visible="false" className="primary-navigation underline-indicators flex">

                    <li className="active">
                        <Link to='/' className="ff-sans-cond uppercase text-white letter-spacing-2">
                            <span aria-hidden="true">00</span>Home</Link>
                    </li>
                    <li>
                        <Link to='/picture-of-the-day' className="ff-sans-cond uppercase text-white letter-spacing-2">
                            <span aria-hidden="true">01</span>Picture Of The Day</Link>
                    </li>
                    <li>
                        <Link to='/solar-system' className="ff-sans-cond uppercase text-white letter-spacing-2">
                            <span aria-hidden="true">03</span>Solar System</Link>
                    </li>
                    <li>
                        <Link to='/isp' className="ff-sans-cond uppercase text-white letter-spacing-2">
                            <span aria-hidden="true">04</span>Internation Space Station</Link>
                    </li>

                    {/*/!*Params within React Router*!/*/}
                    {/*<li>*/}
                    {/*    <Link to='/solar-system/earth'>Earth</Link>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*    <Link to='/solar-system/sun'>Sun</Link>*/}
                    {/*</li>*/}

                </ul>
            </nav>
        </div>
    )
};

export default NavBar;