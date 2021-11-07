import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Links from "../../components/Links/Links";
import Technos from "../../components/Products/Products";
import "./Home.css";
export default function Home() {
  return (
    <div className="home">
      <Banner />
      <Links />
      <Technos />
      <Footer />
    </div>
  );
}
