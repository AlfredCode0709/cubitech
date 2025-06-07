import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import MissionStatement from "@/components/common/MissionStatement";
import StartingBlock1 from "@/components/common/startingBlocks/StartingBlock1";
import styles from "@/styles/dev.module.scss";
import { updates } from "@/components/dev/updates";
import { sections } from "@/components/dev/sections";
import { FC, Fragment } from "react";

const DesktopView: FC = () => {
  return (
    <Fragment>
      {/* Starting block of Developer Portal Page */}
      <StartingBlock1
        bgImage={
          "https://ik.imagekit.io/a1fr3d10/desktop/dev/block1.png?updatedAt=1748335763234"
        }
        overlay={"#00000099"}
        title={"Cubitech: Integrate, Innovate, Elevate."}
      />

      {/* Mission Statement */}
      <MissionStatement>
        Cubitech – a portfolio showcasing growth and innovation through regular
        updates.
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

      <Stack className={styles.websiteUpdateDesktop} bgcolor={"primary.light"}>
        <Typography className={styles.websiteUpdateHeader}>
          Website Updates
        </Typography>
        {updates.map((update, index) => (
          <Typography
            key={index}
            className={styles.websiteUpdateDescr}
            sx={{ display: "inline", marginRight: 2 }}
          >
            • {update}
          </Typography>
        ))}
      </Stack>
    </Fragment>
  );
};

export default DesktopView;
