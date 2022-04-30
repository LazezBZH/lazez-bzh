import learn3 from "../../assets/learn3.png";
import learn4 from "../../assets/learn4.png";
import learn5 from "../../assets/learn5.png";
import learn6 from "../../assets/learn6.png";
import learn7 from "../../assets/learn7.png";
import learn8 from "../../assets/learn8.png";
import learn9 from "../../assets/learn9.png";

import "./Learn.css";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";

import "swiper/swiper.min.css"; // core Swiper
import "swiper/modules/navigation/navigation.min.css"; // Navigation module
import "swiper/modules/pagination/pagination.min.css"; // Pagination module

import { EffectFlip, Pagination, Navigation } from "swiper";

export default function Learn() {
  return (
    <div className="learns" id="learn">
      <Swiper
        effect={"flip"}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiperL"
      >
        <SwiperSlide>
          <div className="swipeTitleLearn">
            <h1>
              Initiation à la gestion de projet de développement en mode Agile
            </h1>
            <div className="allLearn">
              <div className="Learn">
                <h2>
                  Projet 10 de la formation développeur front-end OpenClassrooms
                </h2>
                <h3>Learn@Home</h3>
                <ul>
                  <li>Maquettes</li>
                  <li>Use cases</li>
                  <li>User stories</li>
                  <li>Kanban</li>
                </ul>
              </div>
              <div className="Learn">
                <h3>Objectifs</h3>
                <h4>DÉFINIR LES BESOINS POUR UNE APP DE SOUTIEN SCOLAIRE.</h4>
                <p>
                  Maquettage, gestion de projet, pas de code pour ce projet: on
                  prépare le travail de la team dev
                </p>
              </div>
              <div className="Learn">
                <h2>Choix des outils:</h2>

                <ul>
                  <li>Maquette &#x27A1; Figma</li>
                  <li>Use cases &#x27A1; Online-visual-paradigm.com</li>
                  <li>User stories &#x27A1; Classeur LibreOffice (excell)</li>
                  <li>Kanban &#x27A1; Notion</li>
                </ul>
              </div>
            </div>

            <img className="imgSlide1Learn" src={learn3} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="learnP">
            <div className="learnsP">
              <h2>Maquettes</h2>
              <h4>
                Réalisée avec Figma, choix de la palette en fonction de la
                couleur du logo fourni
              </h4>
            </div>

            <div className="imgP13">
              <img className="reactP13Img" src={learn4} alt="" />
              <img className="reactP13Img" src={learn5} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="learnP">
            <div className="learnsP">
              <h2>Use Cases</h2>
              <h4>Réalisés sur online-visual-pagadigm</h4>
            </div>

            <div className="learn6">
              <img className="imglearn6" src={learn6} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="learnP">
            <div className="learnsP">
              <h2>User Stories</h2>
              <h4>Classeur LibreOffice</h4>
            </div>

            <div className="learn6 imglearn7">
              <img src={learn7} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="learnP">
            <div className="learnsP">
              <h2>Kanban</h2>
              <h4>Réalisé sur Notion</h4>
            </div>

            <div className="imgP13 imglearn8">
              <img src={learn8} alt="" />
              <img src={learn9} alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="learnlinks">
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
              <td className="appliR">Learn@Home</td>
              <td className="deploy"></td>
              <td className="git">
                <a
                  href="https://github.com/LazezBZH/BenedicteHERAULT_10_23082021"
                  target="blank"
                >
                  Lien GitHub du projet
                </a>
              </td>
            </tr>
            <tr>
              <td className="appliR">Maquettes</td>
              <td className="deploy">
                <a
                  href="https://www.figma.com/file/P2Po8U8NnJrfz8gAMVeVwv/Learn%40Home?node-id=0%3A1"
                  target="blank"
                >
                  Lien Figma
                </a>
              </td>
              <td className="git"></td>
            </tr>
            <tr>
              <td className="appliR">Use Cases</td>
              <td className="deploy"></td>
              <td className="git">
                <a
                  href="https://github.com/LazezBZH/BenedicteHERAULT_10_23082021/blob/main/Use%20cases%20Learn%40Home/_synth%C3%A8se_%20Use%20cases%20Learn%40Home.pdf"
                  target="blank"
                >
                  Lien GitHub
                </a>
              </td>
            </tr>
            <tr>
              <td className="appliR">User Stories</td>
              <td className="deploy"></td>
              <td className="git">
                <a
                  href="https://github.com/LazezBZH/BenedicteHERAULT_10_23082021/blob/main/User%20stories%20Learn%40Home/_synth%C3%A8se_%20User%20stories%20Learn%40Home.pdf"
                  target="blank"
                >
                  Lien GitHub
                </a>
              </td>
            </tr>
            <tr>
              <td className="appliR">Kaban</td>
              <td className="deploy">
                <a
                  href="https://www.notion.so/05c416acbd0c4eec8037810666114fdd?v=aa1768dc2de147788fe71b30e13d71a4"
                  target="blank"
                >
                  Lien Notion
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
