import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import MissionStatement from "@/components/common/MissionStatement";
import StartingBlock1 from "@/components/common/startingBlocks/StartingBlock1";
import styles from "@/styles/about.module.scss";
import { sections } from "@/components/about/sections";
import { FC, Fragment } from "react";

const MobileView: FC = () => {
  return (
    <Fragment>
      {/* Starting block of Home Page */}
      <StartingBlock1
        bgImage={
          "https://ik.imagekit.io/a1fr3d10/mobile/about/block1.png?updatedAt=1748252487054"
        }
        overlay={"#00000099"}
        titleFontSize={36}
        textDivider={50}
        subtitleFontSize={28}
        title={
          <span style={{ lineHeight: 1.4 }}>
            Journeying
            <br />
            together,
            <br />
            hand in hand
          </span>
        }
        subtitle={
          <span>
            Infinite Possibilities
            <br />
            for Your Life!
          </span>
        }
      />

      {/* Mission Statement */}
      <MissionStatement>
        <span
          style={{ fontSize: 18, display: "inline-block", marginBottom: "5%" }}
        >
          Inspired by the Cubitech Vision
        </span>
        <br />
        Our mission is to simplify life
        <br />
        through seamless integration of
        <br />
        emerging technologies.
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
    </Fragment>
  );
};

export default MobileView;
