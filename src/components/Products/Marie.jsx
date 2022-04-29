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

import "./Marie.css";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";

import "swiper/swiper.min.css"; // core Swiper
import "swiper/modules/navigation/navigation.min.css"; // Navigation module
import "swiper/modules/pagination/pagination.min.css"; // Pagination module

import { EffectFlip, Pagination, Navigation } from "swiper";

export default function Marie() {
  return (
    <div className="marie" id="marie">
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
        className="mySwiperM"
      >
        <SwiperSlide>
          <div className="diapo41">
            <h1>Site vitrine pour une sophrologue</h1>
            <div className="diapo41-all">
              <div className="dia41">
                <h2>SITE VITRINE BILINGUE.</h2>
                <h3>Version 1 (en ligne)</h3>
                <ul>
                  <li>
                    Elle m'a laisser libre dans les choix du design et a de
                    suite validé
                  </li>
                  <li>Site réalisé lorsque je débutais le code</li>
                  <li>HTML/CSS</li>
                </ul>
              </div>
              <div className="dia41">
                <h3>Version 2 (en cours de développement)</h3>
                <ul>
                  <li>React</li>
                  <li>Styles components</li>
                  <li>
                    Utilsation de react.i18next.js pour gérer la localisation
                  </li>
                </ul>
              </div>
              <div className="dia41">
                <h3>Évolution à plus ou moins long terme</h3>
                <ul>
                  <li>Mise en place d'un blog</li>
                  <li>Probablement ajout de nouvelles sections</li>
                </ul>
              </div>
              <div className="allReact">
                <h4>
                  c'est une amie, si vous avez
                  <br /> besoin n'hésitez pas, <br />
                  je vous la recommande
                </h4>
              </div>
            </div>

            <div className="localisation">
              <img className="imgSlideM" src={marie11} alt="" />
              <img className="imgSlideM" src={marie10} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="diapo42">
            <h4>Version 1</h4>
            <div className="imgM2">
              <img className="marieP2Img" src={marie1} alt="" />
              <img className="marieP2Img" src={marie2} alt="" />
              <img className="marieP2Img" src={marie3} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="diapo43">
            <h4>Version 1 site bilingue</h4>
            <div className="imgM3">
              <img className="marieP3Img" src={marie4} alt="" />
              <img className="marieP3Img" src={marie5} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="diapo44">
            <h4>Version 2 avec React</h4>
            <h5>localisation react.i18next.js</h5>

            <div className="imgM4">
              <img className="marieP4Img" src={marie6} alt="" />
              <img className="marieP4Img" src={marie7} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="diapo45">
            <h4>react.i18next.js</h4>

            <div className="imgM5">
              <img className="marieP5Img" src={marie8} alt="" />
              <img className="marieP5Img" src={marie9} alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="marielinks">
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
              <td className="appliR">Site en HTML</td>
              <td className="deploy">
                <a href="https://www.marieaballea.fr/" target="blank">
                  Marie Aballea .fr
                </a>
              </td>
              <td className="git">
                <a href="https://github.com/LazezBZH/Site-Marie" target="blank">
                  Code version 1
                </a>
              </td>
            </tr>
            <tr>
              <td className="appliR">Site avec React</td>
              <td className="deploy">
                <a href="https://site-marie-v2.netlify.app/" target="blank">
                  Lien déploiement V2 (en cours)
                </a>
              </td>
              <td className="git">
                <a
                  href="https://github.com/LazezBZH/Site-Marie-V2"
                  target="blank"
                >
                  Code version 2 (en cours)
                </a>
              </td>
            </tr>
            <tr>
              <td className="appliR">Découvir react.i18next.js</td>
              <td className="deploy"></td>
              <td className="git">
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
