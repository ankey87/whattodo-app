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

const newTaskBtn = {

}

const addTsk = {
    width: '6.5em',
    fontSize: '12px',
    borderRadius: '1em',
    backgroundColor: 'teal',
    marginLeft: '.2em',
    marginTop: '.5em',
    marginBottom: '.2em',
    color: 'white',
}

function SideMenu(props) {
    return (
        <section style={sideMenu}>
            <div style={menuCtn} className="menu__ctn">
                <Link to="/"><h4>Dashboard</h4></Link>
                <Link to="/todolist"><h4>All To Dos</h4></Link>
                <Link to="/"><h4>Current</h4></Link>
                <Link to="/"><h4>Upcoming</h4></Link>
                <Link to="/"><h4>Categories</h4></Link>
                <ul style={subCats}>
                    <Link to="/"><li>Kenzie</li></Link>
                    <Link to="/"><li>Work</li></Link>
                    <Link to="/"><li>Home</li></Link>
                </ul>
                <div style={newTaskBtn}>
                    <input type="text"
                        value={props.newEvent}
                        onChange={props.onChange}></input>
                    <button style={addTsk} onClick={props.handleAddNewEvent}>Add Task</button>
                </div>
                <Link to="/"><h4>Filter</h4></Link>
            </div>
        </section>
    )
}
export default withRouter(SideMenu);