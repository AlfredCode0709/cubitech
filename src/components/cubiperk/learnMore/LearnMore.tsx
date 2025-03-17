import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import LearnMoreImage from "./LearnMoreImage";
import LearnMoreContent from "./LearnMoreContent";
import styles from "@/styles/cubiperk.module.scss";
import { FC } from "react";

const LearnMore: FC = () => {
  return (
    <Box className={styles.learnMore}>
      <Stack className={styles.content}>
        <LearnMoreImage
          src="https://res.cloudinary.com/dcsfz2ydj/image/upload/v1741068723/block2_b9jiuh.svg"
          alt="CubiPerk"
        />
        <LearnMoreContent />
      </Stack>
    </Box>
  );
};

export default LearnMore;
