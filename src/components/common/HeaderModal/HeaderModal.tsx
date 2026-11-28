import clsx from "clsx";
import "./HeaderModal.scss";
import type { RefObject } from "react";
import CrossButton from "~/components/ui/CrossButton/CrossButton";
import Menu from "~/components/ui/Menu/Menu";
import Socials from "~/components/ui/Socials/Socials";

interface HeaderModalProps {
  className?: string;
  onClose: () => void;
  ref: RefObject<HTMLDialogElement | null>;
}

const HeaderModal = ({ className, onClose, ref }: HeaderModalProps) => {
  return (
    <dialog
      id="header-menu-dialog"
      aria-labelledby="header-menu-title"
      className={clsx("header-modal", className)}
      ref={ref}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="header-modal__inner">
        <h2 id="header-menu-title" className="visually-hidden" tabIndex={-1}
          data-dialog-initial-focus autoFocus>Меню сайта</h2>
        <Menu direction="column" className="header-modal__menu" />

        <div className="header-modal__footer">
          <Socials className="header-modal__socials" />
          <p className="header-modal__text">Авторский выездной бар</p>
        </div>
      </div>

      <CrossButton
        className="header-modal__close-button"
        onClick={onClose}
        position={{ top: 40, right: 25 }}
      />
    </dialog>
  );
};

export default HeaderModal;
