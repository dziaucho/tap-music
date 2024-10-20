import { useState } from "react";
import FooterLinks from "./FooterLinks";
import FooterToggle from "./FooterToggle";

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <footer className="footer">
      {isVisible ? (
        <FooterLinks handleClick={handleClick} />
      ) : (
        <FooterToggle handleClick={handleClick} />
      )}
    </footer>
  );
}

export default Footer;
