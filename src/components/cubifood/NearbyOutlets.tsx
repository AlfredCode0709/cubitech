import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid2";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import styles from "../../styles/cubifood.module.scss";
import { FC, Fragment } from "react";

interface NearbyOutletsProps {
  numberOfStalls: number;
}

const NearbyOutlets: FC<NearbyOutletsProps> = ({ numberOfStalls }) => {
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
                src="/navbar_icons/cubifood_icon.svg"
              />
              <Typography className={styles.outletName}>Outlet Name</Typography>
            </Stack>
            <Stack className={styles.rightSection}>
              <Typography className={styles.distance}>1.99 km</Typography>
              <IconButton className={styles.outletViewButton}>
                <ArrowForwardIosIcon />
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
              {Array.from({ length: numberOfStalls }).map((_, index) => (
                <Grid key={index} sx={{ flex: "0 0 auto" }}>
                  <Card variant={"outlined"} className={styles.shopCard}>
                    <CardActionArea href={`/cubifood/outlet/${index + 1}`}>
                      <Box className={styles.cardMediaContainer}>
                        <CardMedia
                          className={styles.cardMedia}
                          component={"img"}
                          image={"/cubitech_brands/cubifood_light.svg"}
                          alt={"Menu Image"}
                        />
                      </Box>
                      <CardContent className={styles.cardContent}>
                        <Typography className={styles.name}>
                          Shop Name {index + 1}
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
