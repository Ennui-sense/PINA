import clsx from "clsx";
import "./Button.scss";

interface ButtonProps {
  className?: string;
  children: string;
  type?: "button" | "submit";
}

const Button = ({ className, children, type = "button" }: ButtonProps) => {
  return (
    <button type={type} className={clsx("button", className)}>
      {children}
    </button>
  );
};

export default Button;
