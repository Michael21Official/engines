import React from 'react';
import { Typography, Box } from '@mui/material';
import BreadcrumbsComponent from '../../../components/BreadcrumbsComponent';
import DCSimulation3D from '../../../components/DCSimulation3D';

const DCOperationPage: React.FC = () => {
    return (
        <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 3 }}>
            <BreadcrumbsComponent />
            <Typography variant="h4" gutterBottom>
                Zasada Działania Silników DC
            </Typography>
            <Typography paragraph>
                Zasada działania silnika prądu stałego opiera się na oddziaływaniu pola magnetycznego i prądu elektrycznego, co powoduje ruch obrotowy wirnika.
            </Typography>
            <Box sx={{ height: '500px', mt: 2 }}>
                <DCSimulation3D />
            </Box>
            <Typography paragraph sx={{ textAlign: 'justify' }}>
                coś o dc motorach
            </Typography>
        </Box>
    );
};

export default DCOperationPage;