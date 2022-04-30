import logo from "../../assets/logoReact.png";
import argentbank1 from "../../assets/argentbank1.png";
import argentbank2 from "../../assets/argentbank2.png";
import sportsee1 from "../../assets/sportsee1.jpg";
import sportsee2 from "../../assets/sportsee2.jpg";
import kasa1 from "../../assets/kasa1.jpg";
import kasa2 from "../../assets/kasa2.jpg";
import js from "../../assets/js.png";
import redux from "../../assets/redux.svg";
import recharts from "../../assets/recharts.png";

import "./ReactP.css";

export default function ReactP() {
  return (
    <div className="reacts" id="react">
      <div className="react-infos">
        <h1>Autres projets React</h1>
        <div className="react-projects">
          <div className="reactP">
            <h2 id="h2small">
              Projet 13 de la formation développeur front-end OpenClassrooms
            </h2>
            <h3>ArgentBank</h3>
            <h4>
              UTILISER UNE API POUR UN COMPTE UTILISATEUR BANCAIRE AVEC REACT.
            </h4>
            <p>
              Récupération des données externes et affichage de celles-ci dans
              l'application
            </p>
            <p>
              Après authentification les données peuvent être consultées et
              certaines sont modifiables.
            </p>
            <ul>
              <li>Redux</li>
              <li>Gestion de l'authentification</li>
              <li>Connexion</li>
              <li>Consultation</li>
              <li>Édition</li>
            </ul>
          </div>
          <div className="reactP">
            <h2 id="h2small">
              Projet 12 de la formation développeur front-end OpenClassrooms
            </h2>
            <h3>SportSee</h3>
            <h4>DASHBOARD POUR UNE APPLICATION DE COACHING SPORTIF.</h4>
            <p>
              Récupération des données utilisateurs et affichage de celles-ci
              dans des schémas de synthèse.
            </p>
            <p>Graphiques réalisés avec Recharts.</p>
            <ul>
              <li>React</li>
              <li>Recharts</li>
            </ul>
          </div>
          <div className="reactP">
            <h2 id="h2small">
              Projet 11 de la formation développeur front-end OpenClassrooms
            </h2>
            <h3>Kasa</h3>
            <h4>FRONT-END D'UN SITE DE LOCATIONS MEUBLÉES.</h4>
            <ul>
              <p>Première utilisation de React, découverte du framework</p>
              <li>Premiers pas avec React</li>
            </ul>
          </div>
          <div className="react-img1">
            <div>
              <img className="react-img" src={argentbank2} alt="" />
            </div>
            <div>
              <img className="react-img" src={sportsee1} alt="" />
            </div>
            <div>
              <img className="react-img" src={kasa2} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="react-links">
        <div className="react-img2">
          <div>
            <img className="react-logo" src={js} alt="" />
          </div>
          <div>
            <img className="react-logo" src={logo} alt="" />
          </div>
          <div>
            <img className="react-logo" src={redux} alt="" />
          </div>
          <div>
            <img className="react-logo" src={recharts} alt="" />
          </div>
        </div>
        <table>
          <caption className="table-title">En découvrir plus</caption>

          <thead>
            <tr>
              <th></th>
              <th>Déploiement</th>
              <th>GitHub</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="appliR">Argentbank</td>
              <td className="deploy"></td>
              <td className="git">
                <a
                  href="https://github.com/LazezBZH/BenedicteHERAULT_13_20102021"
                  target="blank"
                >
                  &#x1F535;
                </a>
              </td>
            </tr>
            <tr>
              <td className="appliR">Application SportSee</td>
              <td className="deploy">
                <a
                  href="https://sportsee-p12-dfe-oc-herault-benedicte.netlify.app/"
                  target="blank"
                >
                  &#x1F7E1;
                </a>
              </td>
              <td className="git">
                <a
                  href="https://github.com/LazezBZH/BenedicteHERAULT_12_27092021"
                  target="blank"
                >
                  &#x1F535;
                </a>
              </td>
            </tr>
            <tr>
              <td className="appliR">Application Kasa</td>
              <td className="deploy">
                <a
                  href="https://kasa-p11-dfe-oc-herault-benedicte.netlify.app/"
                  target="blank"
                >
                  &#x1F7E1;
                </a>
              </td>
              <td className="git">
                <a
                  href="https://github.com/LazezBZH/BenedicteHERAULT_11_12092021"
                  target="blank"
                >
                  &#x1F535;
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
