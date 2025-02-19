import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import Head from "next/head";
import CardMediaContainer from "@/components/common/CardMediaContainer";
import styles from "../styles/shoppingcart.module.scss";
import { FC } from "react";
import IconButton from "@mui/material/IconButton";

const ShoppingCart: FC<any> = () => {
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
              <Typography className={styles.itemNumber}>2 item(s)</Typography>
            </Stack>
            <Stack>
              <Button
                color={"error"}
                variant={"contained"}
                size={"large"}
                startIcon={<RemoveShoppingCartIcon />}
              >
                Empty Cart
              </Button>
            </Stack>
          </Stack>

          <Grid container spacing={2} className={styles.cartData}>
            <Grid size={9} className={styles.cartList}>
              <Grid size={12} container className={styles.cartListItemHeader}>
                <Grid size={1}>
                  <Checkbox />
                </Grid>
                <Grid size={10} display={"flex"} alignItems={"center"} gap={2}>
                  <Avatar
                    className={styles.avatar}
                    alt="Store / Outlet Name"
                    src="/cubitech.svg"
                  />
                  <Typography>Store Name</Typography>
                </Grid>
                <Grid size={1}>
                  <IconButton>
                    <DeleteIcon color={"error"} />
                  </IconButton>
                </Grid>
              </Grid>

              <Grid
                size={12}
                container
                className={styles.cartListItem}
                spacing={2}
              >
                {/* Item Data */}
                <Grid size={1}>
                  <Checkbox />
                </Grid>
                <Grid size={1.75}>
                  <Card variant={"outlined"}>
                    <CardMediaContainer
                      imageSrc={"./cubitech_brands/cubitech_light.svg"}
                      alt={"Item Image"}
                    />
                  </Card>
                </Grid>
                <Grid size={5}>
                  <Typography className={styles.itemName}>Item Name</Typography>
                  <Typography className={styles.itemOption}>Option</Typography>
                  <Typography className={styles.itemCustomisation}>
                    Customisation
                  </Typography>
                  <Typography className={styles.itemSpecialNotes}>
                    No Special Notes
                  </Typography>
                </Grid>
                <Grid size={1.5}>
                  <Typography className={styles.itemPrice}>$9999.99</Typography>
                </Grid>
                <Grid size={2.75}>
                  <Box className={styles.options}>
                    <IconButton className={styles.button}>
                      <RemoveIcon />
                    </IconButton>
                    <Typography className={styles.quantity}>1</Typography>
                    <IconButton className={styles.button}>
                      <AddIcon />
                    </IconButton>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid size={3}></Grid>
          </Grid>
        </Box>
      </main>
    </>
  );
};

export default ShoppingCart;
