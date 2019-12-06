import React, { Component } from "react";
import Todo from './Todo.js';
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      userInput: '',
      todoList: []
    };
  }
  handleChange(value) {
    this.setState({userInput: value});
  }
  addItem(value) {
    const {todoList} = this.state;
    todoList.push(value);
    this.setState({todoList: todoList, userInput: ''});
  }

  render() {
    return (
      <div className="App">
        <h1>To-do List</h1>
        <input placeholder= "Enter task" onChange={(e) => this.handleChange(e.target.value)} />
        <button onClick={() => this.addItem(this.state.userInput)}>Add Task</button>
        <Todo 
        todoList={this.state.todoList}
        />
      </div>
    );
  }
}

export default App;
