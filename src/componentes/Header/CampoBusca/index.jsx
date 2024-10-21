import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import IconeWhatsapp from '../../IconesClicaveis/IconeWhatsapp';
import Logo from '/src/assets/Logo.png';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundImage: `url('/src/assets/your_background_image.png')`, // Substitua pelo caminho da sua imagem
  backgroundSize: 'cover', // Ajusta a imagem para cobrir todo o container
  backgroundRepeat: 'no-repeat', // Impede a repetição da imagem
  backgroundColor: alpha(theme.palette.common.white, 0.15), // Opcional: Define uma cor de fundo caso a imagem não preencha todo o container
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(65),
    width: '100%',
    marginRight: theme.spacing(10),
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
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function CampoBusca() {
  return (
    <Box sx={{ flexGrow: 0.84 }}>
      <AppBar position="static">
        <Toolbar>
          <img src={Logo} width="100" height="125" />
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <IconeWhatsapp /> {/* Mantenha o ícone do WhatsApp */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
