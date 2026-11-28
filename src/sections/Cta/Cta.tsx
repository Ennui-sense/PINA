import "./Cta.scss";

import Section from "~/layouts/Section/Section";

import womanImageSrc from "~/assets/images/optimized/woman-756.webp";
import womanLargeSrc from "~/assets/images/optimized/woman-1512.webp";

const Cta = () => {
  return (
    <Section
      variant="yellow"
      sectionClassName="cta"
      title="Ваше событие в PINA."
      slogan="За ваш повод!"
      description="Бар целиком — под ваше мероприятие. Корпоративы, дни рождения, свадьбы, закрытые вечеринки"
      direction="row"
      withLink
    >
      <div className="cta__inner">
        <img
          src={womanImageSrc}
          srcSet={`${womanImageSrc} 756w, ${womanLargeSrc} 1512w`}
          sizes="(max-width: 29.99875rem) 100vw, (max-width: 63.99875rem) 450px, (max-width: 119.99875rem) 600px, 750px"
          alt="Нарисованная женщина сидит и пьет коктейль"
          className="cta__image"
          width={756}
          height={494}
          loading="lazy"
          decoding="async"
        />
      </div>
    </Section>
  );
};

export default Cta;
