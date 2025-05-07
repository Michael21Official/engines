import React from 'react';
import { Box, Typography, SxProps } from '@mui/material';

interface FooterProps {
  sx?: SxProps; // Dodano obsługę właściwości sx
}

const Footer: React.FC<FooterProps> = ({ sx }) => {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        p: 6,
        position: 'relative',
        width: '100%',
        ...sx, // Połączenie stylów zewnętrznych z domyślnymi
      }}
      component="footer"
    >
      <Typography variant="h6" align="center" gutterBottom>
        Silniki Elektryczne
      </Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
        UKEN
      </Typography>
    </Box>
  );
};

export default Footer;