import React from 'react';


function Sidemenu(props){
    return (
        <section className="side__menu">
        <h4>User Name</h4>
        <h4>All To Dos</h4>
        <h4>Current</h4>
        <h4>Upcoming</h4>
        <h4>Categories</h4>
        <ul className="sub__cats">
          <li>Kenzie</li>
          <li>Work</li>
          <li>Home</li>
        </ul>
        <div className="btn__two">
          <button>+ New Task</button>
        </div>
        <h4>Filter</h4>
      </section>
    )
}

export default Sidemenu;