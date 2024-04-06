import logo from "../assets/images/Logo.svg";
import { Link } from "react-router-dom";
import "../css/NavBar.css";

export default function NavBar() {
  const email = "hello@harshpushpkar.com";

  return (
    <header>
      <nav>
        <div className="brandLogo">
          <Link to="/">
            <img src={logo} alt="Brand Logo" />
          </Link>
        </div>
        <ul className="navList">
          <li className="menu-item">
            <Link to="/about">About</Link>
            <div className="wee"></div>
          </li>
          <li className="menu-item">
            <Link
              to={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </Link>
            <div className="wee"></div>
          </li>
          <li className="menu-item">
            <Link to="/contact">My Work</Link>
            <div className="wee"></div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
