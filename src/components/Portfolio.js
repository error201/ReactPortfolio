import React from 'react';


export default function Portfolio({ projects }) {
    return (
        <div className="projects">
            {projects.map((project) => (
                <div className="card mx-auto" style={{ maxWidth: "30vw" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={project.src} className="img-fluid rounded-start" alt={project.alt} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title"><a href={project.url} target="_blank">{project.title}</a></h5>
                                <p className="card-text">{project.blurb}</p>
                                <p className="card-text"><small className="text-muted">{project.techs}</small></p>
                                <p className="card-text"><small className="text-muted">Last updated 2022-03-21</small></p>
                            </div>
                        </div>
                    </div>
                </div>))}
        </div>
    )
}
