import "./Who3.css";
import veto from "../../assets/qui/véto.jpg";
import maman from "../../assets/qui/maman.jpeg";
import essentiel from "../../assets/qui/essentiels.jpg";
import code from "../../assets/qui/code.jpg";
import life from "../../assets/qui/life.png";

export default function Who3() {
  return (
    <div className="who3">
      <h1>PLUSIEURS VIES</h1>
      <h4>J'ai été/je suis</h4>
      <div className="veto">
        <img src={veto} alt="" />
      </div>
      <div className="maman">
        <img src={maman} alt="" />
      </div>
      <ul>
        <li>
          &#8669; <span className="span-qui"> vétérinaire</span>...il y a très,
          très longtemps
        </li>
        <li>
          &#8669; <span className="span-qui"> maman</span> à temps plein avec
          fierté durant de nombreuses années, maman passionnée, attentionnée
          pour l'éternité
        </li>
        <li>
          &#8669; des petits boulots, parfois, bien en dessous de mon niveau
          d'études, aucune honte, non, c'est un grand enrichissement d'y avoir
          cotoyé ceux et celles que l'on nomme aujourd'hui
          <span className="span-qui"> "les essentiels"</span>
        </li>

        <li>
          &#8669; reconvertie récemment dans le
          <span className="span-qui"> développement</span>, je suis fière de ce
          que j'ai accompli, tout en ayant bien conscience qu'il me reste encore
          un long et passionnant chemin d'apprentissage
        </li>
        <div className="essentiel">
          <img src={essentiel} alt="" />
        </div>
        <div className="code">
          <img src={code} alt="" />
        </div>
      </ul>

      <h4>Ces expériences m'ont apporté:</h4>
      <ul>
        <li>
          &#8669; des connaissances en
          <span className="span-qui"> sciences</span>, biologie, médecine,
          agroalimentaire
        </li>
        <li>
          &#8669; des expériences en
          <span className="span-qui"> contact clientèle</span> et contact humain
        </li>
        <li>
          &#8669; des capacités d'
          <span className="span-qui"> organisation </span>
          et de <span className="span-qui"> gestion du stress</span> (une tribu
          à gérer c'est parfois un marathon)
        </li>
        <li>
          &#8669; une grande
          <span className="span-qui"> persévérance </span>
        </li>
      </ul>
      <div className="life">
        <img src={life} alt="" />
      </div>
    </div>
  );
}
