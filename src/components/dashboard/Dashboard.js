import React, { Component } from "react";
import Notification from "./Notification";
import ProjectList from "../projects/ProjectList";

import { connect } from "react-redux";
class Dashboard extends Component {
  constructor(props) {
    super(props);

    console.log(props);
  }

  componentDidMount() {}
  render() {
    const { projects } = this.props;

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notification />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ project }) => {
  return {
    projects: project.projects
  };
};
export default connect(mapStateToProps)(Dashboard);
