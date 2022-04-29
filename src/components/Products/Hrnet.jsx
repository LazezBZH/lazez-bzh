import hrnet from "../../assets/hrnet3.gif";
import hrnet1 from "../../assets/hrnet1.png";

import "./Hrnet.css";

export default function Hrnet() {
  return (
    <div className="hrnet" id="hrnet">
      <div className="hrnet-infos">
        <h1>HRnet</h1>
        <h2>Projet 14 de la formation développeur front-end OpenClassrooms</h2>
        <h3>Objectifs</h3>
        <ul>
          <li>
            FAIRE PASSER UNE LIBRAIRIE JQUERY VERS REACT. <br />
            &#x27A1; Réduire la dette technologique en adaptant un code ancien à
            un outil plus moderne
          </li>

          <li>
            UN FORMULAIRE
            <br />
            &#x27A1; pour inscrire un employé
          </li>
          <li>
            UN TABLEAU AVEC FONTCION DE TRI ET FILTRE
            <br />
            &#x27A1; pour visualiser les employés
          </li>
          <li>
            CRÉER ET PUBLIER UN COMPOSANT NPM.
            <br />
            &#x27A1; Composant créé et publié donc réutilisable par tous
          </li>
        </ul>
        <h3>Défi perso pour aller plus loin</h3>
        <ul>
          <li>Apprentissage de VueJs</li>
          <li>Nouvelle version de l'appli avec Vue</li>
          <li>Ajout de certaines fonctionnalités à la version initiale</li>
        </ul>
        <img className="hrnet-logo" src={hrnet} alt="" />
      </div>
      <div className="hrnet-links">
        <div className="hrnet-img2">
          <img className="hrnet-logo" src={hrnet1} alt="" />
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
              <td className="appli">Ancienne version OpenClassRooms</td>
              <td className="deploy">
                <a
                  href="https://oldversion-hrnet-b-herault.netlify.app/index.html"
                  target="blank"
                >
                  &#x1F7E1;
                </a>
              </td>
              <td className="git">
                <a
                  href="https://github.com/OpenClassrooms-Student-Center/P12_Front-end"
                  target="blank"
                >
                  &#x1F535;
                </a>
              </td>
            </tr>
            <tr>
              <td className="appli">Application HRnet version React</td>
              <td className="deploy">
                <a
                  href="https://hrnet-p14-dfe-oc-herault-benedicte.netlify.app/"
                  target="blank"
                >
                  &#x1F7E1;
                </a>
              </td>
              <td className="git">
                <a
                  href="https://github.com/LazezBZH/BenedicteHERAULT_14_23112021"
                  target="blank"
                >
                  &#x1F535;
                </a>
              </td>
            </tr>
            <tr>
              <td className="appli">Application HRnet version vue</td>
              <td className="deploy">
                <a href="https://p14-vue-version.netlify.app/" target="blank">
                  &#x1F7E1;
                </a>
              </td>
              <td className="git">
                <a href="https://github.com/LazezBZH/p14-vue" target="blank">
                  &#x1F535;
                </a>
              </td>
            </tr>
            <tr>
              <td className="appli">Composant npm</td>
              <td className="deploy">
                <a href="https://www.npmjs.com/package/customizable-react-modal-by-lazez">
                  &#x1F7E1;
                </a>
              </td>
              <td className="git">
                <a
                  href="https://github.com/LazezBZH/customizable-react-modal-lazez"
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
