import React from 'react';

function Header(props) {
    return (
        <header className="header">
            <div className="user">
                <img className="avatar" src={props.avatar} alt="user avatar" />
                <h5 className="user__name">{props.name}</h5>
            </div>
            <div className="logo">
                <h2>WhatToDo</h2>
            </div>
            <div className="ham__menu__ctn">
                <div className="btn">
                    <i className="fas fa-bars"></i>
                </div>
                <ul className="nav__links">
                    <li>Tasks</li>
                    <li>Profile</li>
                    <li>Setting</li>
                </ul>
            </div>
        </header>
    )
}

export default Header;