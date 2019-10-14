import React, { Component } from "react";
import "./styles/App.css";
import TodoItem from "./components/TodoItem";

class App extends Component {
  constructor() {
    super();
    this.state = {
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
            id="inputField"
            onChange={this.getTextFromInput}
            value={this.state.inputText}
          />
          <button onClick={this.handleBtnClick} className="plus">
            +
          </button>
        </div>
        {todoItems}
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

    this.setState({
      inputText: "",
      todoArray: [...this.state.todoArray, todoItem]
    });
  }

  handlesDelete = id => {
    let defaultArray = this.state.todoArray;

    for (let i = 0; i < defaultArray.length; i++) {
      let todoItem = defaultArray[i];

      if (todoItem.id === id) {
        defaultArray.splice(i, 1);
      }
    }

    this.setState({
      todoArray: defaultArray
    });
  };
}

export default App;
