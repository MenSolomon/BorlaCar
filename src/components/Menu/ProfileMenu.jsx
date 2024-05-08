import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, IconButton } from "@mui/material";

export default function ProfileMenu({
  profilePicture,
  menuIcon,
  menuItemsArray,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div onClick={handleClick}>
        <Avatar sx={{ width: 40, height: 40 }} src={profilePicture} />
      </div>

      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}> Account</MenuItem>
        <MenuItem onClick={handleClose}> Settings</MenuItem>
        <MenuItem onClick={handleClose}> Support</MenuItem>
        <MenuItem onClick={handleClose}> Logout</MenuItem>

        {/* {menuItemsArray?.map((data) => (
          <MenuItem onClick={handleClose}>{data}</MenuItem>
        ))} */}
      </Menu>
    </div>
  );
}
