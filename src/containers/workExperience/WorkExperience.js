import React from "react";
import "./WorkExperience.scss";
import {educationInfo} from "../../portfolio";
import {workExperiences} from "../../portfolio";
import EducationCard from "../../components/experienceCard/ExperienceCard";


export default function WorkExperience() {
  if (workExperiences.display) {
    return (
      <div className="experience-section" id="experience">
        <h1 className="experience-heading">Work</h1>
        <div className="experience-card-container">
        {workExperiences.experiences.map((experience, index) => (
            <EducationCard key={index} school={experience} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}
