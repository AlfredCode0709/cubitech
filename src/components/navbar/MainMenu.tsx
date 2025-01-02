import Menu from "@mui/material/Menu";
import NavArray from "./NavArray";

interface MainMenuProps {
  anchorEl: null | HTMLElement;
  handleClose: () => void;
}

const MainMenu: React.FC<MainMenuProps> = ({ anchorEl, handleClose }) => {
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
    >
      <NavArray handleClose={handleClose} />
    </Menu>
  );
};

export default MainMenu;
