export default function Product({ img1, img2, alt, src, txt }) {
  return (
    <div className="product">
      <a href={src} target="blank">
        <div className="imgProducts">
          <img className="imgProduct" src={img1} alt={alt} />
          <img className="imgProduct" src={img2} alt={alt} />
        </div>{" "}
      </a>
      <p className="productDescription">{txt}</p>
    </div>
  );
}
