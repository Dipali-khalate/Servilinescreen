import React from "react";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import "../Style/ManagementDerective.css";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExploreIcon from "@mui/icons-material/Explore";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import AccessibilityNewSharpIcon from '@mui/icons-material/AccessibilityNewSharp';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

function ManagementDerective() {
  return (
    <div>
      <Container>
        <Grid                           
          sx={{
            bgcolor: "#cfe8fc",
            height: "65vh",
            width: "100%",
            margin: "none",
          }}
        >
          {" "}
          <div className="topnavbar">
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
          <div className="mngt">
            <h2>Management</h2>
          </div>
          <div className="mngtnearbox">
            <h6>
              <ExploreIcon /> Directive
            </h6>
          </div>
          <div className="emptyfirst"></div>
          <div className="mngtnearbox1">
            <span>
              {" "}
              <AccountCircleIcon /> <h6> users</h6>
            </span>
            <span className="addbtn">
              <h6>AddUser</h6> <ControlPointOutlinedIcon />
            </span>
          </div>
          <div className="emptyfirst1"></div>
          <div className="mngtnearbox2">
            <span>
              {" "}
              <AccessibilityNewSharpIcon /> <h6> Roles</h6>
            </span>
            <span className="addbtn">
              <h6>AddRoles</h6> <ControlPointOutlinedIcon />
            </span>
          </div>
          <div className="emptyfirst2"></div>
          <div className="mngtnearbox3">
            <span>
              {" "}
              <DescriptionOutlinedIcon /> <h6> Rules</h6>
            </span>
            <span className="addbtn">
              <h6>AddRules</h6> <ControlPointOutlinedIcon />
            </span>
          </div>
          <div className="emptyfirst3"></div>
        </Grid>
      </Container>
    </div>
  );
}

export default ManagementDerective;
