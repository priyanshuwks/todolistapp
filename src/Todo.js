import React, { useState } from 'react'
import './todo.css'

function Todo() {
  const [inputData, setInputData] = useState("");
  const [allItems, setAllItems] = useState([])
  function handleChange(e){
    setInputData(e.target.value);
    // console.log(inputData)
  }
  function displayAllItems(){
    setAllItems([...allItems, inputData]);
    setInputData("")
  }
  function removeThisItem(e){
    console.log(e.target.id)
    // console.log(e.target)
    let modifiedList = allItems.filter((ele, ind) => {
      return (ind !== parseInt(e.target.id))
    })
    // console.log(modifiedList)
    setAllItems(modifiedList)
  }
  return (
    <>
        <div className="body-div">
            <div className="container">
              <div className="heading">
                <h1>ToDo List</h1>
              </div>
              <div className="input-div">
                <input type="text" placeholder='Add Items' value={inputData} onChange={handleChange}/>
                <button onClick={displayAllItems}>+</button>
              </div>
              <div className="output-div">
                
                <ul>
                  {allItems.map((items, i) => {
                    return <li key={i}>{items}  <button className="cross-button" onClick={removeThisItem} id={i}>-</button></li>
                  })}
                </ul>
              </div>
            </div>
        </div>
    </>
  )
}

export default Todo