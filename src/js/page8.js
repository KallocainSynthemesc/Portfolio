import React from "react"
import emailjs from 'emailjs-com';
import BookCss from "../css/book.module.css"
import Page8Css from "../css/page8.module.css"
import PageImg from "../img/1463851182773.jpg"

class Page8 extends React.Component{

  sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('xxx', 'xxx', e.target, 'xxx')
      .then((result) => {
          window.confirm("E-Mail a été envoyé avec succès !");
          console.log(result.text);
      }, (error) => {
          window.confirm("Un problème est survenu lors de l'envoi du E-Mail :(");
          console.log(error.text);
      });
  }

  render() {
    return (
        <label htmlFor="page8" className={BookCss.page  + ' ' + Page8Css.page__8}>
          <div className={Page8Css.page_front}>
            <div className={BookCss.content}>
              <img src={PageImg} alt="" />
              <div className={BookCss.page__number}>7</div>
            </div>
          </div>
          <div className={Page8Css.page_back}>
            <div className={BookCss.content}>
              <h1 className={BookCss.title}>Contact</h1>
              <form className={Page8Css.contact} onSubmit={this.sendEmail}>
                <input type="hidden" name="contact_number" />
                <label>Nom</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Object</label>
                <textarea name="message" />
                <input type="submit" value="Envoyer" />
              </form>
              <div className={BookCss.page__number}>8</div>
            </div>
          </div>
        </label>
    );
  } 
}  
export default Page8;