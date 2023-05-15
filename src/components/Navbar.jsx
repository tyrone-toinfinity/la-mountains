// Assets
import logo from "../assets/logo.svg";
// Style
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="company logo" width={50} height={50} />
      <ul className="nav__links">
        <li>01. History</li>
        <li>02. Team</li>
      </ul>
    </nav>
  );
};
