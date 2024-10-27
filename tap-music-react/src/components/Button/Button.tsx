import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className: string;
  onClick?: () => void;
  isDisabled?: boolean;
  type?: "button" | "submit" | "reset";
}

function Button({
  children,
  className,
  onClick,
  isDisabled = false,
  type = "button",
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${className}__button`}
      disabled={isDisabled}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
