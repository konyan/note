import React from "react";

const Notification = ({ notification }) => {
  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Notifications</span>
          <ul className="notifications">
            <li>Notification 1</li>
            <li>Notification 1</li>
            <li>Notification 1</li>
            <li>Notification 1</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notification;
