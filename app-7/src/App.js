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
      tasks: [],
    }
    this.addTask=this.addTask.bind(this);
  }

  addTask(task) {
    const {tasks} = this.state;
    tasks.push(task)
    this.setState({tasks})
  }
  render() {
    let tasks = this.state.tasks.map((element, index) => {
      return <Todo key={index} task={element} />;
    })
    return (
      <div className="App">
        <NewTask addTask={this.addTask}/>
        <h1>My To-Do tasks</h1>
        {tasks}
        <ul>
          <List tasks={this.state.tasks}/>
        </ul>
      </div>
    );
  }
}

export default App;
