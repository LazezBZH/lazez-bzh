//import Banner from "../../components/Banner/Banner";
import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import TypeWriterEffect from "react-typewriter-effect";

import "./Qui.css";

export default function Qui() {
  return (
    <div className="who">
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
      <div className="back">
        <button>
          <Link to="/"> &#x21A9; Home</Link>
        </button>
      </div>
      <div className=" wait">à venir, patience!</div>
    </div>
  );
}
