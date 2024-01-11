import React, { useState, useEffect, useCallback } from "react";

// import React from "react";
import Col from "react-bootstrap/Col";

import poster from "../../assets/img/ac_project1.png";

const AcademicProjectCard = ({value}) => {
    const {
        ProjectTitle,
        DegreeTitle,
        Title,
        Time,
        ProjectLink,
        GithubLink,
        Descriptions,
        TechStack,
    } = value;

    return (
        <Col md="12">
            <div className="p-3 mb-2">
                <h5>{ProjectTitle} <span className="text-muted text-secondary">{Time}</span></h5>
                <div className="card-text">
                        <div>{Title} - <span className="text-secondary">{DegreeTitle}</span></div>
                    <div
                        className="wrapper"
                    >
                    {/* <img src={poster}/> */}
                    </div>
                    <div className="my-2"> {
                        Descriptions.map((description, index) => (
                            <div className="lead"
                                 key={`finalYearProject-description-${index}`}
                            >{description}</div>
                        ))
                    }</div>

                  
                    {TechStack.length ? (
                        <div className="lead text-muted">
                            TechStack: {
                            TechStack.map((tech, index) => (
                                <span className="lead text-muted mr-2"
                                      key={`finalYearProject-tech-${index}`}
                                >{tech}</span>
                            ))
                        }
                        </div>) : <div/>
                    }
                </div>
                <hr/>
            </div>
        </Col>
    );
};

export default AcademicProjectCard;