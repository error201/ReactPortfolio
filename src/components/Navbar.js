import React from 'react';
import { Link } from 'react-router-dom';


export default function Navbar(props) {
    return (
        <nav>
            <div id="name">
                <h1>Jason Arter</h1>
            </div>
            <div id="links">
                    <span>
                        <Link to="/about"><h1>About Me</h1></Link>
                    </span>
                    <span>
                        <Link to="/portfolio"><h1>Portfolio</h1></Link>
                    </span>
                    <span>
                        <Link to="/contact"><h1>Contact</h1></Link>
                    </span>
                    <span>
                        <Link to="/resume"><h1>Resume</h1></Link>
                    </span>
            </div>
        </nav>
    )
};