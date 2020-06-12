import React from 'react';

function SideMenu(props) {
    return (
        <section className="side__menu">
            <div className="menu__ctn">
                <h4><a href="#">User Name</a></h4>
                <h4><a href="#">All To Dos</a></h4>
                <h4><a href="#">Current</a></h4>
                <h4><a href="#">Upcoming</a></h4>
                <h4><a href="#">Categories</a></h4>
                <ul className="sub__cats">
                    <li>Kenzie</li>
                    <li>Work</li>
                    <li>Home</li>
                </ul>
                <div className="new__task__btn">
                    <input type="text"
                    value={props.newEvent}
                    onChange={props.onChange}></input>
                    <button className="add__tsk" onClick={props.handleAddNewEvent}>Add Task</button>
                </div>
                <h4><a href="#">Filter</a></h4>
            </div>
        </section>
    )
}
export default SideMenu;