import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import ItemImage from "../common/ItemImage";
import styles from "../../styles/checkout.module.scss";
import { FC } from "react";

interface CartListItemReadOnlyProps {
  item: {
    cartId: number;
    itemId: string;
    name: string;
    option: string;
    price: number;
    quantity: number;
    customizations: string[];
    specialNotes?: string;
  };
}

const CartListItemReadOnly: FC<CartListItemReadOnlyProps> = ({ item }) => {
  return (
    <>
      <Grid size={12} container className={styles.cartListItemReadOnly}>
        <Grid size={2}>
          <ItemImage imageSrc={"/cubitech_brands/cubitech_light.svg"} />
        </Grid>
        <Grid size={1}>
          <Typography className={styles.itemQuantity}>
            {item.quantity}x
          </Typography>
        </Grid>
        <Grid size={7} className={styles.itemData}>
          <Typography className={styles.itemName}>{item.name}</Typography>
          <Typography className={styles.itemOption}>
            {item.option === "option1"
              ? "Option 1"
              : item.option === "option2"
                ? "Option 2"
                : item.option === "option3"
                  ? "Option 3"
                  : "Option 4"}
          </Typography>
          {item.customizations.length !== 0 && (
            <Typography className={styles.itemCustomisation}>
              {item.customizations.sort().join(", ")}
            </Typography>
          )}
          <Typography className={styles.itemSpecialNotes}>
            {item.specialNotes !== "" ? item.specialNotes : "No special notes"}
          </Typography>
        </Grid>
        <Grid size={2}>
          <Typography className={styles.itemPrice}>
            ${item.price * item.quantity}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default CartListItemReadOnly;
