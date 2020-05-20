import React from 'react';
import './App.css';

const user = {
  name: "Amanda Key",
  avatar: "./AmandaEzra.jpg"
}

const tasks = [
  {
    id: 1,
    title: "Complete Assessment",
    completed: false
  },
  {
    id: 2,
    title: "Clean Kitchen",
    completed: false
  },
  {
    id: 3,
    title: "Complete CBLs",
    completed: false
  },
]

const taskList = tasks.map(function (task, index) {
  return <li key={index}>{task.title}</li>;
})

function App() {
  return (
    <>

      <header class="sidebar">
        <div class="user">
          <img class="avatar" src={user.avatar} alt="user avatar"/>
          <h5 class="user__name">{user.name}</h5>
        </div>
        <div class="logo">
          <h2>WhatToDo</h2>
        </div>
        <div class="btn">
          <i class="fas fa-bars"></i>
        </div>
        <ul class="nav__links">
          <li>Tasks</li>
          <li>Profile</li>
          <li>Setting</li>
        </ul>
      </header>
      <main>
        <section class="side__menu">
          <h4>User Name</h4>
          <h4>All To Dos</h4>
          <h4>Current</h4>
          <h4>Upcoming</h4>
          <h4>Categories</h4>
          <ul class="sub__cats">
            <li>Kenzie</li>
            <li>Work</li>
            <li>Home</li>
          </ul>
          <div class="btn__two">
            <button>+ New Task</button>
          </div>
          <h4>Filter</h4>
        </section>
        <section class="task__list">
          <ul class="list__main">
            {taskList}
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
