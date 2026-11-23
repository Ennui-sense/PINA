import React from "react";
import type { RequestFormValues } from "./schemas/requestSchema";

export type MenuItem = {
  label: string;
  href: string;
};

export type SocialsItem = {
  id: number;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  href: string;
};

export type Case = {
  id: number;
  imageSrc: string;
  date: string;
  title: string;
  description: string;
};

export type ApproachItem = {
  id: number;
  title: string;
  description: string;
};

export type PriceItem = {
  id: number;
  text: string;
};

export type FormField = {
  id: keyof RequestFormValues;
  placeholder: string;
  label: string;
  type: "input" | "textarea";
  inputType?: "text" | "number" | "email" | "tel" | "date";
  maskOptions?: {
    mask: string;
    replacement: { _: RegExp };
    showMask: boolean;
  };
  maxLength?: number;
  min?: number;
  max?: number;
  required?: boolean;
};

export type Breakpoints = "mobile-s" | "mobile" | "tablet" | "desktop" | "desktop-l"