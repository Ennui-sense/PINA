import type {
  ApproachItem,
  Case,
  FormField,
  MenuItem,
  PriceItem,
  SocialsItem,
} from "./types";

import VkIcon from "~/assets/icons/vk.svg?react";
import TelegramIcon from "~/assets/icons/telegram.svg?react";

import firstCaseImageSrc from "~/assets/images/cases/1.jpg";
import secondCaseImageSrc from "~/assets/images/cases/2.jpg";
import thirdCaseImageSrc from "~/assets/images/cases/3.jpg";

import { PHONE_MASK_OPTIONS } from "./constants";

export const MENU: MenuItem[] = [
  {
    label: "Главная",
    href: "/",
  },
  {
    label: "Прайс",
    href: "/price",
  },
  {
    label: "Кейсы",
    href: "/cases",
  },
  {
    label: "Контакты",
    href: "/contacts",
  },
];

export const SOCIALS: SocialsItem[] = [
  {
    id: 1,
    Icon: VkIcon,
    href: "/",
  },
  {
    id: 2,
    Icon: TelegramIcon,
    href: "/",
  },
];

export const CASES: Case[] = [
  {
    id: 1,
    imageSrc: firstCaseImageSrc,
    date: "Июль 2026",
    title: "Выездной коктейльный бар",
    description: "Бармен готовит авторские коктейли на площадке",
  },
  {
    id: 2,
    imageSrc: secondCaseImageSrc,
    date: "Август 2026",
    title: "Авторская подача",
    description: "Коктейль с цветочным декором  и контрастными слоями",
  },
  {
    id: 3,
    imageSrc: thirdCaseImageSrc,
    date: "Август 2026",
    title: "Коктейли для гостей",
    description: "Напитки готовятся у стойки прямо во время события",
  },
];

export const APPROACH_ITEMS: ApproachItem[] = [
  {
    id: 1,
    title: "Обсуждение мероприятия",
    description:
      "Уточняем город, формат, количество гостей и ваши пожелания. Работаем в Перми и готовы к выезду.",
  },
  {
    id: 2,
    title: "Разработка коктельной карты",
    description:
      "Подбираем меню под ваш вкус: добавляем любимую классику, авторские или безалкогольные варианты.",
  },
  {
    id: 3,
    title: "Согласовываем площадку",
    description:
      "Обсуждаем место, подбираем оборудование и заранее согласуем, где именно встанет бар.",
  },
  {
    id: 4,
    title: "Формируем смету",
    description:
      "Рассчитываем стоимость исходя из числа гостей, времени работы и выбранного меню.",
  },
];

export const PRICE_ITEMS: PriceItem[] = [
  {
    id: 1,
    text: "Разработка коктельной карты",
  },
  {
    id: 2,
    text: "Расчет и согласование закупки",
  },
  {
    id: 3,
    text: "Доставка и барное оборудование",
  },
  {
    id: 4,
    text: "Работа бармена на мероприятии",
  },
];

export const FORM_FIELDS: FormField[] = [
  {
    id: "name",
    inputType: "text",
    placeholder: "Как к вам обращаться",
    label: "Имя",
    type: "input",
    required: true,
    maxLength: 50,
  },
  {
    id: "contact",
    inputType: "tel",
    placeholder: "+7 (999) 123-45-67",
    label: "Телефон",
    type: "input",
    maskOptions: PHONE_MASK_OPTIONS,
    required: true,
  },
  {
    id: "date",
    inputType: "date",
    placeholder: "ДД.ММ.ГГГГ",
    label: "Дата события",
    type: "input",
  },
  {
    id: "guests",
    inputType: "number",
    placeholder: "Например, 30",
    label: "Количество гостей",
    type: "input",
    min: 1,
    max: 999,
  },
  {
    id: "eventFormat",
    inputType: "text",
    placeholder: "Свадьба, корпоратив, вечеринка",
    label: "Формат мероприятия",
    type: "input",
    maxLength: 100,
  },
  {
    id: "comment",
    placeholder: "Опишите детали, которые считаете нужным знать бармену",
    label: "Комментарий",
    type: "textarea",
    maxLength: 800,
  },
];
