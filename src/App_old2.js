import React, {Component} from 'react'
import './styles/App.css'
import todosData from './Data/todosData'
import TodoItem from './Components/TodoItem'

class App extends Component {
  constructor(){
    super()
    this.state = {
      data: todosData,
      inputText: "",
      id: 1
    }

    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.getTextFromInput = this.getTextFromInput.bind(this)
  }

  handleBtnClick(id){
    const todoItem = {
        id: (this.setState(prevState => {
          let itemId = this.state.id
          itemId = itemId++
        })),
        text: this.state.inputText,
        completed: false
    }
    console.log(todoItem)

    this.setState({ 
      data: [...this.state.data , todoItem],
      id: this.state.data
      }
    )

    console.log('handleBtnClick was ran')
  }
  
  getTextFromInput(e){
    console.log(e.target.value)
    this.setState({
      inputText: e.target.value
      }
    )
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
        <input placeholder="test" type="text" onChange={this.getTextFromInput} />
        <button onClick={this.handleBtnClick} />
      </div>
    )
  }
}

export default App