import "./Menu.scss";

import clsx from "clsx";

import { MENU } from "~/data";

import { NavLink } from "react-router";

interface MenuProps {
  className?: string;
  direction?: "row" | "column";
}

const Menu = ({ className, direction = "column" }: MenuProps) => {
  return (
    <nav className={clsx("menu", className, `menu--${direction}`)}>
      <ul className="menu__list">
        {MENU.map(({ label, href }) => (
          <li className="menu__item" key={href}>
            <NavLink to={href} className="menu__link">
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
