import clsx from "clsx";
import type { MouseEventHandler } from "react";
import "./BurgerButton.scss";

import BurgerIcon from "~/assets/icons/burger.svg?react";

interface BurgerButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const BurgerButton = ({ className, onClick }: BurgerButtonProps) => {
  return (
    <button
      type="button"
      aria-label="Открыть меню"
      aria-haspopup="dialog"
      aria-controls="header-menu-dialog"
      className={clsx("burger-button", className)}
      onClick={onClick}
    >
      <BurgerIcon aria-hidden="true" focusable="false" />
    </button>
  );
};

export default BurgerButton;
