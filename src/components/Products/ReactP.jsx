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

import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";

import "swiper/swiper.min.css"; // core Swiper
import "swiper/modules/navigation/navigation.min.css"; // Navigation module
import "swiper/modules/pagination/pagination.min.css"; // Pagination module

//import "./styles.css";

// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper";

export default function ReactP() {
  return (
    <div className="reacts" id="react">
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
        className="mySwiperR"
      >
        <SwiperSlide>
          <div className="swipeTitleReact">
            <h1>Autres projets React</h1>
            <div className="allReacts">
              <div className="allReact">
                <h2 id="h2small">
                  Projet 13 de la formation développeur front-end OpenClassrooms
                </h2>
                <h3>ArgentBank</h3>
                <ul>
                  <li>Redux</li>
                  <li>Gestion de l'authentification</li>
                  <li>Connexion</li>
                  <li>Consultation</li>
                  <li>Édition</li>
                </ul>
              </div>
              <div className="allReact">
                <h2 id="h2small">
                  Projet 12 de la formation développeur front-end OpenClassrooms
                </h2>
                <h3>SportSee</h3>
                <ul>
                  <li>React</li>
                  <li>Recharts</li>
                </ul>
              </div>
              <div className="allReact">
                <h2 id="h2small">
                  Projet 11 de la formation développeur front-end OpenClassrooms
                </h2>
                <h3>Kasa</h3>
                <ul>
                  <li>Premiers pas avec React</li>
                </ul>
              </div>
              <div className="allReact">
                <h4>Détails diapos suivantes</h4>
              </div>
            </div>

            <img className="imgSlide1R" src={logo} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="reactsP">
            <div className="reactsP13">
              <h2>ArgentBank</h2>
              <h4>
                UTILISER UNE API POUR UN COMPTE UTILISATEUR BANCAIRE AVEC REACT.
              </h4>
            </div>
            <div className="reactsP13">
              <p>
                Récupération des données externes et affichage de celles-ci dans
                l'application
              </p>
              <p>
                Après authentification les données peuvent être consultées et
                certaines sont modifiables.
              </p>
            </div>
            <div className="imgP13">
              <img className="reactP13Img" src={argentbank1} alt="" />
              <img className="reactP13Img" src={argentbank2} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="reactsP">
            <div className="reactsP13">
              <h2>SportSee</h2>
              <h4>DASHBOARD POUR UNE APPLICATION DE COACHING SPORTIF.</h4>
            </div>
            <div className="reactsP13">
              <p>
                Récupération des données utilisateurs et affichage de celles-ci
                dans des schémas de synthèse.
              </p>
              <p>Graphiques réalisés avec Recharts.</p>
            </div>
            <div className="imgP13">
              <img className="reactP13Img" src={sportsee1} alt="" />
              <img className="reactP13Img" src={sportsee2} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="reactsP">
            <div className="reactsP13">
              <h2>Kasa</h2>
              <h4>FRONT-END D'UN SITE DE LOCATIONS MEUBLÉES.</h4>
            </div>
            <div className="reactsP13">
              <p>Première utilisation de React, découverte du framework</p>
            </div>
            <div className="imgP13k">
              <img className="reactP13Img" src={kasa1} alt="" />
              <img className="reactP13Img" src={kasa2} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" reactsP">
            <div className="imgP12k">
              <img className="reactP12Img" src={js} alt="" />
              <img className="reactP12Img" src={logo} alt="" />
              <img className="reactP12Img" src={redux} alt="" />
              <img className="reactP12Img" src={recharts} alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="reactlinks">
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
                  Code ArgentBank
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
                  Lien déploiement SportSee
                </a>
              </td>
              <td className="git">
                <a
                  href="https://github.com/LazezBZH/BenedicteHERAULT_12_27092021"
                  target="blank"
                >
                  Code SportSee
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
                  Lien déploiement Kasa
                </a>
              </td>
              <td className="git">
                <a
                  href="https://github.com/LazezBZH/BenedicteHERAULT_11_12092021"
                  target="blank"
                >
                  Code Kasa
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
