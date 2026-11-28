import "./RequestModal.scss";

import type { RefObject } from "react";

import successImageSrc from "~/assets/images/optimized/success-448.webp";
import errorImageSrc from "~/assets/images/optimized/error-358.webp";

import CrossButton from "~/components/ui/CrossButton/CrossButton";

import clsx from "clsx";

interface RequestModalProps {
  ref: RefObject<HTMLDialogElement | null>;
  onClose: () => void;
  isSuccess: boolean;
}

const RequestModal = ({ ref, onClose, isSuccess }: RequestModalProps) => {
  return (
    <dialog
      aria-labelledby="request-modal-title"
      aria-describedby="request-modal-description"
      className={clsx(
        "request-modal",
        `request-modal--${isSuccess ? "success" : "error"}`,
      )}
      ref={ref}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="request-modal__inner">
        <div className="request-modal__poster">
          <img
            src={isSuccess ? successImageSrc : errorImageSrc}
            alt=""
            width={isSuccess ? 224 : 179}
            height={isSuccess ? 136 : 141}
            loading="lazy"
            decoding="async"
            className="request-modal__image"
          />

          <CrossButton
            className="request-modal__close-button"
            onClick={onClose}
          />
        </div>

        <div className="request-modal__body">
          <h2 id="request-modal-title" className="request-modal__status h3"
            tabIndex={-1} data-dialog-initial-focus autoFocus>
            {isSuccess ? "Успешно!" : "Упс!"}
          </h2>
          <p id="request-modal-description" className="request-modal__description">
            {isSuccess
              ? "Спасибо за обращение! Мы уже получили ваш запрос, свяжемся с вами в ближайшее время"
              : "Что-то пошло не так, попробуйте ещё раз"}
          </p>
        </div>
      </div>
    </dialog>
  );
};

export default RequestModal;
