//import Banner from "../../components/Banner/Banner";
import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import TypeWriterEffect from "react-typewriter-effect";

import Who1 from "../../components/Who/Who1";
import Who2 from "../../components/Who/Who2";
import Who3 from "../../components/Who/Who3";
import Who4 from "../../components/Who/Who4";
import Who5 from "../../components/Who/Who5";

import "./Qui.css";

export default function Qui() {
  return (
    <div className="qui">
      <div className="loader-qui">
        <TypeWriterEffect
          textStyle={{
            fontFamily: "Red Hat Display",
            color: "#0b4e5c",
            fontWeight: "bolder",
            fontSize: "5rem",
          }}
          startDelay={50}
          cursorColor="SandyBrown"
          text="WHO?.."
          typeSpeed={200}
          hideCursorAfterText="true"
        />
      </div>
      <div className="who">
        <div className="who-all">
          <Who1 />
          <Who2 />
          <Who3 />
          <Who4 />
        </div>
        <Who5 />
        <div className="back">
          <button>
            <Link to="/">Retour &#9754;</Link>
          </button>
          <button>
            <Link to="/cv"> CV &#10173;</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
