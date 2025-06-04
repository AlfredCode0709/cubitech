import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InfoCard from "../card/InfoCard";
import commonStyles from "@/styles/common.module.scss";
import { FC, Fragment } from "react";

interface DesktopViewProps {
  header?: string;
  title?: string;
  descr?: string;
  image?: string;
}

const DesktopView: FC<DesktopViewProps> = ({ header, title, descr, image }) => {
  return (
    <Fragment>
      <Typography className={commonStyles.header}>{header}</Typography>

      <Grid container className={commonStyles.content} spacing={1}>
        {Array.from({ length: 4 }).map((_, index) => (
          <Grid size={3} key={index}>
            <InfoCard cardImage={image} title={title} descr={descr} />
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};

export default DesktopView;
