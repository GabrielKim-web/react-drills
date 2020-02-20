import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
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

  setCredentials(user, pass) {
    alert(`Username: ${user}
    Password: ${pass}`);
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
