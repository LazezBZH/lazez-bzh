import "./Links.css";
import Lien from "../../components/Links/Link";
import dataLinks from "../../data/dataLinks";

export default function Links() {
  return (
    <div className="links">
      {dataLinks.map((dataLink, index) => (
        <Lien
          key={index}
          src={dataLink.src}
          alt={dataLink.alt}
          img={dataLink.img}
          txt={dataLink.txt}
          txtb={dataLink.txtb}
          target={dataLink.target}
        />
      ))}
    </div>
  );
}
