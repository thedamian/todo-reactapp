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
        {/* <input type="checkbox" checked={this.props.item.completed} onChange={this.props.onDelete.bind(this, this.props.item.id)}/>  */}
        {/* <input type="checkbox" checked={this.props.item.completed} onChange={this.props.onDelete.bind(this, this.props.item)}/>  */}
        {/* <input type="checkbox" checked={this.props.item.completed} onChange={this.item.completed = true}/>  */}
        {/* <p style={this.props.item.completed ? {color: 'red'} : {color: 'white'}} onClick={this.props.item.completed = true}>{this.props.item.text}</p> */}
        <p>{this.props.item.text}</p>
        <button onClick={this.props.onDelete.bind(this, this.props.item.id)}>X</button>
      </div>
    )
  }
}

export default TodoItem