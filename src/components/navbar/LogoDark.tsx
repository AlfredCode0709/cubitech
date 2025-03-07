import Avatar from "@mui/material/Avatar";
import { FC } from "react";

const LogoDark: FC<any> = () => {
  return (
    <Avatar
      className={"avatar"}
      alt={"Cubitech"}
      src={
        "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1741345139/cubitech_dark_udjmjw.svg"
      }
      variant={"square"}
    />
  );
};

export default LogoDark;
