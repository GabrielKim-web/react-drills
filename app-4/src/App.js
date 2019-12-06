import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      userName: '',
      password: '',
      userInput: '',
      passInput: ''
    };
  }

  handleUser(value) {
    this.setState({userInput: value});
  }
  handlePass(value) {
    this.setState({passInput: value})
  }
  // setCredentials(user, pass) {
  //   const {userName, password} = this.state;
  //   console.log(user, pass);
  //   this.setState({userName: user, password: pass}, () => { alert(`Username: ${userName} Password: ${password}`) });
    //the below two lines code is actual solution
    // alert(`Username: ${user}
    // Password: ${pass}`);
    // The setstate is happening after the alert
    // alert(`Username: ${userName}
    // Password: ${password}`)
  // }

  setCredentials() {
    this.setState({userName: this.state.userInput, password: this.state.passInput});
    alert(`Username: ${this.state.userInput}
    Password: ${this.state.passInput}`);
  }

  render() {
    return (
      <div className="App">
        <h1>Credentials</h1>
        <input placeholder="Username" onChange={(e) => this.handleUser(e.target.value)}></input>
        <input placeholder="Password" onChange={(e) => this.handlePass(e.target.value)}></input>
        <button onClick={() => this.setCredentials(this.state.userInput, this.state.passInput)}>Set credentials</button>
      </div>
    );
  }
}

export default App;
