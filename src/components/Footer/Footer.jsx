// import Links from "../Links/Links";
import "./Footer.css";
import react from "../../assets/react.png";
import netlify from "../../assets/netlify.png";
import keyboard from "../../assets/keyboard.png";

export default function Footer() {
  return (
    <div className="footer">
      <img className="keyboard" src={keyboard} alt="" />
      <div className="footerall">
        <div className="footerTxt">
          <p>Portfolio créé sous React</p>
          <img className="invisible" src={react} alt="" />
          <p>et hébergé par</p>
          <a href="https://www.netlify.com/">
            <img src={netlify} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
