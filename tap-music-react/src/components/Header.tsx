interface HeaderProps {
  headingText: string;
  paragraphText: string;
}

function Header({ headingText, paragraphText }: HeaderProps) {
  return (
    <header className="header">
      <h1 className="header__heading">
        <span>&#10024;</span> {headingText} <span>&#10024;</span>
      </h1>
      <p className="header__paragraph">{paragraphText}</p>
    </header>
  );
}

export default Header;
