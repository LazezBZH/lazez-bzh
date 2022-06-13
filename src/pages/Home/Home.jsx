import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Links from "../../components/Links/Links";
import Technos from "../../components/Technos/Technos";
import Hrnet from "../../components/Products/Hrnet";
import ReactP from "../../components/Products/ReactP";
import Learn from "../../components/Products/Learn";
import Marie from "../../components/Products/Marie";
import Api from "../../components/Products/Api";
import AllParcours from "../../components/Parcours/AllParcours";
import logoReact from "../../assets/logoReact.svg";
import TypeWriterEffect from "react-typewriter-effect";
import Quote from "../../components/Quote/Quote";
import moi from "../../assets/moi2.jpg";

import "./Home.css";
export default function Home() {
  return (
    <div className="home">
      <div className="loader-home">
        <div className="moiLoad">
          <img className="moiLoadImg" src={moi} alt="" />
        </div>
        <div className="typing-home">
          <TypeWriterEffect
            textStyle={{
              fontFamily: "Red Hat Display",
              color: "#0b4e5c",
              fontWeight: 500,
              fontSize: "3rem",
            }}
            startDelay={200}
            cursorColor="#0b4e5c"
            multiText={["BÉNÉDICTE HÉRAULT", "Développeuse Front-End"]}
            multiTextDelay={200}
            typeSpeed={30}
            hideCursorAfterText="true"
          />
        </div>
      </div>
      <div id="up"></div>
      <div className="scroll">
        <Banner />
        <Links />
        <Technos />
        <div className="logoReact">
          <img src={logoReact} alt="" />
        </div>
      </div>
      <Quote />
      <div className="travaux">
        <h1>Travaux</h1>

        <div className="ancres">
          <p className="matières">Quelques exemples:</p>
          <div className="ancre">
            <a href="#hrnet">1 sites/2 versions (React et Vue)</a>
          </div>
          <div className="ancre">
            <a href="#react">3 autres exemples React</a>
          </div>
          <div className="ancre">
            <a href="#api">-API-</a>
          </div>
          <div className="ancre">
            <a href="#learn">Soyons "Agile"</a>
          </div>
          <div className="ancre">
            <a href="#marie">Site Sophrologie Reiki</a>
          </div>
        </div>
      </div>

      <div className="all-projects">
        <Hrnet />
        <ReactP />
        <Api />
        <Learn />
        <Marie />
      </div>
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
