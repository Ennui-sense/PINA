import "./Hero.scss";

import Logo from "~/components/common/Logo/Logo";

import Link from "~/components/ui/Link/Link";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__inner container">
        <Logo className="hero__logo"/>

        <Link className="hero__link" withArrow href="/">
          Заказать
        </Link>
      </div>
    </section>
  );
};

export default Hero;
