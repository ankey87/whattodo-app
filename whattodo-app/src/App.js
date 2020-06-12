import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header.js";
import SideMenu from "./components/SideMenu.js";
import TodoList from "./components/TodoList.js";
// import Dashboard from "./components/Dashboard";

class App extends Component {
  state = {

    user: {
      name: "Amanda Key",
      avatar: "./AmandaEzra.jpg"
    },
  };


  render() {
    return (
      <>
        <Header avatar={this.state.user.avatar} name={this.state.user.name} />
        <SideMenu handleAddNewEvent={this.handleAddNewEvent} newEvent={this.state.newEvent} onChange={this.handleOnAddNewEvent} />
        <TodoList />
      </>
    );
  };
}
export default App;