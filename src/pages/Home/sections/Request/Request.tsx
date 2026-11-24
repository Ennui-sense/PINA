import "./Request.scss";

import Section from "~/layouts/Section/Section";

import RequestForm from "~/components/common/RequestForm/RequestForm";
import RequestModal from "~/components/common/RequestModal/RequestModal";

import { useMediaQuery } from "~/hooks/useMediaQuery";
import { useRef, useState, useEffect } from "react";

const Request = () => {
  const [success, setSuccess] = useState<boolean>(false);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const modalRef = useRef<HTMLDialogElement>(null);
  const isTablet = useMediaQuery("tablet");

  useEffect(() => {
    document.body.style.overflow = isOpenModal ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpenModal]);

  useEffect(() => {
    if (!isOpenModal) return;

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isOpenModal]);

  const handleClose = () => {
    modalRef.current?.close();
  };

  const handleOpen = () => {
    modalRef.current?.showModal();
    setIsOpenModal(true);
  };

  return (
    <Section
      title="Связаться с PINA."
      slogan="Расскажите о событии"
      sectionClassName="request"
      description="Укажите как можно больше деталей, это поможет нам быстрее обработать ваше предложение, а также разработать авторскую коктейльную карту и рассчитать стоимость"
      direction={!isTablet ? "row" : "column"}
    >
      <div className="request__body">
        <p className="request__title h3">Заявка на выездной бар</p>
        <p className="request__description">Поля со звёздочкой обязательны</p>

        <RequestForm onOpenModal={handleOpen} setSuccess={setSuccess} />
      </div>

      <RequestModal
        ref={modalRef}
        onClose={handleClose}
        isSuccess={success}
        setIsOpenModal={setIsOpenModal}
      />
    </Section>
  );
};

export default Request;
