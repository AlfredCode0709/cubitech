import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import StallList from "./StallList";
import styles from "../../../styles/cubifood.module.scss";
import { FC } from "react";

interface OutletFilterProps {
  selectedOption: number | null;
  onSelectedOption: (stallId: number | null) => void;
  numberOfStalls: number;
}

const OutletFilter: FC<OutletFilterProps> = ({
  selectedOption,
  onSelectedOption,
  numberOfStalls,
}) => {
  return (
    <Box className={styles.outletFilter}>
      <Grid container spacing={2}>
        <Grid size={2}>
          <Button
            className={`${styles.allStallsButton} ${
              selectedOption === null ? styles.focused : styles.notFocused
            }`}
            size={"large"}
            onClick={() => onSelectedOption(null)} 
          >
            All Stalls
          </Button>
        </Grid>
        <Grid size={10}>
          <StallList
            selectedStall={selectedOption}
            onSelectStall={onSelectedOption}
            numberOfStalls={numberOfStalls}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default OutletFilter;
