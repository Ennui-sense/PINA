import type { MenuItem, SocialsItem } from "./types";

import VkIcon from "~/assets/icons/vk.svg?react";
import TelegramIcon from "~/assets/icons/telegram.svg?react";

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
		href: "/"
  },
  {
    id: 2,
    Icon: TelegramIcon,
		href: "/"
  },
];
