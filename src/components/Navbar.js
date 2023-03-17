import React from 'react';


export default function Navbar(props) {
    return (
        <nav>
            <div id="name">
                <h1>Jason Arter</h1>
            </div>
            <div id="links">
                <span>
                    <a href="#about-me"><h1>About Me</h1></a>
                </span>
                <span>
                    <a href="#projects"><h1>Portfolio</h1></a>
                </span>
                <span>
                    <a href="#contact"><h1>Contact</h1></a>
                </span>
                <span>
                    <a href="#resume"><h1>Resume</h1></a>
                </span>
            </div>
        </nav>
    )
};