import React from "react"
import BookCss from "../css/book.module.css"
import Page10Css from "../css/page10.module.css"
import PageImg from "../svg/old-phone.svg"

class Page10 extends React.Component{

  render() {
    return (
        <label htmlFor="page10" className={BookCss.page  + ' ' + Page10Css.page__10}>
          <img src={PageImg} alt="" />
        </label>
    );
  } 
}  
export default Page10;