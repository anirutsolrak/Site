import React, { useState, useEffect, useRef } from 'react';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import NavItem from '../NavItem';

const NavBarContainer = styled('nav')(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  padding: '10px 0',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  
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
    setExpanded((prevExpanded) => {
      const newExpanded = {};
      for (const key in prevExpanded) {
        newExpanded[key] = key === itemName ? !prevExpanded[key] : false;
      }
      return newExpanded;
    });
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

  // Referência para o NavBarContainer
  const navRef = useRef(null);

  // useEffect para detectar cliques fora do NavBar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setExpanded((prevExpanded) => {
          const newExpanded = {};
          for (const key in prevExpanded) {
            newExpanded[key] = false;
          }
          return newExpanded;
        });
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  return (
    <NavBarContainer ref={navRef}> {/* Adiciona a referência ao componente */}
      <List sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        {menuItems.map((item) => (
          <NavItem 
            key={item.name} 
            itemName={item.name} 
            expanded={expanded[item.name]} 
            handleExpandClick={handleExpandClick}
          >
            {item.subItems}
          </NavItem>
        ))}
      </List>
    </NavBarContainer>
  );
}

export default NavBarDesktop;