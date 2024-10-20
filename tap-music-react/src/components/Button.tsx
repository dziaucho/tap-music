interface ButtonProps {
  children: string;
  className: string;
  onClick: () => void;
}

function Button({ children, className, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className={className + "__button"}>
      {children}
    </button>
  );
}

export default Button;
