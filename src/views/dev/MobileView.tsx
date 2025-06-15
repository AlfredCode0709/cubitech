import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import MissionStatement from "@/components/common/MissionStatement";
import StartingBlock1 from "@/components/common/startingBlocks/StartingBlock1";
import styles from "@/styles/dev.module.scss";
import { updates } from "@/components/dev/updates";
import { sections } from "@/components/dev/sections";
import { FC, Fragment } from "react";

const MobileView: FC = () => {
  return (
    <Fragment>
      {/* Starting block of Developer Portal Page */}
      <StartingBlock1
        bgImage={
          "https://ik.imagekit.io/a1fr3d10/mobile/dev/block1.png?updatedAt=1748335737827"
        }
        overlay={"#00000099"}
        titleFontSize={36}
        textDivider={0}
        title={
          <Fragment>
            Integrate
            <br />
            <span style={{ fontSize: 50 }}>━</span>
            <br />
            Innovate
            <br />
            <span style={{ fontSize: 50 }}>━</span>
            <br />
            Elevate
          </Fragment>
        }
      />

      {/* Mission Statement */}
      <MissionStatement>
        Cubitech – a portfolio showcasing growth and innovation through regular
        updates.
      </MissionStatement>

      {sections.map((section, index) => (
        <Stack key={index} className={styles.mobile} bgcolor={section.bgColor}>
          <Typography className={styles.title}>{section.title}</Typography>
          <Avatar
            className={styles.avatar}
            alt={section.alt}
            src={section.image}
            variant={"square"}
          />
          <Typography className={styles.descr}>{section.descr}</Typography>
        </Stack>
      ))}

      <Stack className={styles.websiteUpdateMobile} bgcolor={"primary.light"}>
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

export default MobileView;
