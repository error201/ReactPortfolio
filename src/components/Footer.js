import React from 'react';
import { Link } from 'react-router-dom';


export default function Footer(props) {
    return (
        <footer>
            <div className="right-side bottom">
                <div id="links">
                    <span>
                        <Link to="https://github.com/error201" target="_blank" rel="noopener noreferrer" ><h1>Github</h1></Link>
                    </span>
                    <span>
                        <Link to="https://www.linkedin.com/in/jason-arter/" target="_blank" rel="noopener noreferrer" ><h1>LinkedIn</h1></Link>
                    </span>
                    <span>
                        <Link to="https://stackoverflow.com/users/21416916/error201" target="_blank" rel="noopener noreferrer" ><h1>StackOverflow</h1></Link>
                    </span>
                </div>
            </div>
        </footer>
    )
};