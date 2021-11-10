import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Links from "../../components/Links/Links";
import Technos from "../../components/Technos/Technos";
import Products from "../../components/Products/Products";
import AllParcours from "../../components/Parcours/AllParcours";
import logoReact from "../../assets/logoReact.svg";

import "./Home.css";
export default function Home() {
  return (
    <div className="home">
      <div className="scroll">
        <Banner />
        <Links />
        <Technos />
        <div className="logoReact">
          <img src={logoReact} alt="" />
        </div>
      </div>
      <Products />
      <AllParcours />
      <Footer />
    </div>
  );
}
