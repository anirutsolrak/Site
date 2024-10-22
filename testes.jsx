import React, { useState } from 'react';
import { styled, useTheme  } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar'; // Importação correta
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import MailIcon from '@mui/icons-material/Mail';
import { useMediaQuery } from '@mui/material';

// Estilos para o menu horizontal
const NavBarContainer = styled('nav')(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  padding: '10px 0',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  [theme.breakpoints.down('md')]: {
    display: 'none', 
  },
}));

const NavItem = styled(ListItemButton)(({ theme }) => ({
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  padding: theme.spacing(1, 2),
  borderRadius: 8,
  '&:focus': {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  width: 'fit-content',
  margin: theme.spacing(0, 0.5),
}));

const NavSubItem = styled(ListItemButton)(({ theme }) => ({
  padding: theme.spacing(1, 2),
  borderRadius: 8,
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  '&:focus': {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  transition: theme.transitions.create('padding'),
  width: 'fit-content',
  margin: theme.spacing(0, 0.5),
}));

const NavSubList = styled(List)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: 'fit-content',
}));

// Estilos para o menu vertical
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginRight: open ? 0 : -drawerWidth,
  position: 'relative',
}));


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

function NavBar() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {isLargeScreen && ( 
        <NavBarContainer>
          <List  sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <NavItem>
              <ListItemText primary="Papelaria" />
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <NavSubList>
                  <NavSubItem>
                    <ListItemText primary="Apontadores" />
                  </NavSubItem>
                  <NavSubItem>
                    <ListItemText primary="Borracha" />
                  </NavSubItem>
                  <NavSubItem>
                    <ListItemText primary="Carimbos" />
                  </NavSubItem>
                  <NavSubItem>
                    <ListItemText primary="Cola" />
                  </NavSubItem>
                  <NavSubItem>
                    <ListItemText primary="Corretivos" />
                  </NavSubItem>
                  <NavSubItem>
                    <ListItemText primary="Clips" />
                  </NavSubItem>
                  <NavSubItem>
                    <ListItemText primary="Régua" />
                  </NavSubItem>
                  <NavSubItem>
                    <ListItemText primary="Papéis e Blocos" />
                  </NavSubItem>
                </NavSubList>
              </Collapse>
            </NavItem>
            <NavItem>
              <ListItemText primary="Agenda e Planner" />
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <NavSubList>
                  <NavSubItem>
                    <ListItemText primary="Agendas" />
                  </NavSubItem>
                  <NavSubItem>
                    <ListItemText primary="Planner" />
                  </NavSubItem>
                </NavSubList>
              </Collapse>
            </NavItem>
            <NavItem>
              <ListItemText primary="Presentes" />
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <NavSubList>
                  <NavSubItem>
                    <ListItemText primary="Presentes" />
                  </NavSubItem>
                </NavSubList>
              </Collapse>
            </NavItem>
            <NavItem>
              <ListItemText primary="Escrita" />
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <NavSubList>
                  <NavSubItem>
                    <ListItemText primary="Esferográficas" />
                  </NavSubItem>
                  <NavSubItem>
                    <ListItemText primary="Marca Texto" />
                  </NavSubItem>
                  <NavSubItem>
                    <ListItemText primary="Giz de Cera" />
                  </NavSubItem>
                  <NavSubItem>
                    <ListItemText primary="Canetinhas Coloridas" />
                  </NavSubItem>
                </NavSubList>
              </Collapse>
            </NavItem>
            <NavItem>
              <ListItemText primary="Cadernos" />
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <NavSubList>
                  <NavSubItem>
                    <ListItemText primary="Brochura" />
                  </NavSubItem>
                  <NavSubItem>
                    <ListItemText primary="Espiral" />
                  </NavSubItem>
                  <NavSubItem>
                    <ListItemText primary="Cadernos" />
                  </NavSubItem>
                  <NavSubItem>
                    <ListItemText primary="Fichários e Cia" />
                  </NavSubItem>
                </NavSubList>
              </Collapse>
            </NavItem>
            <NavItem>
              <ListItemText primary="Corte e Costura" />
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <NavSubList>
                  <NavSubItem>
                    <ListItemText primary="Tesouras" />
                  </NavSubItem>
                  <NavSubItem>
                    <ListItemText primary="Agulhas" />
                  </NavSubItem>
                  <NavSubItem>
                    <ListItemText primary="Alfinetes" />
                  </NavSubItem>
                  <NavSubItem>
                    <ListItemText primary="Linhas" />
                  </NavSubItem>
                </NavSubList>
              </Collapse>
            </NavItem>
            <NavItem>
              <ListItemText primary="Serviços" />
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <NavSubList>
                  <NavSubItem>
                    <ListItemText primary="Afiacão" />
                  </NavSubItem>
                  <NavSubItem>
                    <ListItemText primary="Botão" />
                  </NavSubItem>
                  <NavSubItem>
                    <ListItemText primary="Ilhós" />
                  </NavSubItem>
                </NavSubList>
              </Collapse>
            </NavItem>
          </List>
        </NavBarContainer>
      )}
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
      </Box>
      <Main open={open}>
        <DrawerHeader />
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
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
            <ListItemButton onClick={handleExpandClick}>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Papelaria" />
              {expanded ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorderIcon />
                  </ListItemIcon>
                  <ListItemText primary="Apontadores" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorderIcon />
                  </ListItemIcon>
                  <ListItemText primary="Borracha" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorderIcon />
                  </ListItemIcon>
                  <ListItemText primary="Carimbos" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorderIcon />
                  </ListItemIcon>
                  <ListItemText primary="Cola" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorderIcon />
                  </ListItemIcon>
                  <ListItemText primary="Corretivos" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorderIcon />
                  </ListItemIcon>
                  <ListItemText primary="Clips" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorderIcon />
                  </ListItemIcon>
                  <ListItemText primary="Régua" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorderIcon />
                  </ListItemIcon>
                  <ListItemText primary="Papéis e Blocos" />
                </ListItemButton>
              </List>
            </Collapse>
            <ListItemButton onClick={handleExpandClick}>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Agenda e Planner" />
              {expanded ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorderIcon />
                  </ListItemIcon>
                  <ListItemText primary="Agendas" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorderIcon />
                  </ListItemIcon>
                  <ListItemText primary="Planner" />
                </ListItemButton>
              </List>
            </Collapse>
            <ListItemButton onClick={handleExpandClick}>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Presentes" />
              {expanded ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorderIcon />
                  </ListItemIcon>
                  <ListItemText primary="Presentes" />
                </ListItemButton>
              </List>
            </Collapse>
            <ListItemButton onClick={handleExpandClick}>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Escrita" />
              {expanded ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorderIcon />
                  </ListItemIcon>
                  <ListItemText primary="Esferográficas" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorderIcon />
                  </ListItemIcon>
                  <ListItemText primary="Marca Texto" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorderIcon />
                  </ListItemIcon>
                  <ListItemText primary="Giz de Cera" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorderIcon />
                  </ListItemIcon>
                  <ListItemText primary="Canetinhas Coloridas" />
                </ListItemButton>
              </List>
            </Collapse>
            <ListItemButton onClick={handleExpandClick}>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Cadernos" />
              {expanded ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorderIcon />
                  </ListItemIcon>
                  <ListItemText primary="Brochura" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorderIcon />
                  </ListItemIcon>
                  <ListItemText primary="Espiral" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorderIcon />
                  </ListItemIcon>
                  <ListItemText primary="Cadernos" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorderIcon />
                  </ListItemIcon>
                  <ListItemText primary="Fichários e Cia" />
                </ListItemButton>
              </List>
            </Collapse>
            <ListItemButton onClick={handleExpandClick}>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Corte e Costura" />
              {expanded ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorderIcon />
                  </ListItemIcon>
                  <ListItemText primary="Tesouras" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorderIcon />
                  </ListItemIcon>
                  <ListItemText primary="Agulhas" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorderIcon />
                  </ListItemIcon>
                  <ListItemText primary="Alfinetes" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorderIcon />
                  </ListItemIcon>
                  <ListItemText primary="Linhas" />
                </ListItemButton>
              </List>
            </Collapse>
            <ListItemButton onClick={handleExpandClick}>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Serviços" />
              {expanded ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorderIcon />
                  </ListItemIcon>
                  <ListItemText primary="Afiacão" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorderIcon />
                  </ListItemIcon>
                  <ListItemText primary="Botão" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorderIcon />
                  </ListItemIcon>
                  <ListItemText primary="Ilhós" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </Drawer>
      </Main>
    </Box>
  );
}

export default NavBar;