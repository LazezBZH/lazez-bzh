import Banner from "../../components/Banner/Banner";
import TypeWriterEffect from "react-typewriter-effect";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import cv from "../../assets/cvsept.png";
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
                typeSpeed={150}
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
            <img className="cvImg" src={cv} alt="" />
          </label>
        </div>
      </div>
      <button className="download">
        <a
          target="blank"
          href="https://drive.google.com/file/d/152gKUzcLAqRyFDRGGyvwcf-RxGKKa5JK/view?usp=sharing"
        >
          Téléchargez PDF
        </a>
      </button>
      <div className=" back-cv">
        <button onClick={window.scrollTo(0, 0)}>
          <Link to="/">Retour &#9754;</Link>
        </button>
        <button onClick={window.scrollTo(0, 0)}>
          <Link to="/qui"> Portrait &#10173;</Link>
        </button>
      </div>
    </>
  );
}
