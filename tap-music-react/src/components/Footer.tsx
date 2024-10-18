import { useState } from "react";
import freesoundLogo from "../assets/icons/freesound.svg";

function Footer() {
  const [isVisible, changeFooterVisibility] = useState(false);
  return (
    <footer>
      <a href="https://github.com/dziaucho">dziaucho</a>
      <a href="https://freesound.org">
        <img src={freesoundLogo} alt="freesound logo"></img>
      </a>
    </footer>
  );
}

export default Footer;
