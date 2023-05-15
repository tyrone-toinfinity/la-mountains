// Styles
// import "./Footer.css";
// Assets
import logo from "../assets/logo.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={logo} alt="company logo" width={50} height={50} />
        <div className="footer__title">
          <p>LosAngeles</p>
          <p>Mountains</p>
        </div>
      </div>
      <div className="footer__copyright">
        <p>CopyRight 2016. All Rights Reserved</p>
      </div>
    </footer>
  );
};
