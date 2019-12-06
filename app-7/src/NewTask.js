import React from 'react';

class NewTask extends Component {
   constructor () {
      super();

      this.state = {
         userInput: ''
      }
   }
   handleChange(value) {
      this.setState({userInput: value});
   }
   handleAddTask(value) {
      const {list} = this.state;
      list.push(value);
      this.setState({list: list, userInput: ''});
    }
   render() {
      return(
         <div>
            <input 
               // Why value? That way you can reset it after every new task entered.
               value={this.state.input}
               placeholder="New task"
               onChange={(e) => this.handleChange(e.target.value)}/>
            <button onClick={() => this.props.handleAddTask(this.state.userInput)}>Add Task</button>
         </div>
      )
   }
}

export default NewTask;