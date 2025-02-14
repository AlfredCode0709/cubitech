import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import StarIcon from "@mui/icons-material/Star";
import StoreIcon from "@mui/icons-material/Store";
import styles from "../../styles/cubimart.module.scss";
import { FC, Fragment } from "react";
import Button from "@mui/material/Button";

const StorePageHeader: FC<any> = () => {
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

  return (
    <Box className={styles.storePageHeader}>
      <Stack className={styles.storeData}>
        <Stack className={styles.firstSection}>
          <Avatar
            className={styles.avatar}
            alt="Outlet Logo"
            src="/navbar_icons/cubimart_icon.svg"
          />
          <Box className={styles.storeInfo}>
            <Typography className={styles.storeName}>Store Name</Typography>
            <Typography className={styles.storeUserName}>
              Store Username
            </Typography>
          </Box>
        </Stack>

        <Stack className={styles.secondSection}>
          <Divider orientation={"vertical"} flexItem />
          {stats.map((item, index) => (
            <Fragment key={index}>
              <div className={styles.item}>
                <Typography className={styles.number}>
                  {item.icon}&nbsp;
                  {item.number}
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

        <Stack className={styles.thirdSection}>
          <Button className={styles.chatButton} startIcon={<ChatBubbleIcon />}>
            Chat
          </Button>
          <Button
            className={styles.followButton}
            variant={"contained"}
            startIcon={<PersonAddIcon />}
          >
            Follow
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default StorePageHeader;
