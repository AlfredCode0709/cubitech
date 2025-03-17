import Box from "@mui/material/Box";
import OutletRowHeader from "./OutletRowHeader";
import ShopList from "./ShopList";
import styles from "@/styles/cubifood.module.scss";
import { FC, useEffect, useRef, useState } from "react";

interface OutletSectionProps {
  numberOfStalls: number;
  outletIndex: number;
}

const OutletSection: FC<OutletSectionProps> = ({
  numberOfStalls,
  outletIndex,
}) => {
  const shopListRef = useRef<HTMLDivElement>(null!);

  const [paginationState, setPaginationState] = useState({
    disablePrev: true,
    disableNext: false,
    disableSkipToPrev: true, 
    showPagination: true,
  });

  const updatePaginationState = () => {
    if (!shopListRef.current) return;
    const atStart = shopListRef.current.scrollLeft === 0;
    const atEnd =
      Math.ceil(
        shopListRef.current.scrollLeft + shopListRef.current.clientWidth,
      ) >= shopListRef.current.scrollWidth;
    const noScrollNeeded =
      shopListRef.current.scrollWidth <= shopListRef.current.clientWidth;

    setPaginationState({
      disablePrev: atStart,
      disableNext: atEnd,
      disableSkipToPrev: atStart, 
      showPagination: !noScrollNeeded,
    });
  };

  useEffect(() => {
    const shopList = shopListRef.current;
    if (!shopList) return;

    shopList.addEventListener("scroll", updatePaginationState);
    window.addEventListener("resize", updatePaginationState);
    updatePaginationState();

    return () => {
      shopList?.removeEventListener("scroll", updatePaginationState);
      window.removeEventListener("resize", updatePaginationState);
    };
  }, []);

  return (
    <Box className={styles.outletSection}>
      <OutletRowHeader
        outletIndex={outletIndex}
        paginationState={paginationState}
        containerRef={shopListRef}
      />
      <ShopList numberOfStalls={numberOfStalls} shopListRef={shopListRef} />
    </Box>
  );
};

export default OutletSection;
