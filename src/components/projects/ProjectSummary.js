import React from "react";
import PropTypes from "prop-types";

const ProjectSummary = ({ project }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>
          Posted by {project.authorFirstName} {project.authorLastName}
        </p>
        <p className="grey-text">3rd November,2a,</p>
      </div>
    </div>
  );
};

ProjectSummary.propTypes = {
  project: PropTypes.object.isRequired
};

export default ProjectSummary;
