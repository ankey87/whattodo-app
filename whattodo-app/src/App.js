import React, { Component } from 'react';
import './App.css';
import Todo from "./components/Todo.js";
import Header from "./components/Header.js";
import SideMenu from "./components/SideMenu.js"

class App extends Component {
  state = {
    tasks: [
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
    ],
    user: {
      name: "Amanda Key",
      avatar: "./AmandaEzra.jpg"
    },
  };

  render() {
    return (
      <> 
      <Header avatar={this.state.user.avatar} name={this.state.user.name}/>
          <SideMenu />        
          {this.state.tasks.map((task, index) => (
            <Todo task={task} key={index} />
          ))}
      </>
    );
  };
}
export default App;