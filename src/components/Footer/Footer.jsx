// import Links from "../Links/Links";
import "./Footer.css";
import react from "../../assets/react.png";
import netlify from "../../assets/netlify.png";
//import keyboard from "../../assets/keyboard.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerall">
        <div className="footerTxt">
          <p>Portfolio créé sous React</p>
          <img className="invisible" src={react} alt="" />
          <p>et hébergé par</p>

          <div className="img-footer2">
            <img src={netlify} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
