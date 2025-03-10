import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "../../styles/cubiperk.module.scss";
import { FC } from "react";

const LearnMoreContent: FC = () => {
  return (
    <Box className={styles.rightContent}>
      <Typography className={styles.title} component={"div"}>
        Boost Your Points with CubiPerk
        <br />
        Points Conversion!
        <Typography className={styles.subtitle} component={"div"}>
          Make the most of your miles — convert them
          <br />
          to CubiPerk points today!
        </Typography>
      </Typography>

      <Button variant="contained" size="large" color="primary">
        Learn More
      </Button>
    </Box>
  );
};

export default LearnMoreContent;
