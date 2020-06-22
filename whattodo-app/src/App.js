// import styled from 'styled-components';
import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header.js";
import SideMenu from "./components/SideMenu.js";
import TodoList from "./components/TodoList.js";
import { Route, Switch, withRouter, } from 'react-router-dom';
import Dashboard from "./components/Dashboard";
// import Login from "./components/Login";
// import Register from "./components/Register";

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
        <Switch>
          {/* <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/">
            <Login />
          </Route> */}
          <Route path="/todolist">
            <TodoList />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>

      </>
    );
  };
}
export default withRouter(App);