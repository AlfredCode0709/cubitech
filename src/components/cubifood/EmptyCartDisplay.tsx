import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "../../styles/shoppingcart.module.scss";
import { FC } from "react";

const EmptyCartDisplay: FC<any> = () => {
  return (
    <Box className={styles.emptyCart}>
      <Avatar
        className={styles.avatar}
        alt="Empty Shopping Cart"
        src={
          "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1740031731/emptycart_icon_tripu2.svg"
        }
        variant={"square"}
      />
      <Typography className={styles.title}>
        It’s Lonely in Here – Add Items to Your Cart!
      </Typography>
      <Typography className={styles.subtitle}>
        Once you add items, they’ll show up right here in your cart.
      </Typography>
      <Button className={styles.button} size={"large"} href={"/cubifood"}>
        Start Shopping Now
      </Button>
    </Box>
  );
};

export default EmptyCartDisplay;
