import freesoundLogo from "../assets/icons/freesound.svg";
import Button from "./Button";

interface FooterLinksProps {
  handleClick: () => void;
}

function FooterLinks({ handleClick }: FooterLinksProps) {
  return (
    <div className="footer-links__container">
      <a href="https://github.com/dziaucho" className="footer__author-link">
        dziaucho
      </a>
      <a href="https://freesound.org">
        <img
          src={freesoundLogo}
          alt="freesound logo"
          className="footer__author-link__img"
        />
      </a>
      <Button className="footer-hide" onClick={handleClick}>
        &#10006;
      </Button>
    </div>
  );
}

export default FooterLinks;
