import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes';

const App: React.FC = () => {
  return (
    <Router basename="/engines">
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Box sx={{ display: 'flex', flexGrow: 1 }}>
          <Sidebar />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              maxWidth: { xs: '100%', md: 'calc(100% - 240px)' },
              marginLeft: { xs: 0, md: '240px' },
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <AppRoutes />
          </Box>
        </Box>
        <Footer sx={{ marginTop: 'auto' }} /> {/* Footer zawsze na dole */}
      </Box>
    </Router>
  );
};

export default App;