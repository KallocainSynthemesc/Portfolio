import React from "react"
import ButtonsStyle from "../css/buttons.module.css"
import EventBus from "./eventbus.js";
class SingleButton extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      opacity : this.props.opacity
    };
  }

  componentDidMount() {
    EventBus.on("color", (data) =>
      this.setState({ opacity: data.message === this.props.color ? 0.2 : null})
    );
  }

  componentWillUnmount()
  {
    EventBus.remove("color");
  }

  sendColor()
  {
    this.setState({opacity : 0.2}); 
    EventBus.dispatch("color", { message: this.props.color });
  }

  render()
  {
    return(
    <div id="buttons" className={ButtonsStyle.button}>
          
      <svg className={ButtonsStyle.buttons} version="1.1" viewBox="0 0 210 50">
      <defs>
        <filter id="filter1654-73" x="-.15157" y="-.13232" width="1.3031" height="1.2646" colorInterpolationFilters="sRGB">
        <feGaussianBlur stdDeviation="0.44576065"/>
        </filter>
        <filter id="filter1768-11" x="-.1574" y="-.13741" width="1.3148" height="1.2748" colorInterpolationFilters="sRGB">
        <feGaussianBlur stdDeviation="0.46290374"/>
        </filter>
      </defs>
      <g transform="matrix(1.1843 0 0 1.1843 1.9451 -7.1187)" fill="none">
        <rect transform="translate(-5.1771 2.112)" x="7.1801" y="7.3906" width="31.064" height="35.317" fill={'#' + this.props.color} stroke="#787e7e" strokeWidth="3.8784"/>
        <path transform="matrix(1.7589,0,0,1.7589,-25.807,-68.563)" d="m15.812 52.47v-8.0852h7.0583" filter="url(#filter1654-73)" opacity=".9183" stroke="#fcfefb" strokeWidth=".26458px"/>
        <path transform="matrix(-1.7589,0,0,-1.7589,282.59,406.03)" d="m141.87 213.45v-8.0852h7.0583" filter="url(#filter1768-11)" opacity=".8268" stroke="#fcfefb" strokeWidth=".26458px"/>
        <rect x="4.2457" y="12.207" width="26.585" height="29.904" stroke="#242a28" strokeWidth="1.5297"/>
      </g>
      <g>
        <rect style={{opacity: this.state.opacity}} className={ButtonsStyle.button_color} onClick={(e) => this.sendColor()} x="8.4909" y="8.8469" width="28.449" height="32.397" fill="#e9dccc" stroke="#787e7e" strokeWidth="1.2058"/>
        <image className={ButtonsStyle.icon} href={require('../icon/'+ this.props.name +'.ico').default} height="25" width="25" x="10" y="12"/>
      </g>
      </svg>
    </div>
    )
  }
}export default SingleButton; 