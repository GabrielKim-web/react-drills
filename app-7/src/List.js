import React, {Component} from 'react';

class List extends Component {
   render() {
      return(
         <ul>
            {this.props.tasks.map((element, index) => {
               return (<li key={index+1}>
                  {element}
               </li>)
            })}
         </ul>
      )
   }
}
export default List;