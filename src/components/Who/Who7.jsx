import "./Who7.css";
import portfolio from "../../assets/Lazez portfolio anonymisé.mp4";
import saturnin from "../../assets/petit canard en plastique cherche bureau où se poser.mp4";

export default function Who7() {
  return (
    <div className="who7">
      <h1>J'AIME BIEN JOUER AVEC CANVA</h1>
      <div className="videos">
        <div>
          <h4>Portfolio animé</h4>
          <video src={portfolio} controls></video>
        </div>
        <div>
          <h4>Saturnin ma guest star</h4>
          <video src={saturnin} controls></video>
        </div>
      </div>
    </div>
  );
}
