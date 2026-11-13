import "./Approach.scss";

import Section from "~/layouts/Section/Section";

import { APPROACH_ITEMS } from "~/constants";

const Approach = () => {
  return (
    <Section
      sectionClassName="approach"
      title="Как мы работаем"
      slogan="Индивидуальный подход"
      variant="green"
      direction="row"
      description={`Каждое мероприятие уникально —\u00A0это отдельная история, которую мы разделяем вместе с вами`}
    >
      <div className="approach__inner">
				<dl className="approach__list">
					{APPROACH_ITEMS.map(({id, title, description}) => (
						<div className="approach__item" key={id}>
							<dt className="approach__title h3">{title}</dt>
							<dd className="approach__description">{description}</dd>
						</div>
					))}
				</dl>
			</div>
    </Section>
  )
}

export default Approach;
