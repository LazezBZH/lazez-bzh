import password from "../../assets/password.gif";
import logo from "../../assets/logoReact.png";
import js from "../../assets/js.png";
import npm from "../../assets/npm.png";
import pwa from "../../assets/pwa.png";

import "./Password.css";

export default function Password() {
  return (
    <div className="password" id="password">
      <div className="password-infos">
        <h1>VARIATIONS sur un thème: générateur de mots de passe &#x1F511; </h1>
        <div className="password-projects">
          <div className="passwordP">
            <h2 id="h2small">
              Création d'un générateur de mot de passe en vanilla js
            </h2>
            <ul>
              <li>Génère un mot de passe selon les critères demandés.</li>
              <li>
                Si un type de caractère est sélectionné le mot généré contiendra
                au moins un caractère de ce type..
              </li>
              <li>
                Création d'une petite réglette estimant le niveau de sécurité du
                mot de passe généré.
              </li>
              <li>
                Messages d'erreurs si les champs ne sont pas correctement
                renseignés..
              </li>
              <li>
                Possibilité de copier dans le presse papier le mot de passe
                généré.
              </li>
              <li>Responsive</li>
              <li>Accessibilité: Contrast Ratio: 8.59:1</li>
            </ul>
          </div>
          <div className="passwordP">
            <h2 id="h2small">Rendre l'appli instalable sur mobile</h2>

            <ul>
              <li>
                PWA l'application peut être installée l'écran d'accueil d'un
                mobile.
              </li>
              <li>Utilisation d'un Service Worker.</li>
            </ul>
          </div>
          <div className="passwordP">
            <h2 id="h2small">Version React de l'appli.</h2>

            <ul>
              <li>
                Version sans réglette estimant le niveau de sécurité car le but
                est d'en faire un package npm léger.
              </li>
              <li>Message personnalisé pour le mot de passe généré.</li>

              <li>
                Toujours la possibilité de le copier d'un simple clic dans le
                presse-papier.
              </li>
            </ul>
          </div>
          <div className="passwordP">
            <h2 id="h2small">Publication du package npm.</h2>

            <ul>
              <li>Installable via yarn ou npm.</li>
              <li>CSS facilement personnalisable.</li>
            </ul>
          </div>
          <div className="passwordP passwordPImg">
            <img className="password-img" src={password} alt="" />
          </div>
        </div>
      </div>

      <div className="password-links">
        <div className="password-img2">
          <div>
            <img className="password-logo" src={js} alt="" />
          </div>
          <div>
            <img className="password-logo2" src={pwa} alt="" />
          </div>
          <div>
            <img className="password-logo" src={logo} alt="" />
          </div>
          <div>
            <img className="password-logo" src={npm} alt="" />
          </div>
        </div>
        <div className="tableR">
          <table>
            <caption className="table-title">En découvrir plus</caption>

            <thead>
              <tr>
                <th></th>
                <th>Déploiement</th>
                <th>GitHub</th>
                <th>NPM</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="appliR">Version js</td>
                <td className="deploy">
                  <a
                    href="https://lazezbzh.github.io/passwords/"
                    target="blank"
                  >
                    {" "}
                    &#x23F3;
                  </a>
                </td>
                <td className="git">
                  <a
                    href="https://github.com/LazezBZH/passwords"
                    target="blank"
                  >
                    &#x1F431;
                  </a>
                </td>
                <td className="ref"></td>
              </tr>
              <tr>
                <td className="appliR">React et NPM</td>
                <td className="deploy">
                  <a
                    href="https://password-generator-by-lazez.netlify.app/"
                    target="blank"
                  >
                    &#x23F3;
                  </a>
                </td>
                <td className="git">
                  <a
                    href="https://github.com/LazezBZH/passwords-component"
                    target="blank"
                  >
                    &#x1F431;
                  </a>
                </td>
                <td className="ref">
                  <a
                    href="https://www.npmjs.com/package/password-generator-by-lazez"
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
