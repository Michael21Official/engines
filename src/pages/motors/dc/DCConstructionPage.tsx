import React from 'react';
import { Typography, Box } from '@mui/material';
import BreadcrumbsComponent from '../../../components/BreadcrumbsComponent';

const DCConstructionPage: React.FC = () => {
    return (
        <Box sx={{ p: 3 }}>
            <BreadcrumbsComponent />
            <Typography variant="h4" gutterBottom>
                Budowa Silników DC
            </Typography>
            <Typography paragraph>
                Silniki prądu stałego składają się z wirnika, stojana, komutatora oraz szczotek. Każdy z tych elementów pełni kluczową rolę w działaniu silnika.
            </Typography>
        </Box>
    );
};

export default DCConstructionPage;