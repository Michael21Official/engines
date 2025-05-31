import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import BasicsPage from '../pages/BasicsPage';
import MotorsPage from '../pages/motors/MotorsPage';
import DCMotorsPage from '../pages/motors/dc/DCMotorsPage';
import DCConstructionPage from '../pages/motors/dc/DCConstructionPage';
import DCOperationPage from '../pages/motors/dc/DCOperationPage';
import DCTypesPage from '../pages/motors/dc/DCTypesPage';
import DCApplicationsPage from '../pages/motors/dc/DCApplicationsPage';
import ACMotorsPage from '../pages/motors/ac/ACMotorsPage';
import ACConstructionPage from '../pages/motors/ac/ACConstructionPage';
import ACOperationPage from '../pages/motors/ac/ACOperationPage';
import ACTypesPage from '../pages/motors/ac/ACTypesPage';
import ACApplicationsPage from '../pages/motors/ac/ACApplicationsPage';
import MachinesPage from '../pages/MachinesPage';
import ResourcesPage from '../pages/ResourcesPage';
import ContactPage from '../pages/ContactPage';
import PowerPointViewer from '../pages/PowerPointViewer';

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/basics" element={<BasicsPage />} />
            <Route path="/motors" element={<MotorsPage />} />
            <Route path="/motors/dc" element={<DCMotorsPage />} />
            <Route path="/motors/dc/construction" element={<DCConstructionPage />} />
            <Route path="/motors/dc/operation" element={<DCOperationPage />} />
            <Route path="/motors/dc/types" element={<DCTypesPage />} />
            <Route path="/motors/dc/applications" element={<DCApplicationsPage />} />
            <Route path="/motors/ac" element={<ACMotorsPage />} />
            <Route path="/motors/ac/construction" element={<ACConstructionPage />} />
            <Route path="/motors/ac/operation" element={<ACOperationPage />} />
            <Route path="/motors/ac/types" element={<ACTypesPage />} />
            <Route path="/motors/ac/applications" element={<ACApplicationsPage />} />
            <Route path="/machines" element={<MachinesPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/prezentacja" element={<PowerPointViewer />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

export default AppRoutes;