import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import ItemImage from "../common/itemData/ItemImage";
import styles from "../../styles/checkout.module.scss";
import { FC } from "react";

interface CartListItemReadOnlyProps {
  item: {
    cartId: number;
    itemId: string;
    name: string;
    price: number;
    brand: string;
    customizations: string[];
    promotions: string[];
    specialNotes?: string;
    option: string;
    quantity: number;
  };
  isCubiMart: boolean;
}

const CartListItemReadOnly: FC<CartListItemReadOnlyProps> = ({
  item,
  isCubiMart,
}) => {
  return (
    <>
      <Grid size={12} container className={styles.cartListItemReadOnly}>
        <Grid size={2}>
          <ItemImage
            imageSrc={
              isCubiMart === true
                ? "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1741345166/cubimart_light_i70igy.svg"
                : "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1741345165/cubifood_light_j6lpn9.svg"
            }
          />
        </Grid>
        <Grid size={1}>
          <Typography className={styles.itemQuantity}>
            {item.quantity}x
          </Typography>
        </Grid>
        <Grid size={7} className={styles.itemData}>
          <Typography className={styles.itemName}>{item.name}</Typography>
          {isCubiMart === true && <Typography className={styles.itemBrand}>{item.brand}</Typography>}
          <Typography className={styles.itemOption}>
            {item.option === "option1"
              ? "Option 1"
              : item.option === "option2"
              ? "Option 2"
              : item.option === "option3"
              ? "Option 3"
              : "Option 4"}
          </Typography>
          {isCubiMart === true && (
            <>
              {item.promotions.length !== 0 && (
                <Typography className={styles.itemPromotions}>
                  {item.promotions.sort().join(", ")}
                </Typography>
              )}
            </>
          )}
          {isCubiMart === false && (
            <>
              {item.customizations.length !== 0 && (
                <Typography className={styles.itemCustomisation}>
                  {item.customizations.sort().join(", ")}
                </Typography>
              )}
              <Typography className={styles.itemSpecialNotes}>
                {item.specialNotes !== ""
                  ? item.specialNotes
                  : "No special notes"}
              </Typography>
            </>
          )}
        </Grid>
        <Grid size={2}>
          <Typography className={styles.itemPrice}>
            ${Number(item.price * item.quantity).toFixed(2)}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default CartListItemReadOnly;
