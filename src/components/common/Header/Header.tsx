import "./Header.scss";

import Menu from "~/components/ui/Menu/Menu";

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner container">
        <Menu className="header__menu" />
      </div>
    </header>
  );
};

export default Header;
