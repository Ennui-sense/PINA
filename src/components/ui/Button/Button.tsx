import "./Button.scss";

import clsx from "clsx";

interface ButtonProps {
  className?: string;
  children: string;
  type?: "button" | "submit";
  disabled?: boolean;
	onClick?: () => void;
}

const Button = ({
  className,
  children,
  type = "button",
  disabled = false,
	onClick
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={clsx("button", className, disabled && "button--disabled")}
      disabled={disabled}
			onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
