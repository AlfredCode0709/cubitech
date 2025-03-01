import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import styles from "../../styles/shoppingcart.module.scss";
import { FC } from "react";

interface ShoppingCartHeaderProps {
  totalQuantity: number;
  handleEmptyCart: any;
}

const ShoppingCartHeader: FC<ShoppingCartHeaderProps> = ({
  totalQuantity,
  handleEmptyCart,
}) => {
  return (
    <Stack className={styles.shoppingCartHeader}>
      <Typography className={styles.title}>
        Shopping Cart
        <br />
        <span className={styles.itemNumber}>
          {totalQuantity} {totalQuantity > 0 ? "item(s)" : "item"}
        </span>
      </Typography>
      <Button
        color={"error"}
        variant={"contained"}
        size={"large"}
        startIcon={<RemoveShoppingCartIcon />}
        onClick={handleEmptyCart}
      >
        Empty Cart
      </Button>
    </Stack>
  );
};

export default ShoppingCartHeader;
