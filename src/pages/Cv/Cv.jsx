import Banner from "../../components/Banner/Banner";
//import Footer from "../../components/Footer/Footer";
import cvjanv from "../../assets/cv.png";
import "./Cv.css";

export default function Cv() {
  return (
    <div className="cv">
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
