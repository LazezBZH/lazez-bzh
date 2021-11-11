import Links from "../Links/Links";
import "./Footer.css";
import react from "../../assets/react.png";
import netlify from "../../assets/netlify.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerLinks">
        <Links />
      </div>
      <div className="footerTxt">
        <p>Portfolio créé sous React</p> <img src={react} alt="" />
        <p>et hébergé par</p>
        <a href="https://www.netlify.com/">
          <img src={netlify} alt="" />
        </a>
      </div>
    </div>
  );
}
