// import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';

// const email = {

// }

// const password = {

// }

// const loginBtn = {
//   backgroundColor: 'orange',
// }

// const registerBtn = {
//   backgroundColor: 'white',
//   borderStyle: 'none',
//   color: 'teal',
//   fontSize: '15px',
// }

// const formWrapper = {
//   display: 'flex',
//   flexDirection: 'column',
// }

// class Login extends Component {

//   state = {
//     errorMessage: ""
//   }

//   handleLogin = (event) => {
//     event.preventDefault()
//     if (this.state.email === "test@kenzie.academy" && this.state.password === "test123") {
//       return (
//         this.props.history.push("/dashboard"));
//     } else {
//       return (
//          this.setState({ errorMessage: "Invalid Username/Password" }));
//     }
//   }

//   onChange = (event) => {
//     this.setState({ newEvent: event.target.value })
//   }

//   render() {
//     return (
//       <>
//         <div style={formWrapper}>
//           <form onSubmit={this.handleLogin} noValidate>
//             <label htmlFor="email">Email</label>
//             <input value={this.state.email} onChange={this}style={email} type="email" noValidate></input>
//             <label htmlFor="password">Password</label>
//             <input value={this.state.password} style={password} type="password" noValidate></input>
//             <button style={loginBtn} onClick={this.handleLogin}>Login</button>
//             <button style={registerBtn}>Register New User</button>
//           </form>
//         </div>
//       </>
//     )
//   }
// }
// export default withRouter(Login);