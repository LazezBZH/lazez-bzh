import dataProducts from "../../data/dataProducts";
import Product from "../Products/Product";
import "./Products.css";

export default function Products() {
  return (
    <div className="allproducts">
      <h1>Travaux</h1>
      <div className="products">
        {dataProducts.map((dataProduct, index) => (
          <Product
            key={index}
            src={dataProduct.src}
            alt={dataProduct.alt}
            img1={dataProduct.img1}
            img2={dataProduct.img2}
            title={dataProduct.title}
            project={dataProduct.project}
            description={dataProduct.description}
            git={dataProduct.git}
            tech1={dataProduct.tech1}
            tech2={dataProduct.tech2}
            tech3={dataProduct.tech3}
          />
        ))}
      </div>
    </div>
  );
}
