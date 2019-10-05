import React, {Component} from 'react'
import './styles/App.css'
// import todosData from './Data/todosData'
import TodoItem from './Components/TodoItem'

class App extends Component {
  constructor(){
    super()
    this.state = {
      // data: todosData,
      todoArray: [],
      inputText: '',
      id: ''
    }
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.getTextFromInput = this.getTextFromInput.bind(this)
    this.handlesDelete = this.handlesDelete.bind(this)
  }

  handlesDelete = () => {
    console.log('delete item')
  }

  render(){
 
  // console.log(this.state.data)
  const todoItems = this.state.todoArray.map(item => <TodoItem key={item.id} item={item} onDelete={this.handlesDelete} />)

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

     getTextFromInput(e) {
       console.log(e.target.value)
       this.setState({
         inputText: e.target.value
       })
     }

    handleBtnClick() {
      const todoItem = {
        text: this.state.inputText,
        completed: false,
        id: Date.now()
      }
      console.log(todoItem)

      this.setState({
        todoArray: [...this.state.todoArray, todoItem],
      })
      console.log(this.state.todoArray)
    }

    

   
}





/***
 * TEST CODE to UNDERSTAND STATE more
 */

// class App extends Component {
//   constructor(){
//     super()
//     this.state = {
//       todoItems: [],
//       todoLabel: ''
//     }
//     this.handleBtn = this.handleBtn.bind(this);
//     this.handleInputText = this.handleInputText.bind(this)
//   }

  
 
//   render(){
//     return (
//       <div> 
//         <input type="text" placeholder="enter todo here" onChange={this.handleInputText}/>
//         <button onClick={this.handleBtn}> New todo</button>

//         <TodoItem />
//       </div> 
//     )
//   }

//    handleInputText(e) {
//      this.setState({
//        todoLabel: e.target.value
//      })
//    }

//    handleBtn() {
//     console.log('btn clicked')

//     //create new todoItem
//     const newTodoItem = {
//       name: this.state.todoLabel,
//       id: Date.now()
//     }

//     this.setState({
//       todoItems: [...this.state.todoItems, newTodoItem],
//       todoLabel: ''
//     })
//     console.log(this.state.todoItems)
//    }
// }


// class TodoItem extends Component {
//   render(){
//     return (
//       <div> 
//         <h2>this is todo item component</h2> 
//       </div> 
//     )
//   }
// }

export default App