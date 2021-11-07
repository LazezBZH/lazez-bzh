import dataProducts from "../../data/dataProducts";
import Product from "../Products/Product";
import "./Products.css";

export default function Technos() {
  return (
    <>
      <h1>Travaux</h1>
      <div className="products">
        {dataProducts.map((dataProduct, index) => (
          <Product
            key={index}
            src={dataProduct.src}
            alt={dataProduct.alt}
            img1={dataProduct.img1}
            img2={dataProduct.img2}
            txt={dataProduct.txt}
          />
        ))}
      </div>
    </>
  );
}
