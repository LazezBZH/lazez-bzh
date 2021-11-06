export default function Lien({ img, alt, src, txt }) {
  return (
    <a href={src} target="blank">
      <div className="dataLink">
        <img className={alt} src={img} alt={alt} />
      </div>
      <p>{txt}</p>
    </a>
  );
}
