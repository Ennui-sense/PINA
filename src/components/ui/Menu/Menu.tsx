import "./Menu.scss";
import clsx from "clsx";
import { MENU } from "~/constants";

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
            {label}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
