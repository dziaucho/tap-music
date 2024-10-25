import freesoundLogo from "../../../assets/icons/freesound.svg";
import Button from "../../button/Button";

interface LinksContainerProps {
  handleClick: () => void;
}

function LinksContainer({ handleClick }: LinksContainerProps) {
  return (
    <div className="links__container">
      <a
        href="https://github.com/dziaucho"
        target="_blank"
        className="footer__author-link"
      >
        dziaucho
      </a>
      <a href="https://freesound.org" target="_blank">
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

export default LinksContainer;
