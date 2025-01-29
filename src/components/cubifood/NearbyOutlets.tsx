import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import styles from "../../styles/cubifood.module.scss";
import { Fragment } from "react";

const NearbyOutlets: React.FC<any> = () => {
  // Mock data for the shop list
  const shopList = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    image: `./cubitech_brands/cubifood_light.svg`,
  }));

  return (
    <Box className={styles.nearbyOutlets}>
      <Typography className={styles.title}>Nearby Outlets</Typography>

      {Array.from({ length: 3 }).map((_, index) => (
        <Fragment key={index}>
          {/* Outlet Header */}
          <Stack className={styles.outletHeader}>
            <Stack className={styles.leftSection}>
              <Avatar
                className={styles.avatar}
                alt="Outlet Logo"
                src="./navbar_icons/cubifood_icon.svg"
              />
              <Typography className={styles.outletName}>Outlet Name</Typography>
            </Stack>
            <Stack className={styles.rightSection}>
              <Typography className={styles.distance}>1.99 km</Typography>
              <IconButton className={styles.outletViewButton}>
                <ArrowForwardIos />
              </IconButton>
            </Stack>
          </Stack>

          {/* Shop List */}
          <Box className={styles.shopList}>
            <Grid
              container
              spacing={2}
              className={styles.gridContainer}
              wrap={"nowrap"}
            >
              {shopList.map((shop) => (
                <Grid item key={shop.id} sx={{ flex: "0 0 auto" }}>
                  <Card variant={"outlined"} className={styles.shopCard}>
                    <CardActionArea>
                      <Box className={styles.cardMediaContainer}>
                        <CardMedia
                          className={styles.cardMedia}
                          component={"img"}
                          image={shop.image}
                          alt={"Shop Image"}
                        />
                      </Box>
                      <CardContent className={styles.cardContent}>
                        <Typography className={styles.name}>
                          Shop Name {shop.id}
                        </Typography>
                        <Chip className={styles.chip} label="9mins" />
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Fragment>
      ))}
    </Box>
  );
};

export default NearbyOutlets;
