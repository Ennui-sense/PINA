import "./Cases.scss";

import Section from "~/layouts/Section/Section";

import Link from "~/components/ui/Link/Link";
import CaseCard from "~/components/common/CaseCard/CaseCard";

import { CASES } from "~/data";

const Cases = () => {
  return (
    <Section
      sectionClassName="cases"
      title="Наши работы"
      slogan="За барной стойкой"
      description="Выездная подача и авторские коктейли из портфолио PINA."
    >
      <div className="cases__inner">
        <ul className="cases__list">
          {CASES.map((caseData) => (
            <li className="cases__item" key={caseData.id}>
              <CaseCard data={caseData} />
            </li>
          ))}
        </ul>

				<Link href="/" className="cases__link">Смотреть больше</Link>
      </div>
    </Section>
  );
};

export default Cases;
