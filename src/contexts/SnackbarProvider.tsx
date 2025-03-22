import Grow from "@mui/material/Grow";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import {
  closeSnackbar,
  SnackbarProvider as NotistackProvider,
} from "notistack";
import { FC, ReactNode } from "react";

interface SnackbarProviderProps {
  children: ReactNode;
}

const SnackbarProvider: FC<SnackbarProviderProps> = ({ children }) => {
  return (
    <NotistackProvider
      maxSnack={3}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      TransitionComponent={Grow}
      action={(snackbarId) => (
        <IconButton
          onClick={() => closeSnackbar(snackbarId)}
          sx={{ color: "inherit" }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      )}
    >
      {children}
    </NotistackProvider>
  );
};

export default SnackbarProvider;
