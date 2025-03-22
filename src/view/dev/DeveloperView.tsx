import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import StartingBlock1 from "@/components/common/StartingBlock1";
import styles from "@/styles/developer.module.scss";
import { FC, Fragment } from "react";

const DeveloperView: FC = () => {
  const websiteUpdates = [
    "Refactored CartContext and OrderContext with IndexedDB API integration.",
    "Improved UI for CubiGift customization and order summary.",
    "Enhanced filter options in CubiFood and CubiMart for a better user experience.",
    "Added Snackbar Provider for real-time feedbacks.",
  ];

  return (
    <Fragment>
      {/* Starting block of Developer Page */}
      <StartingBlock1 backgroundImage={"/dev/block1.png"} overlay={"#00000080"}>
        Cubitech: Integrate, Innovate, Elevate.
      </StartingBlock1>

      <Box className={styles.developerView}>
        <Typography className={styles.headerTitle1} component={"div"}>
          Latest Updates
          <Typography className={styles.descr}>
            This portfolio is for display purposes only. Cubitech is in continuous development — 
            new updates roll out regularly to enhance your experience.
          </Typography>
        </Typography>

        <Typography className={styles.headerTitle2} component={"div"}>
          Content Disclaimer
          <Typography className={styles.descr}>
            To keep things original, all contents here are sourced from Canvas
            Pro. This ensures a clean and plagiarism-free portfolio while
            Cubitech continues to evolve.
          </Typography>
        </Typography>

        <Typography className={styles.headerTitle3} component={"div"}>
          Inspired Innovation
          <Typography className={styles.descr}>
            Cubitech combines concepts from FairPrice, Grab, Lazada, and Shopee
            to develop cutting-edge technologies that simplify everyday lives
            for everyone.
          </Typography>
        </Typography>

        <Typography className={styles.headerTitle4} component="div">
          Website Updates
          <Box className={styles.updateList}>
            {websiteUpdates.map((update, index) => (
              <Typography key={index} className={styles.descr}>
                • {update}
              </Typography>
            ))}
          </Box>
        </Typography>
      </Box>
    </Fragment>
  );
};

export default DeveloperView;
