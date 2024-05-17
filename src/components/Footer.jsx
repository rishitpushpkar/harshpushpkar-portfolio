import "../css/Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  const myContactInfo = {
    email: "hello@harshpushpkar.com",
    linkedin: "https://www.linkedin.com/in/harshpushpkar",
    behance: "https://www.behance.net/harshpushpkar",
    twitter: "https://twitter.com/harshpushpkar",
    instagram: "https://www.instagram.com/harshpushpkar",
  };

  return (
    <footer>
      <p>Write me a line</p>
      <span>
        <Link
          to={`https://mail.google.com/mail/?view=cm&fs=1&to=${myContactInfo.email}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {myContactInfo.email}
        </Link>
      </span>
      <div className="contactLinksContainer">
        <ul>
          <li className="position-relative">
            <a href={myContactInfo.linkedin}>Linkedin</a>
          </li>
          <li className="position-relative">
            <a href={myContactInfo.behance}>Behance</a>
          </li>
          <li className="position-relative">
            <a href={myContactInfo.twitter}>Twitter</a>
          </li>
          <li className="position-relative">
            <a href={myContactInfo.instagram}>Instagram</a>
          </li>
        </ul>
        <p>Copyright@ 2024 Harsh Pushpkar. All rights reserved.</p>
      </div>
    </footer>
  );
}
