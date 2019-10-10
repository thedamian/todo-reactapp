import React from "react";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let todoItem = this.props.item;

    function strikeItem() {
      todoItem.completed = !todoItem.completed;
      console.log(todoItem.completed);
    }

    return (
      <div className="row" id={this.props.id}>
        <span
          onClick={strikeItem}
          style={{ color: todoItem.completed ? "green" : "red" }}
        >
          {todoItem.text}
        </span>
        <button onClick={this.props.onDelete.bind(this, this.props.item.id)}>
          X
        </button>
      </div>
    );
  }
}

export default TodoItem;
