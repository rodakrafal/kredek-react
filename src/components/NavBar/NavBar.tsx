import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { Search, SearchIconWrapper, StyledInputBase } from "./utils";
import SearchIcon from "@mui/icons-material/Search";

export const NavBar = () => {
  return (
    <AppBar position="static" sx={{ width: "100%" }}>
      <Toolbar>
        <div style={{ width: "60%" }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: "block" }}
          >
            Pizza Kredek
          </Typography>
        </div>
        <div
          style={{
            alignItems: "flex-end",
            display: "flex",
            width: "40%",
            justifyContent: "flex-end",
          }}
        >
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </div>
      </Toolbar>
    </AppBar>
  );
};
