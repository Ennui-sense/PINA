import "./Footer.scss";

import Logo from "../Logo/Logo";
import Menu from "~/components/ui/Menu/Menu";
import Socials from "~/components/ui/Socials/Socials";

import bottlesImageSrc from "~/assets/images/optimized/bottles-754.webp";
import glassImageSrc from "~/assets/images/optimized/glass-400.webp";

import { useMediaQuery } from "~/hooks/useMediaQuery";

const Footer = () => {
  const isMobile = useMediaQuery("mobile");
  const isMobileSmall = useMediaQuery("mobile-s");

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__top">
          <Logo direction="column" theme="light" />
          <Menu
            className="footer__menu"
            direction={!isMobile ? "row" : "column"}
          />

					{isMobileSmall && <Socials className="footer__socials"/>}

          <img
            src={bottlesImageSrc}
            alt=""
            className="footer__image footer__image--bottles"
            width={377}
            height={252}
            loading="lazy"
            decoding="async"
          />
          {!isMobileSmall && (
            <img
              src={glassImageSrc}
              alt=""
              className="footer__image footer__image--glass"
              width={150}
              height={150}
              loading="lazy"
              decoding="async"
            />
          )}
        </div>

        <div className="footer__bottom">
          <p className="footer__text">Авторский выездной бар · Пермь</p>

          <div className="footer__info">
            {!isMobileSmall && <Socials className="footer__socials" />}

            <small className="footer__copyright">
              © {new Date().getFullYear()}
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
