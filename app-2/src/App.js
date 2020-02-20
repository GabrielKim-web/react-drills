import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      array: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese'],
    }
  }

  render() {
    return (
      <div className="App">
        <h1>To-do list for OOF</h1>
        <span>{this.state.array.map((element, index) => {
          return (
            <div key= {`${index+1}`}>
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
