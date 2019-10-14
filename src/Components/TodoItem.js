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
  }

  render() {
    let todoItem = this.props.item;




    return (
      <div className="row todoItem" id={this.props.id}>
        <span
          onClick={this.strikeItem}
          className={
            this.state.clicked
              ? "strike-item"
              : "text-white"
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
