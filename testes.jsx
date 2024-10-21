import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Logo from '/src/assets/Logo.png';
import IconeWhatsapp from '../IconesClicaveis/IconeWhatsapp';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: 'auto',
  [theme.breakpoints.up('lg')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%' /* Ocupa toda a largura do container */,
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(6)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('lg')]: {
      width: '100%' /* Ocupa toda a largura do container em telas maiores */,
      '&:focus': {
        width:
          '100%' /* Ocupa toda a largura do container em telas maiores, mesmo no foco */,
      },
    },
  },
}));

const HeaderContainer = styled(AppBar)`
  background-color: rgba(0, 0, 0, 0.5); /* Fundo opaco */
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed; /* Fixa o Header na tela */
  top: 0; /* Posiciona o Header no topo */
  width: 100%; /* Ocupa toda a largura da tela */
  z-index: 10; /* Garante que o Header fique sobre o conteúdo */
`;

const LogoContainer = styled('div')`
  display: flex;
  width: 10%;
  justify-content: center;

`;

const SearchContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center; /* Centraliza a barra de pesquisa */
  width: 400px;  /* Aumenta o comprimento da barra de pesquisa */
`;

export default function Header() {
  return (
    <HeaderContainer position="static">
      <Toolbar>
        <LogoContainer>
          {' '}
          {/* Container para a logo */}
          <img
            src={Logo}
            alt="Logo do site"
            style={{ height: '100px', width: '125px' }}
          />{' '}
          {/* Define o tamanho da imagem */}
        </LogoContainer>
        <SearchContainer>
          {' '}
          {/* Container para a barra de pesquisa */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </SearchContainer>
        <IconeWhatsapp />
      </Toolbar>
    </HeaderContainer>
  );
}
