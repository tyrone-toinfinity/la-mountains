import logo from "../assets/logo.svg";
import "./Navbar.css";
import { useState, useEffect } from "react";

export const Navbar = () => {
  // Scroll to ID
  const scrollToElement = (el) => {
    const element = document.getElementById(el);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    console.log(currentScrollPos);
    if (currentScrollPos > 620) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className={isSticky ? "sticky" : ""}>
      <img
        src={logo}
        alt="company logo"
        width={50}
        height={50}
        onClick={() => scrollToElement("hero")}
        onDoubleClick={() => scrollToElement("hero")}
        className="logo"
      />

      <ul className="nav__links">
        <li
          onClick={() => scrollToElement("history")}
          onDoubleClick={() => scrollToElement("history")}
          className={isSticky ? "nav__links--blue" : ""}
        >
          01. History
        </li>
        <li
          onClick={() => scrollToElement("team")}
          onDoubleClick={() => scrollToElement("team")}
          className={isSticky ? "nav__links--blue" : ""}
        >
          02. Team
        </li>
      </ul>
    </nav>
  );
};
