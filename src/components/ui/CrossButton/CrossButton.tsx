import "./CrossButton.scss";

import clsx from "clsx";

import CrossIcon from "~/assets/icons/cross.svg?react";

interface CrossButtonProps {
  className?: string;
  onClick?: () => void;
  position?: { top: number; right: number };
}

const CrossButton = ({
  className,
  onClick,
  position = { top: 12, right: 12 },
}: CrossButtonProps) => {
  return (
    <button
      type="button"
      aria-label="Закрыть окно"
      className={clsx("cross-button", className)}
      onClick={onClick}
      style={{
        top: `${position.top / 16}rem`,
        right: `${position.right / 16}rem`,
      }}
    >
      <CrossIcon aria-hidden="true" focusable="false" />
    </button>
  );
};

export default CrossButton;
