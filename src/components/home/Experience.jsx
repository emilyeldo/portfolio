import React from 'react';
import CareerCard from "./ExperienceCard";
import { Jumbotron } from './migration';
import SlideUpWhenVisible from "../../hooks/SlideUpWhenVisible";

import {
  Container,
  Row,
} from "react-bootstrap";

const Career = ({
  heading,
  careerList
}) => {

return (
<Jumbotron fluid id="experiences" className="bg-light m-0 target-section">
<SlideUpWhenVisible>
<Container className="shadow-lg p-3 mb-5 bg-white rounded">
  <h2 className="display-4 pb-5 text-center">{heading}</h2>
  <Row>
      {
          careerList.map((career, index) => (
              <CareerCard
                  key={`career-card-${index}`}
                  id={`career-card-${index}`}
                  value={career}
              />
          ))
      }
  </Row>
</Container>
</SlideUpWhenVisible>
</Jumbotron>
);
};

export default Career;