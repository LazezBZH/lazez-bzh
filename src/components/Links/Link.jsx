export default function Lien({ img, alt, src, txt, txtb, target }) {
  return (
    <a href={src} target={target}>
      <div className="dataLink">
        <img className={alt} src={img} alt={alt} />
        <span className="txtb">{txtb}</span>
      </div>
      <p className="textLink">{txt}</p>
    </a>
  );
}
