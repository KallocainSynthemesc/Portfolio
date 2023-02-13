import React from "react"
import RightStyle from "../css/right-side.module.css"
import EventBus from "./eventbus.js";
import AshtrayGlasses from "../svg/AshTrayGlasses.svg"
class Desk extends React.Component{ 

  constructor(props) {
    super(props);
    this.canvas = React.createRef(); //canvas appraoch is better for firefox and little bit worse on chrome, maybe make two different components for each browser?
    this.opacity = 0;
  }

  componentDidMount() {
    let canvasCurrent = this.canvas.current;
    canvasCurrent.style.width='100%';
    canvasCurrent.style.height='100%';
    canvasCurrent.width  = canvasCurrent.offsetWidth;
    canvasCurrent.height = canvasCurrent.offsetHeight;
    let context = canvasCurrent.getContext('2d', { alpha: false })
    this.draw(context, '623a43');
    this.fadeBackground = this.fadeBackground.bind(this);
    EventBus.on("color", (data) =>
      this.fadeBackground(data.message)
    );
  }

  draw(ctx, color)
  {
    ctx.fillStyle = '#' + color;
    ctx.fillRect(0,0,this.canvas.current.width,this.canvas.current.height);
    ctx.fill()
  }

  fadeBackground(color) {
    let opacity = this.opacity;
    let increment = 0.01;
    let canvas = this.canvas.current;
    let ctx = canvas.getContext('2d', { alpha: false });
    requestAnimationFrame(function animate(time) {
      opacity += increment;
      ctx.fillStyle = '#' + color;
      ctx.globalAlpha = opacity;
      ctx.fillRect(0,0,canvas.width, canvas.height);
      
      if (opacity <= 1) {
          requestAnimationFrame(animate);
      }
    });
  }

  render()
  {
    return <div className={RightStyle.right+ ' ' + RightStyle.split}>
            <canvas ref={this.canvas} id="myCanvas" width="100%" height="100%" className={RightStyle.canvas} ></canvas>
            <svg className={RightStyle.svg} version="1.1" viewBox="0 0 3780 3000">
              <image href={AshtrayGlasses} className={RightStyle.ashtray_glasses} alt="PaperHand"/>
            </svg>
          </div>
  }
    
}  
export default Desk;