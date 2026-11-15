import "./Hero.scss";

import Logo from "~/components/common/Logo/Logo";

import Link from "~/components/ui/Link/Link";
import manImageSrc from "~/assets/images/man.svg";
import handImageSrc from "~/assets/images/hand.svg";

const Hero = () => {
  return (
    <section className="hero">
      <img src={manImageSrc} alt="Рисованное изображение мужчины бармена" width={1200} height={1200} className="hero__image hero__image--man" />
      <img src={handImageSrc} alt="Рисованное изображение руки с бокалом" width={400} height={400} className="hero__image hero__image--hand" />

      <div className="hero__inner container">
        <Logo className="hero__logo" />

        <Link className="hero__link" withArrow href="/">
          Заказать
        </Link>
      </div>
    </section>
  );
};

export default Hero;
