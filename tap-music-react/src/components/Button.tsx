interface ButtonProps {
  children: React.ReactNode;
  className: string;
  onClick: () => void;
  disabled?: boolean;
}

function Button({ children, className, onClick, disabled }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${className}__button`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
