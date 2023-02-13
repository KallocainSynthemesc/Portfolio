import React from "react"
import BookCss from "../css/book.module.css"
import Page4Css from "../css/page4.module.css"

class Page4 extends React.Component{

  render() {
    return (
        <label htmlFor="page4" className={BookCss.page  + ' ' + Page4Css.page__4}>
          <div className={Page4Css.page_front}>
            <div className={BookCss.content}>
              <h1 className={BookCss.title}>À propos de moi</h1>
              <div className={BookCss.blockquote}>
                <p className={BookCss.blockquote_text}>Je suis née le 9 novembre 1994 à Munich et j'ai grandi dans un petit village voisin. Après mon parcours scolaire, j'ai travaillé comme menuisier pendant 4 ans. Ensuite, j'ai décidé de commencer une formation en alternance en tant que développeur dans l'entreprise OpenText à Munich. Au cours de mon séjour à OpenText, j'ai principalement travaillé dans le secteur Enterprise Content Management et Document management system. Que je travaille avec des composants, des réseaux ou de la programmation, l'informatique est ma passion.</p>
                <p className={BookCss.blockquote_text}><b>Langages de programmation:</b> Java, Javascript, HTML, CSS, SQL, OScript, XML, Powershell, Perl, C#, PHP, Python</p>
                <p className={BookCss.blockquote_text}><b>Frameworks:</b>JUnit, Spring Boot, Spring Security, Backbone.js, JQuery, React.js, Vue.js, Apache Camel, Hibernate</p>
                <p className={BookCss.blockquote_text}><b>Build Tools:</b> Apache Ant, Wix Toolset, Grunt, Apache Maven</p>
                <p className={BookCss.blockquote_text}><b>Logiciels:</b> Eclipse, Netbeans, Webstorm, JIRA, Perforce, Apache Tomcat, ISS, Postman, Wireshark, Glassfish, SVN</p>
              </div>
              <div className={BookCss.page__number}>3</div>
            </div>
          </div>
          <div className={Page4Css.page_back}>
            <div className={BookCss.content}>
              <h1 className={BookCss.title}>Expériences professionnelles</h1>

              <p className={BookCss.blockquote_text}><span className={BookCss.bold}>ANALYSTE-CONCEPTEUR: </span>
                C2LR Solutions Informatiques SAS, Cazouls-lès-Béziers: 
                Formateur, Développement de logiciels, Administration systèmes et réseaux
                <br></br>
                <span className={BookCss.bold}> - Août 2022</span>
              </p>

              <p className={BookCss.blockquote_text}><span className={BookCss.bold}>STAGE EN ENTREPRISE: </span>
                AV INVIVO SAS, Strasbourg, 
                Développement &nbsp;
                d'un serveur SIP et un serveur d'autorisation spring security
                <br></br>
                <span className={BookCss.bold}> - Fév. 2022 à Juin 2022</span>
              </p>

              <p className={BookCss.blockquote_text}><span className={BookCss.bold}>JUNIOR SOFTWARE DEV: </span>
                OpenText, Munich (Allemagne)
                Développement sur &nbsp;
                <a href="https://www.opentext.com/products-and-solutions/products/opentext-suite-for-sap/opentext-extended-ecm-for-sap-solutions">Extended ECM for SAP Solutions</a>&nbsp;et&nbsp;
                <a href="https://www.opentext.com/products-and-solutions/products/enterprise-content-management/content-management">Content Server</a>
                <br></br>
                <span className={BookCss.bold}> - 2018 à 2020</span>
              </p>    
              <p className={BookCss.blockquote_text}><span className={BookCss.bold}>APPRENTISSAGE SOFTWARE DEV: </span>
                OpenText, Munich (Allemagne)
                Développement sur &nbsp;
                <a href="https://www.opentext.com/products-and-solutions/products/opentext-suite-for-sap/opentext-digital-asset-management-for-sap-solutions">DAMLink</a>&nbsp;et&nbsp;
                <a href="https://www.opentext.com/products-and-solutions/products/enterprise-content-management/archiving/opentext-archive-center">Archive Center et Document Pipeline</a>
                <br></br>
                <span className={BookCss.bold}> - 2015 à 2018</span>
              </p>
              <div className={BookCss.page__number}>4</div>
            </div>
          </div>
        </label>
    );
  } 
}  
export default Page4;