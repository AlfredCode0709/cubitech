import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import CartListGroupItemHeader from "./CartListGroupItemHeader";
import ItemImage from "@/components/common/itemData/ItemImage";
import styles from "@/styles/checkout.module.scss";
import { CubiFoodItem, CubiMartItem } from "@/contexts/CartContext";
import { CSSProperties, FC, Fragment } from "react";

interface CartListGroupItemData {
  isCubiMart: boolean;
  items: CubiFoodItem[] | CubiMartItem[];
}

const CartListGroupItemData: FC<CartListGroupItemData> = ({
  isCubiMart,
  items,
}) => {
  return (
    <Fragment>
      {/* Group Header */}
      <CartListGroupItemHeader isCubiMart={isCubiMart} />

      {/* List Items */}
      {items.map((item) => (
        <Grid
          key={item.cartId}
          size={12}
          container
          className={styles.listItemReadOnly}
        >
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
            <Typography className={styles.itemName}>{item.itemName}</Typography>

            <Typography
              className={styles.itemOption}
              sx={
                {
                  "--color": isCubiMart ? "var(--primary-main)" : "#08834e",
                } as CSSProperties
              }
            >
              {item.option === "option1"
                ? "Option 1"
                : item.option === "option2"
                ? "Option 2"
                : item.option === "option3"
                ? "Option 3"
                : "Option 4"}
            </Typography>

            {isCubiMart === true && "brandName" in item && (
              <Typography className={styles.itemBrandName}>
                {item.brandName}
              </Typography>
            )}

            {isCubiMart === true && "promotions" in item && (
              <Fragment>
                {item.promotions?.length !== 0 && (
                  <Typography className={styles.itemSelectedPromo}>
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
