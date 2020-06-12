import React, { Component } from 'react';
import '../App.css';
import Todo from "./Todo.js";


const TASKS_KEY = "myapp_tasks"
class TodoList extends Component {
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
  };

  componentDidMount() {
    const tasksString = localStorage.getItem(TASKS_KEY)
    if (tasksString) {
      this.setState({ tasks: JSON.parse(tasksString) })
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.tasks !== this.state.tasks) {
      localStorage.setItem(TASKS_KEY, JSON.stringify(this.state.tasks))
    }
  }

  handleOnAddNewEvent = (event) => {
    this.setState({ newEvent: event.target.value })
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
  onChangeCheckbox = (id) => {
    this.setState((state) => {
      let todosCopy = state.tasks.map((task) => {
        if (task.id === id)
          return { ...task, completed: task.completed ? false : true }
        else {
          return task;
        }
      });
      return ({
        tasks: todosCopy
      });
    })
  }
  handleRemoveTask = (id) => {
    this.setState((state) => {
      let newTask = state.tasks.filter((task) => {
        return task.id !== id
      });
      return ({
        tasks: newTask
      });
    })
  }

  onChangeCheckbox = (id) => {
    this.setState((state) => {
      let todosCopy = state.tasks.map((task) => {
        if (task.id === id)
          return { ...task, completed: task.completed ? false : true }
        else {
          return task;
        }
      });
      return ({
        tasks: todosCopy
      });
    })
  }
  
  handleRemoveTask = (id) => {
    this.setState((state) => {
      let newTask = state.tasks.filter((task) => {
        return task.id !== id
      });
      return ({
        tasks: newTask
      });
    })
  }

  render() {
    return (
      <>
        {this.state.tasks.map((task, index) => (
          <Todo handleRemoveTask={this.handleRemoveTask} onChangeCheckbox={this.onChangeCheckbox} task={task} key={index} />
        ))}
      </>
    );
  };
}
export default TodoList;