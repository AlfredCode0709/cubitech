import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import Search from "@mui/icons-material/Search";
import { FC } from "react";

const SearchBar: FC<any> = () => {
  return (
    <Box className={"searchBar"}>
      <Box className={"searchIconWrapper"}>
        <Search />
      </Box>
      <InputBase placeholder="Search" inputProps={{ "aria-label": "search" }} />
    </Box>
  );
};

export default SearchBar;
