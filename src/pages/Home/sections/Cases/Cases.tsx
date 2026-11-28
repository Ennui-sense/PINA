import "./Cases.scss";
import { lazy, Suspense } from "react";

import Section from "~/layouts/Section/Section";

import Link from "~/components/ui/Link/Link";
import CaseCard from "~/components/common/CaseCard/CaseCard";

import { CASES } from "~/data";

const CasesSlider = lazy(() => import("./CasesSlider"));

import { useMediaQuery } from "~/hooks/useMediaQuery";

const Cases = () => {
  const isMobileSmall = useMediaQuery("mobile-s");

  return (
    <Section
      sectionClassName="cases"
      title="Наши работы"
      slogan="За барной стойкой"
      description="Выездная подача и авторские коктейли из портфолио PINA."
    >
      <div className="cases__inner">
        {isMobileSmall ? (
          <Suspense fallback={
            <div className="cases__slider cases__slider-fallback">
              <div className="cases__slider-preview">
                {CASES.map((caseData) => <CaseCard key={caseData.id} data={caseData} />)}
              </div>
              <div className="cases__pagination" aria-hidden="true">
                {CASES.map((item, index) => <span key={item.id}
                  className={`cases__pagination-button${index === 0 ? " cases__pagination-button--active" : ""}`} />)}
              </div>
            </div>
          }>
            <CasesSlider />
          </Suspense>
        ) : (
          <ul className="cases__list">
            {CASES.map((caseData) => (
              <li className="cases__item" key={caseData.id}>
                <CaseCard data={caseData} />
              </li>
            ))}
          </ul>
        )}

        <Link href="/" className="cases__link">
          Смотреть больше
        </Link>
      </div>
    </Section>
  );
};

export default Cases;
