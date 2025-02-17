import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import Head from "next/head";
import styles from "../styles/shoppingcart.module.scss";
import { useCart } from "@/contexts/CartContext";
// import { useRouter } from "next/router";
import { FC } from "react";

const ShoppingCart: FC<any> = () => {
  const { state, dispatch } = useCart(); // Access cart state
  // const router = useRouter();

  const handleCheckout = () => {
    // router.push("/checkout");
    console.log("Pressed!!!");
  };

  const removeItem = (name: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: name });
  };

  return (
    <>
      <Head>
        <title>Shopping Cart | Cubitech</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cubitech.ico" />
      </Head>
      <main>
        <Box className={styles.shoppingCart}>
          <Stack className={styles.header}>
            <Stack>
              <Typography className={styles.title}>Shopping Cart</Typography>
            </Stack>
            <Stack>
              <Button
                color={"error"}
                variant={"contained"}
                size={"large"}
                startIcon={<DeleteIcon />}
              >
                Empty Cart
              </Button>
            </Stack>
          </Stack>

          <Box className={styles.cartContent}>
            {state.items.length === 0 ? (
              <Box className={styles.emptyCartDisplay}>
                <Avatar
                  className={styles.avatar}
                  alt="Empty Shopping Cart"
                  src={"/no_cart_icon.svg"}
                  variant={"square"}
                />
                <Typography className={styles.title}>
                  It’s Lonely in Here – Add Items to Your Cart!
                </Typography>
                <Typography className={styles.subtitle}>
                  Once you add items, they’ll show up right here in your cart.
                </Typography>
              </Box>
            ) : (
              <Grid container spacing={2}>
                {state.items.map((item, index) => (
                  <Grid size={6} key={index}>
                    <Box className={styles.cartItem}>
                      <Typography variant="h6">{item.name}</Typography>
                      <Typography variant="body1">
                        Price: ${item.price}
                      </Typography>
                      <Typography variant="body1">
                        Quantity: {item.quantity}
                      </Typography>
                      <Button
                        onClick={() => removeItem(item.name)}
                        color="secondary"
                      >
                        Remove
                      </Button>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            )}

            {/* <Box className={styles.cartActions}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleCheckout}
                disabled={state.items.length === 0}
              >
                Proceed to Checkout
              </Button>
            </Box> */}
          </Box>
        </Box>
      </main>
    </>
  );
};

export default ShoppingCart;
