import React from "react"
import DiscImage from "../svg/shadow-and-inside.svg"
import VinylStyle from "../css/vinyl.module.css"
import ArmImage from "../svg/arm-render.svg"
import EventBus from "./eventbus.js";

class Vinyl extends React.Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.arm = React.createRef();
    this.rotationPosition = -3;
  }

  componentDidMount() {
    EventBus.on("color", (data) =>
      this.setArmPosition(data.message)
    );
  }

  componentWillUnmount()
  {
    EventBus.remove("color");
  }

  setArmPosition(color)
  {
    switch (color) {
      case 'ae6457':
        this.rotateArm(this.rotationPosition, 1.5, this.arm);
        break;
      case '36394c':
        this.rotateArm(this.rotationPosition, 7, this.arm);
        break;
      case '41332cff':
        this.rotateArm(this.rotationPosition, 12, this.arm);
        break;
      case '544f3d':
        this.rotateArm(this.rotationPosition, 17.5, this.arm);
        break;
      default:
        this.rotateArm(this.rotationPosition, -3, this.arm);
    }
  }

  rotateArm(rotationStart, rotationEnd, arm) {
    let isDecrement = rotationStart > rotationEnd ? true : false;
    let increment = isDecrement ? -0.3 : +0.3;
    let currentRotation = rotationStart;
    requestAnimationFrame(function animate(time) {
      currentRotation += increment;
      arm.current.setAttribute('transform' , "rotate("+currentRotation+" 868 107) translate(600 40)");
      
      if(isDecrement)
      {
        if (currentRotation > rotationEnd) {
          requestAnimationFrame(animate);
        }
      }
      else
      {
        if (currentRotation < rotationEnd) {
            requestAnimationFrame(animate);
        }
      }
    });
    this.rotationPosition = rotationEnd;
  }
  
  render()
  {
    return(
      <div id="left" className={VinylStyle.vinyl}>
          <svg className={VinylStyle.svgDiscEdges} width="130%" height="130%" version="1.1" viewBox="0 0 967.61 967.61">
            <g  className={VinylStyle.discSpin}>
              <defs>
                <filter id="filter3966" x="-.020505" y="-.020505" width="1.041" height="1.041" colorInterpolationFilters="sRGB">
                <feGaussianBlur result="result10" stdDeviation="7.360588"/>
                <feBlend in="result10" in2="result10" result="fbSourceGraphic"/>
                <feGaussianBlur in="fbSourceGraphic" result="result8" stdDeviation="3"/>
                <feTurbulence baseFrequency="0.2" result="result7" type="fractalNoise"/>
                <feComposite in="result8" in2="result8" operator="in" result="result6"/>
                <feDisplacementMap in="result7" in2="result6" result="result4" scale="50" xChannelSelector="R" yChannelSelector="G"/>
                <feComposite in="result8" in2="result4" k1="1" k3="1" operator="arithmetic" result="result2"/>
                <feComposite in="fbSourceGraphic" in2="result2" operator="in" result="fbSourceGraphic"/>
                <feDisplacementMap in2="result4" scale="50" xChannelSelector="R" yChannelSelector="G"/>
                </filter>
              </defs>
              <circle cx="484.3" cy="483.81" r="472.13" fill="#1f1f21" stroke="#a09fa4" strokeWidth="23.35"/>
              <g fill="none">
                <g transform="translate(-.88389 3.1737)" stroke="#000">
                  <circle cx="484.6" cy="483.12" r="448.52" strokeWidth="1.0016"/>
                  <circle cx="484.29" cy="484.29" r="439.55" strokeWidth="1.0016"/>
                  <circle cx="484.29" cy="484.29" r="430.76" stroke="#ae6457" strokeWidth="2.5"/>

                  <circle cx="482.65" cy="485.93" r="389.25" stroke="#623a43" strokeWidth="3"/>
                  <circle cx="485.93" cy="484.29" r="334.27" stroke="#36394c" strokeWidth="3"/>
                  <circle cx="485.93" cy="483.47" r="287.05" stroke="#41332c" strokeWidth="3"/>
                  <circle cx="485.93" cy="483.47" r="234.2" stroke="#544f3d" strokeWidth="3"/>
                  <g strokeWidth="1.0016">
                    <circle cx="483.49" cy="485.69" r="422.15"/>
                    <circle cx="482.65" cy="485.93" r="413.7"/>
                    <circle cx="482.65" cy="485.93" r="401.29"/>
                    <circle cx="484.29" cy="485.93" r="377.58"/>
                    <circle cx="485.93" cy="485.93" r="366.25"/>
                    <circle cx="485.93" cy="485.93" r="355.26"/>
                    <circle cx="485.93" cy="484.29" r="344.6"/>
                    <circle cx="485.93" cy="484.29" r="324.24"/>
                    <circle cx="485.93" cy="484.29" r="314.51"/>
                    <circle cx="485.93" cy="484.29" r="305.08"/>
                    <circle cx="485.93" cy="484.29" r="295.92"/>
                    <circle cx="485.93" cy="483.47" r="278.43"/>
                    <circle cx="486.75" cy="483.47" r="270.08"/>
                    <circle cx="486.75" cy="483.47" r="261.98"/>
                    <circle cx="485.93" cy="483.57" r="254.12"/>
                    <circle cx="485.8" cy="483.82" r="243.95"/>
                    <circle cx="486.75" cy="483.47" r="224.83"/>
                    <circle cx="487.57" cy="482.65" r="215.84"/>
                    <circle cx="485.93" cy="482.65" r="207.2"/>
                  </g>
                </g>
                <g stroke="#000004" strokeWidth="3">
                  <circle cx="484.96" cy="487.04" r="314.51" filter="url(#filter3966)"/>
                  <circle transform="matrix(1.21 0 0 1.21 -102.17 -102.91)" cx="486.54" cy="490.06" r="314.51" filter="url(#filter3966)"/>
                  <circle transform="matrix(1.331 0 0 1.331 -162.22 -166.9)" cx="486.54" cy="490.06" r="314.51" filter="url(#filter3966)"/>
                </g>
              </g>
            </g>
            <image href={DiscImage} className={VinylStyle.discImage}height="99.7%"/>
            <image ref={this.arm} href={ArmImage} className={VinylStyle.armTransition} height="65%" transform={"rotate(-3 868 107) translate(600 40)"}/>
            
            </svg>
      </div>
  
      )
  }
} export default Vinyl;