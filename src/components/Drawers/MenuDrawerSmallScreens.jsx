import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { IconButton, Menu } from "@mui/material";
import {
  Close,
  DoorBackOutlined,
  Home,
  Person,
  Settings,
  SettingsOutlined,
  SupportAgentOutlined,
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo-black.png";

export default function MenuDrawerSmallScreens({ className }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const location = useLocation();
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState("");

  const { pathname } = location || {};

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640); // Initial state

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 640);
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      toggleDrawer(false);
    }
  }, [isMobile]);

  useEffect(() => {
    if (pathname == "/home") {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [location, pathname]);

  const DrawerList = (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        position: "relative",
        zIndex: "3000",
      }}
      role="presentation"
      // onClick={toggleDrawer(false)}
    >
      <List sx={{ paddingTop: "4vh" }}>
        <ListItem disablePadding></ListItem>
        <ListItem
          onClick={() => {
            toggleDrawer(false);
            // navigate("/");
          }}
          sx={{ height: "5vh" }}
          disablePadding
        >
          <img
            width="60px"
            style={{ position: "absolute", left: "0" }}
            src={logo}
          />
          <IconButton
            sx={{ position: "absolute", right: "0" }}
            onClick={toggleDrawer(false)}
          >
            {" "}
            <Close />{" "}
          </IconButton>
        </ListItem>
        <Divider />

        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              navigate("/");
            }}
          >
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary={"Account"} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SettingsOutlined />
            </ListItemIcon>
            <ListItemText primary={"Settings"} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SupportAgentOutlined />
            </ListItemIcon>
            <ListItemText primary={"Support"} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              navigate("/login");
            }}
          >
            <ListItemIcon>
              <DoorBackOutlined />
            </ListItemIcon>
            <ListItemText primary={"Logout"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div
      // className="block sm:hidden"
      style={{ display: isLoggedIn && isMobile ? "" : "none" }}
    >
      <IconButton
        sx={{
          position: "fixed",
          top: "1vh",
          left: "1vw",
          background: "white",
          width: 50,
          height: 50,
          zIndex: "2000",
        }}
        onClick={toggleDrawer(true)}
      >
        <MenuIcon fontSize="large" sx={{ color: "black" }} />
      </IconButton>
      {/* <Button
        sx={{ position: "fixed", top: "0", left: "0" }}
        onClick={toggleDrawer(true)}
      >
        Open drawer
      </Button> */}
      <Drawer
        anchor="top"
        style={{
          zIndex: "3000",
        }}
        open={open}
        onClose={toggleDrawer(false)}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}
