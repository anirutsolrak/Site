import styles from './header.module.css';
import React from 'react';
import CampoBusca from '../Header/CampoBusca';
import Logo from '/src/assets/Logo.png';
import { Box } from '@mui/material';
import NavBar from './NavBar';




function Header() {
  return (
    <>
    <header className={styles.header}> 
      <Box sx={{ display: 'flex', alignItems: 'center', width: '98%' }}> {/* Centralizar o conteúdo */}
        <CampoBusca Logo={Logo} /> 
      </Box>      
    </header>
    <NavBar />
    </>
  );
}

export default Header;