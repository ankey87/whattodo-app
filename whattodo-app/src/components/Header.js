import React from "react";

function Header(props) {
    return (
    <header className="sidebar">
        <div className="user">
            <img className="avatar" src={this.props.user.avatar} alt="user avatar" />
            <h5 className="user__name">{this.props.user.name}</h5>
        </div>
        <div className="logo">
            <h2>WhatToDo App</h2>
        </div>
        <div className="btn">
            <i className="fas fa-bars"></i>
        </div>
        <ul className="nav__links">
            <li>Tasks</li>
            <li>Profile</li>
            <li>Setting</li>
        </ul>
    </header>
    )
    }

export default Header;
