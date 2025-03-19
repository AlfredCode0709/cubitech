import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import ItemImage from "@/components/common/itemData/ItemImage";
import styles from "@/styles/checkout.module.scss";
import { CubiFoodItem, CubiMartItem } from "@/contexts/CartContext";
import { CSSProperties, FC, Fragment } from "react";

interface CartListItemReadOnlyProps {
  item: CubiFoodItem | CubiMartItem;
  isCubiMart: boolean;
  isFirst: boolean;
}

const CartListItemReadOnly: FC<CartListItemReadOnlyProps> = ({
  item,
  isCubiMart,
  isFirst,
}) => {
  // Safely narrow type based on isCubiMart flag
  const isFoodItem = !isCubiMart && (item as CubiFoodItem).customisations !== undefined;
  const isMartItem = isCubiMart && (item as CubiMartItem).brand !== undefined;

  return (
    <Fragment>
      <Grid
        size={12}
        container
        className={styles.cartListItemReadOnly}
        sx={
          {
            "--border-top": isFirst ? "1px solid var(--divider-color)" : "",
          } as CSSProperties
        }
      >
        <Grid size={2}>
          <ItemImage
            imageSrc={
              isCubiMart
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

          {isMartItem && "brand" in item && (
            <Typography className={styles.itemBrand}>{item.brand}</Typography>
          )}

          <Typography className={styles.itemOption}>
            {item.option === "option1"
              ? "Option 1"
              : item.option === "option2"
              ? "Option 2"
              : item.option === "option3"
              ? "Option 3"
              : "Option 4"}
          </Typography>

          {isMartItem && "promotions" in item && (
            <Fragment>
              {item.promotions?.length !== 0 && (
                <Typography className={styles.itemPromotions}>
                  {item.promotions?.sort().join(", ")}
                </Typography>
              )}
            </Fragment>
          )}

          {isFoodItem && "customisations" in item && (
            <Fragment>
              {item.customisations?.length !== 0 && (
                <Typography className={styles.itemCustomisation}>
                  {item.customisations?.sort().join(", ")}
                </Typography>
              )}
              <Typography className={styles.itemSpecialNotes}>
                {item.specialNotes !== ""
                  ? item.specialNotes
                  : "No special notes"}
              </Typography>
            </Fragment>
          )}
        </Grid>
        <Grid size={2}>
          <Typography className={styles.itemPrice}>
            ${Number(item.price * item.quantity).toFixed(2)}
          </Typography>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default CartListItemReadOnly;
