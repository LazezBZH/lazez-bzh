import banner from "../../assets/web.jpg";
import moi from "../../assets/moi.jpg";
import "./Banner.css";
export default function Banner() {
  return (
    <div className="banner">
      <img className="bannerImg" src={banner} alt="" />
      <div className="bannerTxt">
        <p className="name">Bénédicte HÉRAULT</p>
        <p className="job">Développeuse front-end</p>
      </div>
      <img className="moi" src={moi} alt="" />
    </div>
  );
}
