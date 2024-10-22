import React from 'react';
import { styled } from '@mui/material/styles';
import ListItemButton from '@mui/material/ListItemButton';

const StyledSubItem = styled(ListItemButton)(({ theme }) => ({
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

function NavSubItem({ children }) { 
  return (
    <StyledSubItem>
      {children}
    </StyledSubItem>
  );
}

export default NavSubItem;