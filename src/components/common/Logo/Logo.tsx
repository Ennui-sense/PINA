import clsx from "clsx";
import "./Logo.scss";
import LogoDarkImageSrc from "~/assets/images/logo-dark.svg";
import LogoLightImageSrc from "~/assets/images/logo-light.svg";

interface LogoProps {
  direction?: "row" | "column";
  theme?: "light" | "dark";
  className?: string;
}

const Logo = ({ direction = "row", theme = "dark", className }: LogoProps) => {
  const isDarkTheme = theme === "dark";

  return (
    <a href="/" className={clsx("logo", `logo--${direction}`, className)}>
      <img
        src={isDarkTheme ? LogoDarkImageSrc : LogoLightImageSrc}
        alt="Логотип PINA"
        width={200}
        height={90}
        className="logo__image"
      />

      <p className="logo__text">
        Когда бар становится частью{" "}
        <span className="logo__text-accent">события</span>
      </p>
    </a>
  );
};

export default Logo;
