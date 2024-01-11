import React from 'react';
import EducationCard from "./EducationCard";
import { Jumbotron } from './migration';
import SlideUpWhenVisible from "../../hooks/SlideUpWhenVisible";

import {
  Container,
  Row,
} from "react-bootstrap";


const Education = ({
  heading,
  educations
}) => {

return (
<Jumbotron fluid id="education" className="bg-light m-0  target-section">
<SlideUpWhenVisible>
<Container className="shadow-lg p-3 mb-5 bg-white rounded">
<h2 className="display-4 pb-5 text-center">{heading}</h2>
<Row>
   {
       educations.map((education, index) => (
           <EducationCard
               key={`career-card-${index}`}
               id={`career-card-${index}`}
               value={education}
           />
       ))
   }
</Row>
</Container>
</SlideUpWhenVisible>
</Jumbotron>
);
};


export default Education;