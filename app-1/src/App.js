import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      text: '',
      userInput: ''
    };
  }
  handleChange(value) {
    this.setState({userInput: value});
  }
  // setText(value) {
  //   this.setState({text: value});
  // }
  render() {
    return (
      <div className="App">
        <h1>Display user input</h1>
        <input onChange={(e) => this.handleChange(e.target.value)}></input>
        {/* <button onClick={() => this.setText(this.state.userInput)}>Set Text</button> */}
        <span>Text: {this.state.userInput}</span>
      </div>
    );
  }
}

export default App;
