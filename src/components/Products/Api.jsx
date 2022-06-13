import api1 from "../../assets/api1.png";
import api2 from "../../assets/api2.png";
import api3 from "../../assets/api3.png";

import "./Api.css";

export default function Api() {
  return (
    <div className="apis" id="api">
      <div className="api-infos">
        <h1>API - aller un peu plus loin &#x1F3C4;&#x200D;&#x2642;&#xFE0F;</h1>
        <div className="api-projects">
          <div className="apiP">
            <h2 id="h2small">Création d'une API</h2>
            <h3>Phrases cultes</h3>
            <h4>
              INSPIRÉE DU MODÈLE DE L'API DE CITATIONS GEEK UTILISÉE EN ENTÊTE
              DE CE PORTFOLIO.
            </h4>
            <ul>
              <li>
                Création d'un fichier de citations "cultes" de films
                francophones.
              </li>
              <li>
                Choix des end-points et fonctionnalités proposées (quelques
                modifications par rapport au projet dont je me suis inspirée).
              </li>
              <li>
                Déployement sur Heruko via heruko CLI (au moment de la
                réalisation heruko avait des problèmes de déployement via
                GitHub).
              </li>
            </ul>
          </div>
          <div className="apiP">
            <h2 id="h2small">
              Intégration de l'API restcountries dans une appli.
            </h2>
            <h3>Countries of the world</h3>
            <h4>INSPIRÉ D'UN PROJET FRONT-END-MENTOR.</h4>

            <ul>
              <li>
                Récupération des données de l'APi et affichage de celles-ci.
              </li>
              <li>Choix du thème dark ou light.</li>
              <li>Filtre par région du monde.</li>
              <li>Fonction de recherche sur le nom d'un pays.</li>
              <li>Affichage des détails d'un pays.</li>
              <li>
                Navigation d'une fiche pays à une autre via les tags des pays
                frontaliers.
              </li>
            </ul>
          </div>

          <div className="api-img1">
            <div className="api-img-landscape">
              <img className="api-img" src={api1} alt="" />
            </div>
            <div className="api-img-portrait">
              <img className="api-img" src={api2} alt="" />
            </div>
            <div className="api-img-landscape">
              <img className="api-img" src={api3} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="api-links">
        <div className="tableR">
          <table>
            <caption className="table-title">En découvrir plus</caption>

            <thead>
              <tr>
                <th></th>
                <th>Déploiement</th>
                <th>GitHub</th>
                <th>Référence</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="appliR">Phrases cultes</td>
                <td className="deploy">
                  <a
                    href="https://phrases-cultes.herokuapp.com/"
                    target="blank"
                  >
                    &#x23F3;
                  </a>
                </td>
                <td className="git">
                  <a
                    href="https://github.com/LazezBZH/phrases-cultes"
                    target="blank"
                  >
                    &#x1F431;
                  </a>
                </td>
                <td className="ref">
                  <a
                    href="https://github.com/FotieMConstant/geek-quote-api"
                    target="blank"
                  >
                    &#x1F449;
                  </a>
                </td>
              </tr>
              <tr>
                <td className="appliR">Countries of the world</td>
                <td className="deploy">
                  <a
                    href="https://rest-countries-api-lazez.netlify.app/"
                    target="blank"
                  >
                    &#x23F3;
                  </a>
                </td>
                <td className="git">
                  <a
                    href="https://github.com/LazezBZH/rest-countries-api"
                    target="blank"
                  >
                    &#x1F431;
                  </a>
                </td>
                <td className="ref">
                  <a
                    href="https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca"
                    target="blank"
                  >
                    &#x1F449;
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
