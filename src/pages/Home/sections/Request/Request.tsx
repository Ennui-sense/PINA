import "./Request.scss"

import Section from "~/layouts/Section/Section"

import RequestForm from "~/components/common/RequestForm/RequestForm"

const Request = () => {
  return (
    <Section
      title="Связаться с PINA."
      slogan="Расскажите о событии"
      sectionClassName="request"
      description="Укажите как можно больше деталей, это поможет нам быстрее обработать ваше предложение, а также разработать авторскую коктейльную карту и рассчитать стоимость"
      direction="row"
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
