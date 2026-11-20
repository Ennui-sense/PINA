import clsx from "clsx";
import "./Socials.scss";
import { SOCIALS } from "~/data";

interface SocialsProps {
  className?: string;
}

const Socials = ({ className }: SocialsProps) => {
  return (
    <div className={clsx("socials", className)}>
      {SOCIALS.map(({ Icon, id, href }) => (
        <a href={href} className="socials__link" key={id}>
          <Icon />
        </a>
      ))}
    </div>
  );
};

export default Socials;
