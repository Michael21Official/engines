import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BasicsPage from './pages/BasicsPage';
import MotorsPage from './pages/MotorsPage';
import DCMotorsPage from './pages/DCMotorsPage';
import ACMotorsPage from './pages/ACMotorsPage';
import MachinesPage from './pages/MachinesPage';
import ResourcesPage from './pages/ResourcesPage';
import ContactPage from './pages/ContactPage';
import PowerPointViewer from './pages/PowerPointViewer';

const App: React.FC = () => {
  return (
    <Router>
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
            }}
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/basics" element={<BasicsPage />} />
              <Route path="/motors" element={<MotorsPage />} />
              <Route path="/motors/dc" element={<DCMotorsPage />} />
              <Route path="/motors/ac" element={<ACMotorsPage />} />
              <Route path="/machines" element={<MachinesPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/prezentacja" element={<PowerPointViewer />} />
            </Routes>
          </Box>
        </Box>
        <Footer />
      </Box>
    </Router>
  );
};

export default App;