import logo from "../assets/logo.svg";
import "./Navbar.css";

export const Navbar = () => {
  const scrollToElement = (el) => {
    const element = document.getElementById(el);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav>
      <img src={logo} alt="company logo" width={50} height={50} />
      <ul className="nav__links">
        <li onClick={() => scrollToElement("history")}>01. History</li>
        <li onClick={() => scrollToElement("team")}>02. Team</li>
      </ul>
    </nav>
  );
};
