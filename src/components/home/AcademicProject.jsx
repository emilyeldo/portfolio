import React from "react";
import { Jumbotron } from './migration';
import {
  Container,
  Row,
} from "react-bootstrap";
import AcademicProjectCard from "./AcademicProjectCard";
import SlideUpWhenVisible from "../../hooks/SlideUpWhenVisible";

const AcademicProject = ({
                              heading,
                              finalYearProjectList
                        }) => {

    return (
        <Jumbotron fluid id="academic-project" className="bg-light m-0 target-section">
            <SlideUpWhenVisible>
                <Container className="shadow-lg p-3 mb-5 bg-white rounded">
                    <h2 className="display-4 pb-5 text-center">
                        {heading}
                    </h2>
                    <Row>
                        {
                            finalYearProjectList.map((finalYearProject, index) => (
                                <AcademicProjectCard
                                    key={`finalYearProject-card-${index}`}
                                    id={`finalYearProject-card-${index}`}
                                    value={finalYearProject}
                                />
                            ))
                        }
                    </Row>
                </Container>
            </SlideUpWhenVisible>
        </Jumbotron>
    );
};

export default AcademicProject;