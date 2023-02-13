import React from "react"
import BookCss from "../css/book.module.css"
import PageImg from "../svg/me.svg"
class Page1 extends React.Component{

  render() {
    return (
        <label className={BookCss.page +  ' ' + BookCss.page__1}>
          <img src={PageImg} alt="" />
        </label>
    );
  } 
}  
export default Page1;