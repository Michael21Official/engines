import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Box, CssBaseline, useMediaQuery, Drawer, Fab } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes';
import AppLoader from './components/loader/AppLoader';

const drawerWidth = 240;

const App: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showFab, setShowFab] = useState(false);
  const [fabPosition, setFabPosition] = useState({ x: 20, y: 80 });
  const isMdUp = useMediaQuery('(min-width:900px)'); // md breakpoint

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    const onScroll = () => {
      setShowFab(window.scrollY > 80);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleFabDrag = (e: React.MouseEvent<HTMLButtonElement>) => {
    const startX = e.clientX;
    const startY = e.clientY;
    const origX = fabPosition.x;
    const origY = fabPosition.y;

    const onMouseMove = (moveEvent: MouseEvent) => {
      setFabPosition({
        x: origX + moveEvent.clientX - startX,
        y: origY + moveEvent.clientY - startY,
      });
    };

    const onMouseUp = () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };

  return (
    <AppLoader>
      <Router basename="/engines/">
        <CssBaseline />
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header onMenuClick={!isMdUp ? handleDrawerToggle : undefined} />
          <Box sx={{ display: 'flex', flexGrow: 1 }}>
            {!isMdUp && (
              <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                sx={{
                  display: { xs: 'block', md: 'none' },
                  '& .MuiDrawer-paper': { width: drawerWidth },
                }}
              >
                <Sidebar />
              </Drawer>
            )}
            {isMdUp && (
              <Box sx={{ width: drawerWidth, flexShrink: 0, display: { xs: 'none', md: 'block' } }}>
                <Sidebar />
              </Box>
            )}
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                p: 3,
                width: { xs: '100%', md: `calc(100% - ${drawerWidth}px)` },
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <AppRoutes />
            </Box>
          </Box>
          <Footer sx={{ marginTop: 'auto' }} />
          {!isMdUp && showFab && (
            <Fab
              color="primary"
              aria-label="menu"
              onClick={handleDrawerToggle}
              onMouseDown={handleFabDrag}
              sx={{
                position: 'fixed',
                left: fabPosition.x,
                top: fabPosition.y,
                zIndex: 2000,
                boxShadow: 6,
                cursor: 'grab',
                transition: 'box-shadow 0.2s',
              }}
            >
              <MenuIcon />
            </Fab>
          )}
        </Box>
      </Router>
    </AppLoader>
  );
};

export default App;