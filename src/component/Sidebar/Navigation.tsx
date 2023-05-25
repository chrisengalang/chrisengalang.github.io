import Facebook from "./images/facebook.png";
import Github from "./images/github.png";
import Twitter from "./images/twitter.png";
import Instagram from "./images/instagram.png";
import { Link } from "react-router-dom";

interface LinkProps {
  text: string;
  link: string;
}

const Navigation = () => {
  let links: LinkProps[] = [
    { text: "HOME", link: "/" },
    { text: "CV", link: "/cv" },
    { text: "PORTFOLIO", link: "/portfolio" },
    { text: "CONTACT ME", link: "/contact" },
  ];

  return (
    <>
      <nav className="navigation">
        <ul>
          {links.map((link) => (
            <li key={link.text}>
              <Link to={link.link}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <br />
      <footer className="footer">
        <div className="online-links">
          <div className="online-link">
            <img src={Facebook} alt="facebook" />
          </div>
          <div className="online-link">
            <img src={Twitter} alt="twitter" />
          </div>
          <div className="online-link">
            <img src={Instagram} alt="instagram" />
          </div>
          <div className="online-link">
            <img src={Github} alt="github" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Navigation;
