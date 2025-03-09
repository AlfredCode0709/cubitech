import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import styles from "../../../styles/cubimart.module.scss";
import { FC } from "react";

const StoreActions: FC<any> = () => (
  <Stack className={styles.storeActions}>
    <Button
      className={styles.chatButton}
      startIcon={<ChatBubbleIcon />}
      size={"large"}
    >
      Chat
    </Button>
    <Button
      variant={'contained'}
      startIcon={<PersonAddIcon />}
      size={"large"}
    >
      Follow
    </Button>
  </Stack>
);

export default StoreActions;
