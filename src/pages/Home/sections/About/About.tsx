import "./About.scss";

import Section from "~/layouts/Section/Section";
import AboutImage from "~/assets/images/optimized/about.webp";

const About = () => {
  return (
    <Section
      sectionClassName="about"
      title="О выездном баре"
      slogan="Выездной бар — что это?"
      variant="red"
    >
      <div className="about__inner">
        <div className="about__decoration about__decoration--1"></div>
        <p className="about__text">
          Полноценный коктейльный бар, который приезжает на ваше мероприятие. Мы
          привозим всё необходимое, создаём авторские коктейли, удивляем
          необычными сочетаниями и превращаем приготовление напитков в часть
          атмосферы
        </p>

        <div className="about__media">
          <div className="about__decoration about__decoration--2"></div>
          <img
            src={AboutImage}
            alt="Изображение выездного бара"
            className="about__image"
            width={763}
            height={524}
            loading="lazy"
            decoding="async"
          />
          <div className="about__decoration about__decoration--3"></div>
        </div>
      </div>
    </Section>
  );
};

export default About;
