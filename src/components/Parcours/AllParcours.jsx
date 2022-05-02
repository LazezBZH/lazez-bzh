import dataParcours from "../../data/dataParcours";
import Parcours from "../Parcours/Parcours";
import "./Parcours.css";
import React, { useRef } from "react";

export default function AllParcours() {
  const titleRef = useRef();

  function handleBackClick() {
    titleRef.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="my-parcours">
      <div style={{ overflowX: "auto" }} className="allparcours">
        <div className="ref" ref={titleRef}>
          c
        </div>
        <h1 className="h1parcours">Parcours</h1>
        <div className="parcours">
          {dataParcours.map((dataParcour, index) => (
            <Parcours
              key={index}
              title={dataParcour.title}
              type={dataParcour.type}
              date={dataParcour.date}
              duration={dataParcour.duration}
              lieu={dataParcour.lieu}
            />
          ))}
        </div>
      </div>
      <div className="parcours-btn">
        <button onClick={handleBackClick}>&#x1F53C; </button>
      </div>
    </div>
  );
}
