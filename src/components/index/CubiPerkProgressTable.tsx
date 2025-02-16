import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import styles from "../../styles/index.module.scss";
import { FC } from "react";

const CubiPerkProgressTable: FC<any> = () => {
  return (
    <Box className={styles.cubiPerkProgressTable}>
      <Link href={"/cubiperk"}>
        <Typography className={styles.cubiperk}>
          CUBI<span className={styles.subColor}>Perk</span>
        </Typography>
      </Link>
      <Grid container className={styles.content} spacing={1}>
        {Array.from({ length: 4 }).map((_, index) => (
          <Grid item xs={3} key={index}>
            <Card className={styles.card} variant={"outlined"}>
              <Grid container className={styles.cardContainer}>
                <Grid item xs={4}>
                  <Box className={styles.leftBox}>
                    <Avatar
                      className={styles.avatar}
                      key={"CubiPerk"}
                      alt={"CubiPerk"}
                      src={"/navbar_icons/cubiperk_icon.svg"}
                    />
                  </Box>
                </Grid>
                <Grid item xs={8}>
                  <Box className={styles.rightBox}>
                    <Typography className={styles.name}>
                      Challenge Name
                    </Typography>
                    <Typography className={styles.summary}>
                      Challenge Summary
                    </Typography>
                    <Button
                      className={styles.button}
                      size={"small"}
                      variant={"text"}
                    >
                      Take the challenge
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CubiPerkProgressTable;
