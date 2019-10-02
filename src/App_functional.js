import React from 'react';
import './styles/App.css'

let itemsList = []

function RenderItems(){
  return (
    <div> 
      <h3>List here: {itemsList[0]}</h3>
    </div> 
  )
}

function App(){

  function getTextFromInput(e) {
    console.log('Handling the input')

    let todoItem = e.target.value

    console.log(todoItem)
    return todoItem
  }

  function handleNewBtn(e) {
    e.preventDefault()
    console.log('Button was pressed => todo item')
    // itemsList.push({getTextFromInput()})

    console.log(e.target.value)
    console.log(itemsList)
  }

  return (
    <div className="App">
      To do App
      <form onSubmit={handleNewBtn}> 
        <input type='text' placeholder="Enter item here"  onChange={getTextFromInput}/> 
        <button type="submit" > New item </button> 
      </form>
      <RenderItems />

    </div> 
  )
}

export default App