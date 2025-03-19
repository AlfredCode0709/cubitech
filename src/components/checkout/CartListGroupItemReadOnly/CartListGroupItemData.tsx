import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import CartListGroupItemHeader from "./CartListGroupItemHeader";
import ItemImage from "@/components/common/itemData/ItemImage";
import styles from "@/styles/checkout.module.scss";
import { CubiFoodItem, CubiMartItem } from "@/contexts/CartContext";
import { FC, Fragment } from "react";

interface CartListGroupItemData {
  isCubiMart: boolean;
  items: CubiFoodItem[] | CubiMartItem[];
  key: number;
}

const CartListGroupItemData: FC<CartListGroupItemData> = ({
  isCubiMart,
  items,
  key
}) => {
  return (
    <Fragment key={key}>
      {/* Group Header */}
      <CartListGroupItemHeader isCubiMart={isCubiMart} />

      {/* List Items */}
      {items.map((item) => (
        <Grid key={item.cartId} size={12} container className={styles.listItemReadOnly}>
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

            {isCubiMart === true && "brand" in item && (
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

            {isCubiMart === true && "promotions" in item && (
              <Fragment>
                {item.promotions?.length !== 0 && (
                  <Typography className={styles.itemPromotions}>
                    {item.promotions?.sort().join(", ")}
                  </Typography>
                )}
              </Fragment>
            )}

            {isCubiMart === false &&
              "customisations" in item &&
              "specialNotes" in item && (
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
      ))}
    </Fragment>
  );
};

export default CartListGroupItemData;
