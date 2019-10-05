import React from 'react'

class TodoItem extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return(
      <div className="row" id={this.props.id}> 
        {/* <input type="checkbox" checked={props.item.completed} onChange={props.item.completed}/>  */}
        <p>{this.props.item.text}</p>
        <button onClick={() => this.props.onDelete}>X</button>
      </div>
    )
  }
}

export default TodoItem