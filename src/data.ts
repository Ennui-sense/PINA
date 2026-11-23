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
    title: "Вы выезжаете за пределы Перми?",
    description:
      "Да, готовы выехать за пределы Перми. Укажите город или адрес площадки в комментарии к заявке, чтобы мы могли согласовать выезд.",
  },
  {
    id: 2,
    title: "Можно добавить безалкогольные коктейли?",
    description:
      "Да, можем добавить безалкогольные коктейли. Расскажите нам, какие напитки или вкусы вам нравятся.",
  },
  {
    id: 3,
    title: "Как выбрать место для бара на площадке?",
    description:
      "Расскажите, где пройдёт мероприятие. Мы заранее обсудим площадку и согласуем с вами, где поставить бар.",
  },
  {
    id: 4,
    title: "Что нужно указать в заявке?",
    description:
      "Оставьте имя и телефон. Если уже знаете дату, формат мероприятия и примерное число гостей, добавьте их. Пожелания к меню можно указать в комментарии.",
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
    maxLength: 25,
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
    maxLength: 70,
  },
  {
    id: "comment",
    placeholder: "Опишите детали, которые считаете нужным знать бармену",
    label: "Комментарий",
    type: "textarea",
    maxLength: 500,
  },
];
