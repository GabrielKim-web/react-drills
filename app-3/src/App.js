import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      array: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese'],
      userInput: ''
    }
  }
  handleChange(value) {
    this.setState({userInput: value});
  }



  render() {
    const {array, userInput} = this.state;
    // includes is better than startsWith since we can search "cream" and still get "ice cream"
    // const filter = array.filter(element => element.startsWith(userInput));
    const filter = array.filter(element => {return element.includes(userInput)} );
    return (
      <div className="App">
        <h1>To-do list for OOF</h1>
        <input placeholder="Search by" onChange={(e) => this.handleChange(e.target.value)}></input>
        {filter.map((element, index) => {
          return <div key={index}>{element}</div>
        })}
      </div>
    );
  }
}

export default App;
