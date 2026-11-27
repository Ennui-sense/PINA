import "./Header.scss";

import Menu from "~/components/ui/Menu/Menu";
import BurgerButton from "~/components/ui/BurgerButton/BurgerButton";
import Logo from "../Logo/Logo";

import { useMediaQuery } from "~/hooks/useMediaQuery";

const Header = () => {
  const isDesktop = useMediaQuery("desktop");
  const isMobileSmall = useMediaQuery("mobile-s");

  return (
    <header className="header">
      <div className="header__inner container">
        {!isMobileSmall ? (
          <Menu
            className="header__menu"
            direction={isDesktop ? "row" : "column"}
          />
        ) : (
          <>
            <Logo className="header__logo" direction="column"/>
            <BurgerButton
              className="header__burger-button"
              onClick={() => console.log(123)}
            />
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
