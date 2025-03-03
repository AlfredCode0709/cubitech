import Box from "@mui/material/Box";
import QuickStart from "@/components/cubimart/QuickStart";
import styles from "../../../styles/cubimart.module.scss";
import { FC } from "react";

const Logged: FC<any> = () => {
  return (
    <>
      {/* Starting block of CUBIMart Logged Page */}
      <Box className={styles.userStartingBlock} />

      {/* CUBIMart User Quick Start */}
      <QuickStart />
    </>
  );
};

export default Logged;
