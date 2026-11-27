import clsx from "clsx";
import "./BurgerButton.scss";

import BurgerIcon from "~/assets/icons/burger.svg?react";

interface BurgerButtonProps {
  onClick: () => void;
  className?: string;
}

const BurgerButton = ({ className, onClick }: BurgerButtonProps) => {
  return (
    <button
      type="button"
      className={clsx("burger-button", className)}
      onClick={onClick}
    >
      <BurgerIcon />
    </button>
  );
};

export default BurgerButton;
