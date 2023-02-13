import React from "react"
import BookCss from "../css/book.module.css"
import Page2Css from "../css/page2.module.css"
class Page2 extends React.Component{

  render() {
    return (
      <label htmlFor="page2" className={BookCss.page + ' ' + Page2Css.page__2}>
        <div className={Page2Css.page_front}>
          <div className={BookCss.content}>
            <h1 className={Page2Css.book_title}>Kilian Schropp</h1>
            <h2 className={Page2Css.author}>Développeur d’application</h2>
            <p className={Page2Css.credits}>
              Développé par 
              <span>Kilian Schropp</span>
            </p>
            <p className={Page2Css.credits}>
              Scalable Vector Graphics créés par 
              <span>Kilian Schropp</span>
            </p>
            <p className={Page2Css.credits}>
              	Réalisé avec 
              <span>React.js</span>
            </p>
            <div className={Page2Css.copyright}>
              <p>Occitanie</p>
            </div>
          </div>
        </div>
        <div className={Page2Css.page_back}>
          <div className={BookCss.content}>
            <h1 className={BookCss.title}>Contents</h1>
            <table className={Page2Css.table}>
              <tbody><tr>
                  <td align="left">Part I</td>
                  <td align="left">À propos de moi</td>
                  <td align="right">3</td>
                </tr>
                <tr>
                  <td align="left">Part II</td>
                  <td align="left">Expériences professionnelles</td>
                  <td align="right">4</td>
                </tr>
                <tr>
                  <td align="left">Part III</td>
                  <td align="left">Études/Privé</td>
                  <td align="right">5</td>
                </tr>
                <tr>
                  <td align="left">Part IV</td>
                  <td align="left">Plans d'avenir</td>
                  <td align="right">6</td>
                </tr>
                <tr>
                  <td align="left">Part Ⅴ</td>
                  <td align="left">Contact</td>
                  <td align="right">8</td>
                </tr>
              </tbody></table>
            <div className={BookCss.page__number}>2</div>
          </div>
        </div>
      </label>
    );
  } 
}  
export default Page2;