import React, { Component } from 'react';
import '../App.css';
import Todo from "./Todo.js";
import shortid from 'shortid';
import TodoDetail from "./TodoDetail.js";
import { withRouter, Switch, Route } from 'react-router-dom'

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

const TASKS_KEY = "myapp_tasks"
class TodoList extends Component {
  state = {
    tasks: [
      {
        id: 1,
        title: "Complete Assessment",
        description: "Todo App",
        urgency: "",
        completed: false
      },
      {
        id: 2,
        title: "Clean Kitchen",
        description: "",
        urgency: "",
        completed: false
      },
      {
        id: 3,
        title: "Complete CBLs",
        description: "",
        urgency: "",
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

  handleAddNewEvent = () => {
    let newEventObj = {
      title: this.state.newEvent,
      completed: false,
      description: "",
      urgency: "",
      id: shortid.generate(),
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
  handleEditTodo = (id) => {
    this.setState((state) => {
      let editedTask = state.tasks.map((task) => {
        if (task.id === id)
          return { ...task, title: task.title, description: task.description, completed: state.onChangeCheckbox  }
        else {
          return task;
        }
      });
      return ({
        tasks: editedTask
      });
    })
  }

  render() {
    return (
      <>
        <Switch>
          <Route exact path="/todolist/:todoId">
            <TodoDetail editedTask={this.handleEditTodo} todoList={this.state.tasks} />
          </Route>
          <Route path="/todoList">
            <div style={newTaskBtn}>
              <input type="text"
                value={this.newEvent}
                onChange={this.onChangeNewTask}></input>
              <button style={addTsk} onClick={this.handleAddNewEvent}>Add Task</button>
            </div>
            {this.state.tasks.map((task, index) => (
              <Todo handleRemoveTask={this.handleRemoveTask} onChangeCheckbox={this.onChangeCheckbox} task={task} key={index} />
            ))}
          </Route>

        </Switch>
      </>
    );
  };
}
export default withRouter(TodoList);