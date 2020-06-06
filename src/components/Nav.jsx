import React from 'react';
import { Link } from 'react-router-dom';

import navLogo from '../images/nav/navLogo.png';
import facebook from '../images/nav/facebook.png';
import instagram from '../images/nav/instagram.png';
import linkedin from '../images/nav/linkedin.png';

function Nav() {
    return (
        <nav>

            <div id="navLogo">
                <img src={navLogo}/>
            </div>

            <ul>
                <Link to="/">
                <li>Home</li>
                </Link>

                <Link to="/about">
                <li>About</li>
                </Link>

                <Link to="/services">
                <li>Services</li>
                </Link>

                <Link to="/blog">
                <li>Blog</li>
                </Link>

                <Link to="/contact">
                <li>Contact</li>
                </Link>
            </ul>

            <div id="socialIcons">
                <img src={linkedin}/>
                <img src={facebook}/>
                <img src={instagram}/>
            </div>
        </nav>
    )
}

export default Nav;