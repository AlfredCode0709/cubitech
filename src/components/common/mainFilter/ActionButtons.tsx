import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import commonStyles from "@/styles/common.module.scss";
import { FC } from "react";

interface ActionButtonsProps {
  isCubiFood: boolean;
  handleClearFilters: () => void;
  handleApplyFilters: () => void;
  isAnyFilterSelected: boolean;
}

const ActionButtons: FC<ActionButtonsProps> = ({
  isCubiFood,
  handleApplyFilters,
  handleClearFilters,
  isAnyFilterSelected,
}) => {
  return (
    <Grid size={4} className={commonStyles.filterOptions}>
      <Button
        size="large"
        onClick={handleClearFilters}
        className={isCubiFood ? commonStyles.clearAllButtonVariant1 : ""}
      >
        Clear All
      </Button>
      <Button
        variant="contained"
        size="large"
        className={isCubiFood ? commonStyles.applyFiltersButtonVariant1 : ""}
        color="primary"
        onClick={handleApplyFilters}
        disabled={!isAnyFilterSelected}
      >
        Apply Filters
      </Button>
    </Grid>
  );
};

export default ActionButtons;
