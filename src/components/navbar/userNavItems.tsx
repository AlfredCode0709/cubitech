import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";

export const userNavItems = [
  {
    icon: <AccountBoxIcon className={"icon"} />,
    href: "#",
    label: "Account",
  },
  {
    icon: <LogoutIcon className={"icon"} />,
    href: "/auth/logout",
    label: "Logout",
  },
];
