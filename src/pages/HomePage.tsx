import React from 'react';
import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import BreadcrumbsComponent from '../components/BreadcrumbsComponent';

const HomePage: React.FC = () => {
  return (
    <Box sx={{ p: 3 }}>
      <BreadcrumbsComponent />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
          Witaj na stronie o silnikach elektrycznych!
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Typography paragraph>
          Ta strona została stworzona, aby przybliżyć Ci podstawy działania, budowy i zastosowania silników elektrycznych.
        </Typography>
      </motion.div>
    </Box>
  );
};

export default HomePage;