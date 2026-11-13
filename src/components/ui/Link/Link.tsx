import "./Link.scss";

import clsx from "clsx";

import ArrowBottomIcon from "~/assets/icons/arrow-bottom.svg?react";

interface LinkProps {
  className?: string;
  href: string;
  children: string;
  withArrow?: boolean;
}

const Link = ({ className, href, children, withArrow = false }: LinkProps) => {
  return (
    <a href={href} className={clsx("link", className)}>
      <span className="link__text">{children}</span>
      
			{withArrow && (
        <span className="link__arrow">
          <ArrowBottomIcon />
        </span>
      )}
    </a>
  );
};

export default Link;
