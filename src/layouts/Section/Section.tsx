import "./Section.scss";

import type { ReactNode } from "react";

import clsx from "clsx";

import Link from "~/components/ui/Link/Link";

interface SectionProps {
  variant?: "default" | "red" | "green" | "yellow";
  children: ReactNode;
  direction?: "row" | "column";
  title: string;
  slogan: string;
  description?: string;
  sectionClassName: string;
  isCenterPosition?: boolean;
  withButton?: boolean;
}

const Section = ({
  variant = "default",
  children,
  direction = "column",
  title,
  slogan,
  description,
  sectionClassName,
  isCenterPosition = false,
  withButton = false,
}: SectionProps) => {
  const hasVariant = variant !== "default";

  return (
    <section
      className={clsx(
        "section",
        hasVariant && `section--${variant}`,
        `section--${direction}`,
        isCenterPosition && "section--center",
      )}
      id={`section--${sectionClassName}`}
    >
      <div className="section__inner container">
        <header className="section__header">
          <div className="header__info">
            <h2 className="section__title">{title}</h2>
            <p className="section__slogan">{slogan}</p>
          </div>

          {description && <p className="section__description">{description}</p>}
          {withButton && (
            <Link className="section__link" href="/">
              Заказать
            </Link>
          )}
        </header>

        <div className={clsx("section__body", sectionClassName)}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
