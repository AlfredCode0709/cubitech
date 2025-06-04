export interface NavItem {
  avatars: {
    [key: string]: string;
  };
  href: string;
  label: string;
}

export const navItems: NavItem[] = [
  {
    avatars: {
      cubitech: "https://ik.imagekit.io/a1fr3d10/about_us_light_icon.svg",
      cubifood: "https://ik.imagekit.io/a1fr3d10/about_us_cubifood_icon.svg",
      cubimart: "https://ik.imagekit.io/a1fr3d10/about_us_cubimart_icon.svg",
    },
    href: "/about",
    label: "About Us",
  },
];
