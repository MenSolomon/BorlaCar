import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import StoreIcon from "@mui/icons-material/Store";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
// import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import BasicMenu from "../Menu/ProfileMenu";
import logoImage from "../../assets/logo-white-removebg-preview.png";
import LoginClientOrDriverButtonModal from "../Modals/LoginClientOrDriverModal";
import ProfileMenu from "../Menu/ProfileMenu";
import {
  AirplaneTicketOutlined,
  DocumentScannerOutlined,
  HistoryEduOutlined,
} from "@mui/icons-material";

function Navbar({ className }) {
  const MenuArray = ["History", "Support", "Promo", "Logout"];

  const location = useLocation();
  const navigate = useNavigate();
  const my_pages = [];
  const my_settings = ["Profile", "Account", "Logout"];

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenSettingsMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseSettingsMenu = () => {
    setAnchorElUser(null);
  };

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
    if (pathname == "/home") {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [location, pathname]);

  return (
    <div
      // className="hidden sm:block"
      style={{
        display: isMobile && isLoggedIn ? "none" : "",
      }}
    >
      <AppBar
        position="static"
        sx={{
          bgcolor: "#008e87",
          width: "100%",
          height: "64px",
          // display: "none",
        }}
      >
        <Toolbar>
          {/* <Typography
          variant="h5"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            fontWeight: 800,
            fontFamily: "roboto",
            color: "white",
            letterSpacing: ".2rem",
            textDecoration: "none",
          }}
        >
          Borla Car
        </Typography> */}
          <img src={logoImage} width={"64px"} />
          <Box sx={{ flexWrap: "wrap", flexGrow: 1, display: "flex" }}>
            {my_pages.map((page) => (
              <Button
                key={my_pages}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, display: "flex", gap: "0 1vw" }}>
            {/* <Tooltip title="Open my_settings">
                <IconButton onClick={handleOpenSettingsMenu} sx={{ p: 0 }}>
                </IconButton>
              </Tooltip> */}
            {/*  
           {
            location.pathname=== '/SignIn'?
          <BasicMenu menuItemsArray={MenuArray} /> :      <Link to={"/SignIn"} style={{ textDecoration: 'none' }}>
           <Button sx={{
                background:"#fff",
                borderRadius:"10px",
                color:"#000", 
                width:"100%"
                
              }}  >Sigin in</Button>
             
           </Link>

           } */}

            {isLoggedIn ? (
              <>
                <Button
                  style={{
                    textTransform: "none",
                    color: "black",
                    background: "white",
                  }}
                  startIcon={
                    <DocumentScannerOutlined sx={{ color: "black" }} />
                  }
                >
                  History
                </Button>
                <ProfileMenu />
              </>
            ) : (
              <>
                <LoginClientOrDriverButtonModal />
                <Button
                  onClick={() => {
                    navigate("/SignIn");
                  }}
                  sx={{
                    background: "#fff",
                    borderRadius: "10px",
                    color: "#000",
                    width: "100%",
                  }}
                >
                  Sigin in
                </Button>
              </>
            )}

            {/* <Menu
                sx={{ mt: '55px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseSettingsMenu}
              >
                {my_settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseSettingsMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu> */}
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Navbar;
