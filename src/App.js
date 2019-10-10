import React, {Component} from 'react'
import './styles/App.css'
// import todosData from './Data/todosData'
import TodoItem from './Components/TodoItem'

class App extends Component {
  constructor(){
    super()
    this.state = {
      // data: todosData,
      id: '',
      todoArray: [],
      inputText: ''
      
    }
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.getTextFromInput = this.getTextFromInput.bind(this)
    this.handlesDelete = this.handlesDelete.bind(this)

  }

  render(){
 
  // console.log(this.state.data)
  const todoItems = this.state.todoArray.map(item => <TodoItem key={item.id} item={item} onDelete={this.handlesDelete} />)

    return(
      <div className='App'>
        <h1> items </h1>
        <span> 
          {todoItems}
        </span> 
        <div className="row"> 
          <input placeholder="test" type="text" id="input" onChange={this.getTextFromInput} />
          <button onClick={this.handleBtnClick} >Add Item</button>
        </div> 
      </div>
    )
  }

     getTextFromInput(e) {
       this.setState({
         inputText: e.target.value
       })
     }

    handleBtnClick() {
      const todoItem = {
        id: Date.now(),
        text: this.state.inputText,
        completed: false,
        
      }
      console.log(todoItem)

      document.getElementById('input').value = ''
      
      this.setState({
        todoArray: [...this.state.todoArray, todoItem],
      })
      console.log(this.state.todoArray)
    }

     handlesDelete = (id) => {
       console.log(id)

       

       let holdArray = this.state.todoArray
      //  let itemToRemove = holdArray.findIndex({id: id})

      for (var i = 0; i < holdArray.length; i++){
        var item = holdArray[i]
        

        if (item.indexOf(item.id !== id)){
        } console.log(holdArray)
      }
 
      
      //  console.log(itemToRemove)
      //  let holdArrayMinusRemovedItem = holdArray.splice(holdArray.indexOf(id), 1)
      //  let holdArrayMinusRemovedItem = holdArray.filter(el => el !== id)
       let holdArrayMinusRemovedItem = holdArray.splice(id, 1)
      

       console.log(holdArray)
       console.log(holdArrayMinusRemovedItem)

       this.setState({
         todoArray: holdArrayMinusRemovedItem
       })

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