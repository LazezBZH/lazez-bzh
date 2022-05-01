import learn3 from "../../assets/learn3.png";
import learn4 from "../../assets/learn4.png";
import learn6 from "../../assets/learn6.png";
import learn8 from "../../assets/learn8.png";
import agile from "../../assets/agile.png";
import figma from "../../assets/figma.png";
import notion from "../../assets/notion.png";

import "./Learn.css";

export default function Learn() {
  return (
    <div className="learn" id="learn">
      <div className="learn-infos">
        <h1>Gestion de projet en mode Agile</h1>
        <div className="learn-projects">
          <div className="learnP">
            <h2 id="h2small">
              Projet 10 de la formation développeur front-end OpenClassrooms
            </h2>
            <h3>Learn@Home</h3>
            <h4>DÉFINIR LES BESOINS POUR UNE APP DE SOUTIEN SCOLAIRE.</h4>
            <p>
              Maquettage, gestion de projet, pas de code pour ce projet: on
              prépare le travail de la team dev
            </p>

            <ul>
              <li>Maquettes</li>
              <li>Use cases</li>
              <li>User stories</li>
              <li>Kanban</li>
            </ul>
            <div>
              <img className="learn-logo1" src={learn3} alt="" />
            </div>
            <h3>Choix des outils:</h3>

            <ul>
              <li>Maquette &#x27A1; Figma</li>
              <li>Use cases &#x27A1; Online-visual-paradigm.com</li>
              <li>User stories &#x27A1; Classeur LibreOffice (excell)</li>
              <li>Kanban &#x27A1; Notion</li>
            </ul>
          </div>

          <div className="learn-img1">
            <div>
              <img className="learn-img" src={learn4} alt="" />
            </div>
            <div>
              <img className="learn-img" src={learn6} alt="" />
            </div>
            <div>
              <img className="learn-img" src={learn8} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="learn-links">
        <div className="learn-img2">
          <div>
            <img className="learn-logo" src={learn3} alt="" />
          </div>
          <div>
            <img className="learn-logo" src={agile} alt="" />
          </div>
          <div>
            <img className="learn-logo" src={figma} alt="" />
          </div>
          <div>
            <img className="learn-logo" src={notion} alt="" />
          </div>
        </div>
        <table>
          <caption className="table-title">En découvrir plus</caption>

          <thead>
            <tr>
              <th></th>
              <th>Fichier</th>
              <th>GitHub</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="appliL">Learn@Home</td>
              <td className="deploy"></td>
              <td className="git">
                <a
                  href="https://github.com/LazezBZH/BenedicteHERAULT_10_23082021"
                  target="blank"
                >
                  &#x1F535;
                </a>
              </td>
            </tr>
            <tr>
              <td className="appliL">Maquettes</td>
              <td className="deploy">
                <a
                  href="https://www.figma.com/file/P2Po8U8NnJrfz8gAMVeVwv/Learn%40Home?node-id=0%3A1"
                  target="blank"
                >
                  &#x1F7E1;
                </a>
              </td>
              <td className="git"></td>
            </tr>
            <tr>
              <td className="appliL">Use Cases</td>
              <td className="deploy"></td>
              <td className="git">
                <a
                  href="https://github.com/LazezBZH/BenedicteHERAULT_10_23082021/blob/main/Use%20cases%20Learn%40Home/_synth%C3%A8se_%20Use%20cases%20Learn%40Home.pdf"
                  target="blank"
                >
                  &#x1F535;
                </a>
              </td>
            </tr>
            <tr>
              <td className="appliL">User Stories</td>
              <td className="deploy"></td>
              <td className="git">
                <a
                  href="https://github.com/LazezBZH/BenedicteHERAULT_10_23082021/blob/main/User%20stories%20Learn%40Home/_synth%C3%A8se_%20User%20stories%20Learn%40Home.pdf"
                  target="blank"
                >
                  &#x1F535;
                </a>
              </td>
            </tr>
            <tr>
              <td className="appliL">Kaban</td>
              <td className="deploy">
                <a
                  href="https://www.notion.so/05c416acbd0c4eec8037810666114fdd?v=aa1768dc2de147788fe71b30e13d71a4"
                  target="blank"
                >
                  &#x1F7E1;
                </a>
              </td>
              <td className="git"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
