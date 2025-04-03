import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
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