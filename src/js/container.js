import React from "react"
import RightSide from "./right-side.js"
import LeftSide from "./left-side.js"

class Container extends React.Component {

  constructor(props) {
    super(props);
    this.container = React.createRef();
    this.state = {
      isPortraitMode : true,
      isDesktop : false
    };

  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
  }
  updateDimensions = () => {
    if (window.matchMedia("(orientation: landscape)").matches) {
      this.setState({ isPortraitMode: false})
    }

    if (window.matchMedia("only screen and (min-width: 750px)").matches) {
      this.setState({ isDesktop: true})
    }
    else{
      this.setState({ isDesktop: false})
    }
    
  };

  renderContent()
  {
    let rightSide =  <RightSide></RightSide>;
    let leftSide = <LeftSide></LeftSide>
    if(this.state.isPortraitMode || !this.state.isDesktop)
    {
      return(
        <div ref={this.container}>
          {rightSide}
        </div>
      )
    }
    else
    {
      return(
        <div ref={this.container}>
          {rightSide}
          {leftSide}
        </div>
        )
    }
  }

  render()
  {
    return (
      this.renderContent()
      );
  }
}export default Container; 