import React from "react";

function SideBar(props) {
  return (
      <div className="sidebar">
          <img src={props.user.avatar} alt="User Image" />
          <h3 >{props.user.name}</h3>
          <hr />
          <ul className="navList">
              <li className="nav">Tasks</li>
              <li className="nav">Profile</li>
              <li className="nav">Settings</li>
          </ul>
      </div>
  );
}
export default SideBar;