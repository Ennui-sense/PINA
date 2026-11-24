import "./RequestModal.scss";

import type { RefObject } from "react";

import successImageSrc from "~/assets/images/success.svg";
import errorImageSrc from "~/assets/images/error.svg";

import CrossIcon from "~/assets/icons/cross.svg?react";
import clsx from "clsx";

interface RequestModalProps {
  ref: RefObject<HTMLDialogElement | null>;
  onClose: () => void;
  isSuccess: boolean;
  setIsOpenModal: (value: boolean) => void;
}

const RequestModal = ({
  ref,
  onClose,
  isSuccess,
  setIsOpenModal,
}: RequestModalProps) => {
  return (
    <dialog
      className={clsx(
        "request-modal",
        `request-modal--${isSuccess ? "success" : "error"}`,
      )}
      ref={ref}
      onClose={() => setIsOpenModal(false)}
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
            className="request-modal__image"
          />

          <button
            type="button"
            className="request-modal__close-button"
            onClick={onClose}
          >
            <CrossIcon />
          </button>
        </div>

        <div className="request-modal__body">
          <p className="request-modal__status h3">
            {isSuccess ? "Успешно!" : "Упс!"}
          </p>
          <p className="request-modal__description">
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
