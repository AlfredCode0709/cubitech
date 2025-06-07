import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import MissionStatement from "@/components/common/MissionStatement";
import StartingBlock1 from "@/components/common/startingBlocks/StartingBlock1";
import styles from "@/styles/about.module.scss";
import { sections } from "@/components/about/sections";
import { FC, Fragment } from "react";

const DesktopView: FC = () => {
  return (
    <Fragment>
      {/* Starting block of About Page */}
      <StartingBlock1
        bgImage={
          "https://ik.imagekit.io/a1fr3d10/desktop/about/block1.png?updatedAt=1748252445121"
        }
        bgPosition={"center bottom"}
        title={
          <Fragment>
            Journeying together, hand in hand
            <br />
            towards endless possibilities.
          </Fragment>
        }
      />

      {/* Mission Statement */}
      <MissionStatement>
        Inspired by the Cubitech Vision, our mission is to simplify life through
        seamless integration of emerging technologies.
      </MissionStatement>

      {sections.map((section, index) => (
        <Stack key={index} className={styles.desktop} bgcolor={section.bgColor}>
          {index % 2 === 0 && (
            <Fragment>
              <Box className={styles.left}>
                <Avatar
                  className={styles.avatar}
                  alt={section.alt}
                  src={section.image}
                  variant={"square"}
                />
              </Box>
              <Box className={styles.right}>
                <Typography className={styles.title}>
                  {section.title}
                </Typography>
                <Typography className={styles.descr}>
                  {section.descr}
                </Typography>
              </Box>
            </Fragment>
          )}

          {index % 2 !== 0 && (
            <Fragment>
              <Box className={styles.left}>
                <Typography className={styles.title}>
                  {section.title}
                </Typography>
                <Typography className={styles.descr}>
                  {section.descr}
                </Typography>
              </Box>
              <Box className={styles.right}>
                <Avatar
                  className={styles.avatar}
                  alt={section.alt}
                  src={section.image}
                  variant={"square"}
                />
              </Box>
            </Fragment>
          )}
        </Stack>
      ))}
    </Fragment>
  );
};

export default DesktopView;
