import React from 'react';
import CampoBusca from '../Header/CampoBusca'; // Importe o componente da barra de busca
import { styled } from '@mui/material/styles';

const HeaderContainer = styled('header')`
  background-color: rgba(0, 0, 0, 0.5); /* Fundo opaco */
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed; /* Fixo no topo da página */
  top: 0;         /* Posicionado no topo da viewport */
  width: 100%;     /* Ocupa toda a largura da página */
  z-index: 10;     /* Garante que fique sobre o conteúdo */
`;

function Header() {
  return (
    <HeaderContainer>
      <CampoBusca />
    </HeaderContainer>
  );
}
export default Header;
