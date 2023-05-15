// Assets
import logo from "../assets/logo.svg";

export const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="company logo" width={25} height={25} />
      <ul>
        <li>01. History</li>
        <li>02. Team</li>
      </ul>
    </nav>
  );
};
