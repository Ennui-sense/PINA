import "./Faq.scss";

import Section from "~/layouts/Section/Section";

import { APPROACH_ITEMS } from "~/data";

import starImageSrc from "~/assets/images/optimized/star-840.webp";

const Faq = () => {
  return (
    <Section
      sectionClassName="faq"
      title="Часто задаваемые вопросы"
      slogan="Перед праздником"
      variant="green"
      direction="row"
      description={`Рассказываем, куда можем выехать, как выбрать место для бара и что указать в заявке.`}
    >
      <div className="faq__inner">
        <dl className="faq__list">
          {APPROACH_ITEMS.map(({ id, title, description }) => (
            <div className="faq__item" key={id}>
              <dt className="faq__title h3">{title}</dt>
              <dd className="faq__description">{description}</dd>
            </div>
          ))}
        </dl>
      </div>

      <img
        src={starImageSrc}
        alt=""
        className="faq__image"
        width={420}
        height={460}
        loading="lazy"
        decoding="async"
      />
    </Section>
  );
};

export default Faq;
