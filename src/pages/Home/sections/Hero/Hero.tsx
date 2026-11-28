import "./Hero.scss";

import Logo from "~/components/common/Logo/Logo";

import Link from "~/components/ui/Link/Link";

import manSmallSrc from "~/assets/images/optimized/man-800.webp";
import manImageSrc from "~/assets/images/optimized/man-1200.webp";
import manLargeSrc from "~/assets/images/optimized/man-1800.webp";
import handImageSrc from "~/assets/images/optimized/hand-544.webp";

import { useMediaQuery } from "~/hooks/useMediaQuery";

const Hero = () => {
  const isTablet = useMediaQuery("tablet");
  const isMobileSmall = useMediaQuery("mobile-s");

  return (
    <section className="hero">
      <h1 className="visually-hidden">PINA — авторский выездной бар в Перми</h1>
      <img
        src={manImageSrc}
        srcSet={`${manSmallSrc} 800w, ${manImageSrc} 1200w, ${manLargeSrc} 1800w`}
        sizes="(max-width: 29.99875rem) 100vw, (max-width: 47.99875rem) 94vh, 105vh"
        fetchPriority="high"
        alt="Рисованное изображение мужчины бармена"
        width={1167}
        height={1056}
        className="hero__image hero__image--man"
      />
      {!isTablet && (
        <img
          src={handImageSrc}
          alt="Рисованное изображение руки с бокалом"
          width={272}
          height={334}
          className="hero__image hero__image--hand"
        />
      )}

      <div className="hero__inner container">
        {!isMobileSmall && (
          <Logo
            className="hero__logo"
            direction={isTablet ? "column" : "row"}
          />
        )}

        <Link className="hero__link" withArrow href="#section--request">
          Заказать
        </Link>
      </div>
    </section>
  );
};

export default Hero;
