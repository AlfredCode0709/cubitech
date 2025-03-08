import Stack from "@mui/material/Stack";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import styles from "../../styles/cart.module.scss";
import { FC } from "react";

interface ToggleProps {
  isCubiMart: boolean;
  setIsCubiMart: (value: boolean) => void;
}

const Toggle: FC<ToggleProps> = ({ isCubiMart, setIsCubiMart }) => {
  return (
    <Stack className={styles.toggle}>
      <Typography className={styles.brands}>
        CUBI<span className={styles.subColor1}>Food</span>
      </Typography>

      <Switch
        checked={isCubiMart}
        onChange={() => setIsCubiMart(!isCubiMart)}
        sx={{
          "& .MuiSwitch-thumb": {
            backgroundColor: isCubiMart ? "#c03853" : "#09b96d",
          },
          "& .MuiSwitch-track": {
            backgroundColor: isCubiMart ? "#f2a4af" : "#8de6c1",
            opacity: 1,
          },
          "& .Mui-checked .MuiSwitch-thumb": {
            backgroundColor: "#c03853",
          },
          "& .Mui-checked .MuiSwitch-track": {
            backgroundColor: "#f2a4af",
          },
        }}
      />

      <Typography className={styles.brands}>
        CUBI<span className={styles.subColor2}>Mart</span>
      </Typography>
    </Stack>
  );
};

export default Toggle;
