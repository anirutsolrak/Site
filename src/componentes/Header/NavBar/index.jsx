import React, { useState } from 'react';
import { useTheme, useMediaQuery, Box, CssBaseline } from '@mui/material';
import NavBarDesktop from './NavBarDesktop';
import NavBarMobile from './NavBarMobile';

const drawerWidth = 240;

function NavBar() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {isLargeScreen ? (
        <NavBarDesktop />
      ) : (
        <NavBarMobile
          open={open}
          drawerWidth={drawerWidth}
          handleDrawerOpen={handleDrawerOpen}
          handleDrawerClose={handleDrawerClose}
        />
      )}
    </Box>
  );
}

export default NavBar;