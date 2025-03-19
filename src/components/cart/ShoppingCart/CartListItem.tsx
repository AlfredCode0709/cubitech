import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid2";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";
import ItemImage from "@/components/common/itemData/ItemImage";
import styles from "@/styles/cart.module.scss";
import { CubiFoodItem, CubiMartItem, useCart } from "@/contexts/CartContext";
import { CSSProperties, FC, Fragment, useState } from "react";

interface CartListItemProps {
  isCubiMart: boolean;
  item: CubiMartItem | CubiFoodItem;
}

const CartListItem: FC<CartListItemProps> = ({ isCubiMart, item }) => {
  const { dispatch } = useCart();
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const isCubiMartItem = (
    item: CubiMartItem | CubiFoodItem
  ): item is CubiMartItem => {
    return isCubiMart;
  };

  const handleIncreaseQuantity = () => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { cartId: item.cartId, quantity: item.quantity + 1 },
      isCubiMart,
    });
  };

  const handleDecreaseQuantity = () => {
    if (item.quantity > 1) {
      dispatch({
        type: "UPDATE_QUANTITY",
        payload: { cartId: item.cartId, quantity: item.quantity - 1 },
        isCubiMart,
      });
    }
  };

  const handleRemoveItem = () => {
    dispatch({ type: "REMOVE_CART_ITEM", payload: item.cartId, isCubiMart });
  };

  const handleCheckbox = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <Grid size={12} container className={styles.cartListItem}>
      <Grid size={0.75}>
        <Checkbox
          sx={{ marginTop: "-25px" }}
          checked={isChecked}
          onChange={handleCheckbox}
        />
      </Grid>
      <Grid size={1.75}>
        <ItemImage
          imageSrc={
            isCubiMart
              ? "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1741345166/cubimart_light_i70igy.svg"
              : "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1741345165/cubifood_light_j6lpn9.svg"
          }
        />
      </Grid>
      <Grid size={5} className={styles.itemData}>
        <Typography className={styles.itemName}>{item.name}</Typography>

        {isCubiMartItem(item) && (
          <Fragment>
            <Typography className={styles.itemBrand}>{item.brand}</Typography>
            {item.promotions?.length !== 0 && (
              <Typography className={styles.itemSelectedPromo}>
                {item.promotions?.sort().join(", ")}
              </Typography>
            )}
          </Fragment>
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

        {!isCubiMartItem(item) && (
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
      <Grid size={1.5}>
        <Typography className={styles.itemPrice}>
          ${Number(item.price * item.quantity).toFixed(2)}
        </Typography>
      </Grid>
      <Grid size={isChecked ? 2.25 : 3}>
        <Box className={styles.options}>
          {isChecked && (
            <IconButton
              color={"primary"}
              onClick={handleDecreaseQuantity}
              disabled={item.quantity === 1}
            >
              <RemoveIcon />
            </IconButton>
          )}
          <Typography
            className={styles.quantity}
            sx={
              {
                "--margin-top": isChecked ? 0 : "6.5px",
                "--width": isChecked ? "50px" : "",
                "--justify-content": isChecked ? 'center' : 'flex-end'
              } as CSSProperties
            }
          >
            {isChecked ? item.quantity : `Quantity: ${item.quantity}`}
          </Typography>
          {isChecked && (
            <IconButton color={"primary"} onClick={handleIncreaseQuantity}>
              <AddIcon />
            </IconButton>
          )}
        </Box>
      </Grid>
      <Grid size={isChecked ? 0.75 : 0}>
        {isChecked && (
          <IconButton sx={{ marginTop: "-6.5px" }} onClick={handleRemoveItem}>
            <DeleteIcon color={"error"} />
          </IconButton>
        )}
      </Grid>
    </Grid>
  );
};

export default CartListItem;
