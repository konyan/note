import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import ProjectSummary from "./ProjectSummary";

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section">
      {projects.map(project => (
        <Link to={"project/" + project.id} key={project.id}>
          <ProjectSummary project={project} />
        </Link>
      ))}
    </div>
  );
};

ProjectList.propTypes = {
  projects: PropTypes.array.isRequired
};

export default ProjectList;
