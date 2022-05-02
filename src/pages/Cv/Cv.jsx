import Banner from "../../components/Banner/Banner";
import TypeWriterEffect from "react-typewriter-effect";
//import Footer from "../../components/Footer/Footer";
import cvjanv from "../../assets/cv.png";
import "./Cv.css";

export default function Cv() {
  return (
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
          <img className="cvImg" src={cvjanv} alt="" />
        </label>
      </div>
      <button className="download">
        <a
          target="blank"
          href="https://drive.google.com/file/d/1uriO8ogWo7sQfrheJk-guhOqYHSjh-eU/view?usp=sharing"
        >
          Téléchargez mon CV en PDF
        </a>
      </button>
    </div>
  );
}
