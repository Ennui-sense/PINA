import "./Request.scss"

import Section from "~/layouts/Section/Section"

import RequestForm from "~/components/common/RequestForm/RequestForm"

import { useMediaQuery } from "~/hooks/useMediaQuery"

const Request = () => {
	const isTablet = useMediaQuery("tablet")

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

        <RequestForm />
      </div>
    </Section>
  )
}

export default Request
