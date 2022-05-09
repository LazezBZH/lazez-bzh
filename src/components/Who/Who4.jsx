import "./Who4.css";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";

import "swiper/swiper.min.css"; // core Swiper
import "swiper/modules/navigation/navigation.min.css"; // Navigation module
import "swiper/modules/pagination/pagination.min.css"; // Pagination module
import { Autoplay, FreeMode } from "swiper";

import art1 from "../../assets/qui/art1.jpeg";
import art2 from "../../assets/qui/art2.jpeg";
import art3 from "../../assets/qui/art3.jpg";
import music1 from "../../assets/qui/musique1.jpg";
import music2 from "../../assets/qui/musique2.jpg";
import music3 from "../../assets/qui/musique3.jpg";
import theater1 from "../../assets/qui/théatre1.jpg";
import theater2 from "../../assets/qui/théatre2.jpg";
import theater3 from "../../assets/qui/théatre3.jpg";
import cine1 from "../../assets/qui/ciné1.jpeg";
import cine2 from "../../assets/qui/ciné2.jpeg";
import cine3 from "../../assets/qui/ciné3.jpeg";
import livre1 from "../../assets/qui/livre1.jpg";
import livre2 from "../../assets/qui/livre2.jpeg";
import livre3 from "../../assets/qui/livre3.jpeg";

// Import Swiper styles

export default function Who4() {
  return (
    <div className="who4">
      <h1>BOULIMIQUE</h1>
      <div className="swipers">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, FreeMode]}
          className="mySwiper1"
        >
          <SwiperSlide>
            <div>
              <img src={art1} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="diapos">
              <img src={art2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={art3} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, FreeMode]}
          className="mySwiper3"
        >
          <SwiperSlide>
            <img src={theater1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={theater2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={theater3} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <h4>Pas de nourriture pour mon estomac, non!</h4>
      <ul>
        <li>&#8669; de nourriture pour mon cerveau</li>
        <li>
          &#8669; j'aime <span className="span-qui"></span>apprendre et
          également <span className="span-qui"></span>transmettre, ça tombe bien
          car c'est quand même une grande partie du job de dév
        </li>
        <li>
          &#8669; j'aime les sorties culturelles, mes seules limites sont le
          temps et le budget
        </li>
        <li>
          &#8669; mes goûts en <span className="span-qui"> culture</span> sont
          très éclectiques: lecture, arts, théâtre, cinéma, musique, et parmi
          ces domaines là encore une grande variété
        </li>
      </ul>
      <div className="swipers">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, FreeMode]}
          className="mySwiper2"
        >
          <SwiperSlide>
            <img src={music1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={music2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={music3} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <h4>Mais je sais aussi me reposer mon esprit</h4>
      <ul>
        <li>&#8669; ne rien faire, juste vagabonder dans mes pensées</li>
        <li>
          &#8669; passer du temps avec{" "}
          <span className="span-qui"> mes proches</span>
        </li>
        <li>&#8669; consacrer du temps à des loisirs créatifs</li>
      </ul>
      <div className="swipers">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, FreeMode]}
          className="mySwiper4"
        >
          <SwiperSlide>
            <img src={cine1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={cine2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={cine3} alt="" />
          </SwiperSlide>
        </Swiper>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, FreeMode]}
          className="mySwiper5"
        >
          <SwiperSlide>
            <div className="diapo5">
              <div className="diapos">
                <img src={livre1} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="diapo5">
              <div className="diapos">
                <img src={livre2} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="diapo5">
              <div className="diapos">
                <img src={livre3} alt="" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
