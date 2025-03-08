import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "../../styles/cart.module.scss";
import { FC } from "react";

interface EmptyCartDisplayProps {
  imageSrc: string;
  shopLink: string;
}

const EmptyCartDisplay: FC<EmptyCartDisplayProps> = ({
  imageSrc,
  shopLink,
}) => {
  return (
    <Box className={styles.emptyCartDisplay}>
      <Avatar
        className={styles.avatar}
        alt="Empty Shopping Cart"
        src={imageSrc}
        variant={"square"}
      />
      <Typography
        className={
          shopLink === "/cubimart" ? styles.titleVariant2 : styles.titleVariant1
        }
      >
        It’s Lonely in Here – Add Items to Your Cart!
      </Typography>
      <Typography className={styles.subtitle}>
        Once you add items, they’ll show up right here in your cart.
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
        Start Shopping Now
      </Button>
    </Box>
  );
};

export default EmptyCartDisplay;
