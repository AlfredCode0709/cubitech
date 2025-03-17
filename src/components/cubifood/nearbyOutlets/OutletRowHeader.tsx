import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import PaginationVariant2 from "@/components/common/pagination/PaginationVariant2";
import commonStyles from "@/styles/common.module.scss";
import styles from "@/styles/cubifood.module.scss";
import { FC, RefObject } from "react";

interface OutletRowHeaderProps {
  outletIndex: number;
  paginationState: {
    disablePrev: boolean;
    disableNext: boolean;
    disableSkipToPrev: boolean; // Added this
    showPagination: boolean;
  };
  containerRef: RefObject<HTMLDivElement>;
}

const OutletRowHeader: FC<OutletRowHeaderProps> = ({
  outletIndex,
  paginationState,
  containerRef,
}) => {
  return (
    <Stack className={styles.outletRowHeader}>
      <Stack className={styles.leftSection}>
        <Avatar
          className={styles.avatar}
          alt="Outlet Logo"
          src="https://res.cloudinary.com/dcsfz2ydj/image/upload/v1741347930/cubifood_icon_wwe1ks.svg"
        />
        <Typography className={styles.outletName}>
          Outlet Name {outletIndex + 1}
        </Typography>
      </Stack>
      <Stack className={styles.rightSection}>
        <Typography className={styles.distance}>1.99 km</Typography>
        <Divider orientation="vertical" flexItem sx={{ height: "50px" }} />
        {paginationState.showPagination && (
          <PaginationVariant2
            className={commonStyles.iconButtonVariant1}
            containerRef={containerRef}
            disablePrev={paginationState.disablePrev}
            disableNext={paginationState.disableNext}
            disableSkipToPrev={paginationState.disableSkipToPrev}
          />
        )}
      </Stack>
    </Stack>
  );
};

export default OutletRowHeader;
