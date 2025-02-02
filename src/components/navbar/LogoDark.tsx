import Avatar from "@mui/material/Avatar";
import { FC } from "react";

const LogoDark: FC<any> = () => {
  return (
    <Avatar
      className={"avatar"}
      alt={"Cubitech"}
      src={"/cubitech_brands/cubitech_dark.svg"}
      variant={"square"}
    />
  );
};

export default LogoDark;
