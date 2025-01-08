import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import styles from "../../styles/cubiperk.module.scss";

const perkItems = [
  {
    id: 1,
    iconSrc: "./cubiperk/icon6.svg",
    alt: "Redeem Deals and Discounts",
    description: "Redeem deals and discounts from CubiGift or CubiPerk catalogue.",
  },
  {
    id: 2,
    iconSrc: "./cubiperk/icon7.svg",
    alt: "Offset Costs",
    description:
      "Use your points to reduce the cost of deliveries and in-store purchases.",
  },
  {
    id: 3,
    iconSrc: "./cubiperk/icon8.svg",
    alt: "Participate in Promotions",
    description:
      "Take part in fun promos like Lucky Draws and other special offers!",
  },
];

const monthsArray = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const getHighlightedMonths = (startIndex: number) => {
  const extendedPeriod = 9;
  return Array.from(
    { length: extendedPeriod },
    (_, i) => (startIndex + i + 1) % 12
  );
};

const HacksTable: React.FC = () => {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMonthIndex((prevIndex) => (prevIndex + 1) % 12);
    }, 2000); // Adjust time (in milliseconds) as needed for the transition cycle

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const highlightedIndexes = getHighlightedMonths(currentMonthIndex);
  const pointsExpiryIndex = highlightedIndexes[highlightedIndexes.length - 1];

  return (
    <Box className={styles.hacksTable}>
      <Typography className={styles.title}>
        Earning Points Is Just the Start — Here’s How to Redeem Them!
      </Typography>

      <Grid container className={styles.gridContainer1} spacing={2}>
        {perkItems.map((item) => (
          <Grid item xs={4} key={item.id}>
            <Box className={styles.box}>
              <Avatar
                className={styles.avatar}
                alt={item.alt}
                src={item.iconSrc}
              />
              <Typography className={styles.description}>
                {item.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Typography className={styles.heading6_descr}>
        Open your Cubitech app now to discover what’s waiting for you!
      </Typography>

      <Typography className={styles.heading3_descr}>
        Finally, here’s the highlight...
      </Typography>

      <Typography className={styles.heading5_descr}>
        Your points will not expire!
      </Typography>

      <Typography className={styles.heading5_descr}>
        As long as you complete at least one points-earning transaction each
        month*, your points will remain valid for an additional 9 months.
      </Typography>

      <Grid container className={styles.gridContainer2} spacing={1}>
        {monthsArray.map((month, index) => {
          const isHighlighted = index === currentMonthIndex;
          const isExtendedPeriod = highlightedIndexes.includes(index);
          const showPurchasedText = isHighlighted; // Show "Purchased Month" for the current month
          const showExpiryText = index === pointsExpiryIndex; // Show "Points Expiry Month" for the last highlighted month

          return (
            <Grid item xs={1} key={index}>
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
              {/* Dynamic text below each block */}
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

      <Typography className={styles.example_descr}>
        If you make a transaction in January, your points remain valid until the
        end of September
        <br />— nine months from the month of your transaction.
      </Typography>

      <Typography className={styles.example_descr}>
        If you make another transaction in February, your points validity shifts
        to the end of October,
        <br />
        extending the period by one month.
      </Typography>

      <Typography className={styles.noticeText}>
        We’re constantly improving CubiPerk to keep it relevant for you.
        <br />
        Check back often to see how we’re making your everyday transactions more
        rewarding.
      </Typography>
    </Box>
  );
};

export default HacksTable;
