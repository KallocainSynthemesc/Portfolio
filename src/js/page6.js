import React from "react"
import BookCss from "../css/book.module.css"
import Page6Css from "../css/page6.module.css"

class Page6 extends React.Component{

  render() {
    return (
        <label htmlFor="page6" className={BookCss.page  + ' ' + Page6Css.page__6}>
          <div className={Page6Css.page_front}>
            <div className={BookCss.content}>
              <h1 className={BookCss.title}>Études</h1>

              <p className={BookCss.blockquote_text}><span className={BookCss.bold}><a href="https://formation.bgeso.fr/produit/developpeur-web-et-web-mobile">FORMATION DÉVELOPPEUR WEB ET WEB MOBILE:</a>&nbsp;</span>
                Études et développement informatique, Moissac
                <br></br>
              <span className={BookCss.bold}> - depuis le juin 2021 à juin 2022</span>
              </p>
              <p className={BookCss.blockquote_text}><span className={BookCss.bold}><a href="https://www.langueonze.com/IMG/pdf/descriptif_cours_intensif_plus_-_a1-c1_fr.pdf">LANGUE ONZE TOULOUSE:</a>&nbsp;</span>
                Cours de français à Toulouse. Niveau obtenu: B2
                <br></br>
              <span className={BookCss.bold}> - Sept. 2020 à dec. 2020</span>
              </p>
              <p className={BookCss.blockquote_text}><span className={BookCss.bold}><a href="https://www.ihk-muenchen.de/ihk/documents/Berufliche-Bildung/Ausbildungsberatung/Fachinformatiker-VO-2020-2.pdf">ÉCOLE PROFESSIONNELLE DES TECHNOLOGIES DE L’INFORMATION:</a>&nbsp;</span>
                Formation de spécialiste en Developpement d’application, Munich (Allemagne) - CEC niveau 4 Alternance
                <br></br>
              <span className={BookCss.bold}> - Sept. 2015 à Fév. 2018</span>
              </p>
              <div className={BookCss.page__number}>5</div>
            </div>
          </div>
          <div className={Page6Css.page_back}>
          <h1 className={BookCss.title}>Plans d'avenir</h1>
              <div className={BookCss.blockquote}>
                <p className={BookCss.blockquote_text}>Étant relativement nouveau dans le secteur de la programmation, je suis ouvert à de nouvelles idées et mes projets d'avenir sont flexibles et peuvent changer en conséquence. Cependant, certains de mes objectifs pour l'avenir seraient de continuer à développer mes compétences en programmation concurrente avec l'aide d'une équipe compétente et expérimentée. En outre, j'aimerais travailler dans l'un des domaines suivants :</p>
                <p className={BookCss.blockquote_text}>Système de gestion des documents <br></br>
                  L'IdO dans les systèmes de transport intelligents <br></br>
                  Over-the-Top (OTT) <br></br>
                  Logiciel de simulation <br></br>
                  Industrie de la sécurité informatique <br></br>
                  Intelligence artificielle <br></br></p>
                <p className={BookCss.blockquote_text}>Je veux relever de nouveaux défis afin d'accroître mes compétences et d'être capable d'envisager les problèmes sous plusieurs angles.</p>
              </div>
              <div className={BookCss.page__number}>6</div>
          </div>
        </label>
    );
  } 
}  
export default Page6;