import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Head from "next/head";
import styles from "../styles/cubifood.module.scss";
import Promotions from "@/components/Promotions";
import TopTreasures from "@/components/cubifood/TopTreasures";
import Category from "@/components/cubifood/Category";
import CategorisedView from "@/components/CategorisedView";
import { useState } from "react";

const CubiFood: React.FC<any> = () => {
  const [imageSrc, setImageSrc] = useState<string>(
    "./cubitech_brands/cubifood_light.svg",
  );

  const handleCategorySelect = (src: string) => {
    setImageSrc(src);
  };

  return (
    <>
      <Head>
        <title>CubiFood | Cubitech</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cubitech.ico" />
      </Head>
      <main>
        {/* Starting block of CubiFood Page */}
        <Box className={styles.startingBlock} />

        {/* CubiFood slogan block */}
        <Box className={styles.cubifoodSloganContainer}>
          <Typography className={styles.text}>
            Eat Smart. Pay Easy. Enjoy Every Bite.
          </Typography>
        </Box>

        {/* CubiFood Promotions block */}
        <Promotions
          promotionTitle={"Weekly Promotions"}
          bgColor={"#08834e"}
          titleColor={"white"}
          imageSrc={"./cubitech_brands/cubifood_light.svg"}
        />

        {/* Top Treasures block */}
        <TopTreasures />

        {/* CubiFood Category block */}
        <Category onCategorySelect={handleCategorySelect} />

        {/* CubiFood Categorised View */}
        <CategorisedView imageSrc={imageSrc} />
      </main>
    </>
  );
};

export default CubiFood;
