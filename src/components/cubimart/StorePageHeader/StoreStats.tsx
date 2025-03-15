import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import StoreIcon from "@mui/icons-material/Store";
import styles from "../../../styles/cubimart.module.scss";
import { FC, Fragment } from "react";

const stats = [
  {
    icon: <StoreIcon className={styles.icon} />,
    number: "999",
    label: "Products",
  },
  {
    icon: <FavoriteIcon className={styles.icon} />,
    number: "99.9K",
    label: "Followers",
  },
  {
    icon: <StarIcon className={styles.icon} />,
    number: "4.9/5",
    label: "Ratings",
  },
];

const StoreStats: FC = () => (
  <Stack className={styles.storeStats}>
    <Divider orientation={"vertical"} flexItem />
    {stats.map((item, index) => (
      <Fragment key={index}>
        <div className={styles.item}>
          <Typography className={styles.number}>
            {item.icon}&nbsp;{item.number}
          </Typography>
          <Typography className={styles.label}>{item.label}</Typography>
        </div>
        {index < stats.length - 1 && (
          <Divider orientation={"vertical"} flexItem />
        )}
      </Fragment>
    ))}
    <Divider orientation={"vertical"} flexItem />
  </Stack>
);

export default StoreStats;
