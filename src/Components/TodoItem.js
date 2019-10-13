import React from "react";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };

    this.strikeItem = this.strikeItem.bind(this);
  }

  strikeItem() {
    this.setState({
      clicked: true
    });
    console.log(this.state.clicked);
  }

  render() {

    console.log(this.props.item);
    let todoItem = this.props.item;

    return (
      <div className="row todoItem" id={this.props.id}>
        <span
          onClick={this.strikeItem}
          style={
            this.state.clicked
              ? { textDecorationLine: "line-through" }
              : { color: "#c5c5c5" }
          }
        >
          {todoItem.text}
        </span>
        <button onClick={this.props.onDelete.bind(this, this.props.item.id)}>
          <span className="minus">-</span>
        </button>
      </div>
    );
  }
}

export default TodoItem;
