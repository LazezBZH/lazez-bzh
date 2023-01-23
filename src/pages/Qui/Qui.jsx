import Banner from "../../components/Banner/Banner";
import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import TypeWriterEffect from "react-typewriter-effect";

import Who1 from "../../components/Who/Who1";
import Who2 from "../../components/Who/Who2";
import Who3 from "../../components/Who/Who3";
import Who4 from "../../components/Who/Who4";
import Who5 from "../../components/Who/Who5";
import Who6 from "../../components/Who/Who6";
import Who7 from "../../components/Who/Who7";

import yin from "../../assets/qui/yin.gif";

import "./Qui.css";

export default function Qui() {
  return (
    <div className="qui">
      <div className="loader-qui">
        <div className="typing">
          <TypeWriterEffect
            textStyle={{
              fontFamily: "Red Hat Display",
              color: "#0b4e5c",
              fontWeight: "bolder",
              fontSize: "5rem",
            }}
            startDelay={0}
            cursorColor="SandyBrown"
            text="WHO?.."
            typeSpeed={100}
            hideCursorAfterText="true"
          />
        </div>
      </div>

      <div className="who">
        <Banner />
        <div className="who-all-plus">
          <button>
            <a
              href="https://app.assessfirst.com/_/profile/oxskit6r-benedicte-herault"
              target="_blank"
              rel="noreferrer"
            >
              Lien vers profil Assessfirst
            </a>
          </button>
          <Who7 />
          <div className="who-all">
            <Who1 />
            <Who2 />
            <Who3 />
            <Who4 />
          </div>
        </div>
        <div className="who-plus">
          <Who5 />
          <div className="yin">
            <img src={yin} alt="" />
          </div>
          <Who6 />
        </div>
        <div className=" back">
          <button onClick={window.scrollTo(0, 0)}>
            <Link to="/">Retour &#9754;</Link>
          </button>
          <button onClick={window.scrollTo(0, 0)}>
            <Link to="/cv"> CV &#10173;</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
