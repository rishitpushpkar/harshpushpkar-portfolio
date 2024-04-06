import "../css/Footer.css";

export default function Footer() {
  const myContactInfo = {
    email: "hello@harshpushpkar.com",
    linkedin: "https://www.linkedin.com/in/harshpushpkar",
    behance: "",
    twitter: "",
    instagram: "",
  };

  return (
    <footer>
      <p>Write me a line</p>
      <span>
        <a>{myContactInfo.email}</a>
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
