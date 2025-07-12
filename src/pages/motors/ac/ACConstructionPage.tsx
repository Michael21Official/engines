import React from 'react';
import { Typography, Box } from '@mui/material';
import BreadcrumbsComponent from '../../../components/BreadcrumbsComponent';
import ACSimulation3D from '../../../components/ACSimulation3D';
import useMediaQuery from '@mui/material/useMediaQuery';

const ACConstructionPage: React.FC = () => {
    const isMobile = useMediaQuery('(max-width:600px)');
    return (
        <Box sx={{ p: 3 }}>
            <BreadcrumbsComponent />
            <Typography variant="h4" gutterBottom>
                Budowa Silników AC
            </Typography>
            <Typography paragraph>
                Silniki prądu przemiennego składają się z takich elementów jak stojan, wirnik, obudowa, wał, łożyska oraz wentylator. Każdy z tych elementów pełni kluczową rolę w pracy silnika.
            </Typography>
            <Box
                sx={{
                    height: isMobile ? 500 : 1000,
                    mt: 2,
                }}
            >
                <ACSimulation3D />
            </Box>
            <Typography paragraph sx={{ textAlign: 'justify' }}>
                Model 3D przedstawia typową budowę silnika AC.
            </Typography>
        </Box >
    );
};

export default ACConstructionPage;