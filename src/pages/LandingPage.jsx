import { Parallax } from "react-parallax";
import "./LandingPage.css";
import hero from "../assets/Hero-Image-up.jpg";
import peak from "../assets/peak.jpg";

export const LandingPage = () => {
  return (
    <div>
      {/* First section */}
      <Parallax bgImage={hero} strength={500}>
        <div className="section hero " id="hero">
          <h1 className="section__heroTitle1">LosAngeles </h1>
          <h1 className="section__heroTitle2">Mountains</h1>
        </div>
      </Parallax>

      {/* Second section */}
      <Parallax bgImage={peak}>
        <div className="section" id="history">
          <div>
            <h2 className="link__num">01.</h2> <p>History</p>
          </div>
        </div>
      </Parallax>

      {/* third section */}
      <Parallax bgImage={hero}>
        <div className="section" id="team">
          <div>
            <h2 className="link__num">02.</h2> <p>Climb</p>
          </div>
        </div>
      </Parallax>
    </div>
  );
};
