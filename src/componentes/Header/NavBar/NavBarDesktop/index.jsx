import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import NavItem from '../NavItem'; 

const NavBarContainer = styled('nav')(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  padding: '10px 0',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  marginTop: '10px',
}));

function NavBarDesktop() {
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

  const menuItems = [
    {
      name: 'Papelaria',
      subItems: ['Apontadores', 'Borracha', 'Carimbos', 'Cola', 'Corretivos', 'Clips', 'Régua', 'Papéis e Blocos'],
    },
    {
      name: 'Agenda e Planner',
      subItems: ['Agendas', 'Planner'],
    },
    {
      name: 'Presentes',
      subItems: ['Presentes'],
    },
    {
      name: 'Escrita',
      subItems: ['Esferográficas', 'Marca Texto', 'Giz de Cera', 'Canetinhas Coloridas'],
    },
    {
      name: 'Cadernos',
      subItems: ['Brochura', 'Espiral', 'Cadernos', 'Fichários e Cia'],
    },
    {
      name: 'Corte e Costura',
      subItems: ['Tesouras', 'Agulhas', 'Alfinetes', 'Linhas'],
    },
    {
      name: 'Serviços',
      subItems: ['Afiacão', 'Botão', 'Ilhós'],
    },
  ];

  return (
    <NavBarContainer>
      <List sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        {menuItems.map((item) => (
          <NavItem key={item.name} itemName={item.name} expanded={expanded[item.name]} handleExpandClick={handleExpandClick}>
            {item.subItems}
          </NavItem>
        ))}
      </List>
    </NavBarContainer>
  );
}

export default NavBarDesktop;