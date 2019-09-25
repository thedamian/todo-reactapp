import React, {Component} from 'react'
import './styles/App.css'
import todosData from './Data/todosData'
import TodoItem from './Components/TodoItem'


class App extends Component {
  constructor(){
    super()
    this.state = {
      data: todosData
    }
  }

  render(){

  console.log(this.state.data)
  const todoItems = this.state.data.map(item => <TodoItem key={item.id} item={item} />)

    return(
      <div className='App'>
        <h1> todos </h1>
        <span> 
          {todoItems}
        </span> 
      </div>
    )
  }
}


export default App