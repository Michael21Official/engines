import React from 'react';
import { Typography, Box, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import BreadcrumbsComponent from '../components/BreadcrumbsComponent';

const BasicsPage: React.FC = () => {
  return (
    <Box sx={{ p: 3 }}>
      <BreadcrumbsComponent />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
          Podstawy Silników Elektrycznych
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Box
          sx={{
            p: 3,
            backgroundColor: 'background.paper',
            borderRadius: 2,
            boxShadow: 3,
            mt: 2,
          }}
        >
          <Typography variant="h5" gutterBottom>
            Pole Wirujące
          </Typography>
          <Typography paragraph>
            Pole wirujące jest kluczowe dla działania silników AC. Powstaje w wyniku przepływu prądu przemiennego przez uzwojenia stojana.
          </Typography>
          <Typography paragraph>
            Dowiedz się więcej o{' '}
            <Link component={RouterLink} to="/motors" color="primary">
              rodzajach silników
            </Link>
            .
          </Typography>
        </Box>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Box
          sx={{
            p: 3,
            backgroundColor: 'background.paper',
            borderRadius: 2,
            boxShadow: 3,
            mt: 2,
          }}
        >
          <Typography variant="h5" gutterBottom>
            Prędkość Synchroniczna
          </Typography>
          <Typography paragraph>
            Prędkość synchroniczna silnika AC zależy od częstotliwości prądu i liczby par biegunów. Wzór na prędkość synchroniczną:
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: 'monospace',
              backgroundColor: 'rgba(0, 0, 0, 0.05)',
              p: 1,
              borderRadius: 1,
            }}
          >
            n_s = (120 * f) / p
          </Typography>
          <Typography paragraph sx={{ mt: 2 }}>
            Gdzie:
            <br />
            - <strong>n_s</strong>: Prędkość synchroniczna (obr/min)
            <br />
            - <strong>f</strong>: Częstotliwość prądu (Hz)
            <br />
            - <strong>p</strong>: Liczba par biegunów
          </Typography>
        </Box>
      </motion.div>
    </Box>
  );
};

export default BasicsPage;