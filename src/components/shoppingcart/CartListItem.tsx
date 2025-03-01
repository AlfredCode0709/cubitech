import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid2";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";
import ItemImage from "../common/ItemImage";
import styles from "../../styles/shoppingcart.module.scss";
import { FC } from "react";
import { useCart } from "@/contexts/CartContext";

interface CartListItemProps {
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

const CartListItem: FC<CartListItemProps> = ({ item }) => {
  const { dispatch } = useCart();

  const handleIncreaseQuantity = () => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { cartId: item.cartId, quantity: item.quantity + 1 },
    });
  };

  const handleDecreaseQuantity = () => {
    if (item.quantity > 1) {
      dispatch({
        type: "UPDATE_QUANTITY",
        payload: { cartId: item.cartId, quantity: item.quantity - 1 },
      });
    }
  };

  const handleRemoveItem = () => {
    dispatch({ type: "REMOVE_ITEM", payload: item.cartId });
  };

  return (
    <>
      <Grid size={12} container className={styles.cartListItem}>
        <Grid size={0.75}>
          <Checkbox sx={{ marginTop: "-6.5px" }} />
        </Grid>
        <Grid size={1.75}>
          <ItemImage imageSrc={"/cubitech_brands/cubitech_light.svg"} />
        </Grid>
        <Grid size={5} className={styles.itemData}>
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
        <Grid size={1.5}>
          <Typography className={styles.itemPrice}>
            ${item.price * item.quantity}
          </Typography>
        </Grid>
        <Grid size={2.25}>
          <Box className={styles.options}>
            <IconButton
              color={"primary"}
              onClick={handleDecreaseQuantity}
              disabled={item.quantity === 1}
            >
              <RemoveIcon />
            </IconButton>
            <Typography className={styles.quantity}>{item.quantity}</Typography>
            <IconButton color={"primary"} onClick={handleIncreaseQuantity}>
              <AddIcon />
            </IconButton>
          </Box>
        </Grid>
        <Grid size={0.75}>
          <IconButton sx={{ marginTop: "-6.5px" }} onClick={handleRemoveItem}>
            <DeleteIcon color={"error"} />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
};

export default CartListItem;
