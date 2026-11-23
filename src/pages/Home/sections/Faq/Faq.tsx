import "./Faq.scss";

import Section from "~/layouts/Section/Section";

import { APPROACH_ITEMS } from "~/data";

import starImageSrc from "~/assets/images/star.svg";

const Faq = () => {
  return (
    <Section
      sectionClassName="approach"
      title="Часто задаваемые вопросы"
      slogan="Перед праздником"
      variant="green"
      direction="row"
      description={`Рассказываем, куда можем выехать, как выбрать место для бара и что указать в заявке.`}
    >
      <div className="approach__inner">
        <dl className="approach__list">
          {APPROACH_ITEMS.map(({ id, title, description }) => (
            <div className="approach__item" key={id}>
              <dt className="approach__title h3">{title}</dt>
              <dd className="approach__description">{description}</dd>
            </div>
          ))}
        </dl>
      </div>

      <img src={starImageSrc} alt="" className="approach__image" width={420} height={460} loading="lazy" />
    </Section>
  )
}

export default Faq;
