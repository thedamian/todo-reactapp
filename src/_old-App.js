import React, { Component } from 'react';
import './styles/App.css';
import TodoItem from './Components/TodoItem';

import { Button, Input } from 'reactstrap';

class App extends Component {
  constructor(){
    super()
    this.state = {
      todosData: [],
      todoIsGood: true
    }

    this.handleBtnClick = this.handleBtnClick.bind(this)
  }

  handleBtnClick(){
    console.log('button was clicked')  

    this.setState(
      // {todosData: [23]}
      )
  }
  
  render(){
    console.log(this.state)
    console.log(this.state.todosData)

    return(
      <div className = "App">
        <h1>Todo App </h1>

        <div className="row">
          <Input className="col" type="text" name="text" id="todo-text" placeholder="Type here" data-value=" "/>
          <Button onClick={this.handleBtnClick}> test </Button>
        </div>
        <p>here is the Tododata {this.state.todosData}</p>

        <TodoItem /> 
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <h1>Todo App </h1>

//       <div className="row">
//         <Input className="col" type="text" name="text" id="todo-text" placeholder="Type here" />
//         <Button> test </Button>
//       </div>

//       <TodoItem /> 
//     </div>
//   );
// }

export default App;
