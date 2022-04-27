import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Links from "../../components/Links/Links";
import Technos from "../../components/Technos/Technos";
import Hrnet from "../../components/Products/Hrnet";
import ReactP from "../../components/Products/ReactP";
import Learn from "../../components/Products/Learn";
import Marie from "../../components/Products/Marie";
import AllParcours from "../../components/Parcours/AllParcours";
import logoReact from "../../assets/logoReact.svg";

import "./Home.css";
export default function Home() {
  return (
    <div className="home">
      <div id="up">
        Site en cours de remodelage, le responsive n'est pas totalement géré, à
        venir!
      </div>
      <div className="scroll">
        <Banner />

        <Links />
        <Technos />
        <div className="logoReact">
          <img src={logoReact} alt="" />
        </div>
      </div>
      <div className="travaux">
        <h1>Travaux</h1>

        <div className="ancres">
          <p className="matières">Quelques exemples:</p>
          <div className="ancre">
            <a href="#hrnet">
              HRnet 2 versions, site transposé en React et en Vue
            </a>
          </div>
          <div className="ancre">
            <a href="#react">3 autres projets React</a>
          </div>
          <div className="ancre">
            <a href="#learn">Learn@Home en Agile</a>
          </div>
          <div className="ancre">
            <a href="#marie">Site Sophrologie Reiki</a>
          </div>
        </div>
      </div>

      <Hrnet />
      <ReactP />
      <Learn />
      <Marie />
      <AllParcours />
      <button className="homeBtn1">
        <a href="#up">&#x1F199;</a>
      </button>
      <button className="homeBtn2">
        <a href="#up">&#x1F199;</a>
      </button>
      <Footer />
    </div>
  );
}
