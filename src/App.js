import React, {Component} from 'react'
import './styles/App.css'
import todosData from './Data/todosData'
import TodoItem from './Components/TodoItem'

class App extends Component {
  constructor(){
    super()
    this.state = {
      data: todosData,
      inputText: ""
    }

    this.handleBtn = this.handleBtn.bind(this)
  }

  handleBtn(){
    const todoItem = {
        id: 6,
        text: this.state.inputText,
        completed: false
    }

    this.setState(
      { data: [...this.state.data , todoItem] }
    )

    console.log('test here ')
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
        <input placeholder="test" type="text" />
        <button onClick={this.handleBtn} />
      </div>
    )
  }
}


export default App