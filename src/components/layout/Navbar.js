import React from "react";
import { Link } from "react-router-dom";
import SignedInLink from "./SignedInLink";
import SignedOutLink from "./SignedOutLink";

import { connect } from "react-redux";

const Navbar = ({ auth, profile }) => {
  const links = auth.uid ? (
    <SignedInLink profile={profile} />
  ) : (
    <SignedOutLink />
  );

  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          NoteApp
        </Link>
        {links}
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};
export default connect(mapStateToProps)(Navbar);
