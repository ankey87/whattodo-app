import React from 'react';
import './App.css';
import Todo from "./components/Todo.js";
import Header from "./components/Header.js";
import Sidemenu from "./components/Sidemenu.js";
import SideBar from "./components/Sidebar.js";

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

      <Header />
      <Sidemenu />
      <SideBar />
      <Todo />
    </>
  );
}

export default App;
