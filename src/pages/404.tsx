import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import commonStyles from "@/styles/common.module.scss";
import Link from "next/link";
import { NextPage } from "next";

const Page404: NextPage = () => {
  return (
    <Box className={commonStyles.page404}>
      <Avatar
        className={commonStyles.avatar}
        alt="Empty Shopping Cart"
        src={
          "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1742133191/404_ecbxli.svg"
        }
        variant={"square"}
      />

      <Typography className={commonStyles.title}>
        Oops! It seems that you{`'`}re lost in the website!
      </Typography>
      <Typography className={commonStyles.descr}>
        We couldn{`'`}t find the page you were looking for. Let{`'`}s get you
        back on track!
      </Typography>

      <Typography className={commonStyles.callToAction}>
        Try navigation back to: <Link className={commonStyles.link} href={'/'}>Home</Link>
      </Typography>
    </Box>
  );
};

export default Page404;
