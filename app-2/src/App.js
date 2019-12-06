import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      array: [],
      userInput: ''
    }
  }
  handleChange(value) {
    this.setState({userInput: value});
  }

  updateArray(value) {
    const {array} = this.state;
    array.push(value);
    this.setState({array: array});
  }

  render() {
    return (
      <div className="App">
        <h1>To-do list for OOF</h1>
        <input onChange={(e) => this.handleChange(e.target.value)}></input>
        <button onClick={() => this.updateArray(this.state.userInput)}>Add item</button>
        <span>How do I display this again? {this.state.array.map((element, index) => {
          return (
            <div key= {`${element}-${index}`}>
              <h2>{`List ${index + 1}: ${element}`}</h2>
            </div>
          )
        })}
        </span>
      </div>
    );
  }
}

export default App;
