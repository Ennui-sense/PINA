import "./Header.scss";

import Menu from "~/components/ui/Menu/Menu";
import BurgerButton from "~/components/ui/BurgerButton/BurgerButton";

import Logo from "../Logo/Logo";
import HeaderModal from "../HeaderModal/HeaderModal";

import { useMediaQuery } from "~/hooks/useMediaQuery";
import type { MouseEvent } from "react";
import { useDialog } from "~/hooks/useDialog";

const Header = () => {
  const isDesktop = useMediaQuery("desktop");
  const isMobileSmall = useMediaQuery("mobile-s");

  const { dialogRef, openDialog, closeDialog } = useDialog();

  const handleOpen = (event: MouseEvent<HTMLButtonElement>) => {
    openDialog(event.currentTarget, event.detail > 0);
  };

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
            <Logo className="header__logo" direction="column" />
            <BurgerButton
              className="header__burger-button"
              onClick={handleOpen}
            />
          </>
        )}
      </div>

      <HeaderModal
        className="header__modal"
        onClose={closeDialog}
        ref={dialogRef}
      />
    </header>
  );
};

export default Header;
