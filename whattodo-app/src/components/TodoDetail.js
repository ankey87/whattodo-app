import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class TodoDetail extends Component {
    state = {
        todo: this.getTodoFromList(),
        description: this.getTodoFromList(),
    };

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            this.setState({ todo: this.getTodoFromList() })
        }
    };
    getTodoFromList() {
        const todoId = parseInt(this.props.match.params.todoId)
        return this.props.todoList.find(tasks => tasks.id === todoId) || {}
    };

    handleEditTask = (event) => {
        const name = event.target.name;
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        this.setState(state => ({ todo: { ...state.todo, [name]: value } }))
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState(this.props.editedTask)
    };
    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <label> Task:
                        <input type="text" name="task"
                            value={this.state.todo.title}
                            onChange={this.handleEditTask}
                            required></input>
                    </label>
                    <label>Description:
                        <input type="text" name="description"
                            value={this.state.blank}
                            onChange={this.handleEditTask}></input>
                    </label>
                    {/* <label>
                        Urgency:
                        <ul>
                        <input type="radio" name="urgency"
                        value="low">Low</input>
                        <input type="radio" name="urgency" 
                        value="medium">Medium</input>
                        <input type="radio" name="urgency" value="high">High</input>
                        </ul>
                    </label> */}
                    <button onClick={() => this.props.history.push('/todolist')}>Save</button>
                </form>
                <button onClick={() => this.props.history.push('/todolist')}>
                    Go Back
            </button>
            </>

        );

    }
}

export default withRouter(TodoDetail);