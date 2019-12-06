import React, { Component } from 'react';

class Todo extends Component {
   render() {
      return (
         <div>
            {this.props.todoList.map((element, index) => {
               return (
                  <div key= {`${element}-${index}`}>
                  <h2>{`Task ${index + 1}: ${element}`}</h2>
                  </div>
               )
            })}
         </div>
      )
   }
}

export default Todo;