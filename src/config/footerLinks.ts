export type FooterLinkItem = {
  label: string;
  href?: string;
};

export type FooterSection = {
  title: string;
  links: FooterLinkItem[];
};

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "Get to Know Us",
    links: [{ label: "About Us", href: "/about" }],
  },
  {
    title: "Consumers",
    links: [],
  },
  {
    title: "For Developers",
    links: [{ label: "Developer Portal", href: "/dev" }],
  },
];
