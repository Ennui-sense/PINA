import type { Case, MenuItem, SocialsItem } from "./types";

import VkIcon from "~/assets/icons/vk.svg?react";
import TelegramIcon from "~/assets/icons/telegram.svg?react";

import firstCaseImageSrc from "~/assets/images/cases/1.jpg";
import secondCaseImageSrc from "~/assets/images/cases/2.jpg";
import thirdCaseImageSrc from "~/assets/images/cases/3.jpg";

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
