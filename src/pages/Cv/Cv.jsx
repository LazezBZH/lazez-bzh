import Banner from "../../components/Banner/Banner";
import TypeWriterEffect from "react-typewriter-effect";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import cvjuin from "../../assets/cvjuin.png";
import "./Cv.css";

export default function Cv() {
  return (
    <>
      {" "}
      <div className="my-cv">
        <div className="loading">
          <div className="loader typewriter">
            <div className="my-name anim-typewriter">
              <TypeWriterEffect
                textStyle={{
                  fontFamily: "Red Hat Display",
                  color: "#0b4e5c",
                  fontWeight: "bolder",
                  fontSize: "2rem",
                }}
                startDelay={50}
                cursorColor="Cyan"
                text="Bénédicte HÉRAULT"
                typeSpeed={200}
                hideCursorAfterText="true"
              />
            </div>
          </div>
        </div>
        <div className="cvBanner">
          <Banner />
        </div>
        <div class="image-zoom">
          <input type="checkbox" id="zoomCheck"></input>
          <label for="zoomCheck">
            <img className="cvImg" src={cvjuin} alt="" />
          </label>
        </div>
      </div>
      <button className="download">
        <a
          target="blank"
          href="https://drive.google.com/file/d/1tntxfulMDm6QOf1sTcLspke2QxLtQ13n/view?usp=sharing"
        >
          Téléchargez PDF
        </a>
      </button>
      <div className=" back-cv">
        <button>
          <Link to="/">Retour &#9754;</Link>
        </button>
        <button>
          <Link to="/qui"> Portrait &#10173;</Link>
        </button>
      </div>
    </>
  );
}
