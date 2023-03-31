import React from 'react';


export default function About() {
    return (
        <div className="card mx-auto" style={{ maxWidth: "50vw" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={require('../images/profile_pic.jpg')} className="img-fluid rounded-start" alt="The author." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">About Me</h5>
                        <p className="card-text">
                            I graduated in the early '90s and spent 5 years as a trigger-puller for the U.S. Army.<br></br>
                            After the Army, I used the G.I. Bill to attend college for a degree in Electrical Engineering.
                        </p>
                        <p className="card-text">
                            I spent the next 23 years at a wireless carrier where I worked as a Field Technician, a Field Supervisor, and finally a Switching Technician.
                            While there, I learned about database management, machine learning, Linux system administration, VBA, Python, and Django.
                        </p>
                        <p className="card-text">
                            At some point, I realized I enjoyed the programming part of the job more than anything else. This love for code ultimately led to me
                            enrolling in a Full-Stack development boot camp through the University of Washington which I completed in March of 2023.
                        </p>
                        <p className="card-text"><small className="text-muted">Last updated 2023-03-31</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
};