import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import styles from "../../styles/cubifood.module.scss";
import { quickStartItems } from "./quickStartItems";
import { FC } from "react";

const QuickStart: FC = () => {
  return (
    <Box className={styles.quickStart}>
      <Stack className={styles.content}>
        {quickStartItems.map((item, index) => (
          <Card
            key={index}
            className={styles.actionCard}
            variant={"outlined"}
            sx={{
              bgcolor: item.bgcolor,
            }}
          >
            <Typography className={styles.text}>{item.name}</Typography>
          </Card>
        ))}
      </Stack>
    </Box>
  );
};

export default QuickStart;
