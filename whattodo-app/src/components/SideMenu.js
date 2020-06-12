import React from 'react';

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
                <h4><a href="#">User Name</a></h4>
                <h4><a href="#">All To Dos</a></h4>
                <h4><a href="#">Current</a></h4>
                <h4><a href="#">Upcoming</a></h4>
                <h4><a href="#">Categories</a></h4>
                <ul style={subCats}>
                    <li>Kenzie</li>
                    <li>Work</li>
                    <li>Home</li>
                </ul>
                <div style={newTaskBtn}>
                    <input type="text"
                    value={props.newEvent}
                    onChange={props.onChange}></input>
                    <button style={addTsk} onClick={props.handleAddNewEvent}>Add Task</button>
                </div>
                <h4><a href="#">Filter</a></h4>
            </div>
        </section>
    )
}
export default SideMenu;