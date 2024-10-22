import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar'; 
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import MailIcon from '@mui/icons-material/Mail';
import Box from '@mui/material/Box';

const drawerWidth = 240;

const StyledAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  width: open ? `calc(100% - ${drawerWidth}px)` : `calc(100% - 0px)`,
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

function NavBarMobile({ open, drawerWidth, handleDrawerOpen, handleDrawerClose }) {
  const theme = useTheme();
  const [expanded, setExpanded] = useState({
    Papelaria: false,
    'Agenda e Planner': false,
    Presentes: false,
    Escrita: false,
    Cadernos: false,
    'Corte e Costura': false,
    Serviços: false,
  });

  const handleExpandClick = (itemName) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [itemName]: !prevExpanded[itemName],
    }));
  };

  return (
    <Box sx={{ display: "block", width: "auto" }}>
      <StyledAppBar position="relative" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={[open && { display: 'none' }]}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </StyledAppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            zIndex: 1200,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {Object.keys(expanded).map((itemName) => (
            <div key={itemName}>
              <ListItemButton onClick={() => handleExpandClick(itemName)}>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary={itemName} />
                {expanded[itemName] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={expanded[itemName]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {/* Renderize os subitens de cada categoria aqui */}
                  {itemName === 'Papelaria' && (
                    <>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          <StarBorderIcon />
                        </ListItemIcon>
                        <ListItemText primary="Apontadores" />
                      </ListItemButton>
                      {/* ... outros subitens de Papelaria ... */}
                    </>
                  )}
                  {/* Repita a lógica acima para outras categorias */}
                </List>
              </Collapse>
            </div>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}

export default NavBarMobile;