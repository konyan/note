import React from "react";
import PropTypes from "prop-types";

const ProjectSummary = ({ title, author, date }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">Project Title</span>
        <p>Posted by Nyan Lin Tun</p>
        <p className="grey-text">3rd November,2a,</p>
      </div>
    </div>
  );
};

ProjectSummary.propTypes = {};

export default ProjectSummary;
