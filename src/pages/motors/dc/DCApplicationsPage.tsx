import React from 'react';
import { Typography, Box } from '@mui/material';
import BreadcrumbsComponent from '../../../components/BreadcrumbsComponent';

const DCApplicationsPage: React.FC = () => {
    return (
        <Box sx={{ p: 3 }}>
            <BreadcrumbsComponent />
            <Typography variant="h4" gutterBottom>
                Zastosowania Silników DC
            </Typography>
            <Typography paragraph>
                Silniki prądu stałego znajdują zastosowanie w urządzeniach takich jak wiertarki, wentylatory, pojazdy elektryczne i wiele innych.
            </Typography>
        </Box>
    );
};

export default DCApplicationsPage;