import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Head from "next/head";
import BuildingResilience from "@/components/about/BuildingResilience";
import CubitechStandards from "@/components/about/CubitechStandards";
import DevelopingCubitech from "@/components/about/DevelopingCubitech";
import StartingBlock1 from "@/components/StartingBlock1";
import styles from "../styles/about.module.scss";

const About: React.FC<any> = () => {
  return (
    <>
      <Head>
        <title>About Us | Cubitech</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cubitech.ico" />
      </Head>
      <main>
        {/* Starting block of About Page */}
        <StartingBlock1 backgroundImage="/about/block1.png">
          Journeying together, hand in hand
          <br />
          towards endless possibilities.
        </StartingBlock1>

        {/* Mission Statement block */}
        <Box className={styles.missionStatementBlock}>
          <Box className={styles.content}>
            <Typography className={styles.text}>
              Inspired by the Cubitech Vision, our mission is to simplify life
              through seamless integration of emerging technologies.
            </Typography>
          </Box>
        </Box>

        {/* Developing Cubitech block */}
        <DevelopingCubitech />

        {/* Building Resilience block */}
        <BuildingResilience />

        {/* Cubitech Standards block */}
        <CubitechStandards />
      </main>
    </>
  );
};

export default About;
