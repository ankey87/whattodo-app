import { Component } from 'react';
import '../App.css';
import { withRouter } from 'react-router-dom';

class Register extends Component {
    state = {
        email: '',
        password: '',
        passwordConfirmation: '',
    }

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState((state) => {
            return {
                [name]: value,
            };
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email:
                    <input
                            name="email"
                            type="text"
                            value={this.state.email}
                            onChange={this.handleChange}>
                        </input>
                    </label>

                    <label>
                        Password:
                        <input
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}>
                        </input>
                    </label>
                    <label>
                        Confirm Password:
                        <input
                            type="password"
                            name="passwordConfirmation"
                            value={this.state.passwordConfirmation}
                            onChange={this.handleChange}>
                        </input>
                    </label>
                    <button onClick={this.handleSubmit}>Register</button>
                </form>
            </div>
        )
    }

}

export default withRouter(Register);