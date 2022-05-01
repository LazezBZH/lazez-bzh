import marie1 from "../../assets/marie1.jpg";
import marie2 from "../../assets/marie2.jpg";
import marie3 from "../../assets/marie3.png";
import marie4 from "../../assets/marie4.png";
import marie5 from "../../assets/marie5.png";
import marie6 from "../../assets/marie6.png";
import marie7 from "../../assets/marie7.png";
import marie8 from "../../assets/marie8.png";
import marie9 from "../../assets/marie9.png";
import marie10 from "../../assets/marie10.jpg";
import marie11 from "../../assets/marie11.jpg";
import html from "../../assets/html.png";
import js from "../../assets/js.png";
import react from "../../assets/react.png";

import "./Marie.css";

export default function Marie() {
  return (
    <div className="marie" id="marie">
      <div className="marie-infos">
        <h1>Site vitrine pour une sophrologue</h1>
        <h2 id="h2small">SITE VITRINE BILINGUE.</h2>
        <div className="marie-projects">
          <div className="marieP">
            <h3>Version 1 (en ligne)</h3>

            <ul>
              <li>
                Elle m'a laisser libre dans les choix du design et a de suite
                validé
              </li>
              <li>Site réalisé lorsque je débutais le code</li>
              <li>HTML/CSS</li>
            </ul>
          </div>
          <div className="marieP">
            <h3>Version 2 (en cours de développement)</h3>
            <ul>
              <li>React</li>
              <li>Styles components</li>
              <li>Utilsation de react.i18next.js pour gérer la localisation</li>
            </ul>
          </div>
          <div className="marieP">
            <h3>Évolution à plus ou moins long terme</h3>
            <ul>
              <li>Mise en place d'un blog</li>
              <li>Probablement ajout de nouvelles sections</li>
            </ul>
          </div>
          <div className="marie-img1">
            <div className="marie-img">
              <img className="marie-img-11" src={marie2} alt="" />
            </div>
            <div className="marie-img">
              <img className=" marie-img-22" src={marie10} alt="" />
            </div>
            <div className="marie-img">
              <img className=" marie-img-33" src={marie11} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="marie-links">
        <div className="marie-img2">
          <div>
            <img className="marie-logo" src={html} alt="" />
          </div>
          <div>
            <img className="marie-logo" src={js} alt="" />
          </div>
          <div>
            <img className="marie-logo" src={react} alt="" />
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
              <td className="appliM">Site en HTML</td>
              <td className="deploy">
                <a href="https://www.marieaballea.fr/" target="blank">
                  &#x1F7E1;
                </a>
              </td>
              <td className="git">
                <a href="https://github.com/LazezBZH/Site-Marie" target="blank">
                  &#x1F535;
                </a>
              </td>
            </tr>
            <tr>
              <td className="appliM">Site avec React</td>
              <td className="deploy">
                <a href="https://site-marie-v2.netlify.app/" target="blank">
                  &#x1F7E1;
                </a>
              </td>
              <td className="git">
                <a
                  href="https://github.com/LazezBZH/Site-Marie-V2"
                  target="blank"
                >
                  &#x1F535;
                </a>
              </td>
            </tr>
            <tr>
              <td className="appliM">Découvir react.i18next.js</td>

              <td className="git" colSpan={2}>
                <a href="https://react.i18next.com/" target="blank">
                  Pour un site bilingue (ou plus)
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
