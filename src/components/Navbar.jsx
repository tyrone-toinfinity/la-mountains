import logo from "../assets/logo.svg";
import "./Navbar.css";

export const Navbar = () => {
  // const goToViolation = (id) => {
  //   const violation = document.getElementById(id);
  //   window.scrollTo({
  //     top: violation.offsetTop,
  //     behavior: "smooth",
  //   });
  // };
  return (
    <nav>
      <img src={logo} alt="company logo" width={50} height={50} />
      <ul className="nav__links">
        <li
          onClick={() => {
            const historyElement = document.getElementById("history");
            if (historyElement) {
              historyElement.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          01. History
        </li>
        <li>02. Team</li>
      </ul>
    </nav>
  );
};
