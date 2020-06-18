import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const sideMenu = {

}

const menuCtn = {

}

const subCats = {
    borderStyle: 'solid',
    borderColor: 'lightgray',
    borderWidth: '1px',
    lineHeight: '2em',
    paddingLeft: '1em',
    width: '15%',
    borderRadius: '5px',
    marginLeft: '.2em',
}

function SideMenu(props) {
    return (
        <section style={sideMenu}>
            <div style={menuCtn} className="menu__ctn">
                <Link to="/dashboard"><h4>Dashboard</h4></Link>
                <Link to="/todolist"><h4>All To Dos</h4></Link>
                <Link to="/"><h4>Current</h4></Link>
                <Link to="/"><h4>Upcoming</h4></Link>
                <Link to="/"><h4>Categories</h4></Link>
                <ul style={subCats}>
                    <Link to="/"><li>Kenzie</li></Link>
                    <Link to="/"><li>Work</li></Link>
                    <Link to="/"><li>Home</li></Link>
                </ul>
                <Link to="/"><h4>Filter</h4></Link>
            </div>
        </section>
    )
}
export default withRouter(SideMenu);