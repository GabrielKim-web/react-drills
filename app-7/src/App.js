import React, { Component } from "react";
import Todo from './Todo';
import List from './List';
import NewTask from './NewTask';
import "./App.css";

//I am going to need to inherit methods from app.js to their children.
class App extends Component {
  constructor() {
    super();

    this.state = {
      list: []
    }
  }
  render() {
    let list = this.state.list.map((element, index) => {
      return <Todo key={index} task={element} />;
    })
    return (
      <div className="App">
        <h1>My To-Do List</h1>
        <NewTask list={this.state.list}/>
        <List list={this.state.list}/>
        {list}
      </div>
    );
  }
}

export default App;
