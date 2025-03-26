import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid2";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";
import CartListGroupItemHeader from "./CartListGroupItemHeader";
import ItemImage from "@/components/common/itemData/ItemImage";
import styles from "@/styles/cart.module.scss";
import { CubiFoodItem, CubiMartItem, useCart } from "@/contexts/CartContext";
import { CSSProperties, FC, Fragment, useEffect, useState } from "react";

interface CartListGroupItemData {
  isCubiMart: boolean;
  items: CubiFoodItem[] | CubiMartItem[];
}

const CartListGroupItemData: FC<CartListGroupItemData> = ({
  isCubiMart,
  items,
}) => {
  const { dispatch } = useCart();
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

  const isAllChecked =
    items.length > 0 && items.every((item) => checkedItems[item.cartId]);

  useEffect(() => {
    if (items.length > 0) {
      const allChecked = items.every((item) => checkedItems[item.cartId]);
      if (allChecked !== isAllChecked) {
        setCheckedItems(
          Object.fromEntries(items.map((item) => [item.cartId, allChecked]))
        );
      }
    }
  }, [isAllChecked, items, checkedItems]);

  const isCubiMartItem = (
    item: CubiMartItem | CubiFoodItem
  ): item is CubiMartItem => {
    return isCubiMart;
  };

  const handleItemCheckbox = (cartId: number) => {
    setCheckedItems((prev) => {
      const updatedCheckedItems = { ...prev, [cartId]: !prev[cartId] };
      return updatedCheckedItems;
    });
  };

  const handleAllCheckbox = () => {
    const newCheckedState = !isAllChecked;
    setCheckedItems(
      Object.fromEntries(items.map((item) => [item.cartId, newCheckedState]))
    );
  };

  const handleQuantityChange = (cartId: number, newQuantity: number) => {
    if (newQuantity < 1) return;

    dispatch({
      type: "UPDATE_CART_ITEM_QUANTITY",
      payload: { cartId, quantity: newQuantity },
      isCubiMart,
    });
  };

  const handleDeleteItem = (cartId: number) => {
    dispatch({ type: "REMOVE_CART_ITEM", payload: cartId, isCubiMart });

    setCheckedItems((prev) => {
      const updatedCheckedItems = { ...prev };
      delete updatedCheckedItems[cartId];
      return updatedCheckedItems;
    });
  };

  const handleDeleteAllItems = () => {
    if (!items.length) return;

    dispatch({
      type: "CLEAR_CART_GROUP",
      payload: { itemId: items[0].itemId, isCubiMart },
    });

    setCheckedItems({});
  };

  return (
    <Fragment>
      {/* Group Header */}
      <CartListGroupItemHeader
        isCubiMart={isCubiMart}
        isChecked={isAllChecked}
        onCheckboxChange={handleAllCheckbox}
        onDeleteAll={handleDeleteAllItems}
      />

      {/* List Items */}
      {items.map((item) => {
        const isChecked = checkedItems[item.cartId] || false;
        return (
          <Grid
            size={12}
            container
            key={item.cartId}
            className={styles.listItem}
          >
            <Grid size={0.75} className={styles.checkbox}>
              <Checkbox
                checked={isChecked}
                onChange={() => handleItemCheckbox(item.cartId)}
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
              <Typography className={styles.itemName}>
                {item.itemName}
              </Typography>

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

              {isCubiMartItem(item) && (
                <Fragment>
                  <Typography className={styles.itemBrandName}>
                    {item.brandName}
                  </Typography>
                  {item.promotions?.length !== 0 && (
                    <Typography className={styles.itemSelectedPromo}>
                      {item.promotions?.sort().join(", ")}
                    </Typography>
                  )}
                </Fragment>
              )}

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
                    color="primary"
                    onClick={() =>
                      handleQuantityChange(item.cartId, item.quantity - 1)
                    }
                  >
                    <RemoveIcon />
                  </IconButton>
                )}
                <Typography
                  className={styles.quantity}
                  sx={
                    {
                      "--margin-top": isChecked ? 0 : "6.5px",
                      "--width": isChecked ? "50px" : "85%",
                      "--justify-content": isChecked ? "center" : "flex-end",
                    } as CSSProperties
                  }
                >
                  {isChecked ? item.quantity : `Quantity: ${item.quantity}`}
                </Typography>
                {isChecked && (
                  <IconButton
                    color="primary"
                    onClick={() =>
                      handleQuantityChange(item.cartId, item.quantity + 1)
                    }
                  >
                    <AddIcon />
                  </IconButton>
                )}
              </Box>
            </Grid>
            <Grid size={isChecked ? 0.75 : 0}>
              {isChecked && (
                <IconButton
                  sx={{ marginTop: "-6.5px" }}
                  onClick={() => handleDeleteItem(item.cartId)}
                >
                  <DeleteIcon color="error" />
                </IconButton>
              )}
            </Grid>
          </Grid>
        );
      })}
    </Fragment>
  );
};

export default CartListGroupItemData;
