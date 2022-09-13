import Perfil from "../../assets/image-portrait-solid.svg";
import Linkedin from "../../assets/linkedin-brands.svg";
import Github from "../../assets/github-square-brands.svg";

import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <a
        rel="noopener"
        target="_blank"
        href="https://wogelman-alejandro.vercel.app/"
      >
        <img src={Perfil} alt="portrait" className="portrait" />
      </a>
      <a
        rel="noopener"
        target="_blank"
        href="https://www.linkedin.com/in/alejandrowogel/"
      >
        <img src={Linkedin} alt="linkedin" />
      </a>
      <a
        rel="noopener"
        target="_blank"
        href="https://github.com/AlejandroWogelman"
      >
        <img src={Github} alt="github" />
      </a>
    </footer>
  );
};
