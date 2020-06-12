import React, { Component } from 'react';
import './App.css';
import Todo from "./components/Todo.js";
import Header from "./components/Header.js";
import SideMenu from "./components/SideMenu.js"

const TASKS_KEY = "myapp_tasks"
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
    newEvent: "",

    user: {
      name: "Amanda Key",
      avatar: "./AmandaEzra.jpg"
    },
  };

  componentDidMount() {
    const tasksString = localStorage.getItem(TASKS_KEY)
    if (tasksString) {
      this.setState({tasks: JSON.parse(tasksString)})
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.tasks !== this.state.tasks){
    localStorage.setItem(TASKS_KEY, JSON.stringify(this.state.tasks))
  }
}

  handleOnAddNewEvent = (event) => {
    this.setState({newEvent: event.target.value})
  }
  handleAddNewEvent = () => {
    let newEventObj = {
      title: this.state.newEvent,
      completed: false,
    }
    this.setState({
      tasks: [...this.state.tasks, newEventObj],
      newEvent: ""
    })
  }

  render() {
    return (
      <> 
      <Header avatar={this.state.user.avatar} name={this.state.user.name}/>
          <SideMenu handleAddNewEvent={this.handleAddNewEvent}newEvent={this.state.newEvent} onChange={this.handleOnAddNewEvent}/>        
          {this.state.tasks.map((task, index) => (
            <Todo task={task} key={index} />
          ))}
      </>
    );
  };
}
export default App;