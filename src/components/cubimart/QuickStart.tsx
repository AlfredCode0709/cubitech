import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid2";
import styles from "../../styles/cubimart.module.scss";
import { FC } from "react";
import { quickStartItems } from "./quickstartItems";

const QuickStart: FC<any> = () => {
  return (
    <Box className={styles.quickStart}>
      <Grid container spacing={2}>
        {quickStartItems.map((item, index) => (
          <Grid key={index} size={3}>
            <Card variant="outlined">{item.name}</Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default QuickStart;
