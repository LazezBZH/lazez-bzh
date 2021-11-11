import github from "../../assets/github.svg";

export default function Product({
  img1,
  img2,
  alt,
  src,
  txt,
  git,
  tech1,
  tech2,
  tech3,
}) {
  return (
    <div className="product">
      <a href={src} target="blank">
        <div className="imgProducts">
          <img className="imgProduct" src={img1} alt={alt} />
          <img className="imgProduct" src={img2} alt={alt} />
        </div>
      </a>
      <p className="productDescription">{txt}</p>
      <div className="imgTech">
        <img src={tech1} alt="" />
        <img src={tech2} alt="" />
        <img src={tech3} alt="" />
      </div>
      <div className="lienGit">
        <a href={git} target="blank">
          <img src={github} alt="" />
        </a>
      </div>
    </div>
  );
}
