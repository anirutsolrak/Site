import React from 'react';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';

const StyledSubList = styled(List)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: 'fit-content',
  position: 'absolute', 
  top: '100%', 
  left: 0,
  zIndex: 1, 
  backgroundColor: 'white', 
}));

function NavSubList({ children }) {
  return (
    <StyledSubList>
      {children}
    </StyledSubList>
  );
}

export default NavSubList;