import React from "react"
import BookCss from "../css/book.module.css"
import Page4Css from "../css/page4.module.css"

class Page4 extends React.Component{

  render() {
    return (
        <label htmlFor="page4" className={BookCss.page  + ' ' + Page4Css.page__4}>
          <div className={Page4Css.page_front}>
            <div className={BookCss.content}>
              <h1 className={BookCss.title}>Le navigateur Safari n'est pas pris en charge.</h1>
              <div className={BookCss.blockquote}>
                <p className={BookCss.blockquote_text}>Je suis désolé de vous informer que la principale fonctionnalité de ce site ne sera disponible que pour les navigateurs non basés sur WebKit (Safari) pour le moment.</p>
                <p className={BookCss.blockquote_text}>Comme il s'agit d'un projet privé, je n'ai pas les moyens d'investir dans un produit Apple ou une émulation de produit Apple, donc je ne peux pas adapter mon site pour un navigateur basé sur WebKit</p>
                <p className={BookCss.blockquote_text}>Merci de votre compréhension</p>
              </div>
            </div>
          </div>
        </label>
    );
  } 
}  
export default Page4;