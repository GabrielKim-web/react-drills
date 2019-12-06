import React, { Component } from "react";
import Image from './Image';
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      src: "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG"
    }
  }
  render() {
    return (
      <div className="App">
        <Image 
        src={this.state.src}
        />
      </div>
    );
  }
}

export default App;
