import React from "react";

export type MenuItem = {
	label: string;
	href: string;
}

export type SocialsItem = {
	id: number;
	Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
	href: string
}

export type Case = {
	id: number;
	imageSrc: string;
	date: string;
	title: string;
	description: string;
}