import TypeWriterEffect from "react-typewriter-effect";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import moi from "../../assets/moi2.jpg";

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
        <div className="banniere">Bannière</div>
        <div className="maincv">
          {" "}
          <div className="aside">
            <div className="aside-banner">
              <div className="moi2">
                {" "}
                <img className="moi2Img" src={moi} alt="" />
              </div>
            </div>
            <div className="nom">Bénédicte HÉRAULT</div>
          </div>
          <div className="center">center</div>
          <div className="aside">aside right</div>
        </div>
      </div>
      <button className="download">
        <a
          target="blank"
          href="https://drive.google.com/file/d/1cYkOhDlS61_AseNfbsWO3ddUDt4Zb6xs/view?usp=sharing"
        >
          Téléchargez PDF <br /> (version différente mais les infos sont les
          mêmes)
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
