import "./Footer.scss";

import Logo from "../Logo/Logo";
import Menu from "~/components/ui/Menu/Menu";
import Socials from "~/components/ui/Socials/Socials";

import bottlesImageSrc from "~/assets/images/bottles.svg"
import glassImageSrc from "~/assets/images/glass.svg"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__top">
          <Logo direction="column" theme="light" />
          <Menu className="footer__menu" direction="row" />

          <img src={bottlesImageSrc} alt="" className="footer__image footer__image--bottles" width={370} height={250} loading="lazy"/>
          <img src={glassImageSrc} alt="" className="footer__image footer__image--glass" width={150} height={150} loading="lazy"/>
        </div>

        <div className="footer__bottom">
          <p className="footer__text">Авторский выездной бар · Пермь</p>

          <div className="footer__info">
            <Socials className="footer__socials" />

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
