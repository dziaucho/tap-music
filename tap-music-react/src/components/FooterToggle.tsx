import Button from "./Button";

interface FooterToggleProps {
  handleClick: () => void;
}

function FooterToggle({ handleClick }: FooterToggleProps) {
  return (
    <Button className="footer-show" onClick={handleClick}>
      &#128064;
    </Button>
  );
}

export default FooterToggle;
