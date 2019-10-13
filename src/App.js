import React, { Component } from "react";
import "./styles/App.css";
// import todosData from './Data/todosData'
import TodoItem from "./Components/TodoItem";

class App extends Component {
  constructor() {
    super();
    this.state = {
      // data: todosData,
      todoArray: [],
      inputText: ""
    };
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.getTextFromInput = this.getTextFromInput.bind(this);
    this.handlesDelete = this.handlesDelete.bind(this);
  }

  render() {
    const todoItems = this.state.todoArray.map(item => (
      <TodoItem key={item.id} item={item} onDelete={this.handlesDelete} />
    ));

    return (
      <div className="App">
        <div className="row todoInput">
          <input
            placeholder="To Do"
            type="text"
            id="inp"
            onChange={this.getTextFromInput}
          />
          <button onClick={this.handleBtnClick} className="plus">
            +
          </button>
        </div>
        {todoItems}
        {/* <footer> by Jonathan Sanchez </footer> */}
      </div>
    );
  }

  getTextFromInput(e) {
    this.setState({
      inputText: e.target.value
    });
  }

  handleBtnClick() {
    const todoItem = {
      id: Date.now(),
      text: this.state.inputText,
      completed: false
    };

    document.getElementById("inp").value = "";

    this.setState({
      todoArray: [...this.state.todoArray, todoItem]
    });
  }

  handlesDelete = id => {
    // assign variable to state.todoArray
    let defaultArray = this.state.todoArray;

    // find the index of each item in the defaultArray
    for (let i = 0; i < defaultArray.length; i++) {
      let todoItem = defaultArray[i];

      // check if the item in Default array equals to the passed ID
      if (todoItem.id === id) {
        // remove the item that equals that ID
        defaultArray.splice(i, 1);
      }
    }

    // put in the new default array in side of todoArray in side of STATE
    this.setState({
      todoArray: defaultArray
    });
  };
}

export default App;
