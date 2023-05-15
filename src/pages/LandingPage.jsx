import { Parallax } from "react-parallax";
import "./LandingPage.css";
import hero from "../assets/Hero-Image-up.jpg";
import peak from "../assets/peak.jpg";

export const LandingPage = () => {
  return (
    <div>
      {/* First section */}
      <Parallax bgImage={hero} strength={500}>
        <div className="section" id="hero">
          <h1 className="section__title">LA Mountains</h1>
        </div>
      </Parallax>

      {/* Second section */}
      <Parallax bgImage={peak}>
        <div className="section" id="history">
          <h1 className="section__title">LA Surfers</h1>
        </div>
      </Parallax>

      {/* third section */}
      <Parallax bgImage={hero}>
        <div className="section" id="team">
          <h1 className="team__title">LA Surfers</h1>
        </div>
      </Parallax>
    </div>
  );
};
