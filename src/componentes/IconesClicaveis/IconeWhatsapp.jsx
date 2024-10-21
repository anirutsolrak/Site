import React from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const IconeContainer = styled(IconButton)`
  padding: 10px;
`;

function IconeWhatsapp() {
  return (
    <IconeContainer href="https://wa.me/5511123456789" target="_blank">
      <WhatsAppIcon />
      <span>(11) 12345-6789</span>
    </IconeContainer>
  );
}

export default IconeWhatsapp;
