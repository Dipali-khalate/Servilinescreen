import React from 'react';
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import "../Style/rules1.css";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import KeyboardBackspaceSharpIcon from "@mui/icons-material/KeyboardBackspaceSharp";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import Directivemgnttable from "./Directivemgnttable";
import KeyboardArrowUpSharpIcon from "@mui/icons-material/KeyboardArrowUpSharp";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import { IconButton } from "@mui/material";
import Directivemgnt1table from "./Directivemgnt1table";
import CloseIcon from "@mui/icons-material/Close";
import Directivemngttable4 from "./Directivemngttable4";
import Rules1table from "../pages/Rules1table";

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
      border: "1px solid black",
      borderRadius: "20px",
    },
  }));
  
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));
  

function Rules1() {
  return (
    <div>
      <Container>
        <Grid
          sx={{
            bgcolor: "#cfe8fc",
            height: "60vh",
            width: "100%",
            margin: "none",
          }}
        >
          <div className="topnav">
            <span>
              <CalendarTodayOutlinedIcon />
            </span>
            <span>
              <NotificationsActiveOutlinedIcon />
            </span>
            <span>
              <ListAltOutlinedIcon />
            </span>
            <span>
              <SettingsOutlinedIcon />
            </span>
            <span>
              <AccountCircleIcon />
            </span>
          </div>
          <div className="managment">
            <h4>Management</h4>
          </div>
          <div className="UserTop">
            <h2>
              {" "}
              <KeyboardBackspaceSharpIcon />
              Rules
            </h2>
            <span>
              <h4>00</h4>
              <h5>Directives</h5>
            </span>
          </div>
          <div className="rules">
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>{" "}
            <span>Add Users <h4 style={{border:"1px solid black",borderRadius:'20px',width:'25px'}}><AddIcon/></h4></span>
          </div>
         <div>
            {/* <User1table/> */}
            <Rules1table />
         </div>
        </Grid>
      </Container>
    </div>
  );
}

export default Rules1;
