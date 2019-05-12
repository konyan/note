import React from "react";
import PropTypes from "prop-types";

import ProjectSummary from "./ProjectSummary";

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section">
      {projects.map(project => (
        <ProjectSummary project={project} key={project.id} />
      ))}
    </div>
  );
};

ProjectList.propTypes = {
  projects: PropTypes.array.isRequired
};

export default ProjectList;
