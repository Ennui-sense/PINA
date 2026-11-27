import "./Cases.scss";
import "swiper/css";

import Section from "~/layouts/Section/Section";

import Link from "~/components/ui/Link/Link";
import CaseCard from "~/components/common/CaseCard/CaseCard";

import { CASES } from "~/data";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

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
          <div className="cases__slider">
            <Swiper
              modules={[Pagination]}
              slidesPerView={1.15}
              className="cases__swiper"
              spaceBetween={8}
              centeredSlides
              pagination={{
                el: ".cases__pagination",
                type: "bullets",
                clickable: true,
                bulletClass: "cases__pagination-button",
                bulletActiveClass: "cases__pagination-button--active",
                renderBullet: (index, className) =>
                  `<button class="${className}" type="button" aria-label="Перейти к слайду ${index + 1}"></button>`,
              }}
            >
              {CASES.map((caseData) => (
                <SwiperSlide className="cases__slide" key={caseData.id}>
                  <CaseCard data={caseData} />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="cases__pagination"></div>
          </div>
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
