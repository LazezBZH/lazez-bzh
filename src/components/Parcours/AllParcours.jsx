import dataParcours from "../../data/dataParcours";
import Parcours from "../Parcours/Parcours";
import "./Parcours.css";

export default function AllParcours() {
  return (
    <div className="allparcours">
      <h1>Parcours</h1>
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
  );
}
