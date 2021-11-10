export default function Parcours({ title, lieu, duration, date, type }) {
  return (
    <div className={["parcour", type].join(" ")}>
      <h2 className="parcoursTitle">{title}</h2>
      <div className="parcroursTxt">
        <p className="parcoursLocation">{lieu}</p>
        <p className="parcoursDuration">{duration}</p>
        <p className="parcoursDate">{date}</p>
      </div>
      <p className={["parcoursType", type].join(" ")}>{type}</p>
    </div>
  );
}
