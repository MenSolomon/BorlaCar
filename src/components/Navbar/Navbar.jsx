

import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import StoreIcon from '@mui/icons-material/Store';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
// import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation } from 'react-router-dom';
import BasicMenu from '../Menu/BasicMenu';




function Navbar() {
 const MenuArray=["History","Support","Promo","Logout"]

  const location = useLocation();
    const my_pages = [ ];
    const my_settings = ['Profile', 'Account','Logout'];

    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenSettingsMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };

    const handleCloseSettingsMenu = () => {
      setAnchorElUser(null);
    };


    return (
      <AppBar position="static"  sx={{ bgcolor: '#008e87' ,width: '100%', height: '64px'}}>
        <Toolbar>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                fontWeight: 800,
                fontFamily:'roboto',
                color:'white',
                letterSpacing: '.2rem',
                textDecoration: 'none',
              }}
            >
            Borla Car
            </Typography>
            <Box sx={{flexWrap:'wrap',flexGrow: 1, display:'flex' }}>
              {my_pages.map((page) => (
                <Button
                  key={my_pages}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              {/* <Tooltip title="Open my_settings">
                <IconButton onClick={handleOpenSettingsMenu} sx={{ p: 0 }}>
                </IconButton>
              </Tooltip> */}
 
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

           }

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
    );
}
export default Navbar