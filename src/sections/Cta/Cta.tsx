import "./Cta.scss";

import Section from "~/layouts/Section/Section";

import womanImageSrc from "~/assets/images/woman.svg";

const Cta = () => {
  return (
    <Section
      variant="yellow"
      sectionClassName="cta"
      title="Ваше событие в PINA."
      slogan="За ваш повод!"
      description="Бар целиком — под ваше мероприятие. Корпоративы, дни рождения, свадьбы, закрытые вечеринки"
      direction="row"
      withButton
    >
      <div className="cta__inner">
        <img
          src={womanImageSrc}
          alt="Нарисованная женщина сидит и пьет коктейль"
          className="cta__image"
          width={750}
          height={500}
          loading="lazy"
        />
      </div>
    </Section>
  );
};

export default Cta;
