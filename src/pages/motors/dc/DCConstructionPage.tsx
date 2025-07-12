import React from 'react';
import { Typography, Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

import BreadcrumbsComponent from '../../../components/BreadcrumbsComponent';
import DCSimulation3D from '../../../components/DCSimulation3D';

const DCConstructionPage: React.FC = () => {
    const isMobile = useMediaQuery('(max-width:600px)');
    return (
        <Box sx={{ p: 3 }}>
            <BreadcrumbsComponent />
            <Typography variant="h4" gutterBottom>
                Budowa Silników DC
            </Typography>
            <Typography paragraph>
                Silniki prądu stałego składają się z wirnika, stojana, komutatora oraz szczotek. Każdy z tych elementów pełni kluczową rolę w działaniu silnika.
            </Typography>
            <Box
                sx={{
                    height: isMobile ? 500 : 1000,
                    mt: 2,
                }}
            >
                <DCSimulation3D />
            </Box>
        </Box>
    );
};

export default DCConstructionPage;