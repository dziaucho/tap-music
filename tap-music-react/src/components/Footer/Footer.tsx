import { useState } from "react";
import LinksContainer from "./links-container/LinksContainer";
import Button from "../button/Button";

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <footer className="footer">
      {isVisible ? (
        <LinksContainer handleClick={() => setIsVisible(false)} />
      ) : (
        <Button className="footer-show" onClick={() => setIsVisible(true)}>
          &#128064;
        </Button>
      )}
    </footer>
  );
}

export default Footer;
