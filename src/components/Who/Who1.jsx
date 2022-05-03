import "./Who1.css";
import retard from "../../assets/qui/retard.jpg";
import ponctuel from "../../assets/qui/ponctualité.jpg";

export default function Who1() {
  return (
    <div className="who1">
      <h1>CASSE-PIEDS</h1>
      <h4>Dès mon plus jeune âge</h4>
      <img className="retard" src={retard} alt="" />
      <ul>
        <li>
          &#8669; mon père travaillait avec ses parents dans leur boulangerie
        </li>
        <li>
          &#8669; ils avaient pris leurs congés aux alentours de ma naissance
        </li>
        <li>&#8669; je suis arrivée post-terme</li>
        <li>
          &#8669; la boulangerie ré-ouvrait un lundi, je suis née le mardi
        </li>
      </ul>
      <h4>Depuis, j'ai appris à vivre en société</h4>

      <img className="ponctuel" src={ponctuel} alt="" />
      <ul>
        <li>
          &#8669; je suis une grande adepte de la
          <span className="span-qui"> ponctualité</span>
        </li>
        <li>
          &#8669; je sais m'adapter à une
          <span className="span-qui"> équipe</span>
        </li>
      </ul>
    </div>
  );
}
