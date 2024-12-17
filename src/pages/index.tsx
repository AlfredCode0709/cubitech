import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Head from "next/head";
import styles from "../styles/index.module.scss";
import CubitechServices from "@/components/index/CubitechServices";
import Promotions from "@/components/Promotions";
import PeekView from "@/components/index/PeekView";
import CubiRideIntro from "@/components/index/CubiRideIntro";
import CubiPerkIntro from "@/components/index/CubiPerkIntro";
import JoinCubitech from "@/components/index/JoinCubitech";

const Index: React.FC<any> = () => {
  return (
    <>
      <Head>
        <title>Cubitech</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cubitech.ico" />
      </Head>
      <main>
        {/* Starting block of Index Page */}
        <Box className={styles.startingBlock}>
          <Typography className={styles.startingBlockTitle}>
            Cubitech: Beyond Fintech,
            <br />
            Infinite Possibilities for Your Life!
          </Typography>
        </Box>

        {/* Cubitech Services block */}
        <CubitechServices />

        {/* Promotions block */}
        <Promotions
          promotionTitle={"Weekly Promotions"}
          bgColor={"primary.main"}
          titleColor={"white"}
          imageSrc={"./cubitech_brands/cubitech_light.svg"}
        />

        {/* CubiFood Peek View block */}
        <PeekView title={"CUBIFood"} />

        {/* CubiMart Peek View block */}
        <PeekView title={"CUBIMart"} />

        {/* CubiRide Intro block */}
        <CubiRideIntro />

        {/* CubiPerk Intro block */}
        <CubiPerkIntro />

        {/* Join Cubitech block */}
        <JoinCubitech />
      </main>
    </>
  );
};

export default Index;
