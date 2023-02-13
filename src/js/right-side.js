import React from "react"
import Desk from "./desk.js"
import Book from "./book.js"

class RightSide extends React.Component{

  render()
  {
    return(
    <div id="right_container">
      <Desk></Desk>
      <Book></Book>
    </div>
    )
  }
    
}  
export default RightSide;