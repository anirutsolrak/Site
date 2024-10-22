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
        <ListItemText primary={itemName} />
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