import React from 'react';
import { Typography, Box } from '@mui/material';
import BreadcrumbsComponent from '../../../components/BreadcrumbsComponent';

const ACApplicationsPage: React.FC = () => {
    return (
        <Box sx={{ p: 3 }}>
            <BreadcrumbsComponent />
            <Typography variant="h4" gutterBottom>
                Zastosowania Silników AC
            </Typography>
            <Typography paragraph>
                Silniki AC są szeroko stosowane w przemyśle, wentylatorach, pompach, sprężarkach, urządzeniach AGD i wielu innych aplikacjach wymagających niezawodnego napędu.
            </Typography>
        </Box>
    );
};

export default ACApplicationsPage;