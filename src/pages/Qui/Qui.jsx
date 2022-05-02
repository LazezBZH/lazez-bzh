//import Banner from "../../components/Banner/Banner";
import { Link } from "react-router-dom";
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
          cursorColor="Goldenrod"
          text="WHO?.."
          typeSpeed={200}
          hideCursorAfterText="true"
        />
      </div>
      <div className=" wait">à venir, patience!</div>
      <div className="back">
        <Link to="/">Retour &#x21A9;</Link>
      </div>
    </div>
  );
}
