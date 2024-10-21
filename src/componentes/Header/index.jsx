import React from 'react';
import CampoBusca from '../Header/CampoBusca'; // Importe o componente da barra de busca
import { styled } from '@mui/material/styles';

const HeaderContainer = styled('header')`
  background-image: url('/src/assets/BackgroundBanner.jpg'); // Verifique se tem um ponto e vírgula aqui!
  backgroundSize: 'cover'; 
  backgroundRepeat: 'no-repeat',
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed; /* Fixo no topo da página */
  top: 0;         /* Posicionado no topo da viewport */
  width: 100%;     /* Ocupa toda a largura da página */
  z-index: 10;     /* Garante que fique sobre o conteúdo */
  height: 125px; // Define a altura do header 
`;

function Header() {
  return (
    <HeaderContainer>
      <CampoBusca />
    </HeaderContainer>
  );
}
export default Header;
