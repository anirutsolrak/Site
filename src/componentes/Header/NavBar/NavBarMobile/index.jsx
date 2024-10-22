import React, { useState, useEffect, useRef } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
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

const MenuIconButton = styled(IconButton)({
  position: 'fixed',
  top: 0,
  right: 0,
  margin: '10px',
  zIndex: 1300,
});

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

  // Referência para a gaveta
  const drawerRef = useRef(null);

  // useEffect para detectar cliques fora da gaveta
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        handleDrawerClose();
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  return (
    <Box>
      {!open && (
        <MenuIconButton color="black" aria-label="open drawer" onClick={handleDrawerOpen}>
          <MenuIcon />
        </MenuIconButton>
      )}
      <Drawer
        ref={drawerRef} // Adiciona a referência à gaveta
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
                    </>
                  )}
                  {/* Repita a lógica acima para outras categorias */}
                  {itemName === 'Agenda e Planner' && (
                    <>
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
                    </>
                  )}
                  {itemName === 'Presentes' && (
                    <>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          <StarBorderIcon />
                        </ListItemIcon>
                        <ListItemText primary="Presentes" />
                      </ListItemButton>
                    </>
                  )}
                  {itemName === 'Escrita' && (
                    <>
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
                    </>
                  )}
                  {itemName === 'Cadernos' && (
                    <>
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
                    </>
                  )}
                  {itemName === 'Corte e Costura' && (
                    <>
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
                    </>
                  )}
                  {itemName === 'Serviços' && (
                    <>
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
                    </>
                  )}
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