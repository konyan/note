import React, { Component } from "react";
import Notification from "./Notification";
import ProjectList from "../projects/ProjectList";

import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import { Redirect } from "react-router-dom";
class Dashboard extends Component {
  componentDidMount() {}
  render() {
    const { projects, auth } = this.props;

    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            {/* {projects === null ? <ProjectList projects={projects} /> : <div />} */}
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

const mapStateToProps = state => {
  return {
    projects: state.firestore.ordered.projects
      ? state.firestore.ordered.projects
      : state.project.projects,
    auth: state.firebase.auth
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(Dashboard);
