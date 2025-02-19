import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid2";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CardMediaContainer from "../common/CardMediaContainer";
import styles from "../../styles/cubifood.module.scss";
import { FC, Fragment, useEffect, useRef, useState } from "react";

interface NearbyOutletsProps {
  numberOfStalls: number;
}

const NearbyOutlets: FC<NearbyOutletsProps> = ({ numberOfStalls }) => {
  const shopListRef = useRef<HTMLDivElement | null>(null);
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    if (shopListRef.current) {
      const isOverflowing =
        shopListRef.current.scrollWidth > shopListRef.current.clientWidth;
      setIsScrollable(isOverflowing);
    }
  }, [numberOfStalls]);

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
              <IconButton
                className={styles.outletViewButton}
                href={`/cubifood/outlet/${index + 1}`}
              >
                <ArrowForwardIosIcon />
              </IconButton>
            </Stack>
          </Stack>

          {/* Shop List */}
          <Box
            ref={shopListRef}
            className={styles.shopList}
            sx={{
              overflowX: isScrollable ? "auto" : "hidden", // Hide scrollbar if not needed
              whiteSpace: "nowrap",
            }}
          >
            <Grid
              container
              spacing={2}
              className={styles.content}
              wrap={"nowrap"}
            >
              {Array.from({ length: numberOfStalls }).map((_, index) => (
                <Grid key={index} sx={{ flex: "0 0 auto" }}>
                  <Card variant={"outlined"} className={styles.shopCard}>
                    <CardActionArea href={`/cubifood/outlet/${index + 1}`}>
                      <CardMediaContainer
                        imageSrc={"/cubitech_brands/cubifood_light.svg"}
                        alt={"Menu Item"}
                      />
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
