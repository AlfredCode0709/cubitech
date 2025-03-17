import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import styles from "@/styles/cubiperk.module.scss";
import { monthsArray } from "./monthsArray";
import { FC, useEffect, useState } from "react";

const getHighlightedMonths = (startIndex: number) => {
  const extendedPeriod = 9;
  return Array.from(
    { length: extendedPeriod },
    (_, i) => (startIndex + i + 1) % 12
  );
};

const MonthCycle: FC = () => {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMonthIndex((prevIndex) => (prevIndex + 1) % 12);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const highlightedIndexes = getHighlightedMonths(currentMonthIndex);
  const pointsExpiryIndex = highlightedIndexes[highlightedIndexes.length - 1];

  return (
    <Grid container className={styles.gridContainer2} spacing={1}>
      {monthsArray.map((month, index) => {
        const isHighlighted = index === currentMonthIndex;
        const isExtendedPeriod = highlightedIndexes.includes(index);
        const showPurchasedText = isHighlighted;
        const showExpiryText = index === pointsExpiryIndex;

        return (
          <Grid size={1} key={index}>
            <Box
              className={`${styles.box} ${
                isHighlighted
                  ? styles.highlighted
                  : isExtendedPeriod
                  ? styles.extendedPeriod
                  : ""
              }`}
            >
              <Typography
                className={
                  isHighlighted ? styles.highlightedText : styles.defaultText
                }
              >
                {month}
              </Typography>
            </Box>
            {showPurchasedText && (
              <Typography className={styles.dynamicText}>
                Transaction
                <br />
                Month
              </Typography>
            )}
            {showExpiryText && (
              <Typography className={styles.dynamicText}>
                Expiry
                <br />
                Month
              </Typography>
            )}
          </Grid>
        );
      })}
    </Grid>
  );
};

export default MonthCycle;
