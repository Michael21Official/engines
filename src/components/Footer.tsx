import React from 'react';
import { Box, Typography, SxProps, Stack } from '@mui/material';
import logo from "../../public/images/UKEN-logo.png";

interface FooterProps {
  sx?: SxProps; // Dodano obsługę właściwości sx
}

const Footer: React.FC<FooterProps> = ({ sx }) => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        px: { xs: 2, sm: 4 },
        py: { xs: 4, sm: 6 },
        borderTop: '1px solid #e0e0e0',
        mt: 4,
        textAlign: 'center',
        ...sx,
      }}
    >
      <Stack spacing={1} alignItems="center">
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Silniki Elektryczne
        </Typography>

        <Typography variant="subtitle2" color="text.secondary">
          UKEN – Uniwersytet Komisji Edukacji Narodowej w Krakowie
        </Typography>

        <Box
          component="img"
          src={logo}
          alt="UKEN Logo"
          onClick={() => window.open('https://www.uken.krakow.pl/', '_blank')}
          sx={{
            height: 40,
            width: 'auto',
            cursor: 'pointer',
            transition: 'opacity 0.3s ease',
            '&:hover': { opacity: 0.8 },
            mt: 1,
          }}
        />
      </Stack>
    </Box>
  );
};

export default Footer;