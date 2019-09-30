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

  function handleInput(e) {
    console.log('Handling the input')

    let todoItem = e.target.value

    console.log(todoItem)
    

  }

  function handleNewBtn(todoItem){
    console.log('Button was pressed => todo item')
    console.log(todoItem)
    
    itemsList.push({todoItem})

    console.log(itemsList)
  }


  return (
    <div className="App"> 
      To do App

      <input type='text' placeholder="Enter item here" onChange={handleInput}/> 
      <button onClick={handleNewBtn}> New item </button> 
      
      <RenderItems />

    </div> 
  )
}




export default App