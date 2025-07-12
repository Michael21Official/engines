import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

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
      </Toolbar>
    </AppBar>
  );
};

export default Header;