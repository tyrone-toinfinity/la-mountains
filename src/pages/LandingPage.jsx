import { Parallax } from "react-parallax";
import "./LandingPage.css";
import hero from "../assets/Hero-Image-up.jpg";
import peak from "../assets/peak.jpg";
import { ImageSlider } from "../components/ImageSlider";
import { Tabbar } from "../components/Tabbar";

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
          <div className="history__container">
            <h2 className="link__num">01.</h2>{" "}
            <p className="link__numHeader">History</p>
            <div>
              <p className="history__body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, recusandae accusantium, facilis molestias autem nam
                fugiat sequi consectetur temporibus ipsum error facere
                dignissimos? Iure et veniam nihil neque. Officia, eveniet.
                Ratione, consectetur adipisci est deserunt temporibus porro
                amet, beatae in ipsam iste tempora sint.
              </p>
            </div>
          </div>
          <div className="slider__wrapper">
            <ImageSlider />
          </div>
        </div>
      </Parallax>

      {/* third section */}
      {/* <Parallax bgImage={hero}>
        <div className="section" id="team">
          <div className="team__wrapper">
            <div className="team__container">
              <div className="climb__title">
                <h2 className="link__num">02.</h2>{" "}
                <p className="link__numHeader">Climb</p>
              </div>
              <div>
                <p className="team__body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas, recusandae accusantium, facilis molestias autem nam
                  fugiat sequi consectetur temporibus ipsum error facere
                  dignissimos? Iure et veniam nihil neque. Officia, eveniet.
                  Ratione, consectetur adipisci est deserunt temporibus porro
                  amet, beatae in ipsam iste tempora sint.
                </p>
              </div>
            </div>
          </div>
          <div className="tabBar__wrapper">
            <Tabbar />
          </div>
        </div>
      </Parallax> */}

      <div className="section" id="team">
        <div className="team__wrapper">
          <div className="team__container">
            <div className="climb__title">
              <h2 className="link__num">02.</h2>{" "}
              <p className="link__numHeader">Climb</p>
            </div>
            <div>
              <p className="team__body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, recusandae accusantium, facilis molestias autem nam
                fugiat sequi consectetur temporibus ipsum error facere
                dignissimos? Iure et veniam nihil neque. Officia, eveniet.
                Ratione, consectetur adipisci est deserunt temporibus porro
                amet, beatae in ipsam iste tempora sint.
              </p>
            </div>
          </div>
        </div>
        <div className="tabBar__wrapper">
          <Tabbar />
        </div>
      </div>
    </div>
  );
};
