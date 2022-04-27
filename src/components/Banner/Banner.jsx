import banner from "../../assets/web.jpg";
import moi from "../../assets/moi2.jpg";
import "./Banner.css";
export default function Banner() {
  return (
    <div className="banner">
      <img className="bannerImg" src={banner} alt="" />
      <div className="bannerTxt">
        <p className="name">Bénédicte HÉRAULT</p>
        <p className="job">Développeuse front-end</p>
      </div>
      <div className="moi">
        <img className="moiImg" src={moi} alt="" />
      </div>
    </div>
  );
}
