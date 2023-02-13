import React from "react"
import ButtonsStyle from "../css/buttons.module.css"
import SingleButton from "./single-button.js"

class Buttons extends React.Component {
  render()
  {
    return(
    <div id="buttons" className={ButtonsStyle.buttons_container}>
      <SingleButton color={'623a43'} opacity={0.2} name={'home-6-64'}></SingleButton>
      <SingleButton color={'ae6457'} opacity={null} name={'user-64'}></SingleButton>
      <SingleButton color={'36394c'} opacity={null} name={'graduation-cap-64'}></SingleButton>
      <SingleButton color={'41332cff'} opacity={null} name={'binoculars'}></SingleButton>
      <SingleButton color={'544f3d'} opacity={null} name={'phone-50-64'}></SingleButton>
    </div>
    )
  }
}export default Buttons; 