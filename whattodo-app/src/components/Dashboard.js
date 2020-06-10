import React, { Component } from 'react';
import '../App.css';
class Dashboard extends Component {

    state = {
        date: new Date()
    };

    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }
    render() {
        return (
            <div className="clock">
                <img width="500px" height="300px"src="./SereneBackground.jpg" alt="clockbackground"></img>
                <h2> It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

export default Dashboard;