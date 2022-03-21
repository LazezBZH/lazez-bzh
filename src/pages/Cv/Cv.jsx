import Banner from "../../components/Banner/Banner";
//import Footer from "../../components/Footer/Footer";
import cvjanv from "../../assets/cv janv 22.png";
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
          href="https://drive.google.com/file/d/1mXiWgtruxoyUiklIptsqh0omSrXsYv2V/view?usp=sharing"
          download="CV Bénédicte HÉRAULT développeuse fonrt-end.pdf"
        >
          Téléchargez mon CV en PDF
        </a>
      </button>
    </div>
  );
}
