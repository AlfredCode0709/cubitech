import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "@/styles/checkout.module.scss";
import { FC } from "react";

interface EmptyCheckoutDisplayProps {
  imageSrc: string;
  shopLink: string;
}

const EmptyCheckoutDisplay: FC<EmptyCheckoutDisplayProps> = ({
  imageSrc,
  shopLink,
}) => {
  return (
    <Box className={styles.emptyCheckoutDisplay}>
      <Avatar
        className={styles.avatar}
        alt="Empty Checkout Display"
        src={imageSrc}
        variant={"square"}
      />
      <Typography
        className={
          shopLink === "/cubimart" ? styles.titleVariant2 : styles.titleVariant1
        }
      >
        Your Cart is Empty – Let’s Fix That! 
      </Typography>
      <Typography className={styles.subtitle}>
        You haven’t added any items yet. Browse and add your favorites to proceed to checkout.
      </Typography>
      <Button
        className={
          shopLink === "/cubimart"
            ? styles.buttonVariant2
            : styles.buttonVariant1
        }
        size={"large"}
        href={shopLink}
      >
        Continue Shopping
      </Button>
    </Box>
  );
};

export default EmptyCheckoutDisplay;
