import "./Price.scss";

import Section from "~/layouts/Section/Section";

import { PRICE_ITEMS } from "~/constants";

const Price = () => {
  return (
    <Section
      sectionClassName="price"
      title="Формат и стоимость"
      slogan="Бар под ключ от 12 000 ₽"
      isCenterPosition
      description="Точная стоимость зависит от количества гостей, времени работы и коктейльной карты. Алкоголь и ингредиенты оплачиваются отдельно"
    >
      <div className="price__inner">
				<p className="price__text h3">Что входит</p>

				<ul className="price__list">
					{PRICE_ITEMS.map(({id, text}) => (
						<li className="price__item" key={id}>{text}</li>
					))}
				</ul>
			</div>
    </Section>
  );
};

export default Price;
