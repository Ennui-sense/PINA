import "./CaseCard.scss";

import type { Case } from "~/types";

interface CaseCarsProps {
  data: Case;
}

const CaseCard = ({ data }: CaseCarsProps) => {
  const { imageSrc, title, description, date } = data;

  return (
    <article className="case-card">
      <div className="case-card__inner">
        <div className="case-card__media">
          <img src={imageSrc} alt="" className="case-card__image" />
        </div>

        <div className="case-card__body">
          <p className="case-card__date">{date}</p>
          <h3 className="case-card__title">{title}</h3>
          <p className="case-card__description">{description}</p>
        </div>
      </div>
    </article>
  );
};

export default CaseCard;
