import hrnet from "../../assets/hrnet3.gif";
import hrnetold1 from "../../assets/hrnet4.png";
import hrnetold2 from "../../assets/hrnet5.png";
import hrnetreact1 from "../../assets/hrnet1.png";
import hrnetreact2 from "../../assets/hrnet2.png";
import hrnetvue from "../../assets/hrnet6.png";

import "./Hrnet.css";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";

import "swiper/swiper.min.css"; // core Swiper
import "swiper/modules/navigation/navigation.min.css"; // Navigation module
import "swiper/modules/pagination/pagination.min.css"; // Pagination module

//import "./styles.css";

// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper";

export default function Hrnet() {
  return (
    <div className="hrnet" id="hrnet">
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
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swipeTitle">
            <h1>HRnet</h1>
            <h2>
              Projet 14 de la formation développeur front-end OpenClassrooms
            </h2>
            <h3>Objectifs</h3>
            <ul>
              <li>
                FAIRE PASSER UNE LIBRAIRIE JQUERY VERS REACT. <br />
                &#x27A1; Réduire la dette technologique en adaptant un code
                ancien à un outil plus moderne
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
            <img className="imgSlide1" src={hrnet} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hrnetold">
            <img className="" src={hrnetold1} alt="" />
            <div>
              <h2>Version jquery (fournie par OpenClassrooms)</h2>
              <img className="" src={hrnetold2} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hrnetreact">
            <img className="" src={hrnetreact1} alt="" />
            <div>
              <h2>Version React.js</h2>
              <img className="" src={hrnetreact2} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hrnetvue">
            <h2>Version Vue.js</h2>
            <img className="" src={hrnetvue} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="hrnetlinks">
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
                  Lien déploiement version jQuery
                </a>
              </td>
              <td className="git">
                <a
                  href="https://github.com/OpenClassrooms-Student-Center/P12_Front-end"
                  target="blank"
                >
                  Code version jQuery
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
                  Lien déploiement version React
                </a>
              </td>
              <td className="git">
                <a
                  href="https://github.com/LazezBZH/BenedicteHERAULT_14_23112021"
                  target="blank"
                >
                  Code version React
                </a>
              </td>
            </tr>
            <tr>
              <td className="appli">Application HRnet version vue</td>
              <td className="deploy">
                <a href="https://p14-vue-version.netlify.app/" target="blank">
                  Lien déploiement version Vue
                </a>
              </td>
              <td className="git">
                <a href="https://github.com/LazezBZH/p14-vue" target="blank">
                  Code version Vue
                </a>
              </td>
            </tr>
            <tr>
              <td className="appli">Composant npm</td>
              <td className="deploy">
                <a href="https://www.npmjs.com/package/customizable-react-modal-by-lazez">
                  Publication sur npm
                </a>
              </td>
              <td className="git">
                <a
                  href="https://github.com/LazezBZH/customizable-react-modal-lazez"
                  target="blank"
                >
                  Code composant npm
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
