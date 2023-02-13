import React from "react"
import BookCss from "../css/book.module.css"
import Page1 from "./page1.js"
import Page4 from "./page4.js"
import Page2 from "./page2.js"
import Page6 from "./page6.js"
import Page8 from "./page8.js"
import Page10 from "./page10.js"
import PageSafari from "./page-safari.js"
import EventBus from "./eventbus.js";

class Book extends React.Component{
  constructor(props) {
    super(props);
    this._ae6457 = React.createRef();
    this._36394c = React.createRef();
    this._41332cff = React.createRef();
    this._544f3d = React.createRef();
    this.bookCover = React.createRef();
    this.isSafari = false;
    this.currentActive = 366309363; //default is #623a43
    this.listUp = ["ae6457" , "36394c", "41332cff", "544f3d"];
    this.listDown = ["544f3d", "41332cff" ,"36394c", "ae6457"];
    this.state = {
      widthRounded : null
    };
  }

  componentDidMount() {
    EventBus.on("color", (data) =>
      this.turnpages(data.message)
    );
     //safari has to many bugs and apple tries its best to hinder my debug efforts. Since this is a private project I am in the lucky situation to just not support safari.
    this.isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    this.setState({ isSafari: /^((?!chrome|android).)*safari/i.test(navigator.userAgent)})
    this.roundPixels = this.roundPixels.bind(this);
    this.execResize = this.execResize.bind(this);
    window.addEventListener('resize', this.execResize);
    this.execResize();
  }
  
  execResize()
  {
    this.setState({ widthRounded: null});
    this.roundPixels();
  }

  /*During or after some animations text gets blurry. There seem to be multiple approaches to fix this issue. 
  For me rounding sub-pixels was the only thing that got me out of this missery for chrome.*/ 
  roundPixels()
  {
    console.log("roundPixels called");
    let halfWidth = this.bookCover.current.offsetWidth /2;
    let roundedWidth = (halfWidth >> 0) * 2;
    this.setState({ widthRounded: roundedWidth});

  }

  turnpages(message)
  {
    switch (message) {
      case "ae6457":{ //"ae6457" == 628461691 //sum = 994771054
        let colorIntegerEquivalent = 994771054;
        if(this.currentActive < colorIntegerEquivalent){
          this._ae6457.current.checked = true;
        }else{
          this.animationDelayDown(colorIntegerEquivalent);
        }
        this.currentActive = colorIntegerEquivalent;
        break;
      }
      case "36394c":{ //36394c = 191628012 //sum = 1186399066
        let colorIntegerEquivalent = 1186399066;
        if(this.currentActive < colorIntegerEquivalent){
          this.animationDelayUp(colorIntegerEquivalent);
        }else{
          this.animationDelayDown(colorIntegerEquivalent);
        }
        this.currentActive = colorIntegerEquivalent;
        break;
      }
      case "41332cff":{ //41332cff = 315819985515 // sum = 317006384581
        let colorIntegerEquivalent = 317006384581;
        if(this.currentActive < colorIntegerEquivalent){
          this.animationDelayUp(colorIntegerEquivalent);
        }else{
          this._544f3d.current.checked = false;
        }
        this.currentActive = colorIntegerEquivalent;
        break;
      }
      case "544f3d":{ //544f3d = 309255529 // sum = 317315640110
        let colorIntegerEquivalent = 317315640110;
        this.animationDelayUp(colorIntegerEquivalent);
        this.currentActive = colorIntegerEquivalent;
        break;
      }
      default:{ //623a43 = 366309363
        let colorIntegerEquivalent = 366309363;
        this.animationDelayDown(colorIntegerEquivalent);
        this.currentActive = colorIntegerEquivalent;
        break;
      }
    }
  }

  animationDelayUp(colorIntegerEnd)
  {
    let colorIntSum = 366309363;
    let delay = 0;
    let index = 0;
    let color;
    let id;
    let intRepresentation;
    while(colorIntSum < colorIntegerEnd)
    {
      color = this.listUp[index];
      intRepresentation = parseInt(color, 36);
      colorIntSum += intRepresentation;
      if(colorIntSum > this.currentActive)
      {
        id = "_" + color;
        setTimeout(this.checkCheckbox, delay, this[id].current, true);
        delay += 300;
      }
      index++;
    }
    this.currentActive = colorIntegerEnd;
  }

  animationDelayDown(colorIntegerEnd)
  {
    let colorIntSum = 317315640110;
    let delay = 0;
    let index = 0;
    let color;
    let id;
    let intRepresentation;
    while(colorIntSum > colorIntegerEnd)
    {
      color = this.listDown[index];
      intRepresentation = parseInt(color, 36);
      colorIntSum -= intRepresentation;
      if(colorIntSum < this.currentActive)
      {
        id = "_" + color;
        setTimeout(this.checkCheckbox, delay, this[id].current, false);
        delay += 300;
      }
      index++;
    }
    this.currentActive = colorIntegerEnd;
  }

  checkCheckbox(checkbox, value)
  {
    checkbox.checked = value;
  }

  sendColor(intColorRep, color, colorBefore)
  {
    if(this.currentActive !== intColorRep)
    {
      this.currentActive = intColorRep;
      EventBus.dispatch("color", { message: color });
    }
    else
    {
      this.currentActive = intColorRep - parseInt(color, 36);
      EventBus.dispatch("color", { message: colorBefore });
    }
  }
  
  renderContent()
  {
    let page1 =  <Page1></Page1>;
    let page10 = <Page10></Page10>
    let page8 =  <Page8></Page8>;
    let page6 =  <Page6></Page6>;
    let page4 =  <Page4></Page4>;
    let page2 =  <Page2></Page2>;
    let pageSafari = <PageSafari></PageSafari>

    if(this.isSafari === false)
    {
      return(
        <div id="right" className={BookCss.container}>
          <div className={BookCss.cover} ref={this.bookCover} style={{width: this.state.widthRounded}}>
            <div className={BookCss.book}>
              {page1}
              {page10}
              <input type="checkbox" name="page" id="page8" ref={this._544f3d} onClick={(e) => this.sendColor(317315640110, '544f3d', '41332cff')}/>
              {page8}
              <input type="checkbox" name="page" id="page6" ref={this._41332cff} onClick={(e) => this.sendColor(317006384581, '41332cff', '36394c')}/>
              {page6}
              <input type="checkbox" name="page" id="page4" ref={this._36394c} onClick={(e) => this.sendColor(1186399066, '36394c', 'ae6457')}/>
              {page4}
              <input type="checkbox" name="page" id="page2" ref={this._ae6457} onClick={(e) => this.sendColor(994771054, 'ae6457', '623a43')}/>
              {page2}
            </div>
          </div>
          <div className={BookCss.spacing}>
          </div>
        </div>
      )
    }
    else
    {
      return(
        <div id="right" className={BookCss.container}>
          <div className={BookCss.cover} ref={this.bookCover} style={{width: this.state.widthRounded}}>
            <div className={BookCss.book}>
              {page1}
              {pageSafari}
            </div>
          </div>
          <div className={BookCss.spacing}>
          </div>
        </div>
        )
    }
  }

  render() {
    return (
      this.renderContent()
    );
  } 
}  
export default Book;