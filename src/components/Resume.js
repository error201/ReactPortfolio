import React from 'react';
import { Link } from 'react-router-dom';
import resume from '../images/resume.docx'


export default function Resume() {
    return (
        <div>
            <Link to={resume} target="_blank"><h1>Download my resume</h1></Link>
        </div>
    )
};