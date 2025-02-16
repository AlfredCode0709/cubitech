import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import styles from "../../styles/index.module.scss";
import { FC, ReactNode } from "react";

interface AccountInfoCardProps {
  title: ReactNode;
  value: string;
  marginTop?: boolean;
}

const AccountInfoCard: FC<AccountInfoCardProps> = ({
  title,
  value,
  marginTop,
}) => (
  <Card
    className={`${styles.card} ${marginTop ? styles.marginTop : ""}`}
    variant="outlined"
  >
    <Typography className={styles.title} component="div">
      {title}
    </Typography>
    <Typography className={styles.value}>{value}</Typography>
  </Card>
);

export default AccountInfoCard;
