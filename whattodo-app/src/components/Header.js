import React from 'react';

const header = {
    backgroundColor: 'teal',
    display: 'flex',
    flexDirection: 'column',
    height: '200px',
}

const user = {

}

const avatar = {
    width: '40px',
    height: '40px',
    borderRadius: '20px',
    position: 'relative',
    marginLeft: '1.5em',
    marginTop: '1em',
}

const userName = {
    marginLeft: '1.5em',
    marginTop: '.2em',
    color: 'whitesmoke',
    fontSize: '10px',
}

const logo = {
    display: 'flex',
    position: 'relative',
    justifySelf: 'center',
    alignItems: 'center',
    color: 'whitesmoke',
    left: '600px',
}

const hamMenuCtn = {
    position: 'relative',
    bottom: '30px',
}

const btn = {

}

const navLinks = {
    marginTop: '.5em',
    marginLeft: '1em',
    paddingBottom: '1em',
    color: 'whitesmoke',
    lineHeight: '1.5em',
}

function Header(props) {
    return (
        <header style={header}>
            <div style={user}>
                <img style={avatar} src={props.avatar} alt="user avatar" />
                <h5 style={userName}>{props.name}</h5>
            </div>
            <div style={logo}>
                <h2>WhatToDo</h2>
            </div>
            <div style={hamMenuCtn}>
                <div style={btn}>
                    <i className="fas fa-bars"></i>
                </div>
                <ul style={navLinks}>
                    <li>Tasks</li>
                    <li>Profile</li>
                    <li>Setting</li>
                </ul>
            </div>
        </header>
    )
}

export default Header;