interface ButtonProps {
  children: React.ReactNode;
  className: string;
  onClick: () => void;
  isDisabled?: boolean;
}

function Button({ children, className, onClick, isDisabled }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${className}__button`}
      {...(isDisabled && { disabled: true })}
    >
      {children}
    </button>
  );
}

export default Button;
