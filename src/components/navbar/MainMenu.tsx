import Menu from "@mui/material/Menu";
import MainNavArray from "./MainNavArray";
import { useRouter } from "next/router";
import { CSSProperties, FC } from "react";

interface MainMenuProps {
  anchorEl: null | HTMLElement;
  handleClose: () => void;
}

const MainMenu: FC<MainMenuProps> = ({ anchorEl, handleClose }) => {
  const router = useRouter();

  return (
    <Menu
      className={"mainMenu"}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      disableScrollLock
      open={Boolean(anchorEl)}
      onClose={handleClose}
      sx={
        {
          "--width": "150px",
          "--background-color": router.pathname.startsWith("/cubifood")
            ? "#e7fef4"
            : "var(--primary-light)",
          "--color": router.pathname.startsWith("/cubifood")
            ? "#08834e"
            : "var(--primary-main)",
          "--hover-background-color": router.pathname.startsWith("/cubifood")
            ? "#b7fadd"
            : "#b7d1fa",
          "--hover-color": router.pathname.startsWith("/cubifood")
            ? "#066039"
            : "var(--primary-dark)",
        } as CSSProperties
      }
    >
      <MainNavArray handleClose={handleClose} />
    </Menu>
  );
};

export default MainMenu;
