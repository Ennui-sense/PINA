import "./Header.scss";

import Menu from "~/components/ui/Menu/Menu";

import { useMediaQuery } from "~/hooks/useMediaQuery";

const Header = () => {
  const isDesktop = useMediaQuery("desktop")

  return (
    <header className="header">
      <div className="header__inner container">
        <Menu className="header__menu" direction={isDesktop ? "row" : "column"} />
      </div>
    </header>
  );
};

export default Header;
