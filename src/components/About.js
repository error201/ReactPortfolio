import React from 'react';
const myPic = "https://placekitten.com/400/400"

export default function About() {
    return (
        <div className="card mx-auto" style={{ maxWidth: "50vw" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={myPic} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">About Me</h5>
                        <p className="card-text">After college, I spent 25 years in telecom. While there, I taught myself how to code.</p>
                        <p className="card-text"><small className="text-muted">Last updated 2022-03-16</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
};