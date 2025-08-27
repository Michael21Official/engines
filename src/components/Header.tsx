import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion';

const Header: React.FC<{ onMenuClick?: () => void }> = ({ onMenuClick }) => {
  return (
    <AppBar
      position="static"
      sx={{
        background: 'linear-gradient(45deg, #1976d2 30%, #2196f3 90%)',
        boxShadow: 'none',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {onMenuClick && (
            <IconButton
              color="inherit"
              edge="start"
              onClick={onMenuClick}
              sx={{ mr: 2, display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                letterSpacing: '1px',
                color: 'white',
              }}
            >
              Silniki Elektryczne
            </Typography>
          </motion.div>
        </div>
        <Button color="inherit" variant="outlined" sx={{ borderColor: 'white', color: 'white' }}>
          Zaloguj się
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
