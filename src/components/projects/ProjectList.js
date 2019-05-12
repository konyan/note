import React from "react";
import PropTypes from "prop-types";

import ProjectSummary from "./ProjectSummary";

const ProjectList = props => {
  return (
    <div className="project-list section">
      <ProjectSummary />
      <ProjectSummary />
      <ProjectSummary />
      <ProjectSummary />
    </div>
  );
};

ProjectList.propTypes = {};

export default ProjectList;
