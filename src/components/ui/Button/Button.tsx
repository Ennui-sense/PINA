import "./Button.scss";

import clsx from "clsx";

interface ButtonProps {
  className?: string;
  children: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

const Button = ({
  className,
  children,
  type = "button",
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={clsx("button", className, disabled && "button--disabled")}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
