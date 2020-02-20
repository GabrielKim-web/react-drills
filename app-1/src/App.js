import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      userInput: ''
    };
  }
  handleChange(value) {
    this.setState({userInput: value});
  }
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
