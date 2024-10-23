import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import NavSubList from '../NavSubList';
import NavSubItem from '../NavSubItem'; 
import PapelariaIcon from '../../../../assets/icones/PapelariaIcon.png';
import AgendaIcon from '../../../../assets/icones/AgendaIcon.png';
import ServiçosIcon from '../../../../assets/icones/ServiçosIcon.png';
import CorteCosturaIcon from '../../../../assets/icones/CorteCosturaIcon.png';
import CadernosIcon from '../../../../assets/icones/CadernosIcon.png';
import EscritaIcon from '../../../../assets/icones/EscritaIcon.png';
import PresentesIcon from '../../../../assets/icones/PresentesIcon.png';



const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
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

function NavItem({ itemName, expanded, handleExpandClick, children }) {
  return (
    <Box sx={{ position: 'relative' }}>
      <StyledListItemButton onClick={() => handleExpandClick(itemName)}>
        {/* Container para o ícone e o texto */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {itemName === 'Papelaria' && <img src={PapelariaIcon} alt="Papelaria" height="29" />}
          {itemName === 'Agenda e Planner' && <img src={AgendaIcon} alt="Agenda e Planner" height="29" />}
          {itemName === 'Presentes' && <img src={PresentesIcon} alt="Papelaria" height="29" />}
          {itemName === 'Escrita' && <img src={EscritaIcon} alt="Agenda e Planner" height="29" />}
          {itemName === 'Cadernos' && <img src={CadernosIcon} alt="Papelaria" height="29" />}
          {itemName === 'Corte e Costura' && <img src={CorteCosturaIcon} alt="Agenda e Planner" height="29" />}
          {itemName === 'Serviços' && <img src={ServiçosIcon} alt="Papelaria" height="29" />}
          {/* Adiciona espaçamento entre o ícone e o texto */}
          <ListItemText primary={itemName} sx={{ marginLeft: '16px' }} /> 
        </Box>
        {expanded ? <ExpandLess /> : <ExpandMore />}
      </StyledListItemButton>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <NavSubList>
          {children.map((subItem) => (
            <NavSubItem key={subItem}>
              <ListItemText primary={subItem} />
            </NavSubItem>
          ))}
        </NavSubList>
      </Collapse>
    </Box>
  );
}

export default NavItem;