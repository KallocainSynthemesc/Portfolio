import React from "react"
import Left from "../css/left-section.module.css"
import Vinyl from "./vinyl.js"
import Buttons from "./buttons.js"
import Bandcamp from "./bandcamp.js"

class LeftSide extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isSafari : true,
    };
  }

  componentDidMount() {
     //safari has to many bugs and apple tries its best to hinder my debug efforts. Since this is a private project I am in the lucky situation to just not support safari.
     this.setState({ isSafari: /^((?!chrome|android).)*safari/i.test(navigator.userAgent)})
  }

  renderContent()
  {
    let vinyl =  <Vinyl></Vinyl>;
    let buttons = <Buttons></Buttons>;
    let bandcamp = <Bandcamp></Bandcamp>;

    if(this.state.isSafari === false)
    {
      return(
        <div id="left" className={Left.left + ' ' + Left.split + ' ' + Left.flex_container + ' ' + Left.nowrap}>
          {vinyl}
          {buttons}
          {bandcamp}
        </div>
      )
    }
    else
    {
      return(
        <div id="left" className={Left.left + ' ' + Left.split + ' ' + Left.flex_container + ' ' + Left.nowrap}>
          {vinyl}
        </div>
        )
    }
  }

  render() {
    return (
      this.renderContent()
    );
  } 

} export default LeftSide;