import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { CASES } from "~/data";
import CaseCard from "~/components/common/CaseCard/CaseCard";

const CasesSlider = () => (
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
);

export default CasesSlider;
