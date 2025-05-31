import React from 'react';
import { Typography, Box } from '@mui/material';
import BreadcrumbsComponent from '../../../components/BreadcrumbsComponent';
import ACSimulation3D from '../../../components/ACSimulation3D';

const ACConstructionPage: React.FC = () => {
    return (
        <Box sx={{ p: 3 }}>
            <BreadcrumbsComponent />
            <Typography variant="h4" gutterBottom>
                Budowa Silników AC
            </Typography>
            <Typography paragraph>
                Silniki prądu przemiennego składają się z takich elementów jak stojan, wirnik, obudowa, wał, łożyska oraz wentylator. Każdy z tych elementów pełni kluczową rolę w pracy silnika.
            </Typography>
            <Box sx={{ height: '500px', mt: 2 }}>
                <ACSimulation3D />
            </Box>
            <Typography paragraph sx={{ textAlign: 'justify' }}>
                Model 3D przedstawia typową budowę silnika AC.
            </Typography>
        </Box>
    );
};

export default ACConstructionPage;